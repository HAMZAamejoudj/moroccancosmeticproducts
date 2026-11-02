import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "fr", "ar"];
const defaultLocale = "en";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Determine locale from Accept-Language header or default to 'en'
  const acceptLanguage = request.headers.get("accept-language") || "";
  let locale = defaultLocale;

  if (acceptLanguage.startsWith("fr") || acceptLanguage.includes(",fr")) {
    locale = "fr";
  } else if (acceptLanguage.startsWith("ar") || acceptLanguage.includes(",ar")) {
    locale = "ar";
  }

  // Redirect to /[locale]/pathname
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl, 308);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, assets, image, public files with extensions)
    "/((?!api|_next/static|_next/image|assets|image|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)",
  ],
};
