import { NextRequest, NextResponse } from "next/server";

function redirectToApplications(request: NextRequest) {
  return NextResponse.redirect(new URL("/applications", request.url), 301);
}

export function GET(request: NextRequest) {
  return redirectToApplications(request);
}

export function HEAD(request: NextRequest) {
  return redirectToApplications(request);
}
