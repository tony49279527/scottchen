import { NextRequest, NextResponse } from "next/server";

function redirectToPrivateLabel(request: NextRequest) {
  return NextResponse.redirect(new URL("/oem-private-label", request.url), 301);
}

export function GET(request: NextRequest) {
  return redirectToPrivateLabel(request);
}

export function HEAD(request: NextRequest) {
  return redirectToPrivateLabel(request);
}
