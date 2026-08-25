// middleware.ts — locale detection via next-intl, runs on Cloudflare edge
import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./lib/i18n/config";

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: "always",
  localeDetection: true,
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)"],
};
