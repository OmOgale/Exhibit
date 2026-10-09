import { NextRequest, NextResponse } from "next/server";
import { BACKEND_URL } from "@/utils/constants";

// Likes go through here rather than straight from the browser to the backend. A random ID in an httpOnly cookie is
// who the reader is, so readers sharing a network each get their own limit. Vercel sets the reader's real IP on the
// request, and that's sent only so the backend can rate-limit by it. The backend only accepts calls carrying this
// server's key.
export const dynamic = "force-dynamic";

const READER_COOKIE = "reader";
const UUID_V4 = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;
// 400 days, the longest a browser will keep a cookie.
const READER_MAX_AGE = 400 * 24 * 60 * 60;

// This reader's ID, or a fresh one if they don't have a valid one yet.
function readerID(req: NextRequest) {
  const id = req.cookies.get(READER_COOKIE)?.value;
  if (id && UUID_V4.test(id)) return { id, fresh: false };
  return { id: crypto.randomUUID(), fresh: true };
}

// Only fresh IDs need saving; an existing cookie is left as it is.
function withReader(res: NextResponse, reader: { id: string; fresh: boolean }) {
  if (reader.fresh) {
    res.cookies.set(READER_COOKIE, reader.id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: READER_MAX_AGE,
    });
  }
  return res;
}

// Used only for the backend's per-IP rate limit, never to tell readers apart.
function clientIP(req: NextRequest) {
  return req.headers.get("x-real-ip") ?? req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "127.0.0.1";
}

function backend(path: string, init?: RequestInit) {
  return fetch(`${BACKEND_URL}${path}`, {
    ...init,
    cache: "no-store",
    headers: { "Content-Type": "application/json", "x-api-key": process.env.LIKES_API_KEY ?? "" },
  });
}

// The post's total likes and how many of them came from this reader. A brand-new reader hasn't liked anything yet.
export async function GET(req: NextRequest, { params }: { params: { uuid: string } }) {
  const uuid = encodeURIComponent(params.uuid);
  const reader = readerID(req);
  const [total, mine] = await Promise.all([
    fetch(`${BACKEND_URL}/blog-posts/likes/${uuid}`, { cache: "no-store" }),
    reader.fresh ? null : backend(`/readers/${encodeURIComponent(reader.id)}/likes/${uuid}`),
  ]);
  if (!total.ok || (mine && !mine.ok)) {
    return withReader(NextResponse.json({ message: "Couldn't load likes." }, { status: 502 }), reader);
  }
  return withReader(NextResponse.json({ total: await total.json(), mine: mine ? await mine.json() : 0 }), reader);
}

// Adds one like from this reader. The backend answers 409 once they've reached the limit and 429 once their IP has.
export async function POST(req: NextRequest, { params }: { params: { uuid: string } }) {
  const reader = readerID(req);
  const res = await backend("/readers/likes", {
    method: "POST",
    body: JSON.stringify({ reader: reader.id, uuidBlog: params.uuid, ip: clientIP(req) }),
  });
  return withReader(NextResponse.json(await res.json().catch(() => ({})), { status: res.status }), reader);
}
