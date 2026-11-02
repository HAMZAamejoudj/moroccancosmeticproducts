"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  ChevronRight,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  Award,
  Droplets,
  Leaf,
  Heart,
  FileText,
  Package,
  Layers,
  MapPin,
  Clock,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { ProductDetail } from "@/lib/products";
import { Locale } from "@/dictionaries";

interface Props {
  product: ProductDetail;
  locale: Locale;
  relatedProducts: ProductDetail[];
}

const benefitIcons = [Leaf, Droplets, ShieldCheck, Award, Heart];

export default function ProductDetailClient({ product, locale, relatedProducts }: Props) {
  const [selectedImage, setSelectedImage] = useState(product.gallery[0] || product.image);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const whatsappMessage = encodeURIComponent(
    locale === "fr"
      ? `Bonjour, je souhaite obtenir un devis pour la commande en gros de : ${product.title}`
      : locale === "ar"
      ? `مرحباً، أود الحصول على عرض أسعار لطلب كميات بالجملة من: ${product.title}`
      : `Hello, I would like to request a wholesale quote for: ${product.title}`
  );

  const whatsappUrl = `https://wa.me/212641517831?text=${whatsappMessage}`;

  const labels = {
    home: locale === "fr" ? "Accueil" : locale === "ar" ? "الرئيسية" : "Home",
    products: locale === "fr" ? "Nos Produits" : locale === "ar" ? "المنتجات" : "Products",
    requestQuote:
      locale === "fr" ? "Demander un Devis" : locale === "ar" ? "طلب عرض أسعار" : "Request a Quote",
    orderSample:
      locale === "fr" ? "Commander des Échantillons" : locale === "ar" ? "طلب عينات تجريبية" : "Order Samples",
    orderWhatsApp:
      locale === "fr" ? "Commander via WhatsApp" : locale === "ar" ? "طلب عبر واتساب" : "WhatsApp Inquiry",
    availablePackaging:
      locale === "fr"
        ? "Conditionnements Disponibles en Vrac et Marque Blanche :"
        : locale === "ar"
        ? "خيارات التعبئة بالجملة والعلامة الخاصة:"
        : "Available in Bulk and Custom Options:",
    keyBenefitsTag:
      locale === "fr"
        ? "POURQUOI CHOISIR CET INGRÉDIENT"
        : locale === "ar"
        ? "لماذا تختار هذا المنتج"
        : "WHY CHOOSE THIS INGREDIENT",
    keyBenefitsTitle:
      locale === "fr" ? "Bienfaits Principaux" : locale === "ar" ? "الفوائد والمميزات الرئيسية" : "Key Benefits",
    keyBenefitsSubtitle:
      locale === "fr"
        ? "Propriétés dermatologiques prouvées pour les spas, marques et formulateurs cosmétiques."
        : locale === "ar"
        ? "خصائص تجميلية وعلاجية مثبتة لمراكز السبا ومصانع مستحضرات التجميل."
        : "Proven dermatological benefits for spas, cosmetic formulators, and luxury skincare lines.",
    productDetailsTitle:
      locale === "fr" ? "Caractéristiques du Produit" : locale === "ar" ? "تفاصيل ومواصفات المنتج" : "Product Details",
    requestCoA:
      locale === "fr"
        ? "Demander le Certificat d'Analyse (CoA)"
        : locale === "ar"
        ? "طلب شهادة التحليل المخبري (CoA)"
        : "Request Certificate of Analysis (CoA)",
    howToUseTag:
      locale === "fr" ? "PROTOCOLE D'APPLICATION" : locale === "ar" ? "طريقة الاستخدام والتطبيق" : "APPLICATION PROTOCOL",
    howToUseTitle:
      locale === "fr"
        ? `Comment Utiliser — ${product.title.split(" ")[0]} ${product.title.split(" ")[1] || ""}`
        : locale === "ar"
        ? `طريقة استخدام — ${product.title.split(" ")[0]} ${product.title.split(" ")[1] || ""}`
        : `How to Use ${product.title.split(" ")[0]} ${product.title.split(" ")[1] || ""}`,
    howToUseSubtitle:
      locale === "fr"
        ? "Protocole professionnel pour instituts, spas et soins quotidiens."
        : locale === "ar"
        ? "دليل الاستخدام المهني الموصى به لمراكز السبا والروتين اليومي."
        : "Professional protocol for spas, aesthetic centers, and daily skincare routines.",
    textureTitle:
      locale === "fr"
        ? "Texture et Qualité Supérieure"
        : locale === "ar"
        ? "الجودة والقوام الطبيعي الفاخر"
        : "Texture and Premium Quality",
    textureSubtitle:
      locale === "fr"
        ? "Consistance 100% végétale pure, riche en actifs botaniques natifs."
        : locale === "ar"
        ? "قوام نباتي نقي 100٪ غني بالمستخلصات الفعالة."
        : "100% pure botanical consistency, rich in native active ingredients.",
    faqsTitle:
      locale === "fr" ? "Questions Fréquentes" : locale === "ar" ? "الأسئلة الشائعة حول هذا المنتج" : "Frequently Asked Questions",
    ctaBannerTitle:
      locale === "fr"
        ? "Vous Cherchez un Fournisseur Fiable ?"
        : locale === "ar"
        ? "هل تبحث عن مورد موثوق ومباشر من المغرب؟"
        : "Looking for a Reliable Supplier?",
    ctaBannerSubtitle:
      locale === "fr"
        ? "Contactez notre équipe export pour obtenir nos tarifs dégressifs en gros et vos échantillons personnalisés."
        : locale === "ar"
        ? "تواصل مع فريق التصدير لدينا للحصول على أسعار الجملة التنافسية وعينات علامتك التجارية."
        : "Contact our export team for bulk volume discounts and turnkey private label samples.",
    relatedTitle:
      locale === "fr" ? "Produits Recommandés" : locale === "ar" ? "منتجات ذات صلة" : "Related Products",
    viewDetails: locale === "fr" ? "Découvrir" : locale === "ar" ? "عرض التفاصيل" : "View Details",
    specInci: locale === "fr" ? "Nom INCI" : locale === "ar" ? "الاسم العلمي (INCI)" : "INCI Name",
    specOrigin: locale === "fr" ? "Origine" : locale === "ar" ? "المنشأ" : "Origin",
    specExtraction: locale === "fr" ? "Extraction" : locale === "ar" ? "طريقة الاستخلاص" : "Extraction",
    specAppearance: locale === "fr" ? "Aspect et Texture" : locale === "ar" ? "المظهر والقوام" : "Appearance",
    specCert: locale === "fr" ? "Certifications" : locale === "ar" ? "الشهادات" : "Certifications",
    specShelf: locale === "fr" ? "Conservation" : locale === "ar" ? "مدة الصلاحية" : "Shelf Life",
    specMoq: locale === "fr" ? "Quantité Minimale" : locale === "ar" ? "الحد الأدنى" : "MOQ",
  };

  const specRows = [
    { label: labels.specInci, value: product.specifications.inci, code: "I" },
    { label: labels.specOrigin, value: product.specifications.origin, code: "O" },
    { label: labels.specExtraction, value: product.specifications.extraction, code: "E" },
    { label: labels.specAppearance, value: product.specifications.appearance, code: "A" },
    { label: labels.specCert, value: product.specifications.certifications, code: "C" },
    { label: labels.specShelf, value: product.specifications.shelfLife, code: "S" },
    { label: labels.specMoq, value: product.specifications.minOrder, code: "M" },
  ];

  return (
    <div className="bg-[#FAF8F3] text-primary">
      {/* 1. TOP BANNER / MINI HERO (Dark Luxury Brand Theme) */}
      <section className="bg-primary text-cream pt-32 pb-16 md:pt-36 md:pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-start">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center md:justify-start gap-2 text-xs font-semibold uppercase tracking-wider text-cream/70 mb-5">
            <Link href={`/${locale}`} className="hover:text-white transition-colors">
              {labels.home}
            </Link>
            <ChevronRight className={`w-3.5 h-3.5 ${locale === "ar" ? "rotate-180" : ""}`} />
            <Link href={`/${locale}#products`} className="hover:text-white transition-colors">
              {labels.products}
            </Link>
            <ChevronRight className={`w-3.5 h-3.5 ${locale === "ar" ? "rotate-180" : ""}`} />
            <span className="text-accent truncate">{product.title.split(" ")[0]} {product.title.split(" ")[1] || ""}</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-white max-w-4xl leading-tight">
            {product.bannerTitle || product.title}
          </h1>
        </div>
      </section>

      {/* 2. MAIN PRODUCT SHOWCASE HERO */}
      <section className="py-16 md:py-24 bg-white border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Image and Gallery (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="relative aspect-square w-full rounded-3xl overflow-hidden bg-sand/30 shadow-xl border border-primary/10"
              >
                <Image
                  src={selectedImage}
                  alt={product.title}
                  fill
                  priority
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </motion.div>

              {/* Thumbnails */}
              {product.gallery.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2 pt-1">
                  {product.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedImage(img)}
                      className={`relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 border-2 transition-all duration-200 ${
                        selectedImage === img
                          ? "border-accent ring-2 ring-accent/30 scale-105 shadow-md"
                          : "border-primary/10 hover:border-accent/50 opacity-80 hover:opacity-100"
                      }`}
                    >
                      <Image src={img} alt={`${product.title} ${idx + 1}`} fill className="object-cover" sizes="80px" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right Column: Title, Bullets and CTAs (7 cols) */}
            <div className="lg:col-span-7 flex flex-col items-start text-start">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-primary mb-4 leading-tight">
                {product.title}
              </h2>

              <p className="text-sm sm:text-base text-primary/75 leading-relaxed mb-6">
                {product.shortDesc}
              </p>

              {/* 5 Checkmark Highlights with Gold/Primary Accent Circle */}
              <div className="flex flex-col gap-3 w-full mb-8">
                {product.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary text-accent flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-primary/90 leading-tight">
                      {h}
                    </span>
                  </div>
                ))}
              </div>

              {/* 2 CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-8">
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-sm sm:text-base text-cream bg-primary hover:bg-accent hover:text-primary transition-all shadow-md hover:shadow-lg"
                >
                  <span>{labels.requestQuote}</span>
                  <ArrowRight className={`w-4 h-4 ${locale === "ar" ? "rotate-180" : ""}`} />
                </Link>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-bold text-sm sm:text-base text-primary bg-white hover:bg-sand border border-primary/20 transition-all shadow-sm"
                >
                  <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
                  <span>{labels.orderWhatsApp}</span>
                </a>
              </div>

              {/* Packaging Options Pills */}
              <div className="w-full pt-6 border-t border-primary/10">
                <span className="text-xs font-bold uppercase tracking-wider text-primary/60 block mb-3">
                  {labels.availablePackaging}
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.packagingPills.map((p, idx) => (
                    <span
                      key={idx}
                      className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold bg-sand border border-primary/10 text-primary/80"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. KEY BENEFITS SECTION (Warm Sand background, 6 White Cards in 3x2 Grid) */}
      <section className="py-20 md:py-28 bg-[#F8F6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-accent mb-2 block">
              {labels.keyBenefitsTag}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-primary mb-3">
              {labels.keyBenefitsTitle}
            </h2>
            <p className="text-xs sm:text-sm text-primary/70 max-w-2xl mx-auto">
              {labels.keyBenefitsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.benefits.map((b, idx) => {
              const Icon = benefitIcons[idx % benefitIcons.length];
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-3xl bg-white border border-primary/10 shadow-sm hover:shadow-lg transition-all flex flex-col items-center text-center group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary text-accent flex items-center justify-center shrink-0 mb-4 shadow-sm group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold font-serif text-primary mb-2">
                    {b.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-primary/70 leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. PRODUCT DETAILS and HERITAGE STORY (2 Columns) */}
      <section className="py-20 md:py-28 bg-white border-y border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Product Details Table (5 cols) */}
            <div className="lg:col-span-5">
              <h3 className="text-2xl font-bold font-serif text-primary mb-6">
                {labels.productDetailsTitle}
              </h3>
              <div className="bg-[#FAF8F3] rounded-3xl p-5 sm:p-6 border border-primary/10 flex flex-col gap-3">
                {specRows.map((row, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-white border border-primary/5 flex items-start gap-3.5 shadow-2xs"
                  >
                    <div className="w-7 h-7 rounded-full bg-primary text-cream flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {row.code}
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[11px] uppercase tracking-wider text-primary/60 font-bold block mb-0.5">
                        {row.label}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-primary/90 break-words">
                        {row.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Heritage and Production Story (7 cols) */}
            <div className="lg:col-span-7 flex flex-col items-start text-start">
              <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-accent mb-2 block">
                {product.story.tag}
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-primary mb-6 leading-tight">
                {product.story.title}
              </h3>
              <div className="space-y-4 text-sm sm:text-base text-primary/80 leading-relaxed mb-8">
                {product.story.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-xs sm:text-sm text-cream bg-primary hover:bg-accent hover:text-primary transition-all shadow-md"
              >
                <span>{labels.requestCoA}</span>
                <ArrowRight className={`w-3.5 h-3.5 ${locale === "ar" ? "rotate-180" : ""}`} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOW TO USE SECTION (Warm Sand background, 4 Step Cards) */}
      <section className="py-20 md:py-28 bg-[#F8F6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-accent mb-2 block">
              {labels.howToUseTag}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-primary mb-3">
              {labels.howToUseTitle}
            </h2>
            <p className="text-xs sm:text-sm text-primary/70 max-w-xl mx-auto">
              {labels.howToUseSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.howToUse.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-primary/10 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl sm:text-4xl font-bold font-serif text-accent block mb-3 opacity-90">
                    {step.step}
                  </span>
                  <h3 className="text-base font-bold font-serif text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-primary/70 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TEXTURE and QUALITY SHOWCASE (3 Visual Images) */}
      <section className="py-20 md:py-28 bg-white border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-primary mb-2">
              {product.title.split(" ")[0]} {product.title.split(" ")[1] || ""} — {labels.textureTitle}
            </h2>
            <p className="text-xs sm:text-sm text-primary/70">
              {labels.textureSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {product.textureImages.map((img, idx) => (
              <div
                key={idx}
                className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-md border border-primary/10 group bg-sand/30"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS (Accordion) */}
      <section className="py-20 md:py-28 bg-[#FAF8F3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-primary">
              {labels.faqsTitle}
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {product.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                    isOpen
                      ? "bg-primary text-white border-primary shadow-lg"
                      : "bg-white text-primary border-primary/10 hover:border-accent/40 shadow-sm"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-start flex items-center justify-between gap-4 font-bold text-sm sm:text-base focus:outline-none"
                  >
                    <span className="leading-snug">{faq.q}</span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? "bg-white/20 text-white rotate-180"
                          : "bg-sand text-primary"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-cream/90 leading-relaxed font-light border-t border-white/10">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. LUXURY BRAND BANNER CTA */}
      <section className="py-16 md:py-20 bg-primary text-cream relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white mb-3">
            {labels.ctaBannerTitle}
          </h2>
          <p className="text-sm sm:text-base text-cream/80 max-w-2xl mx-auto mb-8 font-light">
            {labels.ctaBannerSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href={`/${locale}/contact`}
              className="px-8 py-3.5 rounded-full font-bold text-sm sm:text-base bg-white text-primary hover:bg-cream transition-all shadow-lg"
            >
              {labels.requestQuote}
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm sm:text-base bg-accent text-primary hover:bg-cream transition-all shadow-lg"
            >
              <FaWhatsapp className="w-4 h-4 text-primary" />
              <span>{labels.orderWhatsApp}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 9. RELATED PRODUCTS */}
      {relatedProducts.length > 0 && (
        <section className="py-20 md:py-24 bg-white border-t border-primary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-primary">
                {labels.relatedTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((rel) => (
                <div
                  key={rel.slug}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-primary/10 flex flex-col group transition-all"
                >
                  <Link href={`/${locale}/products/${rel.slug}`} className="relative aspect-[4/3] w-full overflow-hidden bg-sand/40 block">
                    <Image
                      src={rel.image}
                      alt={rel.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </Link>
                  <div className="p-6 flex-grow flex flex-col justify-between items-start text-start">
                    <div>
                      <h3 className="text-base font-bold text-primary font-serif mb-2 line-clamp-1 group-hover:text-accent transition-colors">
                        <Link href={`/${locale}/products/${rel.slug}`}>
                          {rel.title}
                        </Link>
                      </h3>
                      <p className="text-xs text-primary/70 line-clamp-2 leading-relaxed">
                        {rel.shortDesc}
                      </p>
                    </div>

                    <div className="w-full pt-4 mt-4 border-t border-primary/10 flex items-center justify-between">
                      <Link
                        href={`/${locale}/products/${rel.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-accent transition-colors"
                      >
                        <span>{labels.viewDetails}</span>
                        <ArrowRight className={`w-3.5 h-3.5 ${locale === "ar" ? "rotate-180" : ""}`} />
                      </Link>
                      <span className="text-[11px] font-semibold text-primary/50 uppercase">
                        Wholesale
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
