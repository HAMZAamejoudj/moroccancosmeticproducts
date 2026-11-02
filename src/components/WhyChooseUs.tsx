"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "@/context/LanguageContext";

export default function WhyChooseUs() {
  const { locale } = useTranslation();

  const content = {
    badge:
      locale === "fr"
        ? "NOTRE SAVOIR-FAIRE ET QUALITÉ"
        : locale === "ar"
        ? "مختبراتنا وضمان الجودة"
        : "ABOUT OUR LABORATORY AND SOURCING",
    title:
      locale === "fr"
        ? "La Beauté Marocaine Naturelle pour Votre Marque"
        : locale === "ar"
        ? "الجمال المغربي الطبيعي لعلامتك التجارية"
        : "Natural Moroccan Beauty for Your Brand",
    description:
      locale === "fr"
        ? "En direct de nos laboratoires certifiés et des coopératives féminines au Maroc, nous produisons et exportons des ingrédients cosmétiques biologiques d'exception pour valoriser votre marque."
        : locale === "ar"
        ? "مباشرة من مختبراتنا المعتمدة والتعاونيات النسائية في المغرب، نقوم بتصنيع وتصدير مكونات تجميلية عضوية فائقة النقاء تضمن نجاح علامتك التجارية."
        : "Direct from Morocco's certified laboratories and women's cooperatives, we produce and export authentic organic cosmetic ingredients that elevate your brand's prestige and efficacy.",
    cta:
      locale === "fr"
        ? "En Savoir Plus Sur Nous"
        : locale === "ar"
        ? "اكتشف قصة نجاحنا"
        : "Learn More About Us",
    features: [
      {
        title:
          locale === "fr"
            ? "Approvisionnement 100% Pur et Biologique"
            : locale === "ar"
            ? "مصادر عضوية ونقية 100٪"
            : "100% Pure and Organic Sourcing",
        desc:
          locale === "fr"
            ? "Huile d'argan extra-vierge pressée à froid, huile de pépins de figue de barbarie et argiles de l'Atlas conformes aux normes mondiales les plus strictes."
            : locale === "ar"
            ? "زيت أركان بكر ممتاز معصور على البارد، زيت بذور التين الشوكي، وطين الأطلس البركاني وفق أعلى معايير النقاء العالمية."
            : "First cold-pressed extra virgin argan oil, prickly pear seed oil, and Atlas mountain clays meeting the highest global purity standards.",
      },
      {
        title:
          locale === "fr"
            ? "Qualité Internationale Certifiée"
            : locale === "ar"
            ? "جودة دولية موثقة ومعتمدة"
            : "Certified International Quality",
        desc:
          locale === "fr"
            ? "Conformité totale ISO 22716 BPF, ECOCERT, Certificats d'Analyse (CoA) et Fiches de Sécurité (FDS) pour un export mondial sans encombre."
            : locale === "ar"
            ? "امتثال كامل لمعايير ISO 22716 GMP و ECOCERT مع شهادات التحليل المخبري (CoA) وملفات السلامة للتصدير السلس لجميع الدول."
            : "Full ISO 22716 GMP, ECOCERT, Certificate of Analysis (CoA), and SDS documentation ensuring smooth international customs clearance.",
      },
      {
        title:
          locale === "fr"
            ? "Marque Blanche et Vrac Sur-Mesure"
            : locale === "ar"
            ? "تعبئة بالعلامة الخاصة وتوريد بالبراميل"
            : "Turnkey Private Label and Bulk Supply",
        desc:
          locale === "fr"
            ? "Quantités minimales flexibles, conditionnements de luxe personnalisés, sérigraphie et formulation sur-mesure pour chaque étape de votre croissance."
            : locale === "ar"
            ? "كميات دنيا مرنة للطلب، عبوات فاخرة مخصصة، طباعة الشعار، وتطوير تركيبات حصرية تناسب طموح مشروعك."
            : "Flexible MOQs, custom luxury packaging, label printing, and tailored formulation adjustments designed for every stage of your business growth.",
      },
    ],
  };

  return (
    <section id="why-us" className="py-20 md:py-28 bg-[#F8F6F0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-16 max-w-3xl mx-auto"
        >
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-accent mb-3 block">
            {content.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-primary mb-4 leading-tight">
            {content.title}
          </h2>
          <p className="text-sm sm:text-base text-primary/75 leading-relaxed">
            {content.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Image (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            {/* Soft decorative background glows */}
            <div className="absolute -top-8 -left-8 w-44 h-44 bg-primary/5 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-8 -right-8 w-52 h-52 bg-accent/15 rounded-full blur-3xl -z-10" />

            <div className="rounded-3xl overflow-hidden shadow-2xl relative aspect-[4/5] w-full border border-white/60 group bg-white">
              <Image
                src="/assets/img/moroccan-laboratory-packaging.webp"
                alt="Moroccan cosmetics laboratory and extraction facility"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Right Column: Features & CTA (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* 3 Feature Cards */}
            <div className="flex flex-col gap-4 w-full mb-8">
              {content.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-white border border-primary/10 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-primary text-accent flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-base sm:text-lg mb-1">
                      {feat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-primary/70 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div>
              <Link
                href={`/${locale}/about`}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-bold text-sm text-cream bg-primary hover:bg-accent hover:text-primary transition-all shadow-md hover:shadow-lg"
              >
                <span>{content.cta}</span>
                <ArrowRight
                  className={`w-4 h-4 ${locale === "ar" ? "rotate-180" : ""}`}
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
