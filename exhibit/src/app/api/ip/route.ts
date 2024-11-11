import { NextRequest, NextResponse } from 'next/server'
 
type ResponseData = {
  message: string
}
 
export async function GET(
  req: NextRequest,
) {
const ip = req.headers.get('x-forwarded-for') || req.ip || '127.0.0.1';
return NextResponse.json(`${ip}`)
}

// export default function handler(req: NextRequest) {
//     if (req.method === 'GET') {
//       return GET(req);
//     }
//     return new Response('Method Not Allowed', { status: 405 });
//   }
