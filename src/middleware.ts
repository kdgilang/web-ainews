import { NextRequest, NextResponse } from "next/server"

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const region = req.cookies.get('region')?.value || 'us'

  res.cookies.set('region', region)

  req.cookies.set('region', region)

  return res;
}
