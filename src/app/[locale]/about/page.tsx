import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutClient from "./AboutClient";
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
    path: "/about",
    title: dict.Meta.about.title,
    description: dict.Meta.about.description,
    keywords: dict.Meta.about.keywords,
  });
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <AboutClient />
      </main>
      <Footer />
    </div>
  );
}
