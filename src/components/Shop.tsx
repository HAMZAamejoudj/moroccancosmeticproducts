"use client";

import Image from "next/image";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "@/context/LanguageContext";

export default function Shop() {
  const { dict, locale } = useTranslation();

  return (
    <section id="shop" className="py-24 relative overflow-hidden bg-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text and CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-start flex flex-col items-start"
          >
            {/* Tagline */}
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-accent rounded-full" />
              <span className="text-accent font-semibold uppercase tracking-widest text-xs md:text-sm">
                {dict.Shop.badge}
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-primary mb-6 leading-tight">
              {dict.Shop.title_part1}{" "}
              <span className="text-accent">{dict.Shop.title_part2}</span>
              {dict.Shop.title_punct}
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg text-primary/80 leading-relaxed mb-6 max-w-xl">
              {dict.Shop.description}
            </p>

            <ul className="text-base md:text-lg text-primary/80 leading-relaxed mb-8 max-w-xl space-y-2 list-none">
              {dict.Shop.bullets.map((bullet: string) => {
                const cleanBullet = bullet.replace(/^✔️\s*/, "");
                const parts = cleanBullet.split(" – ");
                return (
                  <li key={bullet}>
                    ✔️ <strong className="text-primary font-semibold">{parts[0]}</strong> – {parts[1]}
                  </li>
                );
              })}
            </ul>

            <p className="text-base md:text-lg text-primary/80 leading-relaxed mb-10 max-w-xl font-medium">
              {dict.Shop.footer_bold}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/212641517831"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-white font-semibold bg-[#25D366] hover:bg-[#20ba59] transition-all shadow-lg hover:shadow-green-500/10 group"
              >
                <span>{dict.Shop.cta_whatsapp}</span>
                <i className="fab fa-whatsapp ms-3 text-xl transition-transform duration-300 group-hover:scale-110" />
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.03, backgroundColor: "#2C2818", color: "#F5F3EF" }}
                whileTap={{ scale: 0.98 }}
                href="mailto:inquiry@moroccanorganica.com"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold border-2 border-primary text-primary transition-all group"
              >
                <span>{dict.Shop.cta_email}</span>
                <Mail className={`ms-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 ${locale === "ar" ? "rotate-180" : ""}`} />
              </motion.a>
            </div>

            {/* Social Proof (Happy Customers) */}
            <div className="flex items-center gap-6 border-t border-primary/10 pt-8 w-full">
              <div className="flex -space-x-4">
                <div className="relative w-12 h-12 rounded-full border-2 border-sand overflow-hidden">
                  <Image
                    src="/assets/img/argan-oil-wholesale.webp"
                    alt="User Avatar"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-12 h-12 rounded-full border-2 border-sand overflow-hidden">
                  <Image
                    src="/assets/img/prickly-pear-seed-oil-wholesale.webp"
                    alt="User Avatar"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-12 h-12 rounded-full border-2 border-sand overflow-hidden">
                  <Image
                    src="/assets/img/moroccan-rose-water-bulk.webp"
                    alt="User Avatar"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-sand bg-primary text-cream flex items-center justify-center text-xs font-bold shrink-0">
                  500+
                </div>
              </div>
              <div className="text-xs md:text-sm font-semibold text-primary/80">
                {dict.Shop.happy_customers} <br />
                <span className="text-accent">⭐⭐⭐⭐⭐ 5.0/5</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Floating Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center lg:h-[600px]"
          >
            <div className="relative w-full max-w-sm">
              {/* Main Floating Image Container */}
              <div className="relative z-20 rounded-t-full rounded-b-[100px] overflow-hidden shadow-2xl border-4 border-white animate-float aspect-[3/4] w-full">
                <Image
                  src="/assets/img/moroccan-beauty-ingredients-display.webp"
                  alt="Premium Argan Oil Bottle"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 30vw"
                />
              </div>

              {/* Decorative Circle Waves */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[115%] border border-accent/20 rounded-full -z-10 animate-pulse" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] border border-accent/10 rounded-full -z-20" />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
