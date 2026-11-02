"use client";

import { motion } from "framer-motion";
import { Star, Quote, CheckCircle2 } from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";

export default function Testimonials() {
  const { locale } = useTranslation();

  const content = {
    badge:
      locale === "fr"
        ? "AVIS CLIENTS ET CONFIANCE"
        : locale === "ar"
        ? "آراء العملاء والشركاء"
        : "CLIENT REVIEWS AND TRUST",
    title:
      locale === "fr"
        ? "Ce Que Disent Nos Clients"
        : locale === "ar"
        ? "ماذا يقول عملاؤنا حول العالم"
        : "What Our Customers Say",
    rating:
      locale === "fr"
        ? "Note 4.9 ★★★★★ | Avis B2B Vérifiés"
        : locale === "ar"
        ? "تقييم 4.9 ★★★★★ | مراجعات B2B موثقة"
        : "4.9 ★★★★★ Rating | Verified B2B Reviews",
    reviews: [
      {
        name: "Sarah Jenkins",
        role:
          locale === "fr"
            ? "Fondatrice, Pure Botanics (Londres, UK)"
            : locale === "ar"
            ? "مؤسسة علامة Pure Botanics (لندن، بريطانيا)"
            : "Founder, Pure Botanics (London, UK)",
        text:
          locale === "fr"
            ? "La pureté de leur huile d'argan et de figue de barbarie est tout simplement incomparable. Nos clientes ont vu la différence dès la première application. Les certificats d'analyse étaient impeccables."
            : locale === "ar"
            ? "نقاء زيت الأركان وزيت بذور التين الشوكي لا يُعلى عليه. لاحظ عملاؤنا الفرق في الجودة فوراً، وكانت وثائق الفحص المخبري دقيقة وسريعة."
            : "The purity of their argan oil and prickly pear seed oil is truly unmatched. Our skincare customers noticed the difference immediately. The CoA documents were spotless and delivery was on time.",
      },
      {
        name: "Marc Dubois",
        role:
          locale === "fr"
            ? "Directeur Spa, Thalasso Prestige (Nice, France)"
            : locale === "ar"
            ? "مدير شبكة منتجعات Thalasso (نيس، فرنسا)"
            : "Spa Operations Director, Thalasso Prestige (France)",
        text:
          locale === "fr"
            ? "Nous commandons le savon noir et les gants Kessa en gros pour nos 8 centres de spa. La constance de la qualité et la réactivité de l'équipe font d'eux notre partenaire marocain le plus fiable."
            : locale === "ar"
            ? "نطلب الصابون البلدي المغربي وقفازات الكيسة بكميات كبيرة لفروع مراكز السبا لدينا. جودة المكونات الاستثنائية جعلتهم شريكنا المفضل في المغرب."
            : "We order authentic Moroccan black soap and Kessa gloves in bulk for our 8 spa locations. The authentic quality and reliability of supply make them our most trusted Moroccan partner.",
      },
      {
        name: "Fatima Al-Mansoor",
        role:
          locale === "fr"
            ? "Directrice Générale, Desert Glow (Dubaï, ÉAU)"
            : locale === "ar"
            ? "المديرة التنفيذية، Desert Glow (دبي، الإمارات)"
            : "CEO, Desert Glow Cosmetics (Dubai, UAE)",
        text:
          locale === "fr"
            ? "Leur service de marque blanche nous a permis de lancer notre gamme de soins visage en un temps record. Du flaconnage en verre dépoli aux dossiers réglementaires, l'accompagnement a été parfait."
            : locale === "ar"
            ? "ساعدتنا خدمة العلامة الخاصة لديهم في إطلاق خط العناية بالبشرة في وقت قياسي. من تصميم العبوات الفاخرة حتى التراخيص القانونية، كان الفريق احترافياً للغاية."
            : "Their private label service helped us launch our organic skincare line in record time. From custom frosted bottles to compliance paperwork, the team was exceptional from start to finish.",
      },
      {
        name: "Elena Rossi",
        role:
          locale === "fr"
            ? "Chimiste Cosmétique, BioNatura Labs (Milan, Italie)"
            : locale === "ar"
            ? "كيميائية ومطورة تركيبات، BioNatura (ميلانو، إيطاليا)"
            : "Lead Formulator, BioNatura Labs (Milan, Italy)",
        text:
          locale === "fr"
            ? "En tant que formulatrice cosmétique, la pureté des matières premières est primordiale. Leurs lots d'argan et d'eaux florales sont toujours conformes aux spécifications techniques les plus strictes."
            : locale === "ar"
            ? "كباحثة في تطوير مستحضرات التجميل، نقاء المادة الخام أساس كل شيء. توفر لنا هذه الشركة شحنات متجانسة من الزيوت الطبيعية تلبي أدق المعايير الأوروبية."
            : "As a cosmetic chemist, raw material purity is paramount. Moroccan Cosmetic Products delivers consistent cold-pressed batches with exceptional fatty acid profiles and zero impurities every time.",
      },
    ],
  };

  return (
    <section className="py-20 md:py-28 bg-[#F5F3ED] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs md:text-sm font-bold uppercase tracking-widest text-accent mb-3 block"
          >
            {content.badge}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-primary mb-4"
          >
            {content.title}
          </motion.h2>

          {/* Rating Pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary text-accent border border-accent/20 text-xs font-bold tracking-wide shadow-sm mt-1"
          >
            <span>{content.rating}</span>
          </motion.div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-3xl bg-white border border-primary/10 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-[#D4A574] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-primary/75 leading-relaxed italic mb-6">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-primary/10 flex items-center justify-between">
                <div>
                  <span className="text-sm font-bold text-primary flex items-center gap-1.5">
                    <span>{rev.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                  </span>
                  <p className="text-[11px] text-primary/60 mt-0.5">{rev.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

