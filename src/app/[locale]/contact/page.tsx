import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactClient from "./ContactClient";
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
    path: "/contact",
    title: dict.Meta.contact.title,
    description: dict.Meta.contact.description,
    keywords: dict.Meta.contact.keywords,
  });
}

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <ContactClient />
      </main>
      <Footer />
    </div>
  );
}
