import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function proxy(request: NextRequest) {
  // Redirect www to non-www for canonical URL consistency
  const url = request.nextUrl.clone()

  if (url.host === "www.immooseboy.com") {
    url.host = "immooseboy.com"
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: "/:path*",
}
