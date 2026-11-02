import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogClient from "./BlogClient";
import { locales, hasLocale, Locale } from "@/dictionaries";
import { buildPageMetadata } from "@/lib/seo";
import { getAllArticles } from "@/lib/blog";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(locale)) {
    return {};
  }

  const metaContent = {
    en: {
      title: "Blog – Moroccan Organic Beauty Insights and Wholesale Guides",
      description:
        "Explore authoritative guides on Moroccan cosmetic ingredients, argan oil wholesale, private label tips, and natural beauty traditions.",
      keywords:
        "Moroccan beauty blog, argan oil wholesale guide, prickly pear seed oil benefits, Moroccan black soap private label, cosmetic ingredients Morocco",
    },
    fr: {
      title: "Blog – Savoir-faire et Conseils Beauté Marocaine | Grossiste Bio",
      description:
        "Découvrez nos articles et guides d'experts sur les cosmétiques marocains, la vente en gros d'huile d'argan et les secrets de beauté du Maroc.",
      keywords:
        "blog beaute marocaine, guide grossiste huile argan, bienfaits figue de barbarie, marque blanche cosmetique maroc, savon noir professionnel",
    },
    ar: {
      title: "المدونة – رؤى وأسرار الجمال المغربي وتجارة الجملة لمستحضرات التجميل",
      description:
        "مقالات وأدلة حصرية حول تجارة منتجات التجميل المغربية بالجملة، فوائد زيت الأركان، التين الشوكي، وطرق إطلاق علامتك الخاصة.",
      keywords:
        "مدونة الجمال المغربي, تجارة مستحضرات التجميل جملة, فوائد زيت الاركان, دليل شراء زيت الاركان الاصلي, موردين تجميل المغرب",
    },
  }[locale as Locale] || {
    title: "Blog – Moroccan Organic Beauty Insights and Wholesale Guides",
    description:
      "Explore authoritative guides on Moroccan cosmetic ingredients, argan oil wholesale, private label tips, and natural beauty traditions.",
    keywords:
      "Moroccan beauty blog, argan oil wholesale guide, prickly pear seed oil benefits, Moroccan black soap private label, cosmetic ingredients Morocco",
  };

  return buildPageMetadata({
    locale: locale as Locale,
    path: "/blog",
    title: metaContent.title,
    description: metaContent.description,
    keywords: metaContent.keywords,
  });
}

export default async function BlogIndexPage({ params }: PageProps) {
  const { locale } = await params;
  const currentLocale = (hasLocale(locale) ? locale : "en") as Locale;
  const articles = getAllArticles(currentLocale);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <BlogClient articles={articles} />
      </main>
      <Footer />
    </div>
  );
}

