import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductDetailClient from "./ProductDetailClient";
import { locales, hasLocale, Locale } from "@/dictionaries";
import { buildPageMetadata, siteUrl } from "@/lib/seo";
import {
  getProductBySlug,
  getAllProducts,
  getAllProductSlugs,
} from "@/lib/products";

interface PageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllProductSlugs();
  const params: { locale: string; slug: string }[] = [];

  for (const locale of locales) {
    for (const slug of slugs) {
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

  const product = getProductBySlug(slug, locale as Locale);
  if (!product) {
    return {};
  }

  return buildPageMetadata({
    locale: locale as Locale,
    path: `/products/${slug}`,
    title: product.metaTitle,
    description: product.metaDescription,
    keywords: product.metaKeywords,
  });
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { locale, slug } = await params;

  if (!hasLocale(locale)) {
    notFound();
  }

  const product = getProductBySlug(slug, locale as Locale);
  if (!product) {
    notFound();
  }

  const allProducts = getAllProducts(locale as Locale);
  const relatedProducts = allProducts.filter((p) => p.slug !== slug).slice(0, 3);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.shortDesc,
    image: `${siteUrl}${product.image}`,
    brand: {
      "@type": "Brand",
      name: "Moroccan Cosmetic Products",
    },
    manufacturer: {
      "@type": "Organization",
      name: "Moroccan Cosmetic Products",
      url: siteUrl,
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
    },
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <ProductDetailClient
          product={product}
          locale={locale as Locale}
          relatedProducts={relatedProducts}
        />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
    </div>
  );
}

