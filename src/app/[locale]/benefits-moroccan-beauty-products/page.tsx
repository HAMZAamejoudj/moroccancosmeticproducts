import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BenefitsClient from "./BenefitsClient";
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
    path: "/benefits-moroccan-beauty-products",
    title: dict.Meta.benefits.title,
    description: dict.Meta.benefits.description,
    keywords: dict.Meta.benefits.keywords,
  });
}

export default function BenefitsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <BenefitsClient />
      </main>
      <Footer />
    </div>
  );
}
