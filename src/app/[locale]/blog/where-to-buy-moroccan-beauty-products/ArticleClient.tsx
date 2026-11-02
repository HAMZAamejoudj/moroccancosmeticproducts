"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, Package, Tag, Globe, Settings, MapPin, Star, ArrowRight, Lightbulb } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "@/context/LanguageContext";
import PageHero from "@/components/PageHero";
import { heroImages } from "@/lib/hero-images";

const productImages = [
  "/image/argan-oil-skin-care.webp",
  "/image/pure-prickly-pear-seed-oil.webp",
  "/image/authentic-moroccan-black-soap.webp",
  "/image/ghassoul-clay-morocco.webp",
  "/image/moroccan-blue-nila-powder.webp",
  "/image/pure-moroccan-rose-water.webp",
];

const whereImages = ["/image/aker-fassi-wholesale.webp", "/image/pure-moroccan-rose-water.webp", "/image/moroccan-blue-nila-powder.webp"];

const whereIcons = [MapPin, Globe, Settings];
const wholesaleIcons = [Tag, Package, Star, Globe];

export default function ArticleClient() {
  const { dict, locale } = useTranslation();
  const blog = dict.Blog;

  return (
    <div className="bg-sand pb-24">
      <PageHero
        image={heroImages.blog}
        alt="Moroccan Beauty Products Wholesale"
        className="min-h-[60vh] md:pt-44 md:pb-32"
      >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold font-serif mb-6 leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]"
          >
            {blog.hero_title_part1}{" "}
            <span className="text-accent">{blog.hero_title_part2}</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-4 text-cream/80 text-sm mt-8 drop-shadow-[0_1px_6px_rgba(0,0,0,0.35)]"
          >
            <span>{blog.author}</span>
            <span>•</span>
            <span>{blog.read_time}</span>
          </motion.div>
      </PageHero>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-xl md:text-2xl text-primary font-serif font-medium leading-relaxed mb-6">{blog.intro_p1}</p>
              <p className="text-primary/70 leading-relaxed text-lg mb-6">{blog.intro_p2}</p>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 bg-accent text-primary font-bold px-6 py-3 rounded-full hover:bg-primary hover:text-accent transition-all shadow-md"
              >
                {blog.intro_cta}
                <ArrowRight className={`w-4 h-4 ${locale === "ar" ? "rotate-180" : ""}`} />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative h-80 rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image src="/image/argan-oil-hair-benefits.webp" alt="Moroccan argan oil wholesale" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative h-96 rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1"
            >
              <Image src="/image/ghassoul-clay-morocco.webp" alt="Moroccan beauty ingredients" fill className="object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6 text-white">
                {blog.popular_title_part1} <span className="text-accent">{blog.popular_title_part2}</span>
              </h2>
              <p className="text-cream/80 leading-relaxed mb-5 text-lg">{blog.popular_p1}</p>
              <p className="text-cream/80 leading-relaxed text-lg">{blog.popular_p2}</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-4">{blog.products_title}</h2>
            <p className="text-primary/60 text-lg max-w-2xl mx-auto">{blog.products_subtitle}</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {blog.products.map((product: { name: string }, i: number) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="relative h-48 md:h-64 rounded-2xl overflow-hidden group shadow-lg"
              >
                <Image
                  src={productImages[i]}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-4">
                  <p className="text-cream font-bold text-sm md:text-base">{product.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-8">
                {blog.supplier_title_part1} <span className="text-accent">{blog.supplier_title_part2}</span>
              </h2>
              <ul className="space-y-5">
                {blog.supplier_items.map((item: { title: string; text: string }) => (
                  <li key={item.title} className="flex items-start gap-4 group">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-primary">{item.title}</span>
                      <span className="text-primary/60"> — {item.text}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative h-96 rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image src="/image/authentic-moroccan-black-soap.webp" alt="Moroccan black soap wholesale" fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-4">{blog.where_title}</h2>
            <p className="text-primary/60 text-lg">{blog.where_subtitle}</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blog.where_items.map((item: { title: string; text: string }, i: number) => {
              const Icon = whereIcons[i];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg border border-primary/5 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={whereImages[i]}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
                    <div className="absolute bottom-4 start-4">
                      <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold font-serif text-primary mb-3">{item.title}</h3>
                    <p className="text-primary/65 leading-relaxed">{item.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mb-4">
              {blog.wholesale_title_part1} <span className="text-accent">{blog.wholesale_title_part2}</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {blog.wholesale_items.map((item: { title: string; text: string }, i: number) => {
              const Icon = wholesaleIcons[i];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all"
                >
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-cream/60 text-sm">{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative h-[480px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image src="/image/kessa-exfoliating-glove.webp" alt="Moroccan beauty tips" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Lightbulb className="w-6 h-6 text-accent" />
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary">{blog.tips_title}</h2>
              </div>
              <div className="space-y-6">
                {blog.tips.map((tip: { num: string; title: string; text: string }) => (
                  <div key={tip.num} className="flex gap-4 items-start">
                    <span className="text-2xl font-black text-accent/30 font-serif leading-none w-10 shrink-0">{tip.num}</span>
                    <div>
                      <p className="font-bold text-primary">{tip.title}</p>
                      <p className="text-primary/60 text-sm leading-relaxed">{tip.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary rounded-[40px] p-10 md:p-16 text-center text-cream shadow-2xl relative overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mb-6">{blog.cta_title}</h2>
              <p className="text-cream/75 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">{blog.cta_text}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold bg-accent text-primary hover:bg-white transition-all shadow-lg"
                >
                  {blog.cta_contact}
                  <ArrowRight className={`w-4 h-4 ${locale === "ar" ? "rotate-180" : ""}`} />
                </Link>
                <a
                  href="https://wa.me/212641517831"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold bg-[#25D366] text-white hover:bg-[#20ba59] transition-all shadow-lg"
                >
                  <FaWhatsapp className="w-5 h-5" /> {blog.cta_whatsapp}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
