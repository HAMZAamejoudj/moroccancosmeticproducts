"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Package, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "@/context/LanguageContext";
import PageHero from "@/components/PageHero";
import { heroImages } from "@/lib/hero-images";

const benefitImages = [
  "/image/argan-oil-skin-care.webp",
  "/image/bulk-argan-oil-supplier.webp",
  "/image/pure-prickly-pear-seed-oil.webp",
  "/image/moroccan-blue-nila-powder.webp",
  "/image/aker-fassi-wholesale.webp",
  "/image/authentic-moroccan-black-soap.webp",
  "/image/beldi-soap-olive-oil.webp",
  "/image/ghassoul-clay-morocco.webp",
  "/image/kessa-exfoliating-glove.webp",
  "/image/pure-moroccan-rose-water.webp",
];

export default function BenefitsClient() {
  const { dict, locale } = useTranslation();
  const benefits = dict.Benefits;

  return (
    <div className="bg-sand pb-24">
      <PageHero image={heroImages.benefits} alt="Moroccan Cosmetics Ingredients">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6 leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]"
          >
            {benefits.hero_title_part1}{" "}
            <span className="text-accent">{benefits.hero_title_part2}</span>
          </motion.h1>
      </PageHero>

      <section className="py-16 md:py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-primary/80 leading-relaxed mb-6"
          >
            {benefits.intro_p1}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-primary/80 leading-relaxed"
          >
            {benefits.intro_p2}
          </motion.p>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.items.map((benefit: { title: string; shortDesc: string; content: string }, idx: number) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                className="group relative bg-white rounded-3xl shadow-lg overflow-hidden border border-primary/5 cursor-pointer"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={benefitImages[idx]}
                    alt={benefit.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/60 transition-all duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <p className="text-cream text-sm leading-relaxed text-center">{benefit.content}</p>
                  </div>
                </div>

                <div className="p-6 flex flex-col gap-3">
                  <h2 className="text-xl font-bold font-serif text-primary group-hover:text-accent transition-colors duration-300">
                    {benefit.title}
                  </h2>
                  <p className="text-primary/60 text-sm leading-relaxed line-clamp-2">{benefit.shortDesc}</p>
                  <Link
                    href={`/${locale}/contact`}
                    className="mt-2 inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all duration-300"
                  >
                    {benefits.card_cta}
                    <ArrowRight className={`w-4 h-4 ${locale === "ar" ? "rotate-180" : ""}`} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary text-cream p-10 md:p-16 rounded-[40px] shadow-2xl relative overflow-hidden text-center"
          >
            <div className="relative z-10">
              <Package className="w-12 h-12 text-accent mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mb-6">{benefits.outro_title}</h2>
              <p className="text-cream/80 leading-relaxed text-lg mb-6 max-w-3xl mx-auto">{benefits.outro_p1}</p>
              <p className="text-cream/80 leading-relaxed text-lg mb-12 max-w-3xl mx-auto">{benefits.outro_p2}</p>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 max-w-2xl mx-auto backdrop-blur-sm">
                <h3 className="text-xl md:text-2xl font-bold text-accent mb-4">{benefits.cta_box_title}</h3>
                <p className="text-cream/80 mb-8">{benefits.cta_box_text}</p>
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold bg-accent text-primary hover:bg-white transition-all shadow-lg hover:shadow-white/10"
                >
                  {benefits.cta_button}
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
