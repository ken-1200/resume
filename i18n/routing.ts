import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // List of all locales that are supported
  locales: ["en", "ja"],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: "ja",
});
