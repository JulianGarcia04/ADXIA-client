import { NextResponse } from "next/dist/server/web/spec-extension/response";

export const config = {
  matcher: ['/home', '/orders/:path*', '/employees/:path*', '/clients/:path*', '/products/:path*', '/login']
}

export default function middleware(req) {
  const token = req.cookies.get('auth');

  const url = req.url;

  const urls = ['/home', '/employees', '/clients', '/orders', '/products']

  let validation = urls.find(e=>{
    return url.includes(e);
  })

  if(!token && validation){
    return NextResponse.redirect('http://localhost:3000/login')
  }

  if(token && url.includes('/login')){
    return NextResponse.redirect('http://localhost:3000/home')
  }
}
