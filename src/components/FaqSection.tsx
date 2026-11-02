"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";

export default function FaqSection() {
  const { locale } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const content = {
    badge:
      locale === "fr"
        ? "QUESTIONS FRÉQUENTES"
        : locale === "ar"
        ? "الأسئلة الشائعة"
        : "HELP AND SUPPORT",
    title:
      locale === "fr"
        ? "Questions Fréquentes pour Professionnels"
        : locale === "ar"
        ? "الأسئلة الشائعة للشركات والطلبات"
        : "Popular FAQs for Your Business",
    faqs: [
      {
        q:
          locale === "fr"
            ? "Quelle est la quantité minimale de commande (MOQ) ?"
            : locale === "ar"
            ? "ما هو الحد الأدنى لكمية الطلب (MOQ) بالجملة وللعلامة الخاصة؟"
            : "What is your Minimum Order Quantity (MOQ)?",
        a:
          locale === "fr"
            ? "Pour les huiles en vrac (argan, figue de barbarie), notre MOQ commence à 5 litres ou 25 kg pour les seaux de savon noir et argile. Pour les créations en marque blanche avec flaconnage et étiquetage personnalisés, notre MOQ débute à partir de 200 à 500 unités selon le type de contenant."
            : locale === "ar"
            ? "بالنسبة للزيوت السائبة (الأركان، التين الشوكي)، يبدأ الحد الأدنى للطلب من 5 لترات، أو 25 كغ لبراميل الصابون البلدي والغاسول. أما بالنسبة لخدمات العلامة الخاصة وتعبئة العبوات المخصصة، فيبدأ الحد الأدنى من 200 إلى 500 عبوة بحسب نوع الزجاجة."
            : "For bulk oils (argan, prickly pear), our MOQ starts at just 5 liters, and 25 kg for black soap and clay tubs. For custom private label formulations with custom branding and packaging, our MOQ starts from 200 to 500 units per reference depending on the bottle or container format.",
      },
      {
        q:
          locale === "fr"
            ? "Fournissez-vous des Certificats d'Analyse (CoA) et Fiches de Sécurité (FDS) ?"
            : locale === "ar"
            ? "هل تقدمون شهادات التحليل المخبري (CoA) وملفات السلامة (MSDS)؟"
            : "Do you provide Certificates of Analysis (CoA) and SDS documentation?",
      a:
        locale === "fr"
          ? "Oui, absolument. Chaque lot exporté est systématiquement accompagné de son Certificat d'Analyse (CoA), de sa Fiche de Données de Sécurité (FDS/MSDS), ainsi que des attestations de conformité ISO 22716 et ECOCERT Biologique pour garantir un passage en douane fluide."
          : locale === "ar"
          ? "نعم، بالتأكيد. كل شحنة نصدرها تكون مرفقة بشهادة فحص وتحليل مخبري (CoA)، وملف بيانات السلامة (SDS/MSDS)، بالإضافة إلى شهادات الجودة ISO 22716 والشهادة العضوية ECOCERT لضمان التخليص الجمركي الفوري."
          : "Yes, absolutely. Every production batch exported is accompanied by a full Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and ISO 22716 / ECOCERT Organic compliance documentation to ensure hassle-free customs clearance and international regulatory approval.",
      },
      {
        q:
          locale === "fr"
            ? "Pouvez-vous personnaliser les flacons, étiquettes et emballages à notre logo ?"
            : locale === "ar"
            ? "هل يمكنكم تخصيص العبوات والملصقات وتصميم الشعار الخاص بنا؟"
            : "Can you customize packaging, labels, and bottles with our branding?",
        a:
          locale === "fr"
            ? "Oui. Notre service OEM/ODM prend en charge le choix des contenants (verre dépoli, verre ambré, aluminium, pots luxe), l'impression d'étiquettes étanches et la dorure à chaud, ainsi que la fabrication de boîtes pliantes sur-mesure prêtes pour la vente au détail."
            : locale === "ar"
            ? "نعم. توفر خدمة OEM/ODM لدينا كل ما يلزم: اختيار العبوات الفاخرة (زجاج مثلج، زجاج كهرماني، ألمنيوم، برطمانات فاخرة)، طباعة الملصقات المقاومة للماء، الطباعة المباشرة، وتصميم الكراتين الخارجية الجاهزة للرفوف التجارية."
            : "Yes. Our turnkey OEM/ODM department offers complete customization: premium frosted or amber glass dropper bottles, luxury jars, aluminum canisters, waterproof cosmetic labels, hot-foil stamping, and bespoke outer cartons ready for retail shelves.",
      },
      {
        q:
          locale === "fr"
            ? "Quels sont les délais et les transporteurs pour l'expédition internationale ?"
            : locale === "ar"
            ? "ما هي مدة الشحن الدولي والشركات الناقلة المعتمدة؟"
            : "What are your international shipping times and carrier options?",
        a:
          locale === "fr"
            ? "Nous expédions par DHL Express, FedEx et Aramex pour les livraisons rapides par avion (3 à 6 jours ouvrés dans le monde entier avec suivi en direct). Pour les commandes industrielles en grands volumes ou conteneurs maritimes, nous organisons le fret maritime ou aérien dédié."
            : locale === "ar"
            ? "نشحن عبر DHL Express و FedEx و Aramex للشحن الجوي السريع (خلال 3 إلى 6 أيام عمل مع رقم تتبع فوري حتى باب مستودعكم). أما بالنسبة للكميات الصناعية الكبيرة أو الحاويات، فننسق الشحن البحري والجوي التجاري."
            : "We partner with DHL Express, FedEx, and Aramex for express air shipping (3 to 6 business days worldwide with real-time tracking directly to your door). For industrial bulk container orders, we arrange dedicated air and sea freight with full customs documentation.",
      },
      {
        q:
          locale === "fr"
            ? "Est-il possible de commander des échantillons avant de commander en gros ?"
            : locale === "ar"
            ? "هل يمكننا طلب عينات تجريبية قبل الالتزام بطلبية كبيرة؟"
            : "Can we order product samples before committing to large volumes?",
        a:
          locale === "fr"
            ? "Oui, nous encourageons vivement nos futurs partenaires à tester nos produits. Nous proposons des kits d'échantillons personnalisés (huile d'argan, figue de barbarie, savon noir, eaux florales) expédiés en express sous 48 à 72 heures."
            : locale === "ar"
            ? "نعم بالتأكيد، نحن نشجع عملاءنا الجدد على فحص جودتنا أولاً. نوفر مجموعات عينات مخصصة (زيت أركان، زيت صبار، صابون أسود، غاسول، مياه مقطرة) يتم شحنها في غضون 48 إلى 72 ساعة."
            : "Yes, we encourage prospective wholesale clients and brands to evaluate our quality firsthand. We provide sample discovery kits (argan oil, cactus oil, black soap, floral waters, and clays) dispatched via express courier within 48 to 72 hours.",
      },
      {
        q:
          locale === "fr"
            ? "Comment vos huiles et ingrédients botaniques sont-ils extraits ?"
            : locale === "ar"
            ? "كيف تتم عملية عصر واستخلاص الزيوت والمكونات النباتية؟"
            : "How are your argan oil and botanical ingredients extracted?",
        a:
          locale === "fr"
            ? "Toutes nos huiles précieuses sont 100% extraites par première pression mécanique à froid en dessous de 40°C, sans aucun solvant ni traitement chimique. Nos eaux florales sont obtenues par distillation artisanale à la vapeur de fleurs fraîches cueillies à l'aube."
            : locale === "ar"
            ? "تُستخلص جميع زيوتنا التجميلية الثمينة بواسطة العصر الميكانيكي الأول على البارد بدرجة حرارة أقل من 40 درجة مئوية، بدون أي مذيبات أو معالجات كيميائية. كما تُقطر مياه الأزهار بالبخار التقليدي من أزهار طازجة مقطوفة عند الفجر."
            : "All our precious cosmetic oils are 100% first mechanically cold-pressed below 40°C with zero chemical solvents or refining agents, preserving their maximum concentration of native tocopherols and fatty acids. Our floral waters are distilled via traditional steam hydro-distillation of fresh petals.",
      },
    ],
  };

  return (
    <section className="py-20 md:py-28 bg-[#FAF8F3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-accent mb-3 block">
            {content.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-primary">
            {content.title}
          </h2>
        </div>

        {/* 2-Column FAQ Layout (Independent columns to prevent row-expansion gaps) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-start">
          {/* Left Column (0, 2, 4) */}
          <div className="flex flex-col gap-4 sm:gap-6">
            {content.faqs
              .map((faq, idx) => ({ faq, idx }))
              .filter(({ idx }) => idx % 2 === 0)
              .map(({ faq, idx }) => {
                const isOpen = openIndex === idx;
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
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
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

          {/* Right Column (1, 3, 5) */}
          <div className="flex flex-col gap-4 sm:gap-6">
            {content.faqs
              .map((faq, idx) => ({ faq, idx }))
              .filter(({ idx }) => idx % 2 !== 0)
              .map(({ faq, idx }) => {
                const isOpen = openIndex === idx;
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
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
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
      </div>
    </section>
  );
}

