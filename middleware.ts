import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import {
  locales,
  defaultLocale,
  localePrefix,
  pathnames,
} from "@/i18n/routing";

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix,
  pathnames,
});

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Handle root path redirect
  if (pathname === '/') {
    console.log('Redirecting root path to:', `/${defaultLocale}`);
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
  }
  
  // Let next-intl handle other paths
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    // Match root path and all pathnames except for
    // - API routes
    // - _next (Next.js internals)
    // - _static (inside /public)
    // - all root files inside /public (e.g. /favicon.ico)
    '/((?!api|_next|_static|.*\\..*)?.*)',
  ],
};
