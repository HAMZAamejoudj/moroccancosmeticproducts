"use client";

import Image from "next/image";
import { Leaf, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "@/context/LanguageContext";

export default function Sustainability() {
  const { dict } = useTranslation();

  return (
    <section
      id="sustainability"
      className="py-24 relative overflow-hidden bg-primary text-cream"
    >
      {/* Background Watermark/Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-repeat bg-center"
        style={{
          backgroundImage: "url('/assets/img/moroccan-cosmetic-logo.webp')",
          backgroundSize: "80px 80px",
        }}
      />
      {/* Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs md:text-sm font-semibold uppercase tracking-widest text-accent mb-3 block"
          >
            {dict.Sustainability.badge}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-serif text-cream mb-4"
          >
            {dict.Sustainability.title_part1} <span className="text-accent">{dict.Sustainability.title_part2}</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            className="h-1 bg-accent/50 mx-auto mt-6 rounded-full"
          />
        </div>

        {/* Content Container */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center bg-white/[0.03] rounded-3xl p-8 md:p-12 border border-white/10 backdrop-blur-sm">
            {/* Left Column: Text Items (7 cols on lg) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 space-y-10"
            >
              {/* Item 1 */}
              <div className="flex gap-5 items-start">
                <div className="p-3.5 rounded-2xl bg-white/[0.05] border border-white/10 shrink-0 text-accent">
                  <HeartHandshake className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold font-serif text-cream mb-2">
                    {dict.Sustainability.certifications_title}
                  </h3>
                  <p className="text-sm md:text-base text-cream/70 leading-relaxed font-sans mb-3">
                    {dict.Sustainability.certifications_desc}
                  </p>
                  <ul className="text-sm md:text-base text-cream/70 leading-relaxed font-sans list-disc list-inside space-y-1">
                    {dict.Sustainability.certifications_list.map((item: string) => {
                      const parts = item.split(" – ");
                      if (parts.length > 1) {
                        return (
                          <li key={item}>
                            <strong className="text-white">{parts[0]}</strong> – {parts[1]}
                          </li>
                        );
                      }
                      return <li key={item}>{item}</li>;
                    })}
                  </ul>
                  <p className="text-sm md:text-base text-cream/70 leading-relaxed font-sans mt-3">
                    {dict.Sustainability.certifications_footer}
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex gap-5 items-start">
                <div className="p-3.5 rounded-2xl bg-white/[0.05] border border-white/10 shrink-0 text-accent">
                  <Leaf className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold font-serif text-cream mb-2">
                    {dict.Sustainability.pricing_title}
                  </h3>
                  <p className="text-sm md:text-base text-cream/70 leading-relaxed font-sans">
                    {dict.Sustainability.pricing_desc}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Visual Side (5 cols on lg) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl relative aspect-[4/5] group border border-white/15">
                <Image
                  src="/assets/img/certified-quality-control.webp"
                  alt="Sustainability Heritage"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-left">
                  <p className="text-base md:text-lg font-serif italic text-cream font-medium">
                    &ldquo;{dict.Sustainability.quote}&rdquo;
                  </p>
                </div>
              </div>

              {/* Spinning Dashed border decorative circle */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full border border-dashed border-accent/40 animate-spin-slow pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
