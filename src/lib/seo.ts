import type { Metadata } from "next";
import type { MetadataRoute } from "next";
import { locales, type Locale } from "@/dictionaries";
import { productSlugs } from "@/lib/products";
import { blogSlugs } from "@/lib/blog";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://moroccancosmeticproducts.com";

export const siteName = "Moroccan Cosmetic Products";

export const publicRoutes = [
  { path: "", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/about", changeFrequency: "monthly" as const, priority: 0.9 },
  {
    path: "/benefits-moroccan-beauty-products",
    changeFrequency: "monthly" as const,
    priority: 0.85,
  },
  {
    path: "/blog",
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
  { path: "/contact", changeFrequency: "monthly" as const, priority: 0.85 },
  ...productSlugs.map((slug) => ({
    path: `/products/${slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  })),
  ...blogSlugs.map((slug) => ({
    path: `/blog/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  })),
];

export function localizedPath(locale: Locale, path: string) {
  const clean = path ? (path.startsWith("/") ? path : `/${path}`).replace(/\/$/, "") : "";
  return `/${locale}${clean}/`;
}

export function absoluteUrl(locale: Locale, path: string) {
  return `${siteUrl}${localizedPath(locale, path)}`;
}

export function languageAlternates(path: string) {
  const languages: Record<string, string> = {
    "x-default": absoluteUrl("en", path),
  };

  for (const locale of locales) {
    languages[locale] = absoluteUrl(locale, path);
  }

  return languages;
}

function openGraphLocale(locale: Locale) {
  if (locale === "fr") return "fr_FR";
  if (locale === "ar") return "ar_MA";
  return "en_US";
}

export function buildPageMetadata({
  locale,
  path,
  title,
  description,
  keywords,
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  keywords?: string;
}): Metadata {
  const url = absoluteUrl(locale, path);
  const alternateLocales = locales
    .filter((entry) => entry !== locale)
    .map(openGraphLocale);

  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: url,
      languages: languageAlternates(path),
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      locale: openGraphLocale(locale),
      alternateLocale: alternateLocales,
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function buildSitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const route of publicRoutes) {
    for (const locale of locales) {
      entries.push({
        url: absoluteUrl(locale, route.path),
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: {
          languages: languageAlternates(route.path),
        },
      });
    }
  }

  return entries;
}
