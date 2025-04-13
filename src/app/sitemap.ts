import { MetadataRoute } from "next";
import { Locale } from "next-intl";
import { host } from "@/src/config";
import { routing } from "@/src/i18n/routing";
import { getPathname } from "@/src/i18n/navigation";

type Href = Parameters<typeof getPathname>[0]["href"];

function getUrl(href: Href, locale: Locale) {
  const pathname = getPathname({ locale, href });
  return host + pathname;
}

function getEntries(href: Href) {
  return routing.locales.map((locale) => ({
    url: getUrl(href, locale),
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((cur) => [cur, getUrl(href, cur)])
      ),
    },
  }));
}

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [...getEntries("/")];
}
