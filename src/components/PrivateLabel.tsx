"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Package, FlaskConical, Palette, FileText, ArrowRight } from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";

export default function PrivateLabel() {
  const { locale } = useTranslation();

  const content = {
    badge:
      locale === "fr"
        ? "SOLUTIONS OEM / ODM CLÉS EN MAIN"
        : locale === "ar"
        ? "حلول التصنيع والعلامة الخاصة"
        : "TURNKEY OEM / ODM SOLUTIONS",
    title:
      locale === "fr"
        ? "Services de Marque Blanche"
        : locale === "ar"
        ? "خدمات العلامة التجارية الخاصة"
        : "Private Label Services",
    description:
      locale === "fr"
        ? "Lancez votre propre marque de cosmétiques grâce à notre accompagnement complet : développement de formules sur-mesure, sélection de flaconnages luxueux, sérigraphie personnalisée et dossiers réglementaires."
        : locale === "ar"
        ? "أطلق علامتك التجارية التجميلية مع حلول التصنيع المتكاملة من مختبراتنا: تطوير التركيبات الحصرية، اختيار أرقى العبوات والزجاجات، طباعة الهوية البصرية، وتجهيز كافة التراخيص والملفات القانونية."
        : "Launch your own beauty brand with our complete turnkey OEM/ODM solutions. From custom formula development and botanical scenting to luxury packaging, label printing, and international regulatory dossiers.",
    ctaQuote:
      locale === "fr"
        ? "Demander un Devis Marque Blanche"
        : locale === "ar"
        ? "طلب تسعيرة للعلامة الخاصة"
        : "Get a Private Label Quote",
    ctaContact:
      locale === "fr" ? "Contacter Notre Laboratoire" : locale === "ar" ? "تواصل مع فريقنا" : "Contact Our Lab",
    chips: [
      {
        icon: Package,
        title:
          locale === "fr"
            ? "Flaconnage et Packaging Personnalisé"
            : locale === "ar"
            ? "عبوات وزجاجات فاخرة مخصصة"
            : "Custom Packaging and Bottling",
        desc:
          locale === "fr"
            ? "Verre dépoli, flacons compte-gouttes, pots cosmétiques et aluminium."
            : locale === "ar"
            ? "زجاج مثلج، قطارات كهرمانية، برطمانات فاخرة، وأنابيب ألمنيوم."
            : "Frosted glass, dropper bottles, luxury jars, and aluminum containers.",
      },
      {
        icon: FlaskConical,
        title:
          locale === "fr"
            ? "Formulation et Tests de Stabilité"
            : locale === "ar"
            ? "تطوير التركيبات والفحص المخبري"
            : "Custom Formulation and Testing",
        desc:
          locale === "fr"
            ? "Développement d'actifs naturels marocains stables et efficaces."
            : locale === "ar"
            ? "تركيبات حصرية بمستخلصات مغربية طبيعية مجربة مخبرياً."
            : "Formulation with certified Moroccan botanicals and clinical testing.",
      },
      {
        icon: Palette,
        title:
          locale === "fr"
            ? "Design Graphique et Sérigraphie"
            : locale === "ar"
            ? "تصميم الهوية والطباعة المباشرة"
            : "Graphic Design and Label Printing",
        desc:
          locale === "fr"
            ? "Création d'étiquettes étanches, dorure à chaud et étuis sur-mesure."
            : locale === "ar"
            ? "ملصقات مقاومة للماء والزيوت، طباعة حريرية، وكرتون خارجي فاخر."
            : "Waterproof luxury labels, gold/silver hot foil, and folding cartons.",
      },
      {
        icon: FileText,
        title:
          locale === "fr"
            ? "Dossiers Réglementaires et CPNP"
            : locale === "ar"
            ? "شهادات المطابقة والتسجيل الدولي"
            : "Regulatory and Export Dossiers",
        desc:
          locale === "fr"
            ? "Assistance CPNP, FDA, certificats de vente libre, CoA et FDS."
            : locale === "ar"
            ? "دعم التسجيل في CPNP و FDA، وشهادات البيع الحر والتحاليل المخبرية."
            : "Full compliance documentation: CPNP, FDA, CoA, and SDS provided.",
      },
    ],
  };

  return (
    <section className="py-20 md:py-28 bg-[#FAF8F3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-primary mb-5 leading-tight">
              {content.title}
            </h2>

            <p className="text-sm sm:text-base text-primary/75 leading-relaxed mb-8 max-w-2xl">
              {content.description}
            </p>

            {/* 2x2 Feature Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-9">
              {content.chips.map((chip, idx) => {
                const Icon = chip.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border border-primary/10 shadow-sm hover:border-accent/40 transition-colors flex items-start gap-3.5"
                  >
                    <div className="w-9 h-9 rounded-xl bg-accent/15 text-primary flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-primary mb-1">
                        {chip.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-primary/65 leading-relaxed">
                        {chip.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm text-cream bg-primary hover:bg-accent hover:text-primary transition-all shadow-md hover:shadow-lg"
              >
                <span>{content.ctaQuote}</span>
                <ArrowRight className={`w-4 h-4 ${locale === "ar" ? "rotate-180" : ""}`} />
              </Link>

              <Link
                href={`/${locale}/about`}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-bold text-sm text-primary bg-white hover:bg-sand border border-primary/15 transition-all shadow-sm"
              >
                {content.ctaContact}
              </Link>
            </div>
          </motion.div>

          {/* Right Column (5 cols): Visual Mockup Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            {/* Single clean card frame */}
            <div className="rounded-3xl overflow-hidden bg-white shadow-xl border border-primary/10">
              <div className="relative aspect-square w-full bg-white">
                <Image
                  src="/image/cosmetic-argan-oil-handmade.webp"
                  alt="Custom cosmetics private label packaging"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>

              {/* Tag Overlays */}
              <div className="p-5 sm:p-6 border-t border-primary/10 flex items-center justify-between text-xs text-primary/70 bg-[#FAF8F5]">
                <span className="font-semibold">
                  {locale === "fr"
                    ? "MOQ dès 200 unités"
                    : locale === "ar"
                    ? "الحد الأدنى 200 قطعة"
                    : "MOQ from 200 Units"}
                </span>
                <span className="font-bold text-accent">
                  {locale === "fr"
                    ? "Logo et coffrets sur-mesure"
                    : locale === "ar"
                    ? "شعار وعلب مخصصة"
                    : "Custom Logo and Boxes"}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

