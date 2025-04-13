import createMiddleware from "next-intl/middleware";
// import { routing } from "@/src/i18n/routing";

export default createMiddleware({
  // List of all locales that are supported
  locales: ["en", "ja"],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: "ja",
});

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  // matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
