"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Box, ShieldCheck, Truck } from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";

export default function BulkSupplier() {
  const { locale } = useTranslation();

  const content = {
    badge:
      locale === "fr"
        ? "APPROVISIONNEMENT INDUSTRIEL ET VRAC"
        : locale === "ar"
        ? "توريد صناعي وتصدير بالبراميل"
        : "INDUSTRIAL BULK SUPPLY AND EXPORT",
    title:
      locale === "fr"
        ? "Fournisseur d'Huiles Marocaines en Vrac"
        : locale === "ar"
        ? "مورد الزيوت المغربية بالجملة والبراميل"
        : "Moroccan Oil Bulk Supplier",
    description:
      locale === "fr"
        ? "Nous approvisionnons les formulateurs de cosmétiques, les laboratoires pharmaceutiques et les chaînes de spas du monde entier en fûts de 200L, cuves IBC de 1000L et bidons de 5L/25L avec certificats d'analyse complets."
        : locale === "ar"
        ? "نوفر لمصانع ومختبرات مستحضرات التجميل وسلاسل السبا العالمية كميات صناعية في براميل 200 لتر، وخزانات IBC بسعة 1000 لتر، وجالونات 5 و 25 لتر مع شهادات الفحص والتحليل الكاملة."
        : "Supplying international cosmetic manufacturers, pharmaceutical laboratories, and luxury spa chains worldwide with industrial 200L drums, 1000L IBC totes, and 5L/25L wholesale containers backed by certified batch analysis.",
    cta:
      locale === "fr"
        ? "Demander le Tarif Vrac"
        : locale === "ar"
        ? "طلب لائحة الأسعار للبراميل"
        : "Request Bulk Pricing",
    stats: [
      {
        value: "500+",
        label:
          locale === "fr"
            ? "Tonnes Exportées / An"
            : locale === "ar"
            ? "طن مصدّر سنوياً"
            : "Tons Exported Yearly",
      },
      {
        value: "24/7",
        label:
          locale === "fr"
            ? "Support Export Dédié"
            : locale === "ar"
            ? "دعم فني ولوجستي"
            : "Dedicated Export Support",
      },
      {
        value: "50+",
        label:
          locale === "fr"
            ? "Pays Livrés dans le Monde"
            : locale === "ar"
            ? "دولة حول العالم"
            : "Countries Supplied",
      },
    ],
  };

  return (
    <section className="py-20 md:py-28 bg-primary text-cream relative overflow-hidden">
      {/* Decorative ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-start text-start"
          >
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-accent mb-3 block">
              {content.badge}
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-white mb-5 leading-tight">
              {content.title}
            </h2>

            <p className="text-sm sm:text-base text-cream/80 leading-relaxed mb-9 max-w-2xl font-light">
              {content.description}
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 w-full py-6 my-2 border-y border-white/15">
              {content.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-2xl sm:text-4xl lg:text-5xl font-bold font-serif text-accent">
                    {stat.value}
                  </span>
                  <span className="text-[11px] sm:text-xs text-cream/70 font-medium uppercase tracking-wider mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm sm:text-base bg-accent text-primary hover:bg-cream transition-all shadow-xl hover:shadow-2xl"
              >
                <span>{content.cta}</span>
                <ArrowRight className={`w-4 h-4 ${locale === "ar" ? "rotate-180" : ""}`} />
              </Link>
            </div>
          </motion.div>

          {/* Right Column (5 cols): Bulk Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl relative aspect-[4/3] sm:aspect-square w-full border border-white/15 group bg-white/5">
              <Image
                src="/image/bulk-argan-oil-supplier.webp"
                alt="Moroccan cosmetic oils industrial bulk drums and containers"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1811]/70 via-transparent to-transparent" />

              {/* Badges on Image */}
              <div className="absolute bottom-5 inset-x-5 flex justify-between gap-3 text-xs">
                <span className="px-3.5 py-1.5 rounded-xl bg-black/60 backdrop-blur-md text-white border border-white/20 font-semibold flex items-center gap-1.5">
                  <Box className="w-3.5 h-3.5 text-accent" />
                  <span>200L / 1000L Drums</span>
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-black/60 backdrop-blur-md text-white border border-white/20 font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-accent" />
                  <span>CoA and SDS Tested</span>
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

