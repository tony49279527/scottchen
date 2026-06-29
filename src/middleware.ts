import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PRODUCTION_HOST = "www.scottchentools.com";
const PRODUCTION_HOST_NO_WWW = "scottchentools.com";

const isPreviewHost = (host: string): boolean => {
  return (
    host.endsWith(".run.app") ||
    host.endsWith(".web.app") ||
    host.endsWith(".firebaseapp.com") ||
    host.endsWith(".vercel.app") ||
    host.endsWith(".netlify.app") ||
    host.startsWith("localhost") ||
    /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/.test(host)
  );
};

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const hostname = host.split(":")[0].toLowerCase();

  if (hostname === PRODUCTION_HOST_NO_WWW) {
    const url = new URL(request.url);
    url.host = PRODUCTION_HOST;
    return NextResponse.redirect(url, 301);
  }

  const response = NextResponse.next();

  if (isPreviewHost(hostname)) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive, nosnippet");
  }

  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  return response;
}

export const config = {
  matcher: ["/((?!api/|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|webp|gif|ico|css|js|pdf|woff2?)$).*)"],
};
