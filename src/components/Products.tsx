"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "@/context/LanguageContext";
import { productSlugs } from "@/lib/products";

const productImages = [
  "/assets/img/argan-oil-wholesale.webp",
  "/assets/img/prickly-pear-seed-oil-wholesale.webp",
  "/assets/img/moroccan-black-soap-bulk.webp",
  "/assets/img/organic-rose-water-care.webp",
  "/assets/img/ghassoul-clay-wholesale.webp",
  "/assets/img/orange-blossom-water-bulk.webp",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
} as const;

export default function Products() {
  const { dict, locale } = useTranslation();

  const sectionContent = {
    badge:
      locale === "fr"
        ? "NOTRE SÉLECTION ÉTOILÉE"
        : locale === "ar"
        ? "مجموعتنا الأكثر طلباً"
        : "OUR SIGNATURE COLLECTION",
    title:
      locale === "fr"
        ? "Nos Produits Phares de Beauté Marocaine"
        : locale === "ar"
        ? "أفضل منتجات التجميل المغربية مبيعاً"
        : "Our Best-Selling Moroccan Beauty Products",
    description:
      locale === "fr"
        ? "Ingrédients cosmétiques certifiés pour la vente en gros et formulations prêtes à étiqueter en direct de nos producteurs."
        : locale === "ar"
        ? "مكونات تجميلية معتمدة للبيع بالجملة ومستحضرات جاهزة للتعبئة بالعلامة الخاصة مباشرة من المغرب."
        : "Certified wholesale beauty ingredients and ready-to-label cosmetics directly from Moroccan producers.",
    viewDetails:
      locale === "fr"
        ? "Découvrir le produit"
        : locale === "ar"
        ? "تفاصيل المنتج"
        : "View Details",
    exploreAll:
      locale === "fr"
        ? "Explorer Tous les Produits"
        : locale === "ar"
        ? "استكشف جميع المنتجات"
        : "Explore All Products",
  };

  const items = dict.Products.items.map((item: any, idx: number) => ({
    ...item,
    image: productImages[idx] || "/assets/img/argan-oil-wholesale.webp",
    slug: productSlugs[idx] || "argan-oil-wholesale",
  }));

  return (
    <section id="products" className="py-24 bg-[#F4F1EA] relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs md:text-sm font-bold uppercase tracking-widest text-accent mb-3 block"
          >
            {sectionContent.badge}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-primary mb-4"
          >
            {sectionContent.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base text-primary/75 max-w-2xl mx-auto leading-relaxed"
          >
            {sectionContent.description}
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            className="h-1 bg-accent mx-auto mt-6 rounded-full"
          />
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {items.map((product: any) => (
            <motion.div
              key={product.slug}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-primary/10 flex flex-col group transition-all duration-300"
            >
              {/* Image Wrapper */}
              <Link
                href={`/${locale}/products/${product.slug}`}
                className="relative aspect-[4/3] w-full overflow-hidden bg-sand/50 block"
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </Link>

              {/* Title and Info */}
              <div className="p-6 md:p-7 flex-grow flex flex-col justify-between items-start text-start">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-primary font-serif mb-2.5 group-hover:text-accent transition-colors duration-200">
                    <Link href={`/${locale}/products/${product.slug}`}>
                      {product.title}
                    </Link>
                  </h3>
                  <p className="text-xs sm:text-sm text-primary/70 leading-relaxed line-clamp-3">
                    {product.desc}
                  </p>
                </div>

                <div className="w-full pt-5 mt-4 border-t border-primary/10 flex items-center justify-between">
                  <Link
                    href={`/${locale}/products/${product.slug}`}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-primary group-hover:text-accent transition-colors"
                  >
                    <span>{sectionContent.viewDetails}</span>
                    <ArrowRight
                      className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                        locale === "ar" ? "rotate-180" : ""
                      }`}
                    />
                  </Link>

                  <span className="text-[11px] font-semibold text-primary/50 uppercase tracking-wider">
                    Bulk / OEM
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <div className="text-center mt-14">
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-bold text-sm text-cream bg-primary hover:bg-accent hover:text-primary transition-all shadow-md hover:shadow-lg"
          >
            <span>{sectionContent.exploreAll}</span>
            <ArrowRight
              className={`w-4 h-4 ${locale === "ar" ? "rotate-180" : ""}`}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
