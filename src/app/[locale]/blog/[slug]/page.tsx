import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleClient from "./ArticleClient";
import { locales, hasLocale, Locale } from "@/dictionaries";
import { buildPageMetadata, siteUrl } from "@/lib/seo";
import { getArticleBySlug, getAllArticles, blogSlugs } from "@/lib/blog";

interface PageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];

  for (const locale of locales) {
    for (const slug of blogSlugs) {
      params.push({ locale, slug });
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!hasLocale(locale)) {
    return {};
  }

  const article = getArticleBySlug(slug, locale as Locale);
  if (!article) {
    return {};
  }

  return buildPageMetadata({
    locale: locale as Locale,
    path: `/blog/${slug}`,
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.metaKeywords,
  });
}

export default async function DynamicBlogPostPage({ params }: PageProps) {
  const { locale, slug } = await params;

  if (!hasLocale(locale)) {
    notFound();
  }

  const currentLocale = locale as Locale;
  const article = getArticleBySlug(slug, currentLocale);

  if (!article) {
    notFound();
  }

  const allArticles = getAllArticles(currentLocale);
  const relatedArticles = allArticles.filter((a) => a.slug !== slug);

  // Google JSON-LD Article Schema for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    image: `${siteUrl}${article.image}`,
    datePublished: article.dateISO,
    dateModified: article.dateISO,
    author: {
      "@type": "Organization",
      name: "Moroccan Cosmetic Products",
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Moroccan Cosmetic Products",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/assets/img/moroccan-cosmetic-logo.webp`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/${currentLocale}/blog/${slug}`,
    },
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="flex-grow">
        <ArticleClient
          article={article}
          relatedArticles={relatedArticles}
        />
      </main>
      <Footer />
    </div>
  );
}
