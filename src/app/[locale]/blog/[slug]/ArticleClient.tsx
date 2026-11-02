"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "@/context/LanguageContext";
import { BlogArticle } from "@/lib/blog";
import { Calendar, Clock, ArrowRight, ChevronRight, CheckCircle2, ArrowUpRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

interface ArticleClientProps {
  article: BlogArticle;
  relatedArticles: BlogArticle[];
}

export default function ArticleClient({
  article,
  relatedArticles,
}: ArticleClientProps) {
  const { locale } = useTranslation();

  const labels = {
    en: {
      home: "Home",
      blog: "Blog",
      keyFacts: "KEY FACTS",
      relatedTitle: "Related Articles",
      viewAll: "View All Articles",
      readMore: "Read More",
      whatsappConsultation: "WhatsApp Consultation",
    },
    fr: {
      home: "Accueil",
      blog: "Blog",
      keyFacts: "POINTS CLÉS",
      relatedTitle: "Articles Similaires",
      viewAll: "Voir Tous les Articles",
      readMore: "Lire la suite",
      whatsappConsultation: "Consultation WhatsApp",
    },
    ar: {
      home: "الرئيسية",
      blog: "المدونة",
      keyFacts: "حقائق ومعايير أساسية",
      relatedTitle: "مقالات ذات صلة",
      viewAll: "عرض كافة المقالات",
      readMore: "اقرأ المزيد",
      whatsappConsultation: "استشارة عبر واتساب",
    },
  }[locale] || {
    home: "Home",
    blog: "Blog",
    keyFacts: "KEY FACTS",
    relatedTitle: "Related Articles",
    viewAll: "View All Articles",
    readMore: "Read More",
    whatsappConsultation: "WhatsApp Consultation",
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Moroccan Cosmetic Products, I am interested in wholesale supply for: "${article.title}".`
  );
  const whatsappUrl = `https://wa.me/212623485056?text=${whatsappMessage}`;

  return (
    <article className="bg-[#FAF8F3] text-primary min-h-screen">
      {/* 1. HERO HEADER (Dark Luxury Palette: Espresso Charcoal and Amber Gold) */}
      <section className="bg-primary text-cream pt-32 pb-20 md:pt-36 md:pb-28 relative overflow-hidden">
        {/* Ambient gold glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-start">
          {/* Breadcrumbs */}
          <nav className="flex items-center justify-center md:justify-start gap-2 text-xs font-semibold uppercase tracking-wider text-cream/70 mb-5">
            <Link href={`/${locale}`} className="hover:text-accent transition-colors">
              {labels.home}
            </Link>
            <ChevronRight className={`w-3.5 h-3.5 ${locale === "ar" ? "rotate-180" : ""}`} />
            <Link href={`/${locale}/blog`} className="hover:text-accent transition-colors">
              {labels.blog}
            </Link>
            <ChevronRight className={`w-3.5 h-3.5 ${locale === "ar" ? "rotate-180" : ""}`} />
            <span className="text-accent truncate max-w-[220px]">{article.categoryLabel}</span>
          </nav>

          {/* Article Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-white mb-4 leading-tight">
            {article.title}
          </h1>

          {/* Metadata line: Date and Read Time */}
          <div className="flex items-center justify-center md:justify-start gap-3 text-xs text-cream/70 font-medium">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-accent" />
              <span>{article.date}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-accent" />
              <span>{article.readTime}</span>
            </span>
            <span>•</span>
            <span className="text-accent font-semibold">{article.author}</span>
          </div>
        </div>
      </section>

      {/* 2. MAIN ARTICLE CONTENT BODY */}
      <section className="py-8 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Hero Image (Centered with rounded corners matching screenshot) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-2xl border border-primary/10 -mt-16 md:-mt-24 z-20 bg-white mb-12"
          >
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 896px"
            />
          </motion.div>

          {/* Tagline and Subtitle */}
          <div className="mb-8">
            <span className="text-xs sm:text-sm uppercase tracking-widest font-bold text-accent mb-2 block">
              {article.tagline}
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-primary mb-4 leading-tight">
              {article.subtitle}
            </h2>

            <p className="text-sm sm:text-base text-primary/80 leading-relaxed font-normal">
              {article.lead}
            </p>
          </div>

          {/* "KEY FACTS" Callout Box (Tinted container with styled bullet points) */}
          {article.keyFacts && article.keyFacts.length > 0 && (
            <div className="p-6 sm:p-7 rounded-2xl bg-[#F7F5EE] border border-accent/30 shadow-2xs mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-accent mb-3 block">
                {labels.keyFacts}
              </span>
              <ul className="space-y-2.5">
                {article.keyFacts.map((fact, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-primary/85 leading-relaxed font-medium">
                    <span className="w-2 h-2 rounded-full bg-accent shrink-0 mt-1.5" />
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Numbered Points Section (e.g. "Top 10 Benefits of Argan Oil") */}
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-primary mb-8 pb-3 border-b border-primary/10">
              {article.pointsHeading}
            </h3>

            <div className="space-y-6">
              {article.points.map((point) => (
                <div key={point.number} className="pb-5 border-b border-primary/5 last:border-b-0">
                  <h4 className="font-bold text-base sm:text-lg text-primary mb-1.5 font-serif">
                    {point.number}. {point.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-primary/75 leading-relaxed font-normal">
                    {point.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* In-Article CTA Button (Matching reference screenshot) */}
          <div className="mt-8 mb-16 flex flex-col sm:flex-row gap-4 items-center">
            <Link
              href={article.ctaButtonHref}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-bold text-sm bg-accent text-primary hover:bg-cream transition-all shadow-md hover:shadow-lg text-center"
            >
              <span>{article.ctaButtonText}</span>
              <ArrowRight className={`w-4 h-4 ${locale === "ar" ? "rotate-180" : ""}`} />
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm bg-white text-primary hover:bg-sand border border-primary/15 transition-all shadow-2xs text-center"
            >
              <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
              <span>{labels.whatsappConsultation}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 3. BOTTOM WHOLESALE SUPPLY BANNER (Dark Luxury Theme matching screenshot) */}
      <section className="py-16 md:py-24 bg-primary text-cream relative overflow-hidden">
        {/* Soft Ambient Gold Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-white mb-4 leading-tight">
            {article.bottomBanner.title}
          </h2>

          <p className="text-sm sm:text-base text-cream/80 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
            {article.bottomBanner.subtitle}
          </p>

          <Link
            href={article.bottomBanner.btnHref}
            className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full font-bold text-sm sm:text-base bg-accent text-primary hover:bg-cream transition-all shadow-xl hover:shadow-2xl hover:scale-105"
          >
            <span>{article.bottomBanner.btnText}</span>
            <ArrowUpRight className={`w-4 h-4 ${locale === "ar" ? "rotate-90" : ""}`} />
          </Link>
        </div>
      </section>

      {/* 4. RELATED ARTICLES (3 Columns Grid) */}
      {relatedArticles.length > 0 && (
        <section className="py-16 md:py-24 bg-white border-t border-primary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-primary">
                {labels.relatedTitle}
              </h2>

              <Link
                href={`/${locale}/blog`}
                className="text-xs sm:text-sm font-bold text-primary hover:text-accent transition-colors flex items-center gap-1.5"
              >
                <span>{labels.viewAll}</span>
                <ArrowRight className={`w-3.5 h-3.5 ${locale === "ar" ? "rotate-180" : ""}`} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.slice(0, 3).map((rel) => (
                <div
                  key={rel.slug}
                  className="bg-[#FAF8F3] rounded-3xl overflow-hidden shadow-xs hover:shadow-xl border border-primary/10 flex flex-col group transition-all"
                >
                  <Link href={`/${locale}/blog/${rel.slug}`} className="relative aspect-[16/10] w-full overflow-hidden bg-sand block">
                    <Image
                      src={rel.image}
                      alt={rel.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </Link>

                  <div className="p-6 flex-grow flex flex-col justify-between items-start text-start">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-accent mb-2 block">
                        {rel.categoryLabel}
                      </span>
                      <h3 className="text-base font-bold text-primary font-serif mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                        <Link href={`/${locale}/blog/${rel.slug}`}>
                          {rel.title}
                        </Link>
                      </h3>
                      <p className="text-xs text-primary/70 line-clamp-2 leading-relaxed mb-4">
                        {rel.excerpt}
                      </p>
                    </div>

                    <Link
                      href={`/${locale}/blog/${rel.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-accent transition-colors mt-auto pt-3 border-t border-primary/10 w-full"
                    >
                      <span>{labels.readMore}</span>
                      <ArrowRight className={`w-3.5 h-3.5 ${locale === "ar" ? "rotate-180" : ""}`} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
