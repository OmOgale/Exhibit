import { NextRequest, NextResponse } from "next/server";
import { BACKEND_URL } from "@/utils/constants";

// Likes go through here rather than straight from the browser to the backend: Vercel sets the reader's real IP on the
// request, so a reader can't claim to be someone else, and the backend only accepts likes carrying this server's key.
export const dynamic = "force-dynamic";

function readerIP(req: NextRequest) {
  return req.headers.get("x-real-ip") ?? req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "127.0.0.1";
}

function backend(path: string, init?: RequestInit) {
  return fetch(`${BACKEND_URL}${path}`, {
    ...init,
    cache: "no-store",
    headers: { "Content-Type": "application/json", "x-api-key": process.env.LIKES_API_KEY ?? "" },
  });
}

// The post's total likes and how many of them came from this reader.
export async function GET(req: NextRequest, { params }: { params: { uuid: string } }) {
  const uuid = encodeURIComponent(params.uuid);
  const [total, mine] = await Promise.all([
    fetch(`${BACKEND_URL}/blog-posts/likes/${uuid}`, { cache: "no-store" }),
    backend(`/users/${encodeURIComponent(readerIP(req))}/${uuid}`),
  ]);
  if (!total.ok || !mine.ok) return NextResponse.json({ message: "Couldn't load likes." }, { status: 502 });
  return NextResponse.json({ total: await total.json(), mine: await mine.json() });
}

// Adds one like from this reader. The backend answers 409 once they've reached the limit.
export async function POST(req: NextRequest, { params }: { params: { uuid: string } }) {
  const res = await backend("/users/", {
    method: "POST",
    body: JSON.stringify({ ip: readerIP(req), uuidBlog: params.uuid }),
  });
  return NextResponse.json(await res.json().catch(() => ({})), { status: res.status });
}
