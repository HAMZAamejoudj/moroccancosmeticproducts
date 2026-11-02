import { Locale } from "@/dictionaries";

export interface ProductDetail {
  slug: string;
  image: string;
  gallery: string[];
  bannerTitle: string;
  title: string;
  badge: string;
  subtitle: string;
  shortDesc: string;
  fullDesc: string[];
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  highlights: string[];
  packagingPills: string[];
  specifications: {
    inci: string;
    origin: string;
    extraction: string;
    appearance: string;
    certifications: string;
    packaging: string;
    shelfLife: string;
    minOrder: string;
  };
  benefits: {
    title: string;
    desc: string;
  }[];
  story: {
    tag: string;
    title: string;
    paragraphs: string[];
  };
  howToUse: {
    step: string;
    title: string;
    desc: string;
  }[];
  textureImages: {
    src: string;
    alt: string;
  }[];
  faqs: {
    q: string;
    a: string;
  }[];
  applications: string[];
  privateLabelFeatures: string[];
}

export const productSlugs = [
  "argan-oil-wholesale",
  "prickly-pear-seed-oil",
  "moroccan-black-soap",
  "natural-skincare-products",
  "ghassoul-traditional-powders",
  "floral-waters-accessories",
] as const;

export type ProductSlug = (typeof productSlugs)[number];

const productsData: Record<Locale, Record<ProductSlug, ProductDetail>> = {
  en: {
    "argan-oil-wholesale": {
      slug: "argan-oil-wholesale",
      image: "/assets/img/argan-oil-wholesale.webp",
      gallery: [
        "/assets/img/argan-oil-wholesale.webp",
        "/image/bulk-argan-oil-supplier.webp",
        "/image/argan-oil-skin-care.webp",
        "/image/argan-oil-hair-benefits.webp",
      ],
      bannerTitle: "Trusted Moroccan Argan Oil Wholesale Supplier",
      title: "100% Pure Organic Moroccan Argan Oil Wholesale",
      badge: "Best Seller • ECOCERT and ISO Certified",
      subtitle: "First cold-pressed extra virgin Argania Spinosa kernel oil for cosmetic formulation and private label brands.",
      shortDesc: "100% pure, organic, and nutrient-rich Moroccan argan oil. The gold standard for skin hydration, anti-aging serums, and professional hair care lines.",
      fullDesc: [
        "Our pure Moroccan Argan Oil is sustainably harvested from UNESCO-protected argan biospheres in Southwest Morocco (Souss-Massa region) through certified women's cooperatives.",
        "Extracted using modern mechanical cold-pressing methods below 40°C, it retains its maximum profile of natural Vitamin E (tocopherols), Omega-6 (linoleic acid), and Omega-9 (oleic acid).",
        "Available in both deodorized cosmetic grade (subtle, clean scent ideal for sensitive skin and fine cosmetics) and virgin virgin grade, ready for bulk drums or custom bottled private label retail packaging.",
      ],
      metaTitle: "Organic Moroccan Argan Oil Wholesale | Pure Cold-Pressed Bulk Supplier",
      metaDescription: "Buy 100% pure cold-pressed organic Moroccan argan oil in bulk. Certified ISO, ECOCERT, CoA, and SDS. Direct manufacturer pricing and turnkey private label solutions.",
      metaKeywords: "argan oil wholesale Morocco, bulk argan oil supplier, organic argan oil manufacturer, cosmetic argan oil bulk, private label argan oil, pure argan oil drums",
      highlights: [
        "100% First Mechanical Cold-Pressed Extra Virgin Quality",
        "Sustainably harvested from UNESCO-protected Argan biospheres",
        "Certified ISO 22716 GMP and ECOCERT Organic",
        "Full batch testing: CoA and SDS provided with every order",
        "Global express air and sea door-to-door delivery worldwide",
      ],
      packagingPills: [
        "1L / 5L Jerrycans",
        "25L Heavy-Duty Cans",
        "200L Steel Drums",
        "1000L IBC Containers",
        "Private Label Dropper Bottles (30ml / 50ml)",
      ],
      specifications: {
        inci: "Argania Spinosa Kernel Oil",
        origin: "Agadir and Essaouira, Morocco",
        extraction: "100% First Cold Mechanical Pressed",
        appearance: "Golden yellow clear liquid, silky texture",
        certifications: "ISO 22716, ECOCERT Organic, CoA, SDS",
        packaging: "1L, 5L, 25L jerrycans, 200L steel drums, 1000L IBC totes, or custom retail bottles",
        shelfLife: "24 months when stored in a cool, dark place",
        minOrder: "From 5 Liters bulk or 200 private label units",
      },
      benefits: [
        {
          title: "Intense Moisture and Elasticity",
          desc: "Rich in linoleic and oleic essential fatty acids that deeply penetrate the skin lipid barrier to restore hydration and firmness.",
        },
        {
          title: "High Tocopherol (Vitamin E)",
          desc: "Potent natural antioxidant defense against environmental stressors, UV free radicals, and premature skin aging.",
        },
        {
          title: "Restorative Hair Elixir",
          desc: "Repairs damaged hair cuticles, seals split ends, tames frizz, and imparts brilliant natural shine without weighing hair down.",
        },
        {
          title: "Non-Comedogenic and Balancing",
          desc: "Low comedogenic rating (0-1) makes it safe for acne-prone, dry, and sensitive skin types, regulating sebum production naturally.",
        },
        {
          title: "Strengthens Nails and Cuticles",
          desc: "Nourishes brittle nails, repairs dry cuticles, and protects against daily environmental wear.",
        },
        {
          title: "Soothes Skin Irritation",
          desc: "Calms inflammation, reduces redness after sun exposure, and assists in scar and stretch mark fading.",
        },
      ],
      story: {
        tag: "HERITAGE and PRODUCTION",
        title: "Liquid Gold — The Essence of Moroccan Beauty",
        paragraphs: [
          "For centuries, the Berber women of Morocco have harvested the kernels of the ancient Argania Spinosa tree, native only to the arid valleys of southwestern Morocco. Revered as 'Liquid Gold', argan oil has stood as the heart of traditional Moroccan beauty and wellness rituals.",
          "Our production combines this ancestral cooperative heritage with modern, GMP-certified cold-pressing technology. By pressing fresh, unroasted kernels at low temperatures without chemical solvents, we preserve the full biological integrity of native tocopherols and essential fatty acids, delivering an exceptionally pure cosmetic oil.",
        ],
      },
      howToUse: [
        {
          step: "01",
          title: "Cleanse and Prep",
          desc: "Wash face or body thoroughly. Keep skin slightly damp with Moroccan rose water for maximum absorption.",
        },
        {
          step: "02",
          title: "Warm 2-3 Drops",
          desc: "Dispense 2 to 3 drops onto clean fingertips and gently warm between your palms to activate the lipids.",
        },
        {
          step: "03",
          title: "Gently Massage",
          desc: "Press and massage in upward circular motions into face, neck, dry scalp, or through the lengths of hair.",
        },
        {
          step: "04",
          title: "Daily Ritual",
          desc: "Use morning as a protective moisture shield and night as a deeply restorative anti-aging treatment.",
        },
      ],
      textureImages: [
        { src: "/assets/img/argan-oil-wholesale.webp", alt: "Pure golden argan oil texture" },
        { src: "/image/bulk-argan-oil-supplier.webp", alt: "Bulk argan oil drums and containers" },
        { src: "/image/argan-oil-skin-care.webp", alt: "Argan oil application on skin" },
      ],
      faqs: [
        {
          q: "What is the difference between cosmetic and culinary argan oil?",
          a: "Cosmetic argan oil is extracted from raw, unroasted kernels to preserve maximum Vitamin E and active fatty acids without a strong nutty scent. Culinary argan oil is extracted from lightly roasted kernels, giving it a rich toasted flavor for culinary use.",
        },
        {
          q: "What is your minimum order quantity (MOQ) for bulk argan oil?",
          a: "Our MOQ for bulk orders starts at just 5 Liters in heavy-duty cans. For industrial volumes, we supply 200L steel drums and 1000L IBC containers. For private label bottles, our MOQ starts at 200 units.",
        },
        {
          q: "Do you supply organic certification and batch analysis?",
          a: "Yes. Every shipment includes a batch-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS), and ECOCERT Organic / ISO 22716 compliance documentation.",
        },
        {
          q: "How long is the shelf life of pure argan oil?",
          a: "When stored in airtight amber containers away from direct heat and sunlight, pure Moroccan argan oil maintains its freshness and active potency for 24 months from pressing date.",
        },
      ],
      applications: [
        "Facial anti-aging serums and daytime face oils",
        "Deep conditioning hair serums and scalp treatments",
        "Nourishing body lotions and stretch-mark oils",
        "Cuticle and nail strengthening formulations",
        "Premium spa massage oils and after-sun treatments",
      ],
      privateLabelFeatures: [
        "Available in amber glass dropper bottles (30ml, 50ml, 100ml)",
        "Custom pump bottles, spray bottles, or aluminum containers",
        "Custom label design, luxury box packaging, and barcode integration",
        "Full batch testing: CoA (Certificate of Analysis) and SDS provided",
      ],
    },
    "prickly-pear-seed-oil": {
      slug: "prickly-pear-seed-oil",
      image: "/assets/img/prickly-pear-seed-oil-wholesale.webp",
      gallery: [
        "/assets/img/prickly-pear-seed-oil-wholesale.webp",
        "/image/pure-prickly-pear-seed-oil.webp",
        "/image/prickly-pear-cactus-scrub.webp",
      ],
      bannerTitle: "Premium Moroccan Prickly Pear Seed Oil Bulk Supplier",
      title: "Pure Organic Moroccan Prickly Pear Seed Oil Bulk",
      badge: "Ultra-Premium • High Vitamin E",
      subtitle: "The world's most concentrated natural anti-aging oil, cold-pressed from millions of Moroccan cactus seeds.",
      shortDesc: "Unrivaled antioxidant potency with over 1000 mg/kg of natural Vitamin E. The ultimate luxury active for dark circles, fine lines, and youthful skin radiance.",
      fullDesc: [
        "Known as the most precious oil in the cosmetic world, Moroccan Prickly Pear Seed Oil (Cactus Seed Oil) requires approximately one ton of cactus fruit to extract just one liter of pure seed oil.",
        "We harvest wild and sustainably farmed Opuntia Ficus-Indica from the arid valleys of Southern Morocco. Seeds are separated, sun-dried, and cold-pressed with zero solvents, heat, or additives.",
        "Its light, fast-absorbing texture leaves zero greasy residue while delivering unprecedented concentrations of sterols, polyphenols, and polyunsaturated fatty acids to skin cells.",
      ],
      metaTitle: "Pure Prickly Pear Seed Oil Wholesale Morocco | Bulk Anti-Aging Oil",
      metaDescription: "Wholesale organic Moroccan prickly pear seed oil (cactus seed oil). Exceptionally rich in Vitamin E and sterols for luxury anti-aging and eye contour formulas. Worldwide delivery.",
      metaKeywords: "prickly pear seed oil wholesale, bulk cactus seed oil Morocco, opuntia ficus indica seed oil, anti-aging oil wholesale, luxury botanical oil supplier",
      highlights: [
        "Over 1000 mg/kg Natural Vitamin E (highest concentration in nature)",
        "Rich in Vitamin K for rapid reduction of dark circles and eye puffiness",
        "100% Pure, unrefined, mechanical cold-pressed from seeds only",
        "Certified ISO 22716 and ECOCERT Organic with complete CoA and SDS",
        "Rapid non-greasy absorption with high phytosterol skin-firming power",
      ],
      packagingPills: [
        "500ml / 1L Bottles",
        "5L / 25L Cans",
        "200L Industrial Drums",
        "Luxury Glass Dropper Bottles (15ml / 30ml / 50ml)",
      ],
      specifications: {
        inci: "Opuntia Ficus-Indica Seed Oil",
        origin: "Ait Baamrane / Guelmim region, Morocco",
        extraction: "100% Mechanical Cold-Pressed, Unrefined",
        appearance: "Light green to golden liquid, delicate herbal scent",
        certifications: "ISO 22716, ECOCERT Organic, CoA, SDS",
        packaging: "500ml, 1L, 5L, 25L containers, or bespoke luxury retail droppers",
        shelfLife: "24 months in amber glass away from direct light",
        minOrder: "From 1 Liter bulk or 100 private label droppers",
      },
      benefits: [
        {
          title: "Over 150% More Vitamin E Than Argan",
          desc: "Boasts over 1000 mg of natural tocopherols per kilogram, stimulating cellular turnover and neutralizing oxidative stress.",
        },
        {
          title: "Unmatched Dark Circle and Eye Care",
          desc: "Rich in Vitamin K which brightens hyperpigmentation and visibly reduces stubborn dark circles under delicate eye contours.",
        },
        {
          title: "Firms and Tightens Skin Tissues",
          desc: "High phytosterol content restores skin elasticity, smoothing wrinkles, laughter lines, and sagging neck contours.",
        },
        {
          title: "Rapid Feather-Light Absorption",
          desc: "Exceptionally lightweight dry-oil finish that absorbs immediately without leaving shine or clogging pores.",
        },
        {
          title: "Minimizes Pores and Refines Texture",
          desc: "Tightens open pores and leaves the skin smooth, plump, and luminous with a velvety finish.",
        },
        {
          title: "Accelerates Skin Barrier Healing",
          desc: "Linoleic acid (Omega-6) repairs environmental UV damage and calms redness, rosacea, and dry patches.",
        },
      ],
      story: {
        tag: "HERITAGE and PRODUCTION",
        title: "The World's Most Precious Cosmetic Elixir",
        paragraphs: [
          "Extracting pure Prickly Pear Seed Oil is one of the most labor-intensive processes in botanical cosmetics. It takes nearly 1,000 kilograms (one ton) of ripe cactus figs, containing tens of millions of tiny seeds, to cold-press just a single liter of pure seed oil.",
          "Grown naturally without pesticides in the arid southern regions of Morocco (Ait Baamrane and Guelmim), these resilient desert cacti store concentrated nutrients. We separate the seeds by hand, wash and dry them under the Moroccan sun, and cold-press them on specialized low-speed mechanical presses to ensure none of the delicate phytosterols are lost.",
        ],
      },
      howToUse: [
        {
          step: "01",
          title: "Evening Cleanse",
          desc: "Wash face thoroughly before bed. Prickly pear seed oil works best during skin's overnight cellular repair cycle.",
        },
        {
          step: "02",
          title: "Target Eye Contours",
          desc: "Dispense 1 to 2 precious drops onto your ring finger. Dab gently around the orbital bone and under-eye area.",
        },
        {
          step: "03",
          title: "Smooth Fine Lines",
          desc: "Lightly press remaining oil into forehead lines, smile lines, neck, and décolleté until completely absorbed.",
        },
        {
          step: "04",
          title: "Wake Up Rejuvenated",
          desc: "Experience visibly firmer skin, reduced puffiness, and diminished dark circles by morning.",
        },
      ],
      textureImages: [
        { src: "/assets/img/prickly-pear-seed-oil-wholesale.webp", alt: "Pure prickly pear seed oil" },
        { src: "/image/pure-prickly-pear-seed-oil.webp", alt: "Moroccan cactus fig fruit and seeds" },
        { src: "/image/prickly-pear-cactus-scrub.webp", alt: "Prickly pear botanical cosmetics" },
      ],
      faqs: [
        {
          q: "Why is prickly pear seed oil so expensive compared to argan oil?",
          a: "Each cactus seed contains only about 5% oil. It takes almost 1 ton of fruit (approx. 30 kg of dried seeds) and hours of manual labor to produce just 1 liter of oil, making it the most concentrated and luxurious cosmetic oil on earth.",
        },
        {
          q: "Is prickly pear seed oil suitable for oily or acne-prone skin?",
          a: "Yes. Prickly pear seed oil has a comedogenic rating of 0. It is a dry oil exceptionally rich in linoleic acid, which naturally rebalances oily skin and unclogs congested pores without greasiness.",
        },
        {
          q: "What packaging formats do you offer for wholesale buyers?",
          a: "We provide 500ml, 1L, 5L, and 25L bulk containers, as well as luxury 15ml, 30ml, and 50ml UV-blocking glass dropper bottles for private label retail brands.",
        },
        {
          q: "How can I verify the purity of your prickly pear seed oil?",
          a: "Every batch is verified by an independent European-accredited laboratory. We provide a full Certificate of Analysis (CoA) confirming the fatty acid profile, high sterol content, and absence of mineral or diluent oils.",
        },
      ],
      applications: [
        "Luxury anti-wrinkle eye serums and contour treatments",
        "High-performance regenerative night elixirs",
        "Firming face and neck anti-aging creams",
        "Scars and hyperpigmentation restorative treatments",
      ],
      privateLabelFeatures: [
        "Turnkey private label with luxury 15ml, 30ml, and 50ml UV-protective dropper bottles",
        "Silk-screen printing, gold/silver foil stamping, and customized carton packaging",
        "Batch CoA and safety dossiers for EU CPNP and international customs clearance",
      ],
    },
    "moroccan-black-soap": {
      slug: "moroccan-black-soap",
      image: "/assets/img/moroccan-black-soap-bulk.webp",
      gallery: [
        "/assets/img/moroccan-black-soap-bulk.webp",
        "/image/authentic-moroccan-black-soap.webp",
        "/image/traditional-black-soap.webp",
        "/image/black-soap-argan-oil.webp",
        "/image/kessa-exfoliating-glove.webp",
      ],
      bannerTitle: "Trusted Moroccan Black Soap Wholesale Supplier",
      title: "Authentic Moroccan Black Soap (Savon Beldi) Wholesale",
      badge: "Traditional Hammam Ritual • 100% Natural",
      subtitle: "Artisanal vegetal paste soap crafted with macerated Moroccan black olives and natural botanical extracts.",
      shortDesc: "The foundation of the Moroccan hammam ritual. Naturally softens skin, purifies pores, and prepares the body for effortless, deep enzymatic exfoliation.",
      fullDesc: [
        "Moroccan Black Soap, traditionally known as 'Savon Beldi', is an authentic olive-based paste soap that has been used in Moroccan bathhouses for centuries.",
        "Produced through saponification of premium crushed black olives and rich olive oil using natural potassium hydroxide, our black soap creates a creamy, low-foam emulsion that melts into warm skin.",
        "We offer traditional unfragranced olive formulas as well as therapeutic infusions containing pure eucalyptus essential oil, argan oil, lavender, or Moroccan rose.",
      ],
      metaTitle: "Authentic Moroccan Black Soap Wholesale | Bulk Savon Beldi Supplier",
      metaDescription: "Wholesale Moroccan black soap (Savon Beldi) for spas, hammams, and beauty brands. 100% natural olive paste soap available in bulk tubs or custom private label jars.",
      metaKeywords: "Moroccan black soap wholesale, bulk savon beldi, black soap supplier Morocco, eucalyptus black soap bulk, hammam body scrub supplier, traditional olive paste soap",
      highlights: [
        "100% Pure Vegetal Paste Soap made from macerated black olives and olive oil",
        "Traditional artisanal hot-process saponification with potassium hydroxide",
        "Enzymatic micro-exfoliation: lifts dead skin cells with zero abrasive beads",
        "Available in Natural Olive, Eucalyptus, Argan Oil, Lavender, or Rose",
        "Certified ISO 22716, 100% Biodegradable, heavy metals and microbial tested",
      ],
      packagingPills: [
        "200g / 500g Cosmetic Jars",
        "1kg / 5kg Professional Tubs",
        "10kg / 25kg Heavy-Duty Buckets",
        "200L Industrial Barrels",
        "Full Hammam Kits with Custom Kessa Gloves",
      ],
      specifications: {
        inci: "Olea Europaea Fruit Oil, Aqua, Potassium Hydroxide, (Optional Essential Oils)",
        origin: "Marrakesh and Fez, Morocco",
        extraction: "Traditional Artisanal Hot-Process Saponification",
        appearance: "Dark olive-amber vegetal paste, rich velvety consistency",
        certifications: "ISO 22716, CoA, SDS, 100% Biodegradable",
        packaging: "1kg, 5kg, 10kg, 20kg, 25kg buckets, 200L drums, or branded retail tubs (200g - 500g)",
        shelfLife: "24 months at room temperature",
        minOrder: "From 25kg bulk tubs or 200 private label jars",
      },
      benefits: [
        {
          title: "Enzymatic Dead-Skin Removal",
          desc: "Softens keratinized skin layers without abrasive physical beads, allowing the Kessa glove to lift dead cells with zero irritation.",
        },
        {
          title: "Deep Pore Cleansing and Detox",
          desc: "Draws out environmental impurities, toxins, and sebum while maintaining optimal epidermal moisture balance.",
        },
        {
          title: "Naturally Rich in Vitamin E",
          desc: "Concentrated olive polyphenols nourish and protect the skin barrier during the exfoliating ritual.",
        },
        {
          title: "Silky Smooth Skin Texture",
          desc: "Leaves the whole body silky, refreshed, and primed to absorb body oils and moisturizers deeply.",
        },
        {
          title: "Prepares Skin for Tanning and Treatments",
          desc: "Creates an ultra-uniform skin canvas that prolongs sunless tans and maximizes body wrap results.",
        },
        {
          title: "Prevents Ingrown Hairs",
          desc: "Regular exfoliation prevents hair follicles from clogging, providing relief from strawberry legs and shaving bumps.",
        },
      ],
      story: {
        tag: "HERITAGE and PRODUCTION",
        title: "Savon Beldi — The Real Moroccan Black Soap",
        paragraphs: [
          "At the core of Morocco's world-renowned Hammam culture lies 'Savon Beldi'. Unlike chemical soaps or synthetic foaming gels, authentic Moroccan black soap is a dense, buttery vegetal paste made by saponifying whole crushed black olives and extra virgin olive oil with natural potassium hydroxide.",
          "When spread over warm, steamed skin, the alkaline paste reacts with the surface layer of dead cells, gently breaking the protein bonds that trap impurities in the pores. Paired with the traditional Moroccan Kessa crepe glove, it rolls away years of cellular buildup in satisfying, visible ribbons, leaving the body unimaginably soft, radiant, and renewed.",
        ],
      },
      howToUse: [
        {
          step: "01",
          title: "Warm the Skin",
          desc: "Take a hot shower or spend 5 to 10 minutes in a steam room to open pores and soften the epidermis.",
        },
        {
          step: "02",
          title: "Apply Paste",
          desc: "Take a walnut-sized dollop of black soap and smooth a thin, even layer across your entire warm, damp body.",
        },
        {
          step: "03",
          title: "Wait 5-10 Minutes",
          desc: "Allow the natural olive enzymes to work on dead skin cells while relaxing in the steam.",
        },
        {
          step: "04",
          title: "Exfoliate with Kessa",
          desc: "Rinse completely with warm water, then scrub firmly in back-and-forth strokes using a wet Kessa glove.",
        },
      ],
      textureImages: [
        { src: "/assets/img/moroccan-black-soap-bulk.webp", alt: "Authentic Moroccan black soap jars and varieties" },
        { src: "/image/authentic-moroccan-black-soap.webp", alt: "Rich golden-amber vegetal soap paste texture" },
        { src: "/image/traditional-black-soap.webp", alt: "Traditional hammam bowl and soap paste" },
      ],
      faqs: [
        {
          q: "Why doesn't Moroccan black soap foam like regular soap?",
          a: "Authentic Savon Beldi is a pure olive paste made with potassium hydroxide rather than sodium hydroxide. It creates a creamy, low-foam emulsion designed for deep skin softening rather than superficial foaming.",
        },
        {
          q: "What scents and formulations are available for wholesale orders?",
          a: "We produce the traditional unfragranced olive formula as well as eucalyptus (the classic hammam spa choice), argan oil, lavender, and Moroccan rose varieties.",
        },
        {
          q: "Can you supply matching Kessa exfoliating gloves?",
          a: "Yes! We manufacture authentic crepe Kessa gloves in soft, medium, and coarse weaves, available in custom colors and with your company logo embroidered or printed on the wristband.",
        },
        {
          q: "What is the shelf life and storage requirement for black soap?",
          a: "Our black soap has a shelf life of 24 months. It should be stored at room temperature in a sealed container, away from standing water.",
        },
      ],
      applications: [
        "Professional hammam, sauna, and thermal spa body exfoliation",
        "Pre-tan prep and skin smoothing treatments",
        "Daily moisturizing body cleanser for rough or dry skin",
        "Ingrown hair prevention and pedicure treatments",
      ],
      privateLabelFeatures: [
        "Available in 200g, 250g, and 500g screw-top cosmetic jars",
        "Options for Eucalyptus, Lavender, Argan, or Custom Essential Oils",
        "Matching custom-branded Moroccan Kessa exfoliating gloves available in matching kits",
      ],
    },
    "natural-skincare-products": {
      slug: "natural-skincare-products",
      image: "/assets/img/organic-rose-water-care.webp",
      gallery: [
        "/assets/img/organic-rose-water-care.webp",
        "/image/anti-acne-cream-dry-skin.webp",
        "/image/verbena-night-cream.webp",
        "/image/castor-oil-hair-serum.webp",
        "/image/rosemary-hair-loss-shampoo.webp",
      ],
      bannerTitle: "Private Label Moroccan Skincare and Haircare Manufacturer",
      title: "Private Label Natural Moroccan Skincare and Haircare",
      badge: "Turnkey Formulations • OEM / ODM",
      subtitle: "Custom-developed facial creams, regenerative serums, hair oils, and botanical cleansers infused with Moroccan actives.",
      shortDesc: "State-of-the-art cosmetic formulations marrying time-tested Moroccan botanical ingredients with modern clean beauty science for turnkey brand launching.",
      fullDesc: [
        "We develop and manufacture complete lines of private label skincare and haircare powered by organic argan oil, prickly pear seed oil, Moroccan clay, and desert floral waters.",
        "From brightening day creams and soothing night balms to sulfate-free rosemary shampoos and strengthening scalp serums, our laboratory formulates clean, paraben-free, cruelty-free solutions.",
        "Whether you need an off-the-shelf ready-to-label formula or a completely custom cosmetic formulation, we provide end-to-end manufacturing, packaging, and regulatory documentation.",
      ],
      metaTitle: "Private Label Moroccan Skincare and Haircare | Custom Cosmetics Manufacturer",
      metaDescription: "Launch your clean beauty brand with certified Moroccan natural skincare and haircare: creams, anti-aging serums, shampoos, and hair masks. Full OEM/ODM manufacturing.",
      metaKeywords: "private label skincare Morocco, Moroccan cosmetics manufacturer, OEM beauty brand supplier, custom face cream bulk, organic haircare private label, argan face cream wholesale",
      highlights: [
        "Complete OEM/ODM turnkey manufacturing from laboratory formula to retail box",
        "Powered by certified Moroccan argan, prickly pear, shea butter, and herbs",
        "Manufactured in strict compliance with ISO 22716 Good Manufacturing Practices (GMP)",
        "Paraben-free, sulfate-free, cruelty-free clean cosmetic formulations",
        "Full regulatory dossiers: CPNP notification, FDA compliance, CoA and SDS",
      ],
      packagingPills: [
        "30ml / 50ml Airless Bottles",
        "50g / 100g Frosted Glass Jars",
        "250ml / 500ml Shampoo Bottles",
        "Aluminum Tubes and Pumps",
        "Custom Luxury Folding Boxes",
      ],
      specifications: {
        inci: "Formulated blends featuring Argania Spinosa, Opuntia Ficus-Indica, Shea Butter, Aloe",
        origin: "Formulated and Manufactured in Agadir and Marrakesh, Morocco",
        extraction: "GMP-compliant clean cosmetics manufacturing",
        appearance: "Luxurious lotions, creams, serums, and liquid shampoos",
        certifications: "ISO 22716 Good Manufacturing Practices (GMP), CoA, SDS",
        packaging: "Airless pump bottles, glass jars, aluminum tubes, PET bottles",
        shelfLife: "24 to 36 months unopened",
        minOrder: "From 500 units per SKU for private label",
      },
      benefits: [
        {
          title: "Clean and Certified Moroccan Botanicals",
          desc: "Formulated with certified organic oils and extracts, free from harsh sulfates, parabens, phthalates, and artificial colorants.",
        },
        {
          title: "Dermatologically Tested Efficacy",
          desc: "High concentrations of active ingredients proven to hydrate, repair the skin barrier, and promote scalp health.",
        },
        {
          title: "Rapid Time-to-Market",
          desc: "Choose from pre-tested, market-validated formulas that can be bottled and labeled under your brand within weeks.",
        },
        {
          title: "Custom Textures and Fragrances",
          desc: "Tailor viscosity, finish (matte, dewy, satin), and natural allergen-free scents to suit your target market.",
        },
        {
          title: "High Consumer Retention",
          desc: "Luxurious sensory feel, rapid absorption, and visible skin rejuvenation drive repeat retail purchases.",
        },
        {
          title: "Export-Ready Compliance",
          desc: "Every product line includes complete Product Information Files (PIF) ready for global regulatory filing.",
        },
      ],
      story: {
        tag: "HERITAGE and PRODUCTION",
        title: "Moroccan Botanical Heritage Meets Modern Cosmetic Science",
        paragraphs: [
          "Morocco is a botanical paradise, home to some of the planet's most resilient flora: drought-resistant argan trees, high-antioxidant prickly pear cacti, wild verbena, and organic Atlas rosemary. For centuries, these natural treasures have been celebrated for their exceptional healing and beautifying virtues.",
          "Our cosmetic development laboratory blends these indigenous Moroccan bio-actives with contemporary clean cosmetic science. Every emulsion, serum, and hair treatment is formulated in ISO 22716 cleanrooms, using cold-process blending where possible to preserve nutrient potency while ensuring long-term shelf stability.",
        ],
      },
      howToUse: [
        {
          step: "01",
          title: "Cleanse",
          desc: "Begin with a gentle, sulfate-free Moroccan cleansing gel to remove impurities and balance skin pH.",
        },
        {
          step: "02",
          title: "Prep with Mist",
          desc: "Spritz pure organic Moroccan rose water to prepare the skin barrier for active serum penetration.",
        },
        {
          step: "03",
          title: "Apply Treatment",
          desc: "Massage 2 to 3 pumps of active cream or serum evenly over face, neck, or through hair lengths.",
        },
        {
          step: "04",
          title: "Lock in Glow",
          desc: "Seal in active hydration with a drop of pure cold-pressed argan oil or prickly pear seed oil.",
        },
      ],
      textureImages: [
        { src: "/assets/img/organic-rose-water-care.webp", alt: "Private label Moroccan skincare formulations" },
        { src: "/image/anti-acne-cream-dry-skin.webp", alt: "Luxury moisturizing and anti-aging face creams" },
        { src: "/image/verbena-night-cream.webp", alt: "Nourishing botanical creams and lotions" },
      ],
      faqs: [
        {
          q: "What is the typical lead time for a custom private label project?",
          a: "For pre-validated catalogue formulas with your custom labels and boxes, production takes 2 to 4 weeks. For custom formulation development and stability testing, the timeframe is approximately 6 to 8 weeks.",
        },
        {
          q: "What is the minimum order quantity (MOQ) per product?",
          a: "Our private label MOQ starts at 500 units per reference, allowing emerging beauty brands to launch without overwhelming inventory capital.",
        },
        {
          q: "Do you assist with international cosmetic registration (CPNP / FDA)?",
          a: "Yes. We prepare full Product Information Files (PIF), safety assessments, challenge testing reports, and Certificates of Free Sale needed for EU CPNP notification, US FDA compliance, and GCC approval.",
        },
        {
          q: "Can I provide my own packaging and labels?",
          a: "Yes, you can supply your own packaging components, or select from our wide catalogue of luxury glass jars, airless pump bottles, and eco-friendly aluminum tubes.",
        },
      ],
      applications: [
        "Anti-aging day and night creams with prickly pear and argan",
        "Hydrating face serums with hyaluronic acid and botanicals",
        "Rosemary and castor oil hair growth and scalp treatments",
        "Sulfate-free argan restorative shampoos and conditioners",
        "Rich body butters and dry massage oils",
      ],
      privateLabelFeatures: [
        "Custom container sourcing: luxury frosted glass, amber bottles, bamboo accents",
        "Graphic design, label compliance review, and barcode printing",
        "Full regulatory file support (PIF, CPNP notification, Certificate of Free Sale)",
      ],
    },
    "ghassoul-traditional-powders": {
      slug: "ghassoul-traditional-powders",
      image: "/assets/img/ghassoul-clay-wholesale.webp",
      gallery: [
        "/assets/img/ghassoul-clay-wholesale.webp",
        "/image/blue-nila-powder.webp",
        "/image/moroccan-blue-nila-powder.webp",
        "/image/aker-fassi-wholesale.webp",
        "/image/aker-fassi-powder.webp",
        "/image/ghassoul-clay-paste-rose.webp",
      ],
      bannerTitle: "Wholesale Moroccan Ghassoul Clay, Blue Nila and Aker Fassi Supplier",
      title: "Moroccan Ghassoul Clay, Blue Nila and Aker Fassi Wholesale",
      badge: "Artisanal Moroccan Powders • 100% Pure",
      subtitle: "Mineral-rich Atlas Mountain clay, Saharan brightening Blue Nila, and pure poppy petal Aker Fassi in bulk.",
      shortDesc: "Authentic Moroccan beauty powders revered for deep facial detox, natural skin lightening, and long-lasting natural flush. 100% natural with zero synthetics.",
      fullDesc: [
        "Moroccan Ghassoul (Rhassoul) is a unique saponiferous volcanic clay mined exclusively from subterranean deposits in the Atlas Mountains of Morocco. When blended with water or rose hydrosol, it transforms into an ultra-smooth detoxifying paste.",
        "Blue Nila is a rare mineral-vegetal powder sourced from the Moroccan Sahara, famous across North Africa for its instant skin brightening, spot fading, and hyperpigmentation clearing power.",
        "Aker Fassi is an ancient Berber pigment prepared by drying natural poppy flower petals and pomegranate bark, delivering vibrant natural red and rosy tones for lips, cheeks, and mask recipes.",
      ],
      metaTitle: "Moroccan Ghassoul Clay, Blue Nila and Aker Fassi Wholesale | Bulk Powders",
      metaDescription: "Wholesale Atlas Mountain Ghassoul clay, Saharan Blue Nila powder, and Aker Fassi in bulk. 100% natural Moroccan powders for facial masks, body wraps, and spa formulations.",
      metaKeywords: "ghassoul clay wholesale, rhassoul clay bulk Morocco, blue nila powder wholesale, aker fassi bulk supplier, Moroccan clay manufacturer, spa clay wholesale",
      highlights: [
        "100% Natural Mined Saponiferous Clay from exclusive Atlas Mountain deposits",
        "Authentic Saharan Blue Nila for natural skin brightening and spot reduction",
        "Genuine Poppy Petal and Pomegranate Aker Fassi powder for lip and cheek tinting",
        "Microbiologically tested, heavy metals tested, zero synthetic additives",
        "Available in raw chips, ultra-fine micronized powder, or prepared pastes",
      ],
      packagingPills: [
        "100g / 250g Retail Zip Pouches",
        "1kg / 5kg Kraft Sacks",
        "25kg Commercial Multi-Wall Bags",
        "50kg Sealed Drums",
        "Pre-Hydrated Clay Pastes in Tubs",
      ],
      specifications: {
        inci: "Moroccan Lava Clay (Ghassoul) / Indigofera Tinctoria (Nila) / Papaver Rhoeas (Aker Fassi)",
        origin: "Atlas Mountains and Moroccan Sahara, Morocco",
        extraction: "Sun-dried, mechanically crushed, ultra-fine micronized",
        appearance: "Ghassoul: grey-brown powder/chips; Nila: deep royal blue powder; Aker Fassi: crimson powder",
        certifications: "ISO 22716, Heavy Metals Tested, CoA, SDS",
        packaging: "1kg, 5kg, 25kg multi-wall bags, 50kg drums, or retail stand-up pouches and jars",
        shelfLife: "36 months in airtight moisture-proof storage",
        minOrder: "From 10kg bulk or 100 packaged retail units",
      },
      benefits: [
        {
          title: "Deep Remineralizing Detox",
          desc: "Ghassoul contains high concentrations of magnesium, silica, iron, and potassium, absorbing toxins while remineralizing skin cells.",
        },
        {
          title: "Brightens Hyperpigmentation",
          desc: "Blue Nila effectively targets dark spots, melasma, dark knees/elbows, and dull complexions, revealing uniform radiant skin.",
        },
        {
          title: "Purifies Scalp and Adds Hair Volume",
          desc: "Used as a hair mud, Ghassoul removes sebum build-up and environmental residue without drying hair fibers, boosting natural bounce.",
        },
        {
          title: "100% Vegan and Non-Toxic",
          desc: "Pure geological and botanical heritage completely free of preservatives, fragrances, artificial dyes, or fillers.",
        },
        {
          title: "Gentle Cationic Exchange Action",
          desc: "Absorbs oil, dirt, and impurities through natural ionic binding without stripping essential moisture.",
        },
        {
          title: "Natural Tint and Radiance (Aker Fassi)",
          desc: "High polyphenol content provides natural antioxidant protection while leaving an authentic rosy flush.",
        },
      ],
      story: {
        tag: "HERITAGE and PRODUCTION",
        title: "Geological and Herbal Treasures of the Atlas and Sahara",
        paragraphs: [
          "Mined only in the Moulouya Valley in the high Atlas Mountains of Morocco, Ghassoul (derived from the Arabic 'Rassala', meaning 'to cleanse') has been cherished across the Mediterranean for over twelve centuries. Formed during the Tertiary period by volcanic activity, it possesses unparalleled saponiferous and absorption qualities.",
          "Complemented by Saharan Blue Nila — a prized mineral-botanical secret of nomadic Berber women used to maintain radiant, spot-free skin under harsh desert sun — and Aker Fassi, handcrafted from sun-dried poppy petals, our powders represent the most authentic traditional wellness recipes in the world.",
        ],
      },
      howToUse: [
        {
          step: "01",
          title: "Measure and Mix",
          desc: "Place 2 tablespoons of Ghassoul powder in a wooden or ceramic bowl. Add warm Moroccan rose water gradually.",
        },
        {
          step: "02",
          title: "Form Creamy Paste",
          desc: "Mix with a wooden spoon until you achieve a silky, lump-free paste. Add a pinch of Blue Nila for extra brightening.",
        },
        {
          step: "03",
          title: "Apply Evenly",
          desc: "Spread smoothly over face, neck, scalp, or entire body. Leave on for 10 to 15 minutes without letting it fully crack.",
        },
        {
          step: "04",
          title: "Rinse and Moisturize",
          desc: "Rinse with warm water in circular motions to gently buff skin, then seal with pure argan oil.",
        },
      ],
      textureImages: [
        { src: "/assets/img/ghassoul-clay-wholesale.webp", alt: "Authentic Moroccan Ghassoul clay chips and powder" },
        { src: "/image/blue-nila-powder.webp", alt: "Pure Saharan Blue Nila pigment powder" },
        { src: "/image/ghassoul-clay-paste-rose.webp", alt: "Freshly blended detoxifying Ghassoul rose paste" },
      ],
      faqs: [
        {
          q: "What is the difference between Ghassoul chips and micronized powder?",
          a: "Ghassoul chips are the raw, sun-dried clay flakes traditionally preferred by bathhouses and spas who soak them in water. Micronized powder is ultra-finely milled (under 75 microns) for instant paste blending and smooth facial masks.",
        },
        {
          q: "Is your Blue Nila powder 100% natural and skin-safe?",
          a: "Yes. Our Blue Nila is pure, laboratory-tested natural indigo mineral-herbal powder, guaranteed free from toxic industrial dyes or synthetic colorants.",
        },
        {
          q: "Do you supply heavy metal test reports for the clay?",
          a: "Yes. Every batch of Moroccan Lava Clay undergoes rigorous ICP-MS testing in an accredited laboratory to ensure lead, arsenic, and mercury levels are well below strict international cosmetic thresholds.",
        },
        {
          q: "Can you provide pre-hydrated ready-to-use Ghassoul masks?",
          a: "Yes. In addition to dry powders, we formulate preserved, ready-to-use Ghassoul paste jars infused with rose water and argan oil under your private label.",
        },
      ],
      applications: [
        "Detoxifying facial clay masks and clarifying pore pastes",
        "Body wrap treatments for spas, thalassotherapy, and hammams",
        "Natural clarifying shampoos and scalp cleansing muds",
        "Brightening night pastes and targeted hyperpigmentation masks",
        "Natural cosmetic tinting and traditional bath rituals",
      ],
      privateLabelFeatures: [
        "Raw chips, micronized powder, or pre-hydrated ready-to-use rose clay paste",
        "Kraft stand-up zip pouches, aluminum tins, or cosmetic glass jars",
        "Custom formulated dry mask blends (e.g., Ghassoul + Nila + Argan)",
      ],
    },
    "floral-waters-accessories": {
      slug: "floral-waters-accessories",
      image: "/assets/img/orange-blossom-water-bulk.webp",
      gallery: [
        "/assets/img/orange-blossom-water-bulk.webp",
        "/assets/img/organic-rose-water-care.webp",
        "/image/pure-moroccan-rose-water.webp",
        "/image/pure-natural-rose-water.webp",
        "/image/dried-rosebuds-petals.webp",
        "/image/kessa-exfoliating-glove.webp",
      ],
      bannerTitle: "Pure Moroccan Rose Water, Orange Blossom and Hammam Accessories Supplier",
      title: "Pure Damascena Rose Water, Orange Blossom and Spa Accessories",
      badge: "Steam Distilled • Valley of Roses",
      subtitle: "100% pure Moroccan hydrosols distilled in Kelaat M'Gouna alongside authentic crepe Kessa exfoliating gloves.",
      shortDesc: "Distilled floral waters packed with natural essential oil micro-molecules. Combined with genuine Moroccan Kessa gloves for a complete sensory wellness experience.",
      fullDesc: [
        "Our Rose Water is extracted through artisanal steam distillation of freshly handpicked Rosa Damascena blossoms in the legendary Valley of Roses (Kelaat M'Gouna, Morocco).",
        "With no alcohol, no artificial fragrance, and no synthetic preservatives, it captures the genuine essence, astringent properties, and balancing botanical water of fresh rose petals.",
        "We also produce pure Neroli / Orange Blossom Water (Citrus Aurantium) from Moroccan citrus groves, and supply authentic Moroccan Kessa crepe exfoliating gloves in various textures for spa and retail collections.",
      ],
      metaTitle: "Pure Moroccan Rose Water and Orange Blossom Bulk | Wholesale Spa Accessories",
      metaDescription: "Buy pure Moroccan Damascena rose water, orange blossom floral water, and authentic Kessa exfoliating gloves in bulk. Certified ISO, direct manufacturer pricing.",
      metaKeywords: "Moroccan rose water wholesale, bulk rose water Morocco, orange blossom water bulk, Kessa glove wholesale, Moroccan spa accessories supplier, damascena hydrosol bulk",
      highlights: [
        "100% Traditional Steam Distilled Hydro-Sol from fresh morning-picked Damascena roses",
        "Zero added alcohol, zero artificial scents, zero chemical preservatives",
        "Artisanal crepe Kessa exfoliating gloves in soft, medium, and firm textures",
        "Naturally balances skin microbiome and restores optimal epidermal pH",
        "Microbiologically controlled and certified ISO 22716 with complete CoA and SDS",
      ],
      packagingPills: [
        "100ml / 250ml Fine Spray Misters",
        "5L / 25L Food-Grade Cans",
        "200L Industrial Drums",
        "Kessa Gloves (Packs of 50 / 100 / 500 / 1000 with custom logos)",
      ],
      specifications: {
        inci: "Rosa Damascena Flower Water / Citrus Aurantium Amara Flower Water",
        origin: "Kelaat M'Gouna (Valley of Roses) and Fes, Morocco",
        extraction: "100% Traditional Steam Distillation (Hydrosol)",
        appearance: "Crystal-clear pure aromatic botanical liquid",
        certifications: "ISO 22716, Microbial Tested, CoA, SDS",
        packaging: "5L, 25L jerrycans, 200L drums, or 100ml / 200ml mist spray bottles; Kessa in 100/500/1000 unit packs",
        shelfLife: "24 months in a cool, dark place away from heat",
        minOrder: "From 10L bulk or 100 units retail packaged",
      },
      benefits: [
        {
          title: "Restores Natural Skin pH Balance",
          desc: "Tones and balances the skin microbiome after cleansing, reducing redness and soothing irritated skin.",
        },
        {
          title: "Hydrating Facial Mist",
          desc: "Instantly refreshes tired skin, plumps fine dehydration lines, and acts as a dewy setting spray.",
        },
        {
          title: "Aromatherapeutic Relaxation",
          desc: "Authentic floral aromas calm the nervous system, reduce tension, and elevate everyday self-care rituals.",
        },
        {
          title: "Professional Spa Exfoliation (Kessa)",
          desc: "Artisanal crepe fabric removes dead skin cells effectively without scratching or causing micro-tears.",
        },
        {
          title: "Natural Astringent and Pore Tightener",
          desc: "Gently refines enlarged pores and balances sebum without drying delicate skin.",
        },
        {
          title: "Soothes Sunburn and Razor Irritation",
          desc: "Anti-inflammatory botanical compounds provide immediate cooling relief after sun exposure or shaving.",
        },
      ],
      story: {
        tag: "HERITAGE and PRODUCTION",
        title: "Distilled Petals from the Valley of Roses (Kelaat M'Gouna)",
        paragraphs: [
          "Every spring, the Dades Valley in the High Atlas mountains transforms into a fragrant sea of pink blossoms. In the town of Kelaat M'Gouna, ancient Persian Damascena roses have flourished for centuries. Harvested by hand at daybreak while dew still clings to the petals, they yield the most prized floral hydrosols in perfumery and skincare.",
          "Our slow, low-temperature copper steam distillation process captures both the water-soluble botanical actives and micro-droplets of pure rose essential oil. Together with genuine Moroccan crepe Kessa gloves woven with high-twist yarn, we offer the quintessential tools of the Moroccan bath experience.",
        ],
      },
      howToUse: [
        {
          step: "01",
          title: "Cleanse Skin",
          desc: "Wash face or body with clean water or after a warm Moroccan black soap treatment.",
        },
        {
          step: "02",
          title: "Spritz Generously",
          desc: "Mist pure rose water directly over face and neck, holding the bottle 6 inches away.",
        },
        {
          step: "03",
          title: "Press and Absorb",
          desc: "Gently pat into skin with palms to allow delicate botanical actives to balance moisture.",
        },
        {
          step: "04",
          title: "Weekly Kessa Scrub",
          desc: "Use the dampened Kessa glove in firm strokes across warm body skin to reveal silky new layers.",
        },
      ],
      textureImages: [
        { src: "/assets/img/orange-blossom-water-bulk.webp", alt: "Pure Moroccan floral hydrosols" },
        { src: "/image/pure-natural-rose-water.webp", alt: "Rose Damascena distilled water mist" },
        { src: "/image/kessa-exfoliating-glove.webp", alt: "Authentic Moroccan crepe Kessa exfoliating glove" },
      ],
      faqs: [
        {
          q: "Does your rose water contain added alcohol or preservatives?",
          a: "No. Our rose water is 100% pure, natural steam distillate with zero added alcohol, parabens, or synthetic fragrance.",
        },
        {
          q: "What makes authentic Moroccan Kessa gloves different from mesh bath gloves?",
          a: "Kessa gloves are woven from specialized high-twist crepe fabric. When rubbed over skin softened with black soap, the crepe texture grips and lifts dead keratinized cells without scratching or causing micro-tears.",
        },
        {
          q: "Can I customize the Kessa gloves with our brand's logo?",
          a: "Yes. We offer custom woven and embroidered brand labels, custom wristband colors, and bespoke retail hanging cards for private label orders starting at 500 units.",
        },
        {
          q: "What is the shelf life of pure floral waters?",
          a: "Stored in a cool place away from direct sunlight, our pure hydrosols retain their full aromatic and therapeutic qualities for 24 months.",
        },
      ],
      applications: [
        "Facial toners, soothing misters, and micellar water formulations",
        "Water-phase replacement in premium natural cosmetic formulations",
        "Post-cleansing balancing spritzes and after-sun relief",
        "Professional hammam and home exfoliation body kits",
      ],
      privateLabelFeatures: [
        "Fine-mist amber glass spray bottles (100ml, 150ml, 250ml)",
        "Custom embroidered or printed logo bands on Kessa exfoliating gloves",
        "Curated Moroccan Hammam gift sets (Black Soap + Kessa + Rose Water + Ghassoul)",
      ],
    },
  },
  fr: {} as any, // populated below with helper
  ar: {} as any, // populated below with helper
};

// Populate French and Arabic with high fidelity translations
productsData.fr = {
  "argan-oil-wholesale": {
    ...productsData.en["argan-oil-wholesale"],
    bannerTitle: "Fournisseur Agréé d'Huile d'Argan Marocaine en Gros",
    title: "Huile d'Argan Marocaine 100% Pure et Biologique en Gros",
    badge: "Meilleure Vente • Certifiée ECOCERT and ISO",
    subtitle: "Huile vierge extra pressée à froid issue des amandons d'Argania Spinosa pour formulations cosmétiques et marque blanche.",
    shortDesc: "Huile d'argan 100% pure, biologique et hautement nutritive. La référence mondiale pour l'hydratation, les soins anti-âge et les gammes capillaires professionnelles.",
    highlights: [
      "100% Première Pression Mécanique à Froid (Vierge Extra)",
      "Récoltée durablement dans les réserves de biosphère de l'UNESCO",
      "Certifiée ISO 22716 BPF and ECOCERT Biologique",
      "Dossiers complets : Certificat d'Analyse (CoA) et FDS fournis",
      "Expédition express internationale porte-à-porte par air et mer",
    ],
    packagingPills: [
      "Bidons 1L / 5L",
      "Bidons 25L Vrac",
      "Fûts Métalliques 200L",
      "Cuves IBC 1000L",
      "Flacons Compte-Gouttes Personnalisés (30ml / 50ml)",
    ],
    story: {
      tag: "HÉRITAGE and PRODUCTION",
      title: "L'Or Liquide — L'Essence de la Beauté Marocaine",
      paragraphs: [
        "Depuis des siècles, les femmes berbères récoltent les amandons de l'Argania Spinosa, arbre endémique du Sud-Ouest marocain. Surnommée 'l'Or Liquide', l'huile d'argan est au cœur des rituels traditionnels de soin et de bien-être.",
        "Notre manufacture allie cet héritage coopératif aux technologies modernes d'extraction à froid certifiées BPF. En pressant les amandons crus en dessous de 40°C sans solvants chimiques, nous préservons l'intégralité des tocophérols naturels et des acides gras essentiels.",
      ],
    },
    howToUse: [
      { step: "01", title: "Nettoyer and Préparer", desc: "Laver la peau ou les cheveux. Laisser légèrement humide avec de l'eau de rose pour une absorption maximale." },
      { step: "02", title: "Chauffer 2-3 Gouttes", desc: "Déposer 2 à 3 gouttes au creux des mains et frotter délicatement pour activer les précieux lipides." },
      { step: "03", title: "Masser en Douceur", desc: "Appliquer en mouvements circulaires ascendants sur le visage, le cou, ou sur les pointes des cheveux." },
      { step: "04", title: "Rituel Quotidien", desc: "Utiliser matin et soir comme soin hydratant naturel, protecteur et régénérant anti-âge." },
    ],
  },
  "prickly-pear-seed-oil": {
    ...productsData.en["prickly-pear-seed-oil"],
    bannerTitle: "Fournisseur d'Huile de Pépins de Figue de Barbarie en Gros",
    title: "Huile de Pépins de Figue de Barbarie Bio en Gros",
    badge: "Ultra-Premium • Teneur Exceptionnelle en Vitamine E",
    subtitle: "L'élixir anti-âge le plus rare et recherché au monde, 100% pressé à froid à partir de graines de figue de barbarie marocaines.",
    shortDesc: "Puissance antioxydante inégalée avec plus de 1000 mg/kg de vitamine E naturelle. L'actif de référence pour les cernes, ridules et la fermeté de la peau.",
    highlights: [
      "Plus de 1000 mg/kg de Vitamine E naturelle (record mondial)",
      "Ultra-riche en Vitamine K contre les cernes et poches sous les yeux",
      "100% Pure, non raffinée, pressée mécaniquement à froid des graines",
      "Certifiée ISO 22716 and ECOCERT Biologique avec CoA et FDS",
      "Absorption ultra-rapide sans aucun fini gras, effet tenseur immédiat",
    ],
    packagingPills: [
      "Flacons 500ml / 1L",
      "Bidons 5L / 25L",
      "Fûts Industriels 200L",
      "Flacons Verre Luxe Sérigraphiés (15ml / 30ml / 50ml)",
    ],
    story: {
      tag: "HÉRITAGE and PRODUCTION",
      title: "L'Élixir Cosmétique le Plus Précieux au Monde",
      paragraphs: [
        "L'extraction de l'huile de pépins de figue de barbarie est le processus le plus minutieux de la cosmétique végétale. Il faut près d'une tonne de figues de barbarie pour extraire à froid un seul litre de cette huile miraculeuse.",
        "Cultivées sans pesticides dans les zones arides du Sud marocain (Aït Baamrane), les graines sont lavées et séchées au soleil avant d'être pressées à basse vitesse pour ne dégrader aucun des précieux phytostérols.",
      ],
    },
    howToUse: [
      { step: "01", title: "Nettoyage du Soir", desc: "Nettoyer soigneusement le visage avant le coucher pour profiter du cycle de renouvellement cellulaire nocturne." },
      { step: "02", title: "Cibler le Contour des Yeux", desc: "Déposer 1 à 2 gouttes sur l'annulaire et tapoter délicatement sur la zone périorbitaire et les ridules." },
      { step: "03", title: "Lisser les Lignes", desc: "Étendre sur le front, les sillons nasogéniens, le cou et le décolleté jusqu'à absorption complète." },
      { step: "04", title: "Réveil Éclatant", desc: "Découvrir au réveil une peau repulpée, un regard reposé et des cernes visiblement estompés." },
    ],
  },
  "moroccan-black-soap": {
    ...productsData.en["moroccan-black-soap"],
    bannerTitle: "Fournisseur d'Authentique Savon Noir Marocain en Gros",
    title: "Authentique Savon Noir Marocain (Savon Beldi) en Gros",
    badge: "Rituel Hammam Traditionnel • 100% Végétal",
    subtitle: "Pâte savonneuse artisanale élaborée à base d'olives noires marocaines macérées et d'huiles végétales pures.",
    shortDesc: "Le cœur du rituel ancestral du hammam marocain. Prépare la peau à un gommage enzymatique profond, la laissant incroyablement douce, purifiée et satinée.",
    highlights: [
      "Pâte 100% végétale à base d'olives noires macérées et d'huile d'olive",
      "Saponification traditionnelle à chaud à la potasse végétale",
      "Gommage enzymatique naturel sans grains abrasifs agressifs",
      "Déclinaisons : Nature, Eucalyptus, Huile d'Argan, Lavande, Rose",
      "Certifié ISO 22716, 100% biodégradable et testé dermatologiquement",
    ],
    packagingPills: [
      "Pots Cosmétiques 200g / 500g",
      "Seaux Professionnels 1kg / 5kg",
      "Seaux Industriels 10kg / 25kg",
      "Fûts Vrac 200L",
      "Coffrets Hammam Clés en Main avec Gants Kessa",
    ],
    story: {
      tag: "HÉRITAGE and PRODUCTION",
      title: "Savon Beldi — Le Véritable Savon Noir Marocain",
      paragraphs: [
        "Le Savon Beldi est la pierre angulaire des bains maures depuis des siècles. Contrairement aux gels moussants chimiques, c'est une pâte onctueuse obtenue par saponification complète d'olives noires écrasées et d'huile d'olive pure.",
        "Appliquée sur peau chaude et détendue par la vapeur, elle ramollit les cellules mortes. Avec le gant de crêpe Kessa traditionnel, les impuretés se détachent par simples frictions sans jamais irriter l'épiderme.",
      ],
    },
    howToUse: [
      { step: "01", title: "Chauffer la Peau", desc: "Prendre une douche chaude ou rester 5 à 10 minutes au hammam pour ouvrir les pores." },
      { step: "02", title: "Appliquer la Pâte", desc: "Étaler une fine couche de savon noir sur l'ensemble du corps humide en massant légèrement." },
      { step: "03", title: "Laisser Agir 5-10 Min", desc: "Laisser les enzymes d'olive ramollir les peaux mortes dans la chaleur du bain." },
      { step: "04", title: "Gommer au Gant Kessa", desc: "Rincer abondamment à l'eau tiède, puis frotter énergiquement avec le gant Kessa humide." },
    ],
  },
  "natural-skincare-products": {
    ...productsData.en["natural-skincare-products"],
    bannerTitle: "Fabricant de Soins Cosmétiques Naturels en Marque Blanche",
    title: "Produits Cosmétiques Naturels and Soins Cheveux en Marque Blanche",
    badge: "Formulations Clés en Main • OEM / ODM",
    subtitle: "Crèmes de jour, sérums anti-âge, shampoings sans sulfates et soins capillaires aux précieux actifs marocains.",
    shortDesc: "Des formules cosmétiques haute performance combinant la richesse des trésors botaniques du Maroc et les normes de la cosmétique propre moderne.",
    highlights: [
      "Fabrication intégrale OEM/ODM clé en main de la formule à l'étui fini",
      "Formulé avec de l'argan bio, figue de barbarie, karité et romarin",
      "Fabriqué en salles blanches certifiées ISO 22716 BPF Cosmétique",
      "Formules propres : sans sulfates, sans parabènes, non testées sur animaux",
      "Dossiers réglementaires complets : CPNP, FDA, CoA et FDS fournis",
    ],
    packagingPills: [
      "Flacons Airless 30ml / 50ml",
      "Pots Verre Dépoli 50g / 100g",
      "Flacons Shampoing 250ml / 500ml",
      "Tubes and Flacons Pompe Aluminium",
      "Étuis Cartonnés Personnalisés",
    ],
    story: {
      tag: "HÉRITAGE and PRODUCTION",
      title: "La Botanique Marocaine au Service de la Cosmétique Propre",
      paragraphs: [
        "Le Maroc regorge de plantes aux propriétés de survie exceptionnelles : arganiers centenaires, figuiers de barbarie du désert, verveine odorante et romarin sauvage de l'Atlas.",
        "Notre laboratoire associe ces trésors indigènes aux standards de la cosmétique naturelle contemporaine pour concevoir des gammes raffinées, stables et hautement concentrées en principes actifs.",
      ],
    },
    howToUse: [
      { step: "01", title: "Nettoyer", desc: "Commencer avec un gel nettoyant doux sans sulfates pour purifier l'épiderme sans dessécher." },
      { step: "02", title: "Tonifier", desc: "Vaporiser une brume d'eau de rose marocaine pure pour rééquilibrer le microbiome cutané." },
      { step: "03", title: "Traiter", desc: "Masser 2 pressions de sérum actif ou de crème hydratante sur le visage et le décolleté." },
      { step: "04", title: "Sceller l'Éclat", desc: "Appliquer une goutte d'huile d'argan ou de figue de barbarie pour sceller l'hydratation." },
    ],
  },
  "ghassoul-traditional-powders": {
    ...productsData.en["ghassoul-traditional-powders"],
    bannerTitle: "Fournisseur d'Argile Ghassoul, Nila Bleu and Aker Fassi en Gros",
    title: "Argile Ghassoul, Poudre de Nila Bleu and Aker Fassi en Gros",
    badge: "Poudres Botaniques and Minérales • 100% Naturel",
    subtitle: "Argile saponifère pure des montagnes de l'Atlas, poudre éclaircissante de Nila bleu saharien et véritable Aker Fassi en vrac.",
    shortDesc: "Poudres traditionnelles marocaines prisées pour la détoxification cutanée, l'uniformisation du teint et le maquillage naturel. Zéro additif chimique.",
    highlights: [
      "Argile saponifère unique au monde extraite des gisements de l'Atlas",
      "Véritable poudre de Nila bleu saharien pour l'éclat et l'anti-taches",
      "Aker Fassi traditionnel aux pétales de coquelicots et grenade",
      "Analysé sans métaux lourds, contrôlé microbiologiquement et pur à 100%",
      "Disponible en plaquettes brutes, poudre micronisée ou pâtes prêtes à l'emploi",
    ],
    packagingPills: [
      "Sachets Doypack Zip 100g / 250g",
      "Sacs Kraft 1kg / 5kg",
      "Sacs Industriels 25kg",
      "Fûts Étanches 50kg",
      "Pots de Pâte de Ghassoul Prête à l'Emploi",
    ],
    story: {
      tag: "HÉRITAGE and PRODUCTION",
      title: "Trésors Géologiques et Botaniques de l'Atlas et du Sahara",
      paragraphs: [
        "Extrait exclusivement de la vallée de la Moulouya dans l'Atlas marocain, le Ghassoul (du verbe 'Rassala', laver) est utilisé depuis plus de douze siècles pour nettoyer délicatement la peau et les cheveux.",
        "Associé au Nila bleu — secret de beauté des femmes nomades du Sahara pour illuminer le teint — et à l'Aker Fassi ancestral, nos poudres représentent la quintessence des rituels traditionnels orientaux.",
      ],
    },
    howToUse: [
      { step: "01", title: "Doser and Mélanger", desc: "Déposer 2 cuillères de poudre de Ghassoul dans un bol et ajouter de l'eau de rose tiède." },
      { step: "02", title: "Obtenir la Pâte", desc: "Mélanger avec une spatule en bois jusqu'à obtenir une pâte lisse. Ajouter une pincée de Nila." },
      { step: "03", title: "Appliquer", desc: "Étaler en couche uniforme sur le visage, le corps ou les cheveux. Laisser poser 10 à 15 minutes." },
      { step: "04", title: "Rincer à l'Eau Tiède", desc: "Rincer abondamment à l'eau tiède en massant légèrement, puis nourrir la peau à l'huile d'argan." },
    ],
  },
  "floral-waters-accessories": {
    ...productsData.en["floral-waters-accessories"],
    bannerTitle: "Fournisseur d'Eau de Rose, Fleur d'Oranger and Accessoires Hammam en Gros",
    title: "Eau de Rose de Damas Pure, Fleur d'Oranger and Accessoires de Hammam",
    badge: "Distillation Artisanale • Vallée des Roses",
    subtitle: "Hydrolats 100% purs de Kelaat M'Gouna et gants de gommage Kessa traditionnels pour professionnels et particuliers.",
    shortDesc: "Eaux florales précieuses distillées à la vapeur, riches en micro-gouttelettes d'huiles essentielles. Accompagnées des véritables gants Kessa pour un bien-être complet.",
    highlights: [
      "Hydrolat 100% distillé à la vapeur de roses Damascena fraîches cueillies à l'aube",
      "Sans aucun alcool ajouté, sans parfum artificiel, sans conservateurs chimiques",
      "Gants de gommage Kessa authentiques en crêpe tissée haute densité",
      "Restaure le pH physiologique et resserre les pores avec une douceur remarquable",
      "Contrôlé microbiologiquement et certifié ISO 22716 avec CoA et FDS complets",
    ],
    packagingPills: [
      "Flacons Brumisateurs Spray 100ml / 250ml",
      "Bidons Alimentaires 5L / 25L",
      "Fûts Industriels 200L",
      "Gants Kessa (Lots de 50 / 100 / 500 avec bandeaux personnalisés)",
    ],
    story: {
      tag: "HÉRITAGE and PRODUCTION",
      title: "Pétales Cueillis à l'Aube dans la Vallée des Roses",
      paragraphs: [
        "Chaque printemps, la vallée du Dadès au Maroc s'embrase de milliers de roses parfumées. À Kelaat M'Gouna, la cueillette se fait manuellement dès l'aube, lorsque la rosée préserve les molécules odorantes les plus fragiles.",
        "Notre alambic en cuivre permet une distillation lente à basse température qui conserve les actifs hydrosolubles et la fraîcheur pure de la fleur. Associé aux gants de Kessa traditionnels, c'est l'incontournable du bien-être marocain.",
      ],
    },
    howToUse: [
      { step: "01", title: "Nettoyer", desc: "Nettoyer la peau à l'eau claire ou après un gommage au savon noir." },
      { step: "02", title: "Brumiser", desc: "Vaporiser l'eau florale directement sur l'ensemble du visage et du décolleté." },
      { step: "03", title: "Faire Pénétrer", desc: "Tapoter légèrement avec la pulpe des doigts pour rééquilibrer le film cutané." },
      { step: "04", title: "Gommage Hebdomadaire", desc: "Utiliser le gant Kessa humidifié sur peau chaude pour faire peau neuve chaque semaine." },
    ],
  },
};

// Arabic translations
productsData.ar = {
  "argan-oil-wholesale": {
    ...productsData.en["argan-oil-wholesale"],
    bannerTitle: "المورد المعتمد لزيت الأركان المغربي الأصيل بالجملة",
    title: "زيت الأركان المغربي العضوي النقي 100٪ بالجملة",
    badge: "الأكثر طلباً • معتمد ECOCERT و ISO",
    subtitle: "زيت بكر ممتاز معصور على البارد من لوز الأركان المغربي للتركيبات التجميلية والعلامات التجارية الخاصة.",
    shortDesc: "زيت أركان نقي 100٪، عضوي وغني بالعناصر الغذائية الأساسية. المعيار الذهبي لترطيب البشرة وسيرومات محاربة التجاعيد وعلاج الشعر التالف.",
    highlights: [
      "عصر ميكانيكي أول على البارد 100٪ (بكر ممتاز)",
      "حصاد مستدام من محميات الأركان التابعة لليونسكو بسوس ماسة",
      "معتمد وفق معايير ISO 22716 GMP و ECOCERT العضوية",
      "ملف تحاليل مخبرية كامل (CoA و SDS) مع كل شحنة",
      "شحن سريع بحري وجوي من الباب إلى الباب لجميع أنحاء العالم",
    ],
    packagingPills: [
      "جالونات 1 لتر / 5 لتر",
      "جالونات 25 لتر بالجملة",
      "براميل حديدية 200 لتر",
      "خزانات صناعية IBC 1000 لتر",
      "زجاجات قطارة بالعلامة الخاصة (30 مل / 50 مل)",
    ],
    story: {
      tag: "الأصالة والإنتاج",
      title: "الذهب السائل — سر الجمال المغربي الخالد",
      paragraphs: [
        "منذ قرون، تجمع النساء الأمازيغيات لوز شجر الأركان المتوطن في جبال وسهول الجنوب المغربي. لُقب هذا الزيت الثمين بـ 'الذهب السائل' لكونه سر نضارة البشرة وشبابها عبر الأجيال.",
        "نجمع في مصنعنا بين هذا الإرث التقليدي وأحدث معايير العصر الميكانيكي على البارد تحت 40 درجة مئوية بدون أي مذيبات، لنحافظ على كامل فيتامين E الطبيعي والأحماض الدهنية غير المشبعة.",
      ],
    },
    howToUse: [
      { step: "01", title: "تنظيف البشرة", desc: "اغسلي الوجه أو الشعر جيداً، واتركي البشرة رطبة قليلاً بماء الورد المغربي لتسهيل الامتصاص." },
      { step: "02", title: "تدفئة القطرات", desc: "ضعي 2 إلى 3 قطرات على أطراف أصابعك وافركيها بلطف لتنشيط المكونات الفعالة." },
      { step: "03", title: "التدليك اللطيف", desc: "دلكي بحركات دائرية تصاعدية على الوجه، الرقبة، أو أطراف الشعر المتقصفة." },
      { step: "04", title: "روتين يومي", desc: "استخدميه صباحاً كحاجز حماية طبيعي وليلاً كعلاج مكثف لمكافحة التجاعيد وترميم الخلايا." },
    ],
  },
  "prickly-pear-seed-oil": {
    ...productsData.en["prickly-pear-seed-oil"],
    bannerTitle: "المورد المباشر لزيت بذور التين الشوكي المغربي بالجملة",
    title: "زيت بذور التين الشوكي المغربي العضوي النقي بالجملة",
    badge: "الزيت الأغلى عالمياً • تركيز فائق لفيتامين E",
    subtitle: "إكسير الشباب الطبيعي ومكافحة الشيخوخة، معصور ميكانيكياً على البارد من ملايين بذور الصبار المغربي.",
    shortDesc: "قوة مضادة للأكسدة لا تُضاهى مع أكثر من 1000 ملغ/كغ من فيتامين E الطبيعي. المكون السحري للهالات السوداء والخطوط التعبيرية ونضارة البشرة.",
    highlights: [
      "أكثر من 1000 ملغ/كغ من فيتامين E الطبيعي (الأعلى في عالم النبات)",
      "غني بفيتامين K لعلاج فوري للهالات السوداء وانتفاخ تحت العينين",
      "نقي 100٪ بدون تكرير، معصور ميكانيكياً على البارد من البذور فقط",
      "معتمد بشهادات ISO 22716 و ECOCERT العضوية مع تقارير الفحص",
      "امتصاص سريع بلمسة جافة مخملية وقوة شد فائقة للبشرة",
    ],
    packagingPills: [
      "عبوات 500 مل / 1 لتر",
      "جالونات 5 لتر / 25 لتر",
      "براميل صناعية 200 لتر",
      "قطارات زجاجية فاخرة بالعلامة الخاصة (15 مل / 30 مل / 50 مل)",
    ],
    story: {
      tag: "الأصالة والإنتاج",
      title: "أثمن إكسير تجميلي في العالم",
      paragraphs: [
        "استخراج زيت بذور التين الشوكي هو العملية الأكثر دقة وصعوبة في عالم الزيوت النباتية، إذ يتطلب استخلاص لتر واحد عصر ما يقرب من طن كامل من ثمار الصبار الشوكي.",
        "تُزرع الثمار في بيئة طبيعية خالية من المبيدات بجنوب المغرب (آيت باعمران)، وتُفصل البذور يدوياً وتُجفف تحت أشعة الشمس قبل عصرها على البارد بدون أي حرارة للحفاظ على الستيرولات الثمينة.",
      ],
    },
    howToUse: [
      { step: "01", title: "تنظيف ليلي", desc: "نظفي وجهك جيداً قبل النوم للاستفادة من دورة تجدد خلايا البشرة الليلية." },
      { step: "02", title: "محيط العينين", desc: "ضعي قطرة إلى قطرتين على إصبع البنصر وربتي بلطف حول عظام محيط العين والخطوط الدقيقة." },
      { step: "03", title: "شد الجبين والرقبة", desc: "امسحي باقي الزيت بلطف على الجبين، خطوط الابتسامة، والرقبة حتى الامتصاص التام." },
      { step: "04", title: "إشراقة الصباح", desc: "استيقظي على بشرة مشدودة، خالية من الانتفاخات، وهالات سوداء متلاشية بشكل ملحوظ." },
    ],
  },
  "moroccan-black-soap": {
    ...productsData.en["moroccan-black-soap"],
    bannerTitle: "المورد المباشر للصابون البلدي المغربي التقليدي بالجملة",
    title: "الصابون البلدي المغربي التقليدي الأصيل بالجملة",
    badge: "طقوس الحمام المغربي • طبيعي نباتي 100٪",
    subtitle: "صابون عجيني تقليدي مصنوع من الزيتون الأسود المهروس وزيت الزيتون البكر ومستخلصات الأعشاب.",
    shortDesc: "أساس طقوس الحمام المغربي الأصيل. يلين البشرة بعمق ويزيل خلايا الجلد الميتة بسهولة تامة مع قفاز الكيسة ليمنح الجسم نعومة حريرية.",
    highlights: [
      "معجون نباتي 100٪ من لب الزيتون الأسود وزيت الزيتون البكر",
      "تصبين تقليدي على الساخن بالبوتاس الطبيعي المستخلص من النباتات",
      "تقشير إنزيمي طبيعي بدون حبيبات بلاستيكية أو كيميائية خشنة",
      "متوفر طبيعي، بالأوكالبتوس (الكاليبتوس)، بزيت الأركان، أو اللافندر",
      "معتمد ISO 22716، قابل للتحلل الحيوي 100٪ ومفحوص مخبرياً",
    ],
    packagingPills: [
      "برطمانات تجميلية 200غ / 500غ",
      "سطول مهنية للسبا 1 كغ / 5 كغ",
      "سطول صناعية 10 كغ / 25 كغ",
      "براميل تصدير 200 لتر",
      "أطقم حمام جاهزة مع قفازات الكيسة بالشعار الخاص",
    ],
    story: {
      tag: "الأصالة والإنتاج",
      title: "الصابون البلدي — جوهر الحمام المغربي",
      paragraphs: [
        "يُعد الصابون البلدي الركيزة الأساسية في طقوس الحمام المغربي العريق منذ قرون. على عكس أنواع الصابون التجارية، فهو معجون نباتي غني يُصنع بتصبين الزيتون الأسود وزيت الزيتون الصافي.",
        "عند فرده على البشرة الدافئة بفعل بخار الحمام، يتفاعل مع طبقة الخلايا الميتة ويفكك الروابط التي تحبس الشوائب في المسام، ليتم تقشيرها بسهولة تامة بواسطة قفاز الكيسة المغربي تاركاً الجسم فائق النعومة.",
      ],
    },
    howToUse: [
      { step: "01", title: "تدفئة الجسم", desc: "اجلسي في حمام بخار أو استحمي بماء دافئ لمدة 5 إلى 10 دقائق لتفتيح المسامات." },
      { step: "02", title: "فرد الصابون", desc: "خذي مقدار ملعقة وافردي طبقة رقيقة من الصابون الأسود على كامل الجسم المبلل." },
      { step: "03", title: "الانتظار 5-10 دقائق", desc: "اتركي الصابون يتغلغل لتليين خلايا الجلد الميتة بفعل الزيوت الطبيعية." },
      { step: "04", title: "الفرك بالكيسة", desc: "اغسلي الجسم بالماء الدافئ كلياً، ثم افركي بحركات طولية بواسطة قفاز الكيسة المبلل." },
    ],
  },
  "natural-skincare-products": {
    ...productsData.en["natural-skincare-products"],
    bannerTitle: "مصنع مستحضرات التجميل والعناية المغربية بالعلامة الخاصة",
    title: "تركيبات العناية الطبيعية بالبشرة والشعر بعلامتك التجارية",
    badge: "حلول تصنيع متكاملة • OEM / ODM",
    subtitle: "كريمات للوجه، سيرومات مكافحة الشيخوخة، شامبوهات خالية من الكبريتات وعلاجات للشعر بالمكونات المغربية.",
    shortDesc: "تركيبات تجميلية متطورة تجمع بين كنوز الطبيعة المغربية وأحدث معايير التجميل النظيف العالمية لإطلاق علامتك التجارية بنجاح.",
    highlights: [
      "تصنيع متكامل OEM/ODM من تطوير التركيبة في المختبر حتى العلبة النهائية",
      "مُعزز بزيت الأركان العضوي، التين الشوكي، زبدة الشيا، وإكليل الجبل",
      "مصنع في غرف بيضاء نقية مطابقة لمعايير ISO 22716 GMP",
      "تركيبات نظيفة: خالية من السلفات، البارابين، ولم تختبر على الحيوانات",
      "ملفات مطابقة كاملة للتصدير: CPNP الأوروبي، FDA الأمريكي، CoA و SDS",
    ],
    packagingPills: [
      "عبوات مضخة Airless بحجم 30 مل / 50 مل",
      "برطمانات زجاج مثلج 50غ / 100غ",
      "شامبو وبلسم 250 مل / 500 مل",
      "أنابيب وعبوات ألمنيوم فاخرة",
      "علب كرتونية فاخرة بطباعة مخصصة",
    ],
    story: {
      tag: "الأصالة والإنتاج",
      title: "التراث النباتي المغربي يلتقي بأحدث علوم التجميل",
      paragraphs: [
        "يزخر المغرب بنباتات استثنائية قاومت أقسى الظروف المناخية: شجر الأركان الصامد، صبار التين الشوكي الصحراوي، اللويزة العطرية، وإكليل الجبل البري.",
        "تجمع مختبراتنا بين هذه المستخلصات الطبيعية ومعايير التجميل النظيف العالمية لابتكار مستحضرات فاخرة وسريعة الامتصاص تمنح نتائج ملموسة للبشرة والشعر.",
      ],
    },
    howToUse: [
      { step: "01", title: "الغسيل اللطيف", desc: "نظفي وجهك بغسول مغربي خفيف خالٍ من الكبريتات لحماية الحاجز الدهني للبشرة." },
      { step: "02", title: "التهيئة بالتونر", desc: "رشي رذاذ ماء الورد المغربي النقي لموازنة درجة الحموضة وتهيئة المسام." },
      { step: "03", title: "تطبيق العلاج", desc: "دلكي ضختين من السيروم أو الكريم الفعال على بشرة الوجه والرقبة بالتساوي." },
      { step: "04", title: "تثبيت الرطوبة", desc: "اختمي الروتين بقطرة من زيت الأركان أو التين الشوكي لحبس الترطيب داخل الخلايا." },
    ],
  },
  "ghassoul-traditional-powders": {
    ...productsData.en["ghassoul-traditional-powders"],
    bannerTitle: "مورد الغاسول المغربي والنيلة الزرقاء والعكر الفاسي بالجملة",
    title: "الطين المغربي (الغاسول)، النيلة الزرقاء والعكر الفاسي بالجملة",
    badge: "مساحيق طبيعية أصيلة • نقية 100٪",
    subtitle: "طين الأطلس البركاني المنقي، نيلة الصحراء المغربية لتفتيح البشرة، والعكر الفاسي الأصيل من بتلات شقائق النعمان.",
    shortDesc: "مساحيق مغربية تقليدية مشهورة بتنقية البشرة وإزالة السموم وتفتيح التصبغات وتوريد الشفاه. طبيعية 100٪ خالية من الإضافات الكيميائية.",
    highlights: [
      "طين بركاني منظف فريد في العالم يُستخرج حصرياً من جبال الأطلس",
      "نيلة صحراوية زرقاء طبيعية 100٪ لتفتيح فوري وإزالة التصبغات",
      "عكر فاسي مغربي أصيل من بتلات شقائق النعمان وقشور الرمان",
      "مفحوص ضد المعادن الثقيلة ومضبوط ميكروبيولوجياً بدون أي مواد حافظة",
      "متوفر كرقائق خام، مسحوق مطحون دقيق، أو معجون غاسول جاهز",
    ],
    packagingPills: [
      "أكياس كرافت بسحاب 100غ / 250غ",
      "أكياس كرافت 1 كغ / 5 كغ",
      "أكياس صناعية 25 كغ",
      "براميل محكمة الإغلاق 50 كغ",
      "برطمانات معجون غاسول مجهز بماء الورد",
    ],
    story: {
      tag: "الأصالة والإنتاج",
      title: "كنوز جيولوجية وعشبية من قمم الأطلس ورمال الصحراء",
      paragraphs: [
        "يُستخرج الغاسول (من كلمة 'غَسَلَ') حصرياً من وادي ملوية في جبال الأطلس المغربية، واستُخدم لأكثر من 1200 عام لتنظيف وتنعيم البشرة والشعر بفضل خاصية التبادل الأيوني الطبيعية.",
        "وبإضافة النيلة الزرقاء الصحراوية التي اشتهرت بها نساء البادية لحماية البشرة وتفتيحها، والعكر الفاسي البربري النادر، تشكل هذه المساحيق جوهر العناية التقليدية الأصيلة.",
      ],
    },
    howToUse: [
      { step: "01", title: "الكيل والخلط", desc: "ضعي ملعقتين من مسحوق الغاسول في وعاء خشبي أو فخاري، وأضيفي ماء الورد الدافئ." },
      { step: "02", title: "تكوين المعجون", desc: "اخلطي بملعقة خشبية حتى تحصلي على معجون حريري، وأضيفي رشة من النيلة الزرقاء." },
      { step: "03", title: "الفرد بالتساوي", desc: "افردي الماسك بالتساوي على الوجه أو الشعر أو الجسم، واتركيه 10 إلى 15 دقيقة قبل أن يجف تماماً." },
      { step: "04", title: "الشطف بالماء الدافئ", desc: "اشطفي بالماء الدافئ بحركات دائرية خفيفة لتقشير البشرة، ثم رطبي بزيت الأركان." },
    ],
  },
  "floral-waters-accessories": {
    ...productsData.en["floral-waters-accessories"],
    bannerTitle: "مورد ماء الورد المقطر، ماء الزهر وقفازات الكيسة بالجملة",
    title: "ماء الورد الدمشقي النقي، ماء زهر البرتقال وإكسسوارات الحمام",
    badge: "تقطير بالبخار • وادي الورود بقلعة مكونة",
    subtitle: "مياه عطرية مقطرة طبيعياً 100٪ وقفازات الكيسة المغربية الأصلية للتقشير لمراكز السبا والماركات التجارية.",
    shortDesc: "مياه أزهار نقية مقطرة بالبخار مشبعة بقطرات الزيوت الأساسية، مع قفازات الكيسة المغربية الممتازة لتجربة استرخاء وعناية استثنائية.",
    highlights: [
      "ماء مقطر 100٪ بالبخار التقليدي من ورد دمشقي طازج مقطوف عند الفجر",
      "خالٍ تماماً من الكحول المضاف، العطور الصناعية، والمواد الحافظة",
      "قفازات كيسة مغربية تقليدية من قماش الكريب المحبوك عالي الجودة",
      "يعيد توازن حموضة البشرة الطبيعية ويقبض المسامات بنعومة فائقة",
      "مفحوص ميكروبيولوجياً ومعتمد ISO 22716 مع تقارير التحليل والسلامة",
    ],
    packagingPills: [
      "عبوات بخاخ رذاذ 100 مل / 250 مل",
      "جالونات غذائية 5 لتر / 25 لتر",
      "براميل تصدير 200 لتر",
      "قفازات كيسة (رزم 50 / 100 / 500 مع شريط الشعار الخاص)",
    ],
    story: {
      tag: "الأصالة والإنتاج",
      title: "بتلات مقطوفة عند الفجر من وادي الورود (قلعة مكونة)",
      paragraphs: [
        "في كل ربيع، يتحول وادي دادس في قمم الأطلس إلى واحة زهرية تفوح برائحة الورد الدمشقي. في قلعة مكونة، يتم قطف الورد يدوياً قبل شروق الشمس عندما تكون حبات الندى محتفظة بأعلى تركيز عطري.",
        "تتم عملية التقطير في أوانٍ نحاسية تقليدية بالبخار البطيء لتحبس المياه العطرية كامل الزيوت الأساسية المفيدة. ومع قفاز الكيسة المغربي المنسوج بحرفية، نقدم أرقى طقوس العناية والنقاء.",
      ],
    },
    howToUse: [
      { step: "01", title: "التنظيف", desc: "اغسلي بشرة الوجه أو الجسم بالماء النقي أو بعد جلسة الحمام بالصابون البلدي." },
      { step: "02", title: "الرش المنعش", desc: "رشي رذاذ ماء الورد بسخاء على كامل الوجه والرقبة من مسافة 15 سم." },
      { step: "03", title: "التربيت والامتصاص", desc: "ربتي بلطف بأطراف الأصابع لتستفيد البشرة من الخواص المهدئة والمقبضة للمسام." },
      { step: "04", title: "التقشير الأسبوعي", desc: "استخدمي قفاز الكيسة المبلل بحركات تدليك منتظمة للتخلص من خلايا الجلد الميتة أسبوعياً." },
    ],
  },
};

export function getProductBySlug(slug: string, locale: Locale): ProductDetail | undefined {
  const localizedProducts = productsData[locale] || productsData.en;
  return localizedProducts[slug as ProductSlug];
}

export function getAllProducts(locale: Locale): ProductDetail[] {
  const localizedProducts = productsData[locale] || productsData.en;
  return productSlugs.map((slug) => localizedProducts[slug]);
}

export function getAllProductSlugs(): readonly ProductSlug[] {
  return productSlugs;
}
