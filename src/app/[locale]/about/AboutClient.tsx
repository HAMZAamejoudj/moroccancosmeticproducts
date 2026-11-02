"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/context/LanguageContext";
import {
  ShieldCheck,
  Leaf,
  Users,
  Globe,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Calendar,
  Award,
  Clock,
  TrendingUp,
} from "lucide-react";

export default function AboutClient() {
  const { locale } = useTranslation();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const t = {
    en: {
      breadcrumbHome: "Home",
      breadcrumbAbout: "About Us",
      heroTitle: "About Us",

      whoBadge: "Heritage and Tradition",
      whoTitle: "Who We Are",
      whoP1:
        "Moroccan Cosmetic Products is a leading wholesale exporter and manufacturer of certified organic beauty products. Located in Agadir, the heart of argan country, we work directly with certified women's cooperatives, eco-certified laboratories, and global logistics partners to deliver pure, effective cosmetic ingredients to businesses worldwide.",
      whoP2:
        "Our team combines deep ancestral knowledge of regional botanical specialties with stringent ISO 22716 and GMP European cosmetic manufacturing standards.",

      storyBadge: "Authentic and Pure",
      storyTitle: "Our Story",
      storyP1:
        "We're more than just a supplier — we're custodians of Moroccan heritage. From sustainable harvest to finished cosmetic formula to wholesale export drum, our products are handcrafted with care, ritual tradition, and absolute respect for nature.",
      storyP2:
        "Every bottle tells a story: of ancient Berber beauty wisdom, of uncompromising purity, and of building transparent, long-term relationships with cosmetic brands, spas, and retailers across the globe.",

      milestonesBadge: "Our Journey Through Time",
      milestonesTitle: "Milestones",
      milestones: [
        {
          year: "2015",
          title: "Founded in Marrakech",
          desc: "Started with 3 pure argan oil specialties and a clear mission: bring authentic Moroccan organic beauty to global brands.",
        },
        {
          year: "2018",
          title: "ECOCERT and USDA Organic Certification",
          desc: "Achieved full international organic certifications, solidifying our strict commitment to pesticide-free, cold-pressed purity.",
        },
        {
          year: "2021",
          title: "Women's Cooperative Initiative",
          desc: "Expanded direct partnerships to over 20 rural harvesting and kernel-pressing women's cooperatives across the Souss-Massa region.",
        },
        {
          year: "2023",
          title: "Sustainable Packaging and Bulk Expansion",
          desc: "Fully transitioned to recyclable materials, industrial IBC containers, and eco-certified sea and air freight practices.",
        },
        {
          year: "2026",
          title: "Global Turnkey OEM/ODM Network",
          desc: "Now serving over 50 countries with turnkey private label branding, low MOQs, and certified laboratory documentation.",
        },
      ],

      valuesBadge: "Our Values",
      valuesTitle: "What We Stand For",
      values: [
        {
          icon: ShieldCheck,
          title: "Quality",
          desc: "Every batch is lab-tested with Certificate of Analysis (CoA), SDS, and complete traceability from seed harvest to export customs.",
        },
        {
          icon: Leaf,
          title: "Sustainability",
          desc: "Zero-waste harvesting, solvent-free cold extraction, recyclable packaging, and minimal carbon footprint throughout production.",
        },
        {
          icon: Users,
          title: "Community",
          desc: "Fair-trade wages, educational initiatives, and sustainable economic autonomy for hundreds of indigenous Berber women artisans.",
        },
        {
          icon: Globe,
          title: "Global Reach",
          desc: "Door-to-door express shipping to 50+ countries with complete customs clearance support, bulk drums, and retail packaging.",
        },
      ],

      numbersTitle: "By the Numbers",
      numbers: [
        { value: "100%", label: "Organic Certified" },
        { value: "50+", label: "Countries Served" },
        { value: "20+", label: "Partner Cooperatives" },
        { value: "24/7", label: "Dedicated B2B Support" },
      ],

      faqBadge: "Got Questions?",
      faqTitle: "Popular FAQs for Your Business",
      faqs: [
        {
          q: "Are your products really 100% organic?",
          a: "Yes. All our botanical products are 100% pure, natural, and certified organic (ECOCERT / USDA compliant) without synthetic preservatives, parabens, phthalates, artificial perfumes, or mineral oil dilution.",
        },
        {
          q: "Are your products licensed for international import and export?",
          a: "Yes. Every export shipment is accompanied by a full technical dossier: Certificate of Analysis (CoA), Safety Data Sheet (SDS), Phytosanitary certificate, and Certificate of Origin, ensuring smooth customs clearance across the EU, US, UK, Canada, and GCC countries.",
        },
        {
          q: "Do you offer private label and custom branding?",
          a: "Absolutely. We provide full-service OEM/ODM private label solutions starting at just 50 to 100 units. We handle bottle sourcing, screen printing, custom label design, boxed packaging, and filling under ISO 22716 GMP standards.",
        },
        {
          q: "Who do you work with?",
          a: "We partner with indie beauty brands, Amazon and TikTok Shop e-commerce entrepreneurs, luxury hotel day spas, cosmetic laboratories, and wholesale distributors worldwide.",
        },
        {
          q: "What's the minimum order to buy wholesale?",
          a: "Our bulk oil MOQs start at just 5 liters, and our private label ready-to-sell cosmetic ranges start at 50 units per SKU, allowing small businesses to test the market with minimal inventory risk.",
        },
        {
          q: "How long does it take to produce and ship?",
          a: "Bulk stock orders ship within 2 to 4 business days. Custom private label orders with personalized branding typically take 10 to 14 business days from artwork approval. Air express delivery takes 3 to 5 business days worldwide.",
        },
        {
          q: "Do you ship internationally?",
          a: "Yes, we ship globally via DHL Express, FedEx, UPS, and reliable pallet air and sea freight. We deliver door-to-door with complete tracking and customs clearance support.",
        },
        {
          q: "What makes your Moroccan products special?",
          a: "Our products are ethically sourced directly from their indigenous biospheres in Morocco: pure argan from Agadir/Essaouira, ghassoul clay from the Atlas Mountains, and rose water from Kelaat M'gouna, ensuring unmatched freshness and potency.",
        },
        {
          q: "Can I order samples before buying in bulk?",
          a: "Yes. We offer sample kits for all our core ingredients (Argan Oil, Prickly Pear Seed Oil, Black Soap, Ghassoul, Nila, Rose Water) so your formulation team can inspect texture, aroma, and efficacy prior to placing commercial orders.",
        },
        {
          q: "Can I mix different products in one wholesale order?",
          a: "Yes. You can consolidate multiple products, sizes, and private label SKUs into a single combined shipment to optimize your shipping freight costs.",
        },
      ],

      partnerTitle: "Partner With Us",
      partnerSubtitle:
        "Ready to source premium organic Moroccan cosmetics for your brand? Let's talk.",
      partnerButton: "Connect With Us Today",
    },

    fr: {
      breadcrumbHome: "Accueil",
      breadcrumbAbout: "À Propos",
      heroTitle: "À Propos de Nous",

      whoBadge: "Héritage et Savoir-faire",
      whoTitle: "Qui Sommes-Nous",
      whoP1:
        "Moroccan Cosmetic Products est un exportateur et fabricant grossiste leader de produits de beauté biologiques certifiés. Situés à Agadir, au cœur de la région de l'arganier, nous collaborons directement avec les coopératives de femmes, les laboratoires certifiés et les transporteurs internationaux pour livrer des ingrédients cosmétiques purs aux entreprises du monde entier.",
      whoP2:
        "Notre équipe associe la maîtrise des traditions botaniques ancestrales aux normes européennes de fabrication cosmétique les plus rigoureuses (ISO 22716 et BPF).",

      storyBadge: "Authenticité et Pureté",
      storyTitle: "Notre Histoire",
      storyP1:
        "Nous sommes bien plus qu'un simple fournisseur : nous sommes les gardiens du patrimoine cosmétique marocain. De la récolte sauvage au flacon fini ou au fût industriel, nos produits sont façonnés avec passion, tradition et respect de la nature.",
      storyP2:
        "Chaque flacon raconte une histoire : celle des rituels berbères ancestraux, d'une pureté sans compromis et de relations de confiance durables nouées avec des marques et des spas aux quatre coins du monde.",

      milestonesBadge: "Notre Parcours à Travers le Temps",
      milestonesTitle: "Nos Grandes Étapes",
      milestones: [
        {
          year: "2015",
          title: "Fondation à Marrakech",
          desc: "Lancement avec 3 spécialités d'huile d'argan pure et une mission claire : faire rayonner la beauté marocaine authentique auprès des professionnels.",
        },
        {
          year: "2018",
          title: "Certification Bio ECOCERT and USDA",
          desc: "Obtention des certifications biologiques internationales, garantissant une pureté absolue sans solvants ni pesticides.",
        },
        {
          year: "2021",
          title: "Initiative Coopératives Féminines",
          desc: "Partenariat direct étendu à plus de 20 coopératives rurales de concassage et pressage dans le Souss-Massa.",
        },
        {
          year: "2023",
          title: "Transition Emballages Écoresponsables",
          desc: "Adoption d'emballages recyclables, conteneurs IBC industriels et protocoles de fret maritime et aérien optimisés.",
        },
        {
          year: "2026",
          title: "Réseau Export et Marque Blanche Clé en Main",
          desc: "Plus de 50 pays approvisionnés avec des solutions de marque blanche complètes, des faibles MOQ et des dossiers réglementaires clés en main.",
        },
      ],

      valuesBadge: "Nos Valeurs",
      valuesTitle: "Ce Qui Nous Guide",
      values: [
        {
          icon: ShieldCheck,
          title: "Qualité",
          desc: "Chaque lot est analysé en laboratoire avec Certificat d'Analyse (CoA), FDS et traçabilité intégrale de la graine à l'export.",
        },
        {
          icon: Leaf,
          title: "Durabilité",
          desc: "Extraction mécanique à froid sans solvants, valorisation zéro déchet des résidus et packaging recyclable respectueux de l'environnement.",
        },
        {
          icon: Users,
          title: "Communauté",
          desc: "Rémunération équitable et autonomisation économique pérenne de centaines de femmes artisanes berbères en milieu rural.",
        },
        {
          icon: Globe,
          title: "Rayonnement Mondial",
          desc: "Expéditions express porte-à-porte dans plus de 50 pays avec conformité douanière, fûts en vrac et produits finis.",
        },
      ],

      numbersTitle: "En Quelques Chiffres",
      numbers: [
        { value: "100%", label: "Certifié Biologique" },
        { value: "50+", label: "Pays Desservis" },
        { value: "20+", label: "Coopératives Partenaires" },
        { value: "24/7", label: "Support B2B Dédié" },
      ],

      faqBadge: "Des Questions ?",
      faqTitle: "Questions Fréquentes pour Votre Entreprise",
      faqs: [
        {
          q: "Vos produits sont-ils réellement 100% biologiques ?",
          a: "Oui. Tous nos produits sont 100% purs, naturels et conformes aux référentiels biologiques (ECOCERT / USDA), sans aucun parabène, conservateur synthétique, parfum artificiel ou huile minérale.",
        },
        {
          q: "Vos produits sont-ils certifiés pour l'import-export international ?",
          a: "Oui. Chaque commande export est accompagnée d'un dossier complet : Certificat d'Analyse (CoA), Fiche de Données de Sécurité (FDS), certificat phytosanitaire et certificat d'origine pour un dédouanement fluide en Europe, USA, Canada et pays du Golfe.",
        },
        {
          q: "Proposez-vous la marque blanche (Private Label) personnalisée ?",
          a: "Absolument. Nous offrons un service OEM/ODM clé en main à partir de 50 à 100 unités par produit : choix des contenants, sérigraphie, conception graphique des étiquettes et conditionnement sous norme ISO 22716 BPF.",
        },
        {
          q: "Avec quel type de clients travaillez-vous ?",
          a: "Nous collaborons avec des marques de cosmétiques émergentes, des vendeurs e-commerce (Shopify, Amazon, TikTok Shop), des spas d'hôtels de luxe, des salons et des distributeurs grossistes.",
        },
        {
          q: "Quel est le minimum de commande (MOQ) en gros ?",
          a: "Pour les huiles en vrac, le MOQ commence dès 5 litres. Pour les produits finis en marque blanche, le minimum démarre dès 50 pièces pour permettre de tester le marché avec un investissement maîtrisé.",
        },
        {
          q: "Quels sont les délais de fabrication et d'expédition ?",
          a: "Les commandes d'ingrédients en stock sont expédiées sous 2 à 4 jours ouvrés. Les productions personnalisées en marque blanche nécessitent 10 à 14 jours ouvrés. La livraison express aérienne prend ensuite 3 à 5 jours ouvrés.",
        },
        {
          q: "Livrez-vous à l'international ?",
          a: "Oui, nous expédions dans le monde entier via DHL Express, FedEx, UPS ainsi que par fret aérien et maritime sur palettes avec suivi en direct jusqu'à vos locaux.",
        },
        {
          q: "Qu'est-ce qui rend vos cosmétiques marocains uniques ?",
          a: "Nos ingrédients sont récoltés directement dans leur biosphère d'origine au Maroc : l'argan à Agadir/Essaouira, l'argile rhassoul dans le Moyen Atlas et l'eau de rose à Kelaat M'gouna, garantissant une fraîcheur et une teneur en actifs exceptionnelles.",
        },
        {
          q: "Puis-je commander des échantillons avant un achat en gros ?",
          a: "Oui. Nous mettons à votre disposition des kits d'échantillons pour tous nos produits phares afin de valider la texture, le parfum naturel et l'efficacité avant de valider votre commande commerciale.",
        },
        {
          q: "Puis-je combiner plusieurs produits dans une même commande en gros ?",
          a: "Oui. Vous pouvez regrouper différents formats, huiles, savons et accessoires dans un seul envoi pour optimiser vos coûts de transport.",
        },
      ],

      partnerTitle: "Devenez Partenaire",
      partnerSubtitle:
        "Prêt à vous approvisionner en cosmétiques marocains bio d'excellence pour votre marque ? Échangeons dès aujourd'hui.",
      partnerButton: "Contactez-Nous Aujourd'hui",
    },

    ar: {
      breadcrumbHome: "الرئيسية",
      breadcrumbAbout: "من نحن",
      heroTitle: "من نحن",

      whoBadge: "أصالة وتراث عريق",
      whoTitle: "من نحن",
      whoP1:
        "شركة Moroccan Cosmetic Products هي مصدّر ومصنع رائد بالجملة لمنتجات التجميل الطبيعية والعضوية المعتمدة. من مقرنا في مدينة أكادير، عاصمة شجرة الأركان، نعمل مباشرة مع التعاونيات النسوية، والمختبرات المرخصة، وشركات الشحن الدولية لتوريد مكونات تجميلية نقية للشركات حول العالم.",
      whoP2:
        "يجمع فريقنا بين المعرفة المتوارثة بالنباتات والزيوت المغربية النادرة وأعلى معايير التصنيع التجميلي الأوروبي المعتمدة (ISO 22716 و GMP).",

      storyBadge: "أصالة ونقاء استثنائي",
      storyTitle: "قصتنا",
      storyP1:
        "نحن أكثر من مجرد مورد — نحن مؤتمنون على التراث التجميلي المغربي الأصيل. من قطف الثمار حتى التعبئة النهائية والتصدير بالجملة، تُصنع منتجاتنا بعناية فائقة وتقاليد متوارثة مع احترام تام للبيئة.",
      storyP2:
        "تروي كل قارورة قصة فريدة: أسرار الجمال الأمازيغي العريق، النقاء غير القابل للمساومة، وبناء علاقات شراكة طويلة الأمد مع أرقى العلامات التجارية ومراكز السبا في أكثر من 50 دولة.",

      milestonesBadge: "مسيرتنا عبر الزمن",
      milestonesTitle: "محطاتنا البارزة",
      milestones: [
        {
          year: "2015",
          title: "التأسيس في مراكش",
          desc: "البداية بـ 3 منتجات نقية من زيت الأركان ورؤية واضحة: إيصال الجمال المغربي الطبيعي الأصيل إلى رواد الأعمال في العالم.",
        },
        {
          year: "2018",
          title: "شهادات العضوية ECOCERT و USDA",
          desc: "الحصول على شهادات الجودة العضوية الدولية، تأكيداً لالتزامنا بالعصر البارد الخالي تماماً من المبيدات والمواد الكيميائية.",
        },
        {
          year: "2021",
          title: "مبادرة التعاونيات النسوية",
          desc: "توسيع الشراكة المباشرة لتشمل أكثر من 20 تعاونية نسوية متخصصة في جني وتكسير ثمار الأركان في منطقة سوس ماسة.",
        },
        {
          year: "2023",
          title: "اعتماد التغليف المستدام وتوسيع الجملة",
          desc: "الانتقال الكامل إلى مواد تعبئة قابلة لإعادة التدوير، خزانات الشحن الصناعية IBC، وبروتوكولات الشحن الصديقة للبيئة.",
        },
        {
          year: "2026",
          title: "شبكة تصدير عالمية وعلامة خاصة متكاملة",
          desc: "خدمة أكثر من 50 دولة بحلول متكاملة للعلامات الخاصة (OEM/ODM)، وحد أدنى منخفض للطلب، وشهادات مخبرية معتمدة.",
        },
      ],

      valuesBadge: "قيمنا الأساسية",
      valuesTitle: "مبادئنا وقيمنا",
      values: [
        {
          icon: ShieldCheck,
          title: "الجودة العالية",
          desc: "فحص مخبري دقيق لكل شحنة مع شهادة التحليل (CoA)، ووثيقة السلامة (SDS)، وتتبع كامل من الشجرة حتى مستودعك.",
        },
        {
          icon: Leaf,
          title: "الاستدامة البيئية",
          desc: "حصاد عضوي مستدام، عصر ميكانيكي بارد خالٍ من المذيبات، واستغلال صديق للبيئة لكافة مخلفات العصر.",
        },
        {
          icon: Users,
          title: "دعم المجتمع المحلي",
          desc: "ضمان دخل عادل ومستقر لمئات النساء في التعاونيات القروية وتمكينهن اقتصادياً واجتماعياً.",
        },
        {
          icon: Globe,
          title: "وصول عالمي موثوق",
          desc: "شحن سريع حتى باب المستودع لأكثر من 50 دولة مع دعم كامل للتخليص الجمركي وإجراءات الاستيراد.",
        },
      ],

      numbersTitle: "أرقامنا تتحدث",
      numbers: [
        { value: "100%", label: "عضوي ومعتمد" },
        { value: "+50", label: "دولة حول العالم" },
        { value: "+20", label: "تعاونية شريكة" },
        { value: "24/7", label: "دعم مخصص للأعمال" },
      ],

      faqBadge: "هل لديك استفسارات؟",
      faqTitle: "الأسئلة الشائعة لشركائنا التجاريين",
      faqs: [
        {
          q: "هل منتجاتكم عضوية وطبيعية 100٪ بالفعل؟",
          a: "نعم بكل تأكيد. جميع زيوتنا ومستحضراتنا نقية وعضوية 100٪ معتمدة بشهادات دولية (ECOCERT وUSDA)، وخالية تماماً من البارابين، الزيوت المعدنية، العطور الاصطناعية أو أي إضافات كيميائية.",
        },
        {
          q: "هل منتجاتكم مرخصة ومعتمدة للتصدير والاستيراد الدولي؟",
          a: "نعم. ترافق كل شحنة تصدير حزمة وثائق كاملة: شهادة التحليل المخبري (CoA)، صحيفة بيانات السلامة (SDS)، الشهادة الصحية الزراعية، وشهادة المنشأ الرسمية لتسهيل التخليص الجمركي في دول الخليج، أوروبا، وأمريكا.",
        },
        {
          q: "هل تقدمون خدمات العلامة الخاصة (Private Label) وتصميم الشعار؟",
          a: "نعم بالتأكيد. نوفر خدمة متكاملة لتصنيع علامتك التجارية الخاصة ابتداءً من 50 إلى 100 قطعة فقط: اختيار العبوات، الطباعة الحرارية، تصميم الملصقات، والتعبئة وفق معايير الجودة الأوروبية ISO 22716.",
        },
        {
          q: "من هم عملاؤكم المستهدفون؟",
          a: "نعمل مع رواد الأعمال في التجارة الإلكترونية (Shopify وAmazon وTikTok Shop)، مراكز السبا الفاخرة، مشاغل التجميل، وموزعي الجملة حول العالم.",
        },
        {
          q: "ما هو الحد الأدنى للطلب (MOQ) بالجملة؟",
          a: "يبدأ الحد الأدنى للزيوت السائبة من 5 لترات فقط، وللمنتجات المعبأة بالعلامة الخاصة من 50 قطعة لكل صنف، مما يتيح لك بدء مشروعك بأقل تكلفة ومخاطرة استثمارية.",
        },
        {
          q: "كم تستغرق مدة الإنتاج والشحن؟",
          a: "الطلبات الجاهزة من الزيوت والمواد الأولية تُشحن خلال 2 إلى 4 أيام عمل. طلبات العلامة الخاصة تتطلب بين 10 إلى 14 يوم عمل. الشحن الجوي السريع يستغرق من 3 إلى 5 أيام عمل فقط.",
        },
        {
          q: "هل تقومون بالشحن الدولي لكافة الدول؟",
          a: "نعم، نشحن لجميع أنحاء العالم عبر DHL Express وFedEx وUPS، بالإضافة إلى الشحن الجوي والبحري للحاويات والمنصات الخشبية مع تتبع مباشر.",
        },
        {
          q: "ما الذي يميز منتجاتكم المغربية عن غيرها؟",
          a: "منتجاتنا تُستخلص مباشرة من مواطنها الأصلية في المغرب: زيت الأركان من سوس وأكادير، طين الغاسول من جبال الأطلس، وماء الورد من قلعة مكونة، مما يضمن أعلى نسبة تركيز ونضارة للزيوت.",
        },
        {
          q: "هل يمكنني طلب عينات قبل الشراء بكميات تجارية كبيرة؟",
          a: "نعم نوفر باقات عينات مخصصة لجميع منتجاتنا الأساسية (الأركان، التين الشوكي، الصابون البلدي، الغاسول، النيلة، ماء الورد) لتتمكن من فحص الرائحة والقوام والفعالية قبل إتمام الطلب الكبير.",
        },
        {
          q: "هل يمكنني دمج عدة منتجات مختلفة في طلبية جملة واحدة؟",
          a: "نعم بالتأكيد. يمكنك دمج أحجام ومنتجات مختلفة من الزيوت ومستحضرات الحمام والعناية في شحنة واحدة لتوفير تكاليف النقل والشحن الدولي.",
        },
      ],

      partnerTitle: "ابدأ شراكتك معنا اليوم",
      partnerSubtitle:
        "مستعد لتوريد أرقى مستحضرات التجميل المغربية العضوية لعلامتك التجارية؟ دعنا نبدأ الآن.",
      partnerButton: "تواصل مع فريقنا اليوم",
    },
  }[locale] || {
    breadcrumbHome: "Home",
    breadcrumbAbout: "About Us",
    heroTitle: "About Us",
    whoBadge: "Heritage and Tradition",
    whoTitle: "Who We Are",
    whoP1:
      "Moroccan Cosmetic Products is a leading wholesale exporter and manufacturer of certified organic beauty products. Located in Agadir, the heart of argan country, we work directly with certified women's cooperatives, eco-certified laboratories, and global logistics partners to deliver pure, effective cosmetic ingredients to businesses worldwide.",
    whoP2:
      "Our team combines deep ancestral knowledge of regional botanical specialties with stringent ISO 22716 and GMP European cosmetic manufacturing standards.",
    storyBadge: "Authentic and Pure",
    storyTitle: "Our Story",
    storyP1:
      "We're more than just a supplier — we're custodians of Moroccan heritage. From sustainable harvest to finished cosmetic formula to wholesale export drum, our products are handcrafted with care, ritual tradition, and absolute respect for nature.",
    storyP2:
      "Every bottle tells a story: of ancient Berber beauty wisdom, of uncompromising purity, and of building transparent, long-term relationships with cosmetic brands, spas, and retailers across the globe.",
    milestonesBadge: "Our Journey Through Time",
    milestonesTitle: "Milestones",
    milestones: [
      {
        year: "2015",
        title: "Founded in Marrakech",
        desc: "Started with 3 pure argan oil specialties and a clear mission: bring authentic Moroccan organic beauty to global brands.",
      },
      {
        year: "2018",
        title: "ECOCERT and USDA Organic Certification",
        desc: "Achieved full international organic certifications, solidifying our strict commitment to pesticide-free, cold-pressed purity.",
      },
      {
        year: "2021",
        title: "Women's Cooperative Initiative",
        desc: "Expanded direct partnerships to over 20 rural harvesting and kernel-pressing women's cooperatives across the Souss-Massa region.",
      },
      {
        year: "2023",
        title: "Sustainable Packaging and Bulk Expansion",
        desc: "Fully transitioned to recyclable materials, industrial IBC containers, and eco-certified sea and air freight practices.",
      },
      {
        year: "2026",
        title: "Global Turnkey OEM/ODM Network",
        desc: "Now serving over 50 countries with turnkey private label branding, low MOQs, and certified laboratory documentation.",
      },
    ],
    valuesBadge: "Our Values",
    valuesTitle: "What We Stand For",
    values: [
      {
        icon: ShieldCheck,
        title: "Quality",
        desc: "Every batch is lab-tested with Certificate of Analysis (CoA), SDS, and complete traceability from seed harvest to export customs.",
      },
      {
        icon: Leaf,
        title: "Sustainability",
        desc: "Zero-waste harvesting, solvent-free cold extraction, recyclable packaging, and minimal carbon footprint throughout production.",
      },
      {
        icon: Users,
        title: "Community",
        desc: "Fair-trade wages, educational initiatives, and sustainable economic autonomy for hundreds of indigenous Berber women artisans.",
      },
      {
        icon: Globe,
        title: "Global Reach",
        desc: "Door-to-door express shipping to 50+ countries with complete customs clearance support, bulk drums, and retail packaging.",
      },
    ],
    numbersTitle: "By the Numbers",
    numbers: [
      { value: "100%", label: "Organic Certified" },
      { value: "50+", label: "Countries Served" },
      { value: "20+", label: "Partner Cooperatives" },
      { value: "24/7", label: "Dedicated B2B Support" },
    ],
    faqBadge: "Got Questions?",
    faqTitle: "Popular FAQs for Your Business",
    faqs: [
      {
        q: "Are your products really 100% organic?",
        a: "Yes. All our botanical products are 100% pure, natural, and certified organic (ECOCERT / USDA compliant) without synthetic preservatives, parabens, phthalates, artificial perfumes, or mineral oil dilution.",
      },
      {
        q: "Are your products licensed for international import and export?",
        a: "Yes. Every export shipment is accompanied by a full technical dossier: Certificate of Analysis (CoA), Safety Data Sheet (SDS), Phytosanitary certificate, and Certificate of Origin, ensuring smooth customs clearance across the EU, US, UK, Canada, and GCC countries.",
      },
      {
        q: "Do you offer private label and custom branding?",
        a: "Absolutely. We provide full-service OEM/ODM private label solutions starting at just 50 to 100 units. We handle bottle sourcing, screen printing, custom label design, boxed packaging, and filling under ISO 22716 GMP standards.",
      },
      {
        q: "Who do you work with?",
        a: "We partner with indie beauty brands, Amazon and TikTok Shop e-commerce entrepreneurs, luxury hotel day spas, cosmetic laboratories, and wholesale distributors worldwide.",
      },
      {
        q: "What's the minimum order to buy wholesale?",
        a: "Our bulk oil MOQs start at just 5 liters, and our private label ready-to-sell cosmetic ranges start at 50 units per SKU, allowing small businesses to test the market with minimal inventory risk.",
      },
      {
        q: "How long does it take to produce and ship?",
        a: "Bulk stock orders ship within 2 to 4 business days. Custom private label orders with personalized branding typically take 10 to 14 business days from artwork approval. Air express delivery takes 3 to 5 business days worldwide.",
      },
      {
        q: "Do you ship internationally?",
        a: "Yes, we ship globally via DHL Express, FedEx, UPS, and reliable pallet air and sea freight. We deliver door-to-door with complete tracking and customs clearance support.",
      },
      {
        q: "What makes your Moroccan products special?",
        a: "Our products are ethically sourced directly from their indigenous biospheres in Morocco: pure argan from Agadir/Essaouira, ghassoul clay from the Atlas Mountains, and rose water from Kelaat M'gouna, ensuring unmatched freshness and potency.",
      },
      {
        q: "Can I order samples before buying in bulk?",
        a: "Yes. We offer sample kits for all our core ingredients (Argan Oil, Prickly Pear Seed Oil, Black Soap, Ghassoul, Nila, Rose Water) so your formulation team can inspect texture, aroma, and efficacy prior to placing commercial orders.",
      },
      {
        q: "Can I mix different products in one wholesale order?",
        a: "Yes. You can consolidate multiple products, sizes, and private label SKUs into a single combined shipment to optimize your shipping freight costs.",
      },
    ],
    partnerTitle: "Partner With Us",
    partnerSubtitle:
      "Ready to source premium organic Moroccan cosmetics for your brand? Let's talk.",
    partnerButton: "Connect With Us Today",
  };

  return (
    <div className="bg-[#FAF8F3] text-primary min-h-screen">
      {/* 1. HERO HEADER (Dark Luxury Palette: Espresso and Amber Gold) */}
      <section className="bg-primary text-cream pt-32 pb-16 md:pt-36 md:pb-20 relative overflow-hidden">
        {/* Ambient gold glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-start">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center md:justify-start gap-2 text-xs font-semibold uppercase tracking-wider text-cream/70 mb-4">
            <Link href={`/${locale}`} className="hover:text-accent transition-colors">
              {t.breadcrumbHome}
            </Link>
            <span className="text-accent/60">/</span>
            <span className="text-accent">{t.breadcrumbAbout}</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white max-w-4xl leading-tight">
            {t.heroTitle}
          </h1>
        </div>
      </section>

      {/* 2. SECTION 1: WHO WE ARE (2 Columns: Text Left + Lab Image Right) */}
      <section className="py-20 md:py-28 bg-white border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content (7 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 flex flex-col items-start text-start"
            >
              <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-accent mb-3 block">
                {t.whoBadge}
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-primary mb-6 leading-tight">
                {t.whoTitle}
              </h2>

              <p className="text-sm sm:text-base text-primary/80 leading-relaxed mb-5 font-normal">
                {t.whoP1}
              </p>

              <p className="text-sm sm:text-base text-primary/75 leading-relaxed font-light">
                {t.whoP2}
              </p>
            </motion.div>

            {/* Right Image (5 cols) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative aspect-[4/3] sm:aspect-square w-full rounded-3xl overflow-hidden shadow-2xl border border-primary/10 bg-sand/30">
                <Image
                  src="/assets/img/moroccan-laboratory-packaging.webp"
                  alt="Moroccan cosmetics laboratory and formulation testing"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. SECTION 2: OUR STORY (2 Columns: Text Left + Cosmetics Mockup Image Right) */}
      <section className="py-20 md:py-28 bg-[#FAF8F3] border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content (7 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 flex flex-col items-start text-start"
            >
              <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-accent mb-3 block">
                {t.storyBadge}
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-primary mb-6 leading-tight">
                {t.storyTitle}
              </h2>

              <p className="text-sm sm:text-base text-primary/80 leading-relaxed mb-5 font-normal">
                {t.storyP1}
              </p>

              <p className="text-sm sm:text-base text-primary/75 leading-relaxed font-light">
                {t.storyP2}
              </p>
            </motion.div>

            {/* Right Image (5 cols) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative aspect-[4/3] sm:aspect-square w-full rounded-3xl overflow-hidden shadow-2xl border border-primary/10 bg-white">
                <Image
                  src="/image/cosmetic-argan-oil-handmade.webp"
                  alt="Moroccan organic cosmetic oils and private label bottles"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. SECTION 3: MILESTONES AND WHAT WE STAND FOR (2 Columns Layout) */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column (6 cols): Milestones Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 flex flex-col items-start text-start"
            >
              <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-accent mb-3 block">
                {t.milestonesBadge}
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-primary mb-8">
                {t.milestonesTitle}
              </h2>

              <div className="relative pl-6 sm:pl-8 border-l-2 border-primary/15 space-y-8 w-full">
                {t.milestones.map((m, idx) => (
                  <div key={idx} className="relative">
                    {/* Circle Dot Marker */}
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-accent border-4 border-white shadow-sm" />

                    <div className="flex items-center gap-3 mb-1.5">
                      <span className="px-3 py-0.5 rounded-full bg-primary text-accent text-xs font-bold tracking-wider">
                        {m.year}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold font-serif text-primary">
                        {m.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-primary/70 leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column (6 cols): What We Stand For (2x2 Cards) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="lg:col-span-6 flex flex-col items-start text-start"
            >
              <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-accent mb-3 block">
                {t.valuesBadge}
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-primary mb-8">
                {t.valuesTitle}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full">
                {t.values.map((val, idx) => {
                  const Icon = val.icon;
                  return (
                    <div
                      key={idx}
                      className="p-6 rounded-3xl bg-[#FAF8F3] border border-primary/10 shadow-xs hover:shadow-lg transition-all flex flex-col items-center text-center group"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary text-accent flex items-center justify-center shrink-0 mb-4 shadow-sm group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold font-serif text-primary mb-2">
                        {val.title}
                      </h3>
                      <p className="text-xs text-primary/70 leading-relaxed">
                        {val.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. SECTION 4: BY THE NUMBERS (Dark Luxury Section) */}
      <section className="py-20 md:py-24 bg-primary text-cream relative overflow-hidden">
        {/* Soft decorative glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-white mb-12">
            {t.numbersTitle}
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 items-center">
            {t.numbers.map((num, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="flex flex-col items-center"
              >
                <span className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-accent mb-2">
                  {num.value}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-cream/80 uppercase tracking-wider">
                  {num.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SECTION 5: POPULAR FAQS FOR YOUR BUSINESS (2-Column Accordions) */}
      <section className="py-20 md:py-28 bg-[#FAF8F3]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-accent mb-3 block">
              {t.faqBadge}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-primary">
              {t.faqTitle}
            </h2>
          </div>

          {/* 2 Independent Columns: eliminates ghost row space when cards expand */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-start">
            {/* Left Column (0, 2, 4, 6, 8) */}
            <div className="flex flex-col gap-4 sm:gap-6">
              {t.faqs
                .map((faq, idx) => ({ faq, idx }))
                .filter(({ idx }) => idx % 2 === 0)
                .map(({ faq, idx }) => {
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

            {/* Right Column (1, 3, 5, 7, 9) */}
            <div className="flex flex-col gap-4 sm:gap-6">
              {t.faqs
                .map((faq, idx) => ({ faq, idx }))
                .filter(({ idx }) => idx % 2 !== 0)
                .map(({ faq, idx }) => {
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
        </div>
      </section>

      {/* 7. SECTION 6: PARTNER WITH US (Bottom Luxury CTA) */}
      <section className="py-20 md:py-24 bg-primary text-cream relative overflow-hidden">
        {/* Soft Ambient Gold Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-white mb-4 leading-tight">
            {t.partnerTitle}
          </h2>

          <p className="text-sm sm:text-base text-cream/80 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
            {t.partnerSubtitle}
          </p>

          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full font-bold text-sm sm:text-base bg-accent text-primary hover:bg-cream transition-all shadow-xl hover:shadow-2xl hover:scale-105"
          >
            <span>{t.partnerButton}</span>
            <ArrowRight className={`w-4 h-4 ${locale === "ar" ? "rotate-180" : ""}`} />
          </Link>
        </div>
      </section>
    </div>
  );
}
