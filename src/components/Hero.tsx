"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";
import { heroImages } from "@/lib/hero-images";

export default function Hero() {
  const { dict, locale } = useTranslation();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const heroContent = {
    badge:
      locale === "fr"
        ? "GROSSISTE PRODUITS DE BEAUTÉ BIO CERTIFIÉS"
        : locale === "ar"
        ? "مورد معتمد لمنتجات التجميل العضوية بالجملة"
        : "CERTIFIED ORGANIC BEAUTY WHOLESALE",
    titlePart1:
      locale === "fr"
        ? "Produits de Beauté Bio en Gros"
        : locale === "ar"
        ? "منتجات التجميل العضوية بالجملة"
        : "Wholesale Organic Beauty",
    titlePart2:
      locale === "fr"
        ? "Directement du Maroc"
        : locale === "ar"
        ? "مباشرة من المغرب"
        : "Products from Morocco",
    description:
      locale === "fr"
        ? "Ingrédients cosmétiques marocains 100% purs, durables et certifiés pour spas, distributeurs et marques internationales."
        : locale === "ar"
        ? "مكونات تجميل مغربية نقية 100٪، مستدامة ومعتمدة لمراكز السبا، تجار التجزئة والعلامات التجارية العالمية."
        : "100% Pure, Sustainable and Certified Moroccan Beauty Ingredients for Spas, Retailers and Brands Worldwide.",
    btnProducts:
      locale === "fr" ? "Découvrir le Catalogue" : locale === "ar" ? "استكشف المنتجات" : "Explore Products",
    btnQuote:
      locale === "fr" ? "Demander un Devis" : locale === "ar" ? "طلب عرض أسعار" : "Request a Quote",
  };

  return (
    <section
      id="home"
      className="relative min-h-[88vh] md:min-h-screen flex items-center justify-center pt-32 pb-16 md:pt-28 md:pb-20 overflow-hidden"
    >
      {/* Background Image with Dark Luxury Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImages.home}
          alt="Moroccan organic beauty products wholesale"
          fill
          className="object-cover scale-105"
          priority
        />
        {/* Deep rich luxury espresso gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C1810]/90 via-[#2C2818]/80 to-[#1C1810]/92" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Top Pill Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cream text-[11px] sm:text-xs font-bold tracking-widest uppercase mb-6 shadow-sm"
          >
            <span>{heroContent.badge}</span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif mb-6 max-w-4xl leading-[1.15] text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
            <span className="block">{heroContent.titlePart1}</span>
            <span className="text-accent block mt-1">{heroContent.titlePart2}</span>
          </h1>

          {/* Subtitle / Description */}
          <p className="text-base sm:text-lg md:text-xl text-cream/90 max-w-2xl sm:max-w-3xl mb-10 leading-relaxed font-sans font-light drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)] px-2">
            {heroContent.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md sm:max-w-none">
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              href="#products"
              onClick={(e) => handleScrollTo(e, "#products")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-sm sm:text-base bg-accent text-primary hover:bg-cream transition-all shadow-xl hover:shadow-2xl border border-accent/30"
            >
              <span>{heroContent.btnProducts}</span>
              <ArrowRight
                className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                  locale === "ar" ? "rotate-180" : ""
                }`}
              />
            </motion.a>

            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <Link
                href={`/${locale}/contact`}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-sm sm:text-base bg-white text-primary hover:bg-cream transition-all shadow-lg hover:shadow-xl"
              >
                {heroContent.btnQuote}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="w-6 h-10 rounded-full border-2 border-white/40 flex justify-center p-1 cursor-pointer"
          onClick={(e: any) => handleScrollTo(e, "#why-us")}
        >
          <div className="w-1.5 h-3 rounded-full bg-accent" />
        </motion.div>
      </div>
    </section>
  );
}
