"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/context/LanguageContext";
import { BlogArticle } from "@/lib/blog";
import { Calendar, Clock, ArrowRight, ArrowUpRight } from "lucide-react";

interface BlogClientProps {
  articles: BlogArticle[];
}

export default function BlogClient({ articles }: BlogClientProps) {
  const { locale } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const t = {
    en: {
      heroTitle: "Blog – Moroccan Organic Beauty Insights",
      home: "Home",
      blog: "Blog",
      badge: "Knowledge and Insights",
      heading: "Moroccan Beauty, Wholesale Tips and Ingredient Guides",
      subtitle:
        "Explore our articles on Moroccan skincare traditions, organic ingredients, and wholesale business opportunities.",
      allCategories: "All Articles",
      readMore: "Read More",
      minRead: "min read",
      ctaTitle: "Looking for Wholesale Moroccan Beauty Products?",
      ctaSubtitle:
        "Browse our full product range and request a quote for bulk or private label orders.",
      ctaButton: "View Products",
    },
    fr: {
      heroTitle: "Blog – Savoir-faire et Conseils Beauté Marocaine",
      home: "Accueil",
      blog: "Blog",
      badge: "Conseils et Savoir-Faire",
      heading: "Beauté Marocaine, Conseils Grossiste et Guides Ingrédients",
      subtitle:
        "Explorez nos articles sur les traditions cosmétiques marocaines, les actifs bio et les opportunités commerciales B2B.",
      allCategories: "Tous les Articles",
      readMore: "Lire la suite",
      minRead: "min de lecture",
      ctaTitle: "Vous Recherchez des Produits Cosmétiques Marocains en Gros ?",
      ctaSubtitle:
        "Découvrez notre gamme complète et demandez un devis gratuit pour vos commandes en vrac ou en marque blanche.",
      ctaButton: "Voir les Produits",
    },
    ar: {
      heroTitle: "المدونة – رؤى وأسرار الجمال المغربي العضوي",
      home: "الرئيسية",
      blog: "المدونة",
      badge: "معرفة وخبرات",
      heading: "الجمال المغربي، نصائح تجارة الجملة ودليل المكونات الطبيعية",
      subtitle:
        "استكشف مقالاتنا حول تقاليد العناية المغربية، المكونات العضوية النادرة، وفرص الأعمال والتوريد بالجملة.",
      allCategories: "جميع المقالات",
      readMore: "اقرأ المزيد",
      minRead: "دقائق للقراءة",
      ctaTitle: "هل تبحث عن منتجات تجميل مغربية بالجملة لعلامتك؟",
      ctaSubtitle:
        "تصفح مجموعتنا الكاملة من الزيوت الطبيعية والمستحضرات واطلب عرض سعر مخصص لطلبات الجملة أو العلامة الخاصة.",
      ctaButton: "تصفح المنتجات",
    },
  }[locale] || {
    heroTitle: "Blog – Moroccan Organic Beauty Insights",
    home: "Home",
    blog: "Blog",
    badge: "Knowledge and Insights",
    heading: "Moroccan Beauty, Wholesale Tips and Ingredient Guides",
    subtitle:
      "Explore our articles on Moroccan skincare traditions, organic ingredients, and wholesale business opportunities.",
    allCategories: "All Articles",
    readMore: "Read More",
    minRead: "min read",
    ctaTitle: "Looking for Wholesale Moroccan Beauty Products?",
    ctaSubtitle:
      "Browse our full product range and request a quote for bulk or private label orders.",
    ctaButton: "View Products",
  };

  const categories = [
    { key: "all", label: t.allCategories },
    {
      key: "buying-guide",
      label:
        locale === "fr"
          ? "Guides d'Achat"
          : locale === "ar"
          ? "أدلة الشراء"
          : "Buying Guides",
    },
    {
      key: "wholesale",
      label:
        locale === "fr"
          ? "Vente en Gros"
          : locale === "ar"
          ? "تجارة الجملة"
          : "Wholesale",
    },
    {
      key: "ingredients",
      label:
        locale === "fr"
          ? "Ingrédients"
          : locale === "ar"
          ? "المكونات"
          : "Ingredients",
    },
    {
      key: "skincare",
      label:
        locale === "fr"
          ? "Soins de la Peau"
          : locale === "ar"
          ? "العناية بالبشرة"
          : "Skincare",
    },
  ];

  const filteredArticles =
    selectedCategory === "all"
      ? articles
      : articles.filter((a) => a.category === selectedCategory);

  return (
    <div className="bg-[#FAF8F3] text-primary min-h-screen">
      {/* 1. HERO HEADER (Brand Luxury Palette: Dark Espresso and Amber Gold) */}
      <section className="bg-primary text-cream pt-32 pb-16 md:pt-36 md:pb-20 relative overflow-hidden">
        {/* Soft decorative glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-start">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center md:justify-start gap-2 text-xs font-semibold uppercase tracking-wider text-cream/70 mb-4">
            <Link href={`/${locale}`} className="hover:text-accent transition-colors">
              {t.home}
            </Link>
            <span className="text-accent/60">/</span>
            <span className="text-accent">{t.blog}</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white max-w-4xl leading-tight">
            {t.heroTitle}
          </h1>
        </div>
      </section>

      {/* 2. MAIN BLOG LISTING SECTION */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center mb-12 md:mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs md:text-sm font-bold uppercase tracking-widest text-accent mb-3 block"
            >
              {t.badge}
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-primary mb-4 max-w-4xl mx-auto leading-tight"
            >
              {t.heading}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm md:text-base text-primary/75 max-w-2xl mx-auto leading-relaxed"
            >
              {t.subtitle}
            </motion.p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all shadow-2xs ${
                    selectedCategory === cat.key
                      ? "bg-primary text-cream shadow-md"
                      : "bg-white text-primary border border-primary/10 hover:border-accent hover:text-accent"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Articles Grid (3 Columns on desktop matching the uploaded screenshot) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredArticles.map((article, idx) => (
                <motion.article
                  key={article.slug}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-primary/10 flex flex-col group transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Article Image Card */}
                  <Link
                    href={`/${locale}/blog/${article.slug}`}
                    className="relative aspect-[16/10] w-full overflow-hidden bg-sand/40 block"
                  >
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </Link>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7 flex-grow flex flex-col justify-between items-start text-start">
                    <div>
                      {/* Category and Date Row */}
                      <div className="flex items-center gap-3 text-xs mb-3 flex-wrap">
                        <span className="font-bold uppercase tracking-wider text-accent">
                          {article.categoryLabel}
                        </span>
                        <span className="text-primary/30">•</span>
                        <span className="text-primary/60 flex items-center gap-1 font-medium">
                          <Calendar className="w-3.5 h-3.5 text-primary/50" />
                          <span>{article.date}</span>
                        </span>
                      </div>

                      {/* Article Title */}
                      <h3 className="text-lg sm:text-xl font-bold font-serif text-primary mb-3 leading-snug group-hover:text-accent transition-colors line-clamp-2">
                        <Link href={`/${locale}/blog/${article.slug}`}>
                          {article.title}
                        </Link>
                      </h3>

                      {/* Article Excerpt */}
                      <p className="text-xs sm:text-sm text-primary/70 leading-relaxed line-clamp-3 mb-6">
                        {article.excerpt}
                      </p>
                    </div>

                    {/* Bottom Read More Link */}
                    <div className="w-full pt-4 border-t border-primary/10 flex items-center justify-between">
                      <Link
                        href={`/${locale}/blog/${article.slug}`}
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-primary group-hover:text-accent transition-colors"
                      >
                        <span>{t.readMore}</span>
                        <ArrowRight
                          className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                            locale === "ar" ? "rotate-180 group-hover:-translate-x-1" : ""
                          }`}
                        />
                      </Link>

                      <span className="text-[11px] font-medium text-primary/50 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{article.readTime}</span>
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 3. BOTTOM BANNER CALL TO ACTION (Matching screenshot inspiration in brand luxury dark palette) */}
      <section className="py-16 md:py-24 bg-primary text-cream relative overflow-hidden">
        {/* Ambient gold glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-white mb-4 leading-tight">
            {t.ctaTitle}
          </h2>

          <p className="text-sm sm:text-base text-cream/80 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
            {t.ctaSubtitle}
          </p>

          <Link
            href={`/${locale}#products`}
            className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full font-bold text-sm sm:text-base bg-accent text-primary hover:bg-cream transition-all shadow-xl hover:shadow-2xl hover:scale-105"
          >
            <span>{t.ctaButton}</span>
            <ArrowUpRight className={`w-4 h-4 ${locale === "ar" ? "rotate-90" : ""}`} />
          </Link>
        </div>
      </section>
    </div>
  );
}

