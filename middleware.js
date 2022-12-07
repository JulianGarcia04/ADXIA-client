import { NextResponse } from "next/dist/server/web/spec-extension/response";

export default function middleware(req) {
  const token = req.cookies.get('auth');

  const url = req.url
}
