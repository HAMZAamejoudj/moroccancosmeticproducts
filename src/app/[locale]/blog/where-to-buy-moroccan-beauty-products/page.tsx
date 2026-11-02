import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleClient from "./ArticleClient";
import { getDictionary, hasLocale, Locale } from "@/dictionaries";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(locale)) {
    return {};
  }

  const dict = await getDictionary(locale as Locale);

  return buildPageMetadata({
    locale: locale as Locale,
    path: "/blog/where-to-buy-moroccan-beauty-products",
    title: dict.Meta.blog.title,
    description: dict.Meta.blog.description,
    keywords: dict.Meta.blog.keywords,
  });
}

export default function BlogPost() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <ArticleClient />
      </main>
      <Footer />
    </div>
  );
}
