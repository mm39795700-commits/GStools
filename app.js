/**
 * GStools - Elite Combat Sports E-Commerce Web Application
 * Core Application Engine: Cart, Audio, Particles Canvas, WhatsApp Checkout & Hidden Admin
 */

// ==========================================
// 1. Initial State & Default Catalog
// ==========================================
const DEFAULT_PHONE = "201062397850"; // Format: international without +
const DEFAULT_PIN = "1234";
const DEFAULT_CURRENCY = "ج.م";

const INITIAL_PRODUCTS = [
  // ==========================================
  // --- منتجات حقيقية من كتالوج GStools ---
  // ==========================================

  // --- واقي يد tiger ---
  {
    id: "gs-hand-1495",
    name: "tiger واقي يد",
    nameEn: "tiger gloves",
    category: "hand",
    categoryLabel: "أوقية اليد",
    price: 0,
    oldPrice: null,
    rating: 5,
    reviews: 1,
    badge: "Tiger 🐯",
    badgeType: "gold",
    image: "./WhatsApp Image 2026-10-18 at 12.14.06 AM (2).jpeg",
    sizes: ["12oz", "14oz", "16oz"],
    colors: ["أبيض ونمر", "أسود"],
    description: "",
    inStock: true
  },
  // --- واقي رجل Excalibur ---
  {
    id: "gs-leg-5756",
    name: "واقي رجل Excalibur",
    nameEn: "leg Excalibur",
    category: "leg",
    categoryLabel: "أوقية الرجل",
    price: 0,
    oldPrice: null,
    rating: 5,
    reviews: 1,
    badge: "Excalibur 🛡️",
    badgeType: "gold",
    image: "./WhatsApp Image 2026-10-18 at 12.14.06 AM.jpeg",
    sizes: ["S", "M", "L", "XL"],
    colors: ["أسود وأبيض", "أحمر وأبيض"],
    description: "",
    inStock: true
  },
  // --- واقي رأس Kango ---
  {
    id: "gs-head-4792",
    name: "واقي رأس Kango",
    nameEn: "Kango headgear",
    category: "head",
    categoryLabel: "أوقية الرأس",
    price: 0,
    oldPrice: null,
    rating: 5,
    reviews: 1,
    badge: "Kango 👑",
    badgeType: "gold",
    image: "./WhatsApp Image 2026-10-18 at 12.14.06 AM (1).jpeg",
    sizes: ["S/M", "L/XL"],
    colors: ["أحمر", "أسود", "أزرق"],
    description: "",
    inStock: true
  },
  // --- واقي رجل Excalibur أحمر ---
  {
    id: "gs-leg-9389",
    name: "Excalibur واقي رجل",
    nameEn: "Excalibur leg",
    category: "leg",
    categoryLabel: "أوقية الرجل",
    price: 0,
    oldPrice: null,
    rating: 5,
    reviews: 1,
    badge: "Excalibur Pro 🔥",
    badgeType: "crimson",
    image: "./Gemini_Generated_Image.jpeg",
    sizes: ["S", "M", "L", "XL"],
    colors: ["أحمر وأبيض", "أسود وأبيض"],
    description: "",
    inStock: true
  },
  // --- واقي رأس m.reda ---
  {
    id: "gs-head-1048",
    name: "واقي رأس m.reda",
    nameEn: "m.reda headgear",
    category: "head",
    categoryLabel: "أوقية الرأس",
    price: 0,
    oldPrice: null,
    rating: 5,
    reviews: 1,
    badge: "جديد ⭐",
    badgeType: "gold",
    image: "./Gemini_Generated_Image (15).jpeg",
    sizes: ["S/M", "L/XL"],
    colors: ["أسود", "أحمر", "أزرق"],
    description: "",
    inStock: true
  },
  // --- واقي يد Excalibur ذهبي ---
  {
    id: "gs-hand-1417",
    name: "واقي يد Excalibur",
    nameEn: "gloves Excalibur",
    category: "hand",
    categoryLabel: "أوقية اليد",
    price: 0,
    oldPrice: null,
    rating: 5,
    reviews: 1,
    badge: "Excalibur ⚔️",
    badgeType: "gold",
    image: "./Gemini_Generated_Image (14).jpeg",
    sizes: ["12oz", "14oz", "16oz"],
    colors: ["ذهبي", "أسود"],
    description: "",
    inStock: true
  },
  // --- واقي يد walen ---
  {
    id: "gs-hand-2065",
    name: "walen واقي يد",
    nameEn: "gloves walen",
    category: "hand",
    categoryLabel: "أوقية اليد",
    price: 0,
    oldPrice: null,
    rating: 5,
    reviews: 1,
    badge: "Walen 💪",
    badgeType: "gold",
    image: "./Gemini_Generated_Image (12).jpeg",
    sizes: ["12oz", "14oz", "16oz"],
    colors: ["أزرق", "أسود", "أحمر"],
    description: "",
    inStock: true
  },
  // --- واقي يد twins ---
  {
    id: "gs-hand-9361",
    name: "واقي يد twins",
    nameEn: "gloves twins",
    category: "hand",
    categoryLabel: "أوقية اليد",
    price: 0,
    oldPrice: null,
    rating: 5,
    reviews: 1,
    badge: "Twins Special 🥊",
    badgeType: "gold",
    image: "./Gemini_Generated_Image (11).jpeg",
    sizes: ["12oz", "14oz", "16oz"],
    colors: ["أسود ذهبي", "أحمر", "أزرق"],
    description: "",
    inStock: true
  },
  // --- واقي يد Excalibur أزرق ---
  {
    id: "gs-hand-3900",
    name: "واقي يد Excalibur أزرق",
    nameEn: "gloves Excalibur Blue",
    category: "hand",
    categoryLabel: "أوقية اليد",
    price: 0,
    oldPrice: null,
    rating: 5,
    reviews: 1,
    badge: "Excalibur ⚔️",
    badgeType: "gold",
    image: "./Gemini_Generated_Image (10).jpeg",
    sizes: ["12oz", "14oz", "16oz"],
    colors: ["أزرق", "أسود"],
    description: "",
    inStock: true
  },
  // --- واقي يد tiger أسود ---
  {
    id: "gs-hand-6931",
    name: "واقي يد tiger",
    nameEn: "gloves tiger",
    category: "hand",
    categoryLabel: "أوقية اليد",
    price: 0,
    oldPrice: null,
    rating: 5,
    reviews: 1,
    badge: "Tiger 🐯",
    badgeType: "crimson",
    image: "./Gemini_Generated_Image (9).jpeg",
    sizes: ["12oz", "14oz", "16oz"],
    colors: ["أسود", "أحمر"],
    description: "",
    inStock: true
  },
  // --- واقي يد Excalibur ---
  {
    id: "gs-hand-1641",
    name: "واقي يد Excalibur",
    nameEn: "gloves Excalibur",
    category: "hand",
    categoryLabel: "أوقية اليد",
    price: 0,
    oldPrice: null,
    rating: 5,
    reviews: 1,
    badge: "Excalibur ⚔️",
    badgeType: "gold",
    image: "./Gemini_Generated_Image (6).jpeg",
    sizes: ["12oz", "14oz", "16oz"],
    colors: ["أحمر", "أسود", "أزرق"],
    description: "",
    inStock: true
  },
  // --- واقي يد ---
  {
    id: "gs-hand-4490",
    name: "واقي يد",
    nameEn: "gloves",
    category: "hand",
    categoryLabel: "أوقية اليد",
    price: 0,
    oldPrice: null,
    rating: 5,
    reviews: 1,
    badge: "جديد ⭐",
    badgeType: "gold",
    image: "./Gemini_Generated_Image (5).jpeg",
    sizes: ["12oz", "14oz", "16oz"],
    colors: ["أسود", "أحمر", "ذهبي"],
    description: "",
    inStock: true
  },
  // --- واقي يد ---
  {
    id: "gs-hand-3473",
    name: "واقي يد",
    nameEn: "gloves",
    category: "hand",
    categoryLabel: "أوقية اليد",
    price: 0,
    oldPrice: null,
    rating: 5,
    reviews: 1,
    badge: "جديد ⭐",
    badgeType: "gold",
    image: "./Gemini_Generated_Image (4).jpeg",
    sizes: ["12oz", "14oz", "16oz"],
    colors: ["أسود", "أزرق"],
    description: "",
    inStock: true
  },
  // --- واقي رجل Excalibur ---
  {
    id: "gs-leg-1723",
    name: "واقي رجل Excalibur",
    nameEn: "Excalibur leg",
    category: "leg",
    categoryLabel: "أوقية الرجل",
    price: 0,
    oldPrice: null,
    rating: 5,
    reviews: 1,
    badge: "Excalibur 🛡️",
    badgeType: "gold",
    image: "./Gemini_Generated_Image (3).jpeg",
    sizes: ["S", "M", "L", "XL"],
    colors: ["أسود وأبيض", "أحمر وأبيض"],
    description: "",
    inStock: true
  },
  // --- classic واقي يد ---
  {
    id: "gs-hand-0525",
    name: "classic واقي يد",
    nameEn: "classic gloves",
    category: "hand",
    categoryLabel: "أوقية اليد",
    price: 0,
    oldPrice: null,
    rating: 5,
    reviews: 1,
    badge: "Classic 🥊",
    badgeType: "gold",
    image: "./Gemini_Generated_Image (2).jpeg",
    sizes: ["12oz", "14oz", "16oz"],
    colors: ["أسود وأبيض", "أحمر وأسود"],
    description: "",
    inStock: true
  },
  // --- واقي يد twins ---
  {
    id: "gs-hand-8130",
    name: "واقي يد twins",
    nameEn: "twins gloves",
    category: "hand",
    categoryLabel: "أوقية اليد",
    price: 0,
    oldPrice: null,
    rating: 5,
    reviews: 1,
    badge: "Twins Special 🥊",
    badgeType: "gold",
    image: "./Gemini_Generated_Image (1).jpeg",
    sizes: ["12oz", "14oz", "16oz"],
    colors: ["أسود", "أحمر", "أزرق"],
    description: "",
    inStock: true
  },
  // --- واقي Excalibur Gold-Dot ---
  {
    id: "gs-hand-5185",
    name: "واقي Excalibur Gold-Dot",
    nameEn: "Excalibur Gold-Dot Boxing Glove",
    category: "hand",
    categoryLabel: "أوقية اليد",
    price: 0,
    oldPrice: null,
    rating: 5,
    reviews: 1,
    badge: "Gold Dot ✨",
    badgeType: "gold",
    image: "./Excalibur Gold-Dot Boxing Glove.png",
    sizes: ["12oz", "14oz", "16oz"],
    colors: ["أسود ذهبي"],
    description: "",
    inStock: true
  },
  // --- واقي Excalibur Fight Better ---
  {
    id: "gs-hand-3418",
    name: "واقي Excalibur Fight Better",
    nameEn: "Excalibur Fight Better Boxing Glove",
    category: "hand",
    categoryLabel: "أوقية اليد",
    price: 0,
    oldPrice: null,
    rating: 5,
    reviews: 1,
    badge: "Fight Better ⚔️",
    badgeType: "crimson",
    image: "./Excalibur Fight Better Boxing Glove.png",
    sizes: ["12oz", "14oz", "16oz"],
    colors: ["أحمر", "أزرق"],
    colorImages: {
      "أحمر": "./Red Excalibur Boxing Glove.png",
      "أزرق": "./Blue Excalibur Boxing Glove.png"
    },
    description: "",
    inStock: true
  },
  // --- واقي Excalibur أزرق ---
  {
    id: "gs-hand-4558",
    name: "واقي Excalibur أزرق",
    nameEn: "Excalibur Blue Boxing Glove",
    category: "hand",
    categoryLabel: "أوقية اليد",
    price: 0,
    oldPrice: null,
    rating: 5,
    reviews: 1,
    badge: "Excalibur Blue 💙",
    badgeType: "gold",
    image: "./Excalibur Blue Boxing Glove.png",
    sizes: ["12oz", "14oz", "16oz"],
    colors: ["أزرق ميتاليك"],
    description: "",
    inStock: true
  },
  // --- Classic Black-and-White Boxing Glove ---
  {
    id: "gs-hand-4938",
    name: "واقي يد كلاسيك",
    nameEn: "Classic Black-and-White Boxing Glove",
    category: "hand",
    categoryLabel: "أوقية اليد",
    price: 0,
    oldPrice: null,
    rating: 5,
    reviews: 1,
    badge: "كلاسيك 🥊",
    badgeType: "gold",
    image: "./Classic Black-and-White Boxing Glove.png",
    sizes: ["12oz", "14oz", "16oz"],
    colors: ["أسود وأبيض"],
    description: "",
    inStock: true
  },
  // --- واقي YALON أزرق ---
  {
    id: "gs-hand-0642",
    name: "واقي YALON أزرق",
    nameEn: "Blue YALON Boxing Glove",
    category: "hand",
    categoryLabel: "أوقية اليد",
    price: 0,
    oldPrice: null,
    rating: 5,
    reviews: 1,
    badge: "YALON 💙",
    badgeType: "gold",
    image: "./Blue YALON Boxing Glove.png",
    sizes: ["12oz", "14oz", "16oz"],
    colors: ["أزرق ملكي"],
    description: "",
    inStock: true
  },
  // --- واقي Excalibur أزرق سماوي ---
  {
    id: "gs-hand-2033",
    name: "واقي Excalibur أزرق",
    nameEn: "Blue Excalibur Boxing Glove",
    category: "hand",
    categoryLabel: "أوقية اليد",
    price: 0,
    oldPrice: null,
    rating: 5,
    reviews: 1,
    badge: "Excalibur 💙",
    badgeType: "gold",
    image: "./Blue Excalibur Boxing Glove.png",
    sizes: ["12oz", "14oz", "16oz"],
    colors: ["أزرق سماوي", "أسود"],
    colorImages: {
      "أزرق سماوي": "./Blue Excalibur Boxing Glove.png",
      "أسود": "./Excalibur Gold-Dot Boxing Glove.png"
    },
    description: "",
    inStock: true
  },
  // --- واقي Top King أسود ---
  {
    id: "gs-hand-5315",
    name: "واقي Top King أسود",
    nameEn: "Black Top King Boxing Glove",
    category: "hand",
    categoryLabel: "أوقية اليد",
    price: 0,
    oldPrice: null,
    rating: 5,
    reviews: 1,
    badge: "Top King 👑",
    badgeType: "gold",
    image: "./Black Top King Boxing Glove.png",
    sizes: ["12oz", "14oz", "16oz"],
    colors: ["أسود ملكي", "أسود وذهبي"],
    colorImages: {
      "أسود ملكي": "./Black Top King Boxing Glove.png",
      "أسود وذهبي": "./Black and Gold Top King Boxing Glove.png"
    },
    description: "",
    inStock: true
  },
  // --- واقي TOPKING أسود ---
  {
    id: "gs-hand-9379",
    name: "واقي TOPKING أسود",
    nameEn: "Black TOPKING Boxing Glove",
    category: "hand",
    categoryLabel: "أوقية اليد",
    price: 0,
    oldPrice: null,
    rating: 5,
    reviews: 1,
    badge: "TOPKING 🔥",
    badgeType: "crimson",
    image: "./Black TOPKING Boxing Glove.png",
    sizes: ["12oz", "14oz", "16oz"],
    colors: ["أسود مطفي"],
    description: "",
    inStock: true
  },
  // --- واقي Excalibur أحمر ---
  {
    id: "gs-hand-8099",
    name: "واقي Excalibur أحمر",
    nameEn: "Red Excalibur Boxing Glove",
    category: "hand",
    categoryLabel: "أوقية اليد",
    price: 0,
    oldPrice: null,
    rating: 5,
    reviews: 1,
    badge: "Excalibur 🔴",
    badgeType: "crimson",
    image: "./Red Excalibur Boxing Glove.png",
    sizes: ["12oz", "14oz", "16oz"],
    colors: ["أحمر قتالي"],
    description: "",
    inStock: true
  },
  // --- واقي Excalibur أبيض ---
  {
    id: "gs-hand-7972",
    name: "واقي Excalibur أبيض",
    nameEn: "White Excalibur Boxing Glove",
    category: "hand",
    categoryLabel: "أوقية اليد",
    price: 0,
    oldPrice: null,
    rating: 5,
    reviews: 1,
    badge: "Excalibur ⚪",
    badgeType: "gold",
    image: "./White Excalibur Boxing Glove (1).png",
    sizes: ["12oz", "14oz", "16oz"],
    colors: ["أبيض"],
    description: "",
    inStock: true
  },
  // --- واقي أبيض وذهبي ---
  {
    id: "gs-hand-1359",
    name: "واقي أبيض وذهبي",
    nameEn: "White and Gold Boxing Glove",
    category: "hand",
    categoryLabel: "أوقية اليد",
    price: 0,
    oldPrice: null,
    rating: 5,
    reviews: 1,
    badge: "أبيض وذهبي 👑",
    badgeType: "gold",
    image: "./White and Gold Boxing Glove.png",
    sizes: ["12oz", "14oz", "16oz"],
    colors: ["أبيض وذهبي"],
    description: "",
    inStock: true
  },
  // --- واقي Top King ذهبي ---
  {
    id: "gs-hand-1565",
    name: "واقي Top King ذهبي",
    nameEn: "Black and Gold Top King Boxing Glove",
    category: "hand",
    categoryLabel: "أوقية اليد",
    price: 0,
    oldPrice: null,
    rating: 5,
    reviews: 1,
    badge: "Top King Gold 👑",
    badgeType: "gold",
    image: "./Black and Gold Top King Boxing Glove.png",
    sizes: ["12oz", "14oz", "16oz"],
    colors: ["أسود وذهبي"],
    description: "",
    inStock: true
  },

  // ==========================================
  // --- منتجات افتراضية أصلية ---
  // ==========================================

  // --- أوقية اليد (Hand Wraps & Gloves) ---
  {
    id: "gs-hand-01",
    name: "قفازات ملاكمة النمر الذهبي GS-Pro Golden Lion",
    nameEn: "GS-Pro Golden Lion Boxing Gloves",
    category: "hand",
    categoryLabel: "أوقية اليد",
    rating: 4.9,
    reviews: 64,
    badge: "الأكثر مبيعاً 🔥",
    badgeType: "gold",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=600&auto=format&fit=crop&q=80",
    description: "قفازات ملاكمة احترافية من الجلد الطبيعي المعزز بتقنية التوزيع الرغوي الثلاثي لامتصاص أقصى الصدمات. معصم مدعم بإغلاق فيلكرو عريض لحماية مضاعفة لمفصل اليد أثناء اللكمات الثقيلة.",
    sizes: ["12oz", "14oz", "16oz"],
    colors: ["أسود ملكي", "ذهبي ميتاليك", "أحمر قتالي"],
    inStock: true
  },
  {
    id: "gs-hand-02",
    name: "قفازات نزال MMA احترافية GS-Beast Striker",
    nameEn: "GS-Beast MMA Sparring Gloves",
    category: "hand",
    categoryLabel: "أوقية اليد",
    rating: 4.8,
    reviews: 42,
    badge: "إصدار النزال ⚔️",
    badgeType: "crimson",
    image: "https://images.unsplash.com/photo-1517438476312-10d79c077509?w=600&auto=format&fit=crop&q=80",
    description: "تصميم كف مفتوح هندسي للسيطرة والتحكم الكامل في الإخضاع وحركات القتال الأرضي، مع حشوة رغوية جل مقولبة لحماية عقلات الأصابع.",
    sizes: ["S/M", "L/XL"],
    colors: ["أسود مطفي", "ذهبي فولاذي"],
    inStock: true
  },
  {
    id: "gs-hand-04",
    name: "قفازات كيك بوكسينغ تدريبية GS-Shadow Venom",
    nameEn: "GS-Shadow Kickboxing Gloves",
    category: "hand",
    categoryLabel: "أوقية اليد",
    rating: 4.7,
    reviews: 31,
    badge: "تهوية ذكية 💨",
    badgeType: "gold",
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=600&auto=format&fit=crop&q=80",
    description: "تتميز بشبكة تهوية كف اليد سريعة الجفاف لتقليل الروائح والتعرق، مع قالب رغوي يمنح اليد وضعية قبضة طبيعية ومريحة تقلل من الإجهاد.",
    sizes: ["10oz", "12oz", "14oz"],
    colors: ["أسود وذهبي", "فضي وأسود", "أحمر قتالي"],
    inStock: true
  },

  // --- أربطة اليد (Hand Wraps) ---
  {
    id: "gs-hand-03",
    name: "أربطة يد ملاكمة فولاذية GS-Titan Wraps (4.5م)",
    nameEn: "GS-Titan Boxing Hand Wraps 4.5m",
    category: "wraps",
    categoryLabel: "أربطة اليد",
    rating: 5.0,
    reviews: 89,
    badge: "أساسي للتدريب ⭐",
    badgeType: "gold",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&auto=format&fit=crop&q=80",
    description: "أربطة قطنية مطاطية شبه مرنة (Semi-Elastic) توفر الدعم المحكم لعظام المشط والأصابع والرسغ، مجهزة بحلقة إبهام متينة وإغلاق فيلكرو عريض.",
    sizes: ["4.5 متر (زوج)"],
    colors: ["أسود كربوني", "أحمر قتالي", "أزرق ملكي", "ذهبي ميتاليك"],
    inStock: true
  },
  {
    id: "gs-wraps-02",
    name: "أربطة ملاكمة سريعة مبطنة بالجل GS-Gel Quick Wraps",
    nameEn: "GS-Gel Speed Quick Hand Wraps",
    category: "wraps",
    categoryLabel: "أربطة اليد",
    rating: 4.9,
    reviews: 44,
    badge: "ارتداء فوري ⚡",
    badgeType: "gold",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&auto=format&fit=crop&q=80",
    description: "قفازات أربطة سريعة مبطنة بجل ممتص للصدمات فوق عظام المشط مع رباط معصم قطني ممتد 2 متر. توفر سرعة قصوى في الارتداء مع حماية احترافية.",
    sizes: ["S/M", "L/XL"],
    colors: ["أسود ملكي", "أحمر قتالي", "ذهبي ميتاليك"],
    inStock: true
  },

  // --- أوقية الرجل (Shin Guards & Leg Protection) ---
  {
    id: "gs-leg-01",
    name: "واقي قصبة الساق والقدم درع تيتان GS-Titan Shield",
    nameEn: "GS-Titan Shield Shin Guards",
    category: "leg",
    categoryLabel: "أوقية الرجل",
    rating: 4.9,
    reviews: 53,
    badge: "حماية مضاعفة 🛡️",
    badgeType: "gold",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=600&auto=format&fit=crop&q=80",
    description: "حماية فائقة لقصبة الساق ومقدمة القدم لامتصاص أثقل الركلات في السبارينغ. حزامان خلفيان بخياطة معززة مانعان للانزلاق تماماً أثناء الحركة السريعة.",
    sizes: ["M", "L", "XL"],
    colors: ["أسود وذهبي", "رمادي فولاذي", "أحمر قتالي"],
    inStock: true
  },
  {
    id: "gs-leg-02",
    name: "واقيات الساق للمواي تاي والكيك بوكسينغ GS-Carbon Striker",
    nameEn: "GS-Carbon Muay Thai Shin Guards",
    category: "leg",
    categoryLabel: "أوقية الرجل",
    rating: 4.8,
    reviews: 39,
    badge: "وزن فائق الخفة ⚡",
    badgeType: "crimson",
    image: "https://images.unsplash.com/photo-1583473848882-f9a5bc7fd2ee?w=600&auto=format&fit=crop&q=80",
    description: "تصميم مدمج خفيف الوزن ومقاوم للتمزق يمنح المقاتل سرعة فائقة في تسديد وتصدي الركلات دون التأثير على الرشاقة والمرونة.",
    sizes: ["S/M", "L/XL"],
    colors: ["أسود كربوني", "ذهبي ميتاليك", "أزرق نزال"],
    inStock: true
  },
  {
    id: "gs-leg-03",
    name: "دعامات كاحل ومفصل القدم المرنة GS-Ankle Armor (زوج)",
    nameEn: "GS-Ankle Armor Combat Supports",
    category: "leg",
    categoryLabel: "أوقية الرجل",
    rating: 4.9,
    reviews: 77,
    badge: "ثبات المفصل ⚓",
    badgeType: "gold",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&auto=format&fit=crop&q=80",
    description: "نسيج مسامي متطور يمنح دعماً ضاغطاً يحمي الأوتار والمفاصل من الالتواء على الحلبة والبساط، مع نعل مفتوح لمنع التزحلق.",
    sizes: ["M", "L"],
    colors: ["أسود", "أزرق", "أحمر"],
    inStock: true
  },

  // --- أوقية الفم (Mouthguards) ---
  {
    id: "gs-mouth-01",
    name: "واقي أسنان هلامي مزدوج الطبقات GS-Predator Dual Guard",
    nameEn: "GS-Predator Dual Layer Mouthguard",
    category: "mouth",
    categoryLabel: "أوقية الفم",
    rating: 5.0,
    reviews: 95,
    badge: "تقنية الغلي والعض 🦷",
    badgeType: "gold",
    image: "https://images.unsplash.com/photo-1584467735871-8e85353a8413?w=600&auto=format&fit=crop&q=80",
    description: "هيكل مركب من طبقتين: درع خارجي صلب لامتصاص الصدمات وقالب هلامي داخلي يتشكل بدقة حول الأسنان. مجهز بقنوات تنفس مدمجة للشهيق العميق.",
    sizes: ["قياس موحد للبالغين (مع علبة حفظ)"],
    colors: ["أسود وذهبي", "أبيض وأحمر", "شفاف نقي"],
    inStock: true
  },
  {
    id: "gs-mouth-02",
    name: "واقي فم ذهبي مضاد للبكتيريا GS-Fang Gold Shield",
    nameEn: "GS-Fang Gold Edition Mouthguard",
    category: "mouth",
    categoryLabel: "أوقية الفم",
    rating: 4.9,
    reviews: 58,
    badge: "إصدار ذهبي فاخر 👑",
    badgeType: "gold",
    image: "https://images.unsplash.com/photo-1584467735815-f7789b79799a?w=600&auto=format&fit=crop&q=80",
    description: "مصنوع من مواد طبية خالية 100% من BPA، مصمم لتوزيع قوة اللكمات المباشرة على كامل الفك لتجنب خلع الأسنان أو إصابات اللثة.",
    sizes: ["قياس موحد للبالغين"],
    colors: ["ذهبي فاخر", "أسود ملكي", "أحمر ناري"],
    inStock: true
  },
  {
    id: "gs-mouth-03",
    name: "واقي فم خفيف للتنفس السريع GS-Aero Breath Pro",
    nameEn: "GS-Aero Breath Mouthguard",
    category: "mouth",
    categoryLabel: "أوقية الفم",
    rating: 4.7,
    reviews: 34,
    badge: "تنفس أسهل 💨",
    badgeType: "crimson",
    image: "https://images.unsplash.com/photo-1584467735871-8e85353a8413?w=600&auto=format&fit=crop&q=80",
    description: "سمك نحيف وتصميم إيروديناميكي يتيح للمقاتل التحدث والشرب وأخذ الأكسجين بسرعة أثناء فترات الراحة بين الجولات دون نزع الواقي.",
    sizes: ["قياس موحد"],
    colors: ["أزرق شفاف", "أحمر شفاف", "أسود مطفي"],
    inStock: true
  },

  // --- أوقية الرأس (Headgear) ---
  {
    id: "gs-head-01",
    name: "خوذة نزال احترافية تغطية 360° GS-Apex Shield Pro",
    nameEn: "GS-Apex 360 Full Coverage Headgear",
    category: "head",
    categoryLabel: "أوقية الرأس",
    rating: 5.0,
    reviews: 72,
    badge: "حماية كاملة 360° 🏆",
    badgeType: "gold",
    image: "https://images.unsplash.com/photo-1508215885820-4523e431397e?w=600&auto=format&fit=crop&q=80",
    description: "حماية كاملة لعظام الوجنتين والذقن ومقدمة ومؤخرة الرأس والأذنين. بطانة داخلية ماصة للصدمات والارتجاجات مع زاوية رؤية محيطية واسعة جداً.",
    sizes: ["M", "L", "XL"],
    colors: ["أسود مطفي", "ذهبي فاخر", "أحمر نزال"],
    inStock: true
  },
  {
    id: "gs-head-02",
    name: "خوذة سبارينغ خفيفة الوزن GS-Gladiator Open Face",
    nameEn: "GS-Gladiator Open Face Headgear",
    category: "head",
    categoryLabel: "أوقية الرأس",
    rating: 4.8,
    reviews: 46,
    badge: "رؤية بانورامية 👁️",
    badgeType: "gold",
    image: "https://images.unsplash.com/photo-1563299796-17596ed6b017?w=600&auto=format&fit=crop&q=80",
    description: "تصميم خفيف الوزن مفتوح الوجه مثالي لمقاتلي التايكوندو والملاكمة السريعة، يوفر أقصى مجال رؤية وتفادي للكمات مع حماية قوية للأذنين والصدغ.",
    sizes: ["S/M", "L/XL"],
    colors: ["أسود ملكي", "أحمر قتالي", "أزرق ميتاليك"],
    inStock: true
  },
  {
    id: "gs-head-03",
    name: "خوذة تدريب بمصد أمامي مصفح GS-Iron Fortress",
    nameEn: "GS-Iron Fortress Nose Bar Headgear",
    category: "head",
    categoryLabel: "أوقية الرأس",
    rating: 4.9,
    reviews: 38,
    badge: "حاجز حماية الأنف 🛡️",
    badgeType: "crimson",
    image: "https://images.unsplash.com/photo-1508215885820-4523e431397e?w=600&auto=format&fit=crop&q=80",
    description: "مزودة بقضيب أمامي داخلي صلب يحمي الأنف والوجه تماماً من أي لكمة قوية أثناء جلسات السبارينغ العنيفة، مثالية للمحترفين قبل النزالات.",
    sizes: ["M", "L"],
    colors: ["أسود مصفح", "رمادي فولاذي"],
    inStock: true
  },

  // --- ملابس قتالية رياضية (Combat Sports Apparel) ---
  {
    id: "gs-apparel-01",
    name: "شورت مواي تاي النمر الذهبي GS-Muay Thai Elite Shorts",
    nameEn: "GS-Muay Thai Elite Battle Shorts",
    category: "apparel",
    categoryLabel: "ملابس قتالية رياضية",
    rating: 5.0,
    reviews: 62,
    badge: "إصدار النمر 🐯",
    badgeType: "gold",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&auto=format&fit=crop&q=80",
    description: "شورت مواي تاي كلاسيكي عريض مصنوع من الستان الحريري فائق الخفة والمقاوم للتمزق، مع حزام خصر عريض مرن وشقوق جانبية لمرونة تامة في الركلات العالية.",
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["أسود وذهبي", "أحمر وذهبي", "كحلي وفضي"],
    inStock: true
  },
  {
    id: "gs-apparel-02",
    name: "قميص ضاغط راش جارد مصفح GS-Titan Armor Rashguard",
    nameEn: "GS-Titan Compression Combat Rashguard",
    category: "apparel",
    categoryLabel: "ملابس قتالية رياضية",
    rating: 4.9,
    reviews: 51,
    badge: "نسيج مسامي مضاد للبكتيريا 🛡️",
    badgeType: "gold",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&auto=format&fit=crop&q=80",
    description: "قميص راش جارد ضاغط للنزال الأرضي والجوجيتسو والملاكمة. خياطة مسطحة بأربعة اتجاهات لتفادي الاحتكاك وسرعة التخلص من العرق مع حزام خصر جل مانع للانزلاق.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["أسود كربوني", "رمادي مدرع", "ذهبي ميتاليك"],
    inStock: true
  },
  {
    id: "gs-apparel-03",
    name: "شورت نزال MMA حر متعدد الاتجاهات GS-Gladiator Fight Shorts",
    nameEn: "GS-Gladiator MMA Pro Fight Shorts",
    category: "apparel",
    categoryLabel: "ملابس قتالية رياضية",
    rating: 4.8,
    reviews: 37,
    badge: "متانة قصوى ⚔️",
    badgeType: "crimson",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=600&auto=format&fit=crop&q=80",
    description: "مصمم بألواح مرنة داخلية بين الساقين تسمح بمدى حركة غير محدود لحركات المصارعة والضربات العنيفة، ومزود بإغلاق فيلكرو أمان مزدوج ورباط داخلي محكم.",
    sizes: ["M", "L", "XL"],
    colors: ["أسود مطفي", "أحمر وأسود", "رمادي فولاذي"],
    inStock: true
  },
  {
    id: "gs-apparel-04",
    name: "سويت شيرت وهودي تدريب النخبة GS-Champion Heavy Hoodie",
    nameEn: "GS-Champion Training Combat Hoodie",
    category: "apparel",
    categoryLabel: "ملابس قتالية رياضية",
    rating: 4.9,
    reviews: 43,
    badge: "قطن ثقيل ممتاز 👑",
    badgeType: "gold",
    image: "https://images.unsplash.com/photo-1508215885820-4523e431397e?w=600&auto=format&fit=crop&q=80",
    description: "هودي تدريب ثقيل بأكمام مضلعة وغطاء رأس مبطن بطبقتين لحفظ حرارة العضلات أثناء الإحماء والتدريبات الشاقة مع طباعة شعار الأسد الذهبي على الصدر والظهر.",
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["أسود ملكي", "رمادي فولاذي", "كحلي داكن"],
    inStock: true
  }
];

// App State
const state = {
  products: [],
  cart: [],
  selectedCategory: "all",
  searchQuery: "",
  sortBy: "default",
  soundEnabled: true,
  storePhone: DEFAULT_PHONE,
  adminPin: DEFAULT_PIN,
  currency: DEFAULT_CURRENCY,
  orders: [],
  discountRate: 0,
  activeCoupon: ""
};

// ==========================================
// 2. Storage Persistence Engine & Helpers
// ==========================================
function getColorHex(colorName) {
  if (!colorName) return "#d4af37";
  const str = colorName.toLowerCase();
  if (str.includes("ذهب") || str.includes("gold")) return "#d4af37";
  if (str.includes("أسود") || str.includes("كربون") || str.includes("black")) return "#18181b";
  if (str.includes("أحمر") || str.includes("ناري") || str.includes("red")) return "#dc2626";
  if (str.includes("أزرق") || str.includes("كحلي") || str.includes("blue")) return "#2563eb";
  if (str.includes("فضي") || str.includes("رمادي") || str.includes("مدرع") || str.includes("فولاذ") || str.includes("silver") || str.includes("gray")) return "#71717a";
  if (str.includes("أبيض") || str.includes("white")) return "#f4f4f5";
  if (str.includes("شفاف")) return "rgba(255,255,255,0.4)";
  return "#d4af37";
}

function loadSavedState() {
  try {
    const version = localStorage.getItem("gstools_catalog_v");
    const savedProducts = localStorage.getItem("gstools_products");

    if (savedProducts && version === "3.3") {
      state.products = JSON.parse(savedProducts);
    } else {
      // Migrate or initialize with INITIAL_PRODUCTS (colors, apparel, wraps, colorImages)
      state.products = [...INITIAL_PRODUCTS];
      localStorage.setItem("gstools_products", JSON.stringify(state.products));
      localStorage.setItem("gstools_catalog_v", "3.3");
    }

    const savedCart = localStorage.getItem("gstools_cart");
    state.cart = savedCart ? JSON.parse(savedCart) : [];

    const savedPhone = localStorage.getItem("gstools_phone");
    state.storePhone = savedPhone || DEFAULT_PHONE;

    const savedPin = localStorage.getItem("gstools_pin");
    state.adminPin = savedPin || DEFAULT_PIN;

    const savedCurrency = localStorage.getItem("gstools_currency");
    state.currency = savedCurrency || DEFAULT_CURRENCY;

    const savedOrders = localStorage.getItem("gstools_orders");
    state.orders = savedOrders ? JSON.parse(savedOrders) : [];

    const savedSound = localStorage.getItem("gstools_sound");
    state.soundEnabled = savedSound !== null ? JSON.parse(savedSound) : true;
  } catch (e) {
    console.error("Failed to load local storage state:", e);
    state.products = [...INITIAL_PRODUCTS];
  }
}

function saveProducts() {
  localStorage.setItem("gstools_products", JSON.stringify(state.products));
}
function saveCart() {
  localStorage.setItem("gstools_cart", JSON.stringify(state.cart));
}
function saveOrders() {
  localStorage.setItem("gstools_orders", JSON.stringify(state.orders));
}
function saveSettings() {
  localStorage.setItem("gstools_phone", state.storePhone);
  localStorage.setItem("gstools_pin", state.adminPin);
  localStorage.setItem("gstools_currency", state.currency);
  localStorage.setItem("gstools_sound", JSON.stringify(state.soundEnabled));
}

// ==========================================
// 3. Web Audio Synthesizer (Zero Assets Audio)
// ==========================================
let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

function playSound(type) {
  if (!state.soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    if (type === "click") {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(650, now);
      osc.frequency.exponentialRampToValueAtTime(300, now + 0.05);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.05);
    } else if (type === "punch") {
      // Bass punch impact
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(150, now);
      osc.frequency.exponentialRampToValueAtTime(35, now + 0.2);
      gain.gain.setValueAtTime(0.35, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.22);
    } else if (type === "swoosh") {
      // Aerodynamic whoosh
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(800, now + 0.12);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.15);
    } else if (type === "success") {
      // Golden victory chime chord
      [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + i * 0.07);
        gain.gain.setValueAtTime(0.15, now + i * 0.07);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.07 + 0.35);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + i * 0.07);
        osc.stop(now + i * 0.07 + 0.35);
      });
    }
  } catch (err) {
    // Audio context may be blocked by autoplay policies until user interacts
  }
}

// ==========================================
// 4. Combat Sparks Canvas (Particles Animation)
// ==========================================
function initHeroCanvas() {
  const canvas = document.getElementById("heroCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let width, height;
  let particles = [];
  const particleCount = window.innerWidth < 768 ? 35 : 70;

  function resize() {
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  class Spark {
    constructor() {
      this.reset(true);
    }
    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : height + 10;
      this.size = Math.random() * 2.8 + 0.8;
      this.speedY = -(Math.random() * 1.5 + 0.6);
      this.speedX = (Math.random() - 0.5) * 0.8;
      this.life = 0;
      this.maxLife = Math.random() * 180 + 100;
      this.color = Math.random() > 0.4 ? "#d4af37" : (Math.random() > 0.5 ? "#ff5722" : "#f5e7a9");
      this.alpha = Math.random() * 0.7 + 0.3;
    }
    update() {
      this.y += this.speedY;
      this.x += this.speedX + Math.sin(this.life * 0.05) * 0.3;
      this.life++;
      if (this.life > this.maxLife || this.y < -10) {
        this.reset();
      }
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = Math.max(0, this.alpha * (1 - this.life / this.maxLife));
      ctx.fillStyle = this.color;
      ctx.shadowBlur = 8;
      ctx.shadowColor = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Spark());
  }

  function loop() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(loop);
  }
  loop();
}

// ==========================================
// 5. Toast Notification System
// ==========================================
function showToast(message, type = "success") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  const isSuccess = type === "success";
  const iconEmoji = isSuccess ? "✅" : (type === "warning" ? "⚠️" : "ℹ️");
  const borderColor = isSuccess ? "border-amber-500/70" : "border-red-500/70";
  const glowShadow = isSuccess ? "0 0 20px rgba(212,175,55,0.3)" : "0 0 20px rgba(239,68,68,0.3)";

  toast.className = `flex items-center gap-3 bg-[#13131a] text-white px-5 py-3.5 rounded-xl border ${borderColor} shadow-2xl transform transition-all duration-300 translate-y-3 opacity-0`;
  toast.style.boxShadow = glowShadow;

  toast.innerHTML = `
    <span class="text-xl">${iconEmoji}</span>
    <span class="font-bold text-sm tracking-wide text-zinc-100">${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.remove("translate-y-3", "opacity-0");
  }, 20);

  setTimeout(() => {
    toast.classList.add("translate-y-2", "opacity-0");
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// ==========================================
// 6. Products Catalog Rendering & Filtering
// ==========================================
function renderProducts() {
  const grid = document.getElementById("productsGrid");
  const countBadge = document.getElementById("productsCountBadge");
  if (!grid) return;

  // Filter & Search
  let filtered = state.products.filter(item => {
    const matchCategory = state.selectedCategory === "all" || item.category === state.selectedCategory;
    const matchQuery = state.searchQuery === "" || 
      item.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
      (item.nameEn && item.nameEn.toLowerCase().includes(state.searchQuery.toLowerCase())) ||
      (item.description && item.description.toLowerCase().includes(state.searchQuery.toLowerCase()));
    return matchCategory && matchQuery;
  });

  // Sort
  if (state.sortBy === "price-low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (state.sortBy === "price-high") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (state.sortBy === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  if (countBadge) {
    countBadge.textContent = `${filtered.length} منتج متوفر`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-16 text-center">
        <div class="w-20 h-20 mx-auto mb-4 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-amber-500 text-3xl">
          🥊
        </div>
        <h3 class="text-xl font-bold text-zinc-300 mb-2">لا توجد معدات مطابقة للبحث</h3>
        <p class="text-zinc-500 text-sm mb-6">جرب تغيير الفئة أو كلمة البحث للوصول لأفضل عتاد نزال</p>
        <button onclick="resetFilters()" class="px-6 py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-amber-400 font-bold text-sm border border-amber-500/30 transition-all">
          عرض جميع المنتجات
        </button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(product => {
    const badgeClass = product.badgeType === "crimson" ? "badge-crimson" : "badge-gold";

    return `
      <div class="product-card group relative bg-[#121216] rounded-2xl border border-zinc-800/80 hover:border-amber-500/50 flex flex-col justify-between overflow-hidden shadow-lg">
        
        <!-- Top Image & Badges -->
        <div class="relative w-full h-56 bg-zinc-950 overflow-hidden cursor-pointer" onclick="openProductQuickView('${product.id}')">
          <img 
            src="${product.image}" 
            alt="${product.name}" 
            onerror="this.src='./assets/logo.jpeg'"
            class="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500" 
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-[#121216] via-transparent to-black/30 pointer-events-none"></div>
          
          <!-- Badges -->
          <div class="absolute top-3 right-3 flex flex-col gap-1.5 z-10">
            ${product.badge ? `<span class="px-2.5 py-1 rounded-full text-xs font-bold ${badgeClass}">${product.badge}</span>` : ""}
          </div>

          <!-- Quick view hint -->
          <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs">
            <span class="px-4 py-2 rounded-xl bg-zinc-900/90 border border-amber-400/50 text-amber-300 text-xs font-black flex items-center gap-1.5 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
              👁️ معاينة سريعة ومقاسات
            </span>
          </div>
        </div>

        <!-- Details -->
        <div class="p-5 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-bold text-amber-500/90 bg-amber-500/10 px-2 py-0.5 rounded">
                ${product.categoryLabel || getCategoryTitle(product.category)}
              </span>
              <div class="flex items-center gap-1 text-xs text-amber-400 font-bold">
                <span>⭐</span>
                <span class="num-combat">${product.rating}</span>
                <span class="text-zinc-500">(${product.reviews})</span>
              </div>
            </div>

            <h3 class="text-base font-extrabold text-white group-hover:text-amber-400 transition-colors line-clamp-2 mb-1.5">
              ${product.name}
            </h3>
            
            <p class="text-xs text-zinc-400 line-clamp-2 mb-3 leading-relaxed">
              ${product.description}
            </p>

            <!-- Colors Available -->
            ${product.colors && product.colors.length > 0 ? `
              <div class="mb-3 pt-2.5 border-t border-zinc-800/60">
                <div class="flex items-center justify-between mb-1.5">
                  <span class="text-[11px] font-bold text-zinc-400">الألوان المتاحة:</span>
                  <span class="text-[10px] text-amber-400 font-bold">${product.colors.length} ألوان</span>
                </div>
                <div class="flex items-center gap-1.5 flex-wrap">
                  ${product.colors.map(col => `
                    <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-zinc-900 border border-zinc-700/80 text-zinc-300 shadow-xs" title="${col}">
                      <span class="w-2.5 h-2.5 rounded-full border border-black/60 shadow-inner shrink-0" style="background: ${getColorHex(col)}"></span>
                      <span>${col}</span>
                    </span>
                  `).join("")}
                </div>
              </div>
            ` : ""}
          </div>

          <!-- Bottom: Status & Quick Action -->
          <div class="pt-3 border-t border-zinc-800/80">
            <div class="flex items-center justify-between mb-3">
              <span class="inline-flex items-center gap-1.5 text-xs ${product.inStock ? 'text-emerald-400 font-bold' : 'text-red-400 font-bold'}">
                <span class="w-2 h-2 rounded-full ${product.inStock ? 'bg-emerald-400 animate-pulse' : 'bg-red-400'}"></span>
                ${product.inStock ? 'جاهز للشحن الفوري' : 'نفد مؤقتاً'}
              </span>
              <span class="text-[11px] text-amber-400/90 font-bold">
                طلب وتأكيد عبر واتساب 💬
              </span>
            </div>

            <div class="grid grid-cols-5 gap-2">
              <button 
                onclick="quickAddToCart('${product.id}', null, '${product.colors && product.colors.length > 0 ? product.colors[0] : ''}')"
                ${!product.inStock ? 'disabled' : ''}
                class="col-span-4 btn-combat w-full py-2.5 rounded-xl font-black text-xs md:text-sm flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black shadow-lg disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                <span>🛒 إضافة للسلة</span>
              </button>
              
              <button 
                onclick="openProductQuickView('${product.id}')"
                title="تفاصيل إضافية ومقاسات"
                class="col-span-1 flex items-center justify-center rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-amber-400 border border-zinc-700/60 transition-colors"
              >
                <span>🔍</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    `;
  }).join("");
}

function getCategoryTitle(cat) {
  const map = {
    all: "الكل",
    hand: "أوقية اليد",
    leg: "أوقية الرجل",
    mouth: "أوقية الفم",
    head: "أوقية الرأس",
    wraps: "أربطة اليد",
    apparel: "ملابس قتالية رياضية"
  };
  return map[cat] || cat;
}

function resetFilters() {
  state.selectedCategory = "all";
  state.searchQuery = "";
  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.value = "";
  updateCategoryTabsUI();
  renderProducts();
  playSound("swoosh");
}

function setCategory(cat) {
  state.selectedCategory = cat;
  updateCategoryTabsUI();
  renderProducts();
  playSound("click");
}

function updateCategoryTabsUI() {
  document.querySelectorAll("[data-category-tab]").forEach(tab => {
    const cat = tab.getAttribute("data-category-tab");
    if (cat === state.selectedCategory) {
      tab.className = "category-tab active px-5 py-2.5 rounded-xl text-sm font-black transition-all bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-lg shadow-amber-500/20";
    } else {
      tab.className = "category-tab px-5 py-2.5 rounded-xl text-sm font-bold transition-all bg-zinc-900/90 text-zinc-300 hover:text-amber-400 border border-zinc-800 hover:border-amber-500/40";
    }
  });
}

// ==========================================
// 7. Cart & Checkout Workflow
// ==========================================
function quickAddToCart(productId, size = null, color = null) {
  const product = state.products.find(p => p.id === productId);
  if (!product || !product.inStock) {
    showToast("عذراً، هذا المنتج غير متوفر حالياً", "warning");
    return;
  }

  const selectedSize = size || (product.sizes && product.sizes.length > 0 ? product.sizes[0] : "قياسي");
  const selectedColor = color || (product.colors && product.colors.length > 0 ? product.colors[0] : "افتراضي");
  const cartItemKey = `${product.id}_${selectedSize}_${selectedColor}`;

  const existing = state.cart.find(item => item.key === cartItemKey);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({
      key: cartItemKey,
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
      color: selectedColor,
      quantity: 1
    });
  }

  saveCart();
  updateCartBadge();
  renderCartDrawer();
  playSound("punch");
  showToast(`تمت إضافة "${product.name}" (${selectedColor}) إلى السلة 🥊`);
}

function updateCartBadge() {
  const badge = document.getElementById("cartCountBadge");
  const drawerCount = document.getElementById("cartDrawerCount");
  const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);

  if (badge) {
    badge.textContent = totalCount;
    if (totalCount > 0) {
      badge.classList.remove("hidden");
      badge.classList.add("scale-125");
      setTimeout(() => badge.classList.remove("scale-125"), 200);
    } else {
      badge.classList.add("hidden");
    }
  }
  if (drawerCount) {
    drawerCount.textContent = `(${totalCount})`;
  }
}

function changeCartQty(key, delta) {
  const item = state.cart.find(i => i.key === key);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    state.cart = state.cart.filter(i => i.key !== key);
    playSound("click");
    showToast("تم حذف المنتج من السلة", "info");
  } else {
    playSound("click");
  }

  saveCart();
  updateCartBadge();
  renderCartDrawer();
}

function removeCartItem(key) {
  state.cart = state.cart.filter(i => i.key !== key);
  saveCart();
  updateCartBadge();
  renderCartDrawer();
  playSound("click");
  showToast("تم إزالة المنتج من السلة", "info");
}

function clearCart() {
  if (state.cart.length === 0) return;
  state.cart = [];
  saveCart();
  updateCartBadge();
  renderCartDrawer();
  playSound("click");
  showToast("تم تفريغ السلة بنجاح");
}

function renderCartDrawer() {
  const container = document.getElementById("cartItemsContainer");
  const subtotalEl = document.getElementById("cartSubtotal");
  const discountRow = document.getElementById("cartDiscountRow");
  const discountEl = document.getElementById("cartDiscountAmount");
  const shippingEl = document.getElementById("cartShipping");
  const totalEl = document.getElementById("cartTotal");
  const checkoutBtn = document.getElementById("btnProceedCheckout");

  if (!container) return;

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div class="h-full flex flex-col items-center justify-center text-center p-6 text-zinc-400">
        <div class="w-20 h-20 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-3xl text-amber-500 mb-4 shadow-inner">
          🛒
        </div>
        <h4 class="text-lg font-bold text-zinc-200 mb-1">سلتك فارغة حالياً</h4>
        <p class="text-xs text-zinc-500 mb-6 max-w-xs">جهّز نفسك للنزال القادم واختر أفضل عتاد حماية من متجر GStools</p>
        <button onclick="toggleCartDrawer(false)" class="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-sm transition-all shadow-lg">
          ابدأ التسوق الآن
        </button>
      </div>
    `;
    const itemsCountEl = document.getElementById("cartItemsCount");
    if (itemsCountEl) itemsCountEl.textContent = `0 قطع`;
    if (checkoutBtn) checkoutBtn.disabled = true;
    return;
  }

  const totalItemsCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);

  container.innerHTML = state.cart.map(item => `
    <div class="flex items-center gap-3 p-3.5 bg-zinc-900/90 rounded-xl border border-zinc-800/80 hover:border-amber-500/30 transition-all">
      <img src="${item.image}" alt="${item.name}" onerror="this.src='./assets/logo.jpeg'" class="w-16 h-16 rounded-lg object-cover bg-black border border-zinc-800 shrink-0"/>
      
      <div class="flex-1 min-w-0">
        <h5 class="text-xs font-bold text-zinc-200 truncate mb-1">${item.name}</h5>
        <div class="flex items-center gap-1.5 text-xs text-zinc-400 mb-2 flex-wrap">
          <span class="bg-zinc-800 px-2 py-0.5 rounded text-[11px] text-amber-300 font-semibold">المقاس: ${item.size}</span>
          ${item.color ? `
            <span class="bg-zinc-800 px-2 py-0.5 rounded text-[11px] text-amber-400 font-semibold inline-flex items-center gap-1">
              <span class="w-2 h-2 rounded-full border border-black/40 shrink-0" style="background: ${getColorHex(item.color)}"></span>
              <span>اللون: ${item.color}</span>
            </span>
          ` : ""}
          <span class="text-[11px] text-emerald-400 font-bold">✓ متاح للطلب</span>
        </div>
        
        <div class="flex items-center justify-between">
          <div class="flex items-center border border-zinc-700 rounded-lg bg-zinc-950 overflow-hidden">
            <button onclick="changeCartQty('${item.key}', -1)" class="w-7 h-7 flex items-center justify-center hover:bg-zinc-800 text-zinc-300 text-xs font-bold transition-colors">-</button>
            <span class="w-8 text-center text-xs font-bold num-combat text-white">${item.quantity}</span>
            <button onclick="changeCartQty('${item.key}', 1)" class="w-7 h-7 flex items-center justify-center hover:bg-zinc-800 text-zinc-300 text-xs font-bold transition-colors">+</button>
          </div>

          <button onclick="removeCartItem('${item.key}')" class="text-zinc-500 hover:text-red-400 text-sm transition-colors p-1" title="حذف المنتج">
            🗑️
          </button>
        </div>
      </div>
    </div>
  `).join("");

  const itemsCountEl = document.getElementById("cartItemsCount");
  if (itemsCountEl) itemsCountEl.textContent = `${totalItemsCount} قطع`;

  if (checkoutBtn) checkoutBtn.disabled = false;
}

function applyCoupon() {
  const input = document.getElementById("couponInput");
  if (!input) return;
  const code = input.value.trim().toUpperCase();

  if (code === "CHAMPION10" || code === "GOLDEN10" || code === "LION10") {
    state.discountRate = 0.10;
    state.activeCoupon = code;
    playSound("success");
    showToast("تم تطبيق كود خصم الأبطال 10%! 🔥");
    renderCartDrawer();
  } else if (code === "GSTOOLS20") {
    state.discountRate = 0.20;
    state.activeCoupon = code;
    playSound("success");
    showToast("خصم النخبة 20% مفعل بنجاح! 👑");
    renderCartDrawer();
  } else {
    playSound("click");
    showToast("كود الخصم غير صحيح أو منتهي الصلاحية", "warning");
  }
}

function toggleCartDrawer(open) {
  const drawer = document.getElementById("cartDrawer");
  const backdrop = document.getElementById("cartBackdrop");
  if (!drawer || !backdrop) return;

  if (open) {
    backdrop.classList.remove("hidden");
    setTimeout(() => {
      backdrop.classList.remove("opacity-0");
      drawer.style.transform = "translateX(0)";
    }, 10);
    renderCartDrawer();
    playSound("swoosh");
  } else {
    backdrop.classList.add("opacity-0");
    drawer.style.transform = "translateX(100%)";
    setTimeout(() => {
      backdrop.classList.add("hidden");
    }, 350);
  }
}

// ==========================================
// 8. Checkout Modal & Direct WhatsApp Engine
// ==========================================
function openCheckoutModal() {
  if (state.cart.length === 0) {
    showToast("سلتك فارغة، أضف بعض المنتجات أولاً", "warning");
    return;
  }
  toggleCartDrawer(false);

  const modal = document.getElementById("checkoutModal");
  if (!modal) return;

  const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const checkoutItemsCount = document.getElementById("checkoutItemsCount");
  if (checkoutItemsCount) {
    checkoutItemsCount.textContent = `${totalCount} قطع`;
  }

  modal.classList.remove("hidden");
  setTimeout(() => modal.classList.remove("opacity-0"), 10);
  playSound("swoosh");
}

function closeCheckoutModal() {
  const modal = document.getElementById("checkoutModal");
  if (!modal) return;
  modal.classList.add("opacity-0");
  setTimeout(() => modal.classList.add("hidden"), 300);
}

function submitWhatsAppOrder(event) {
  if (event) event.preventDefault();

  const name = document.getElementById("checkoutName")?.value.trim();
  const phone = document.getElementById("checkoutPhone")?.value.trim();
  const city = document.getElementById("checkoutCity")?.value.trim();
  const address = document.getElementById("checkoutAddress")?.value.trim();
  const notes = document.getElementById("checkoutNotes")?.value.trim();

  if (!name || !phone || !city || !address) {
    playSound("click");
    showToast("يرجى ملء جميع الحقول الإلزامية", "warning");
    return;
  }

  const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const orderId = `GS-${Date.now().toString().slice(-6)}`;
  const orderDate = new Date().toLocaleString("ar-EG", { dateStyle: "medium", timeStyle: "short" });

  // Items string without prices, with color
  let itemsListText = "";
  state.cart.forEach((item, idx) => {
    itemsListText += `${idx + 1}. *${item.name}*\n   ▫️ اللون: ${item.color || "افتراضي"}\n   ▫️ المقاس: ${item.size}\n   ▫️ الكمية: ${item.quantity}\n`;
  });

  // Construct clean WhatsApp Message
  const whatsappMessage = 
`🦁 *طلب شراء واستفسار جديد من متجر GStools* 🥊
───────────────────────
📋 *رقم الطلب:* \`#${orderId}\`
📅 *التاريخ:* ${orderDate}

👤 *بيانات البطل / المشتري:*
• *الاسم:* ${name}
• *رقم الهاتف / واتساب:* ${phone}
• *المدينة / المحافظة:* ${city}
• *العنوان بالتفصيل:* ${address}
${notes ? `• *ملاحظات خاصة:* ${notes}\n` : ""}
───────────────────────
📦 *العتاد المطلوب:*
${itemsListText}
───────────────────────
💬 *ملخص الطلب:*
• إجمالي الأصناف: ${state.cart.length}
• إجمالي عدد القطع: ${totalCount} قطعة
───────────────────────
⚡ أرجو إفادتي بالأسعار وتأكيد موعد الشحن والتوصيل. شكراً لكم!`;

  // Log order in state for Admin Tracker
  const orderRecord = {
    id: orderId,
    timestamp: new Date().toISOString(),
    displayDate: orderDate,
    customer: { name, phone, city, address, notes },
    items: [...state.cart],
    itemCount: totalCount,
    status: "جديد (New)"
  };

  state.orders.unshift(orderRecord);
  saveOrders();

  // Button Animation Feedback
  const submitBtn = document.getElementById("btnConfirmOrder");
  if (submitBtn) {
    submitBtn.innerHTML = `<span>⏳ جاري فتح واتساب...</span>`;
    submitBtn.classList.remove("from-amber-500", "to-amber-600");
    submitBtn.classList.add("from-emerald-500", "to-emerald-600");
  }

  playSound("success");

  // Format clean phone number
  let targetPhone = state.storePhone.replace(/[^0-9]/g, "");
  if (!targetPhone) targetPhone = DEFAULT_PHONE;

  const waUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(whatsappMessage)}`;

  setTimeout(() => {
    // Open WhatsApp
    window.open(waUrl, "_blank");

    // Close checkout modal & clear cart
    closeCheckoutModal();
    state.cart = [];
    state.discountRate = 0;
    state.activeCoupon = "";
    saveCart();
    updateCartBadge();
    renderCartDrawer();

    // Show Success Modal
    openOrderSuccessModal(orderId);

    // Reset button
    if (submitBtn) {
      submitBtn.innerHTML = `<span>✅ تأكيد الطلب وإرساله عبر واتساب</span>`;
      submitBtn.classList.add("from-amber-500", "to-amber-600");
      submitBtn.classList.remove("from-emerald-500", "to-emerald-600");
    }
  }, 900);
}

function openOrderSuccessModal(orderId) {
  const modal = document.getElementById("orderSuccessModal");
  if (!modal) return;
  const idEl = document.getElementById("successOrderId");
  if (idEl) idEl.textContent = `#${orderId}`;

  modal.classList.remove("hidden");
  setTimeout(() => modal.classList.remove("opacity-0"), 10);
  playSound("success");
}

function closeOrderSuccessModal() {
  const modal = document.getElementById("orderSuccessModal");
  if (!modal) return;
  modal.classList.add("opacity-0");
  setTimeout(() => modal.classList.add("hidden"), 300);
}

// ==========================================
// 9. Product Quick View Modal
// ==========================================
let currentQuickViewProduct = null;
let currentQuickViewSize = null;
let currentQuickViewColor = null;

function openProductQuickView(productId) {
  const product = state.products.find(p => p.id === productId);
  if (!product) return;

  currentQuickViewProduct = product;
  currentQuickViewSize = product.sizes && product.sizes.length > 0 ? product.sizes[0] : "قياسي";
  currentQuickViewColor = product.colors && product.colors.length > 0 ? product.colors[0] : "افتراضي";

  const modal = document.getElementById("quickViewModal");
  if (!modal) return;

  document.getElementById("qvImage").src = (product.colorImages && product.colorImages[currentQuickViewColor]) 
    ? product.colorImages[currentQuickViewColor] 
    : product.image;
  document.getElementById("qvCategory").textContent = product.categoryLabel || getCategoryTitle(product.category);
  document.getElementById("qvName").textContent = product.name;

  document.getElementById("qvDescription").textContent = product.description;
  document.getElementById("qvRating").textContent = product.rating;
  document.getElementById("qvReviews").textContent = `(${product.reviews} تقييم مقاتل)`;

  // Sizes
  const sizesContainer = document.getElementById("qvSizesContainer");
  if (sizesContainer) {
    if (product.sizes && product.sizes.length > 0) {
      sizesContainer.innerHTML = product.sizes.map((s, idx) => `
        <button 
          type="button" 
          onclick="selectQuickViewSize('${s}', this)" 
          class="qv-size-btn px-4 py-2 rounded-xl text-xs font-black border transition-all cursor-pointer ${idx === 0 ? 'bg-amber-500 text-black border-amber-400 shadow-md' : 'bg-zinc-900 text-zinc-300 border-zinc-700 hover:border-amber-400'}"
        >
          ${s}
        </button>
      `).join("");
    } else {
      sizesContainer.innerHTML = `<span class="text-xs text-zinc-400">قياس موحد</span>`;
    }
  }

  // Colors
  const colorsContainer = document.getElementById("qvColorsContainer");
  const selectedColorText = document.getElementById("qvSelectedColorText");
  if (selectedColorText) {
    selectedColorText.textContent = currentQuickViewColor;
  }
  if (colorsContainer) {
    if (product.colors && product.colors.length > 0) {
      colorsContainer.innerHTML = product.colors.map((c, idx) => `
        <button 
          type="button" 
          onclick="selectQuickViewColor('${c}', this)" 
          class="qv-color-btn flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${idx === 0 ? 'bg-amber-500 text-black border-amber-400 shadow-md font-black' : 'bg-zinc-900 text-zinc-300 border-zinc-700 hover:border-amber-400'}"
        >
          <span class="w-3 h-3 rounded-full border border-black/40 shadow-sm shrink-0" style="background: ${getColorHex(c)}"></span>
          <span>${c}</span>
        </button>
      `).join("");
    } else {
      colorsContainer.innerHTML = `<span class="text-xs text-zinc-400">لون موحد</span>`;
    }
  }

  modal.classList.remove("hidden");
  setTimeout(() => modal.classList.remove("opacity-0"), 10);
  playSound("swoosh");
}

function selectQuickViewSize(size, btnEl) {
  currentQuickViewSize = size;
  document.querySelectorAll(".qv-size-btn").forEach(b => {
    b.className = "qv-size-btn px-4 py-2 rounded-xl text-xs font-black border transition-all bg-zinc-900 text-zinc-300 border-zinc-700 hover:border-amber-400 cursor-pointer";
  });
  btnEl.className = "qv-size-btn px-4 py-2 rounded-xl text-xs font-black border transition-all bg-amber-500 text-black border-amber-400 shadow-md cursor-pointer";
  playSound("click");
}

function selectQuickViewColor(color, btnEl) {
  currentQuickViewColor = color;
  const selectedColorText = document.getElementById("qvSelectedColorText");
  if (selectedColorText) selectedColorText.textContent = color;

  document.querySelectorAll(".qv-color-btn").forEach(b => {
    b.className = "qv-color-btn flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold border transition-all bg-zinc-900 text-zinc-300 border-zinc-700 hover:border-amber-400 cursor-pointer";
  });
  btnEl.className = "qv-color-btn flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-black border transition-all bg-amber-500 text-black border-amber-400 shadow-md cursor-pointer";

  // Swap product image if colorImages mapping exists
  if (currentQuickViewProduct && currentQuickViewProduct.colorImages && currentQuickViewProduct.colorImages[color]) {
    const imgEl = document.getElementById("qvImage");
    if (imgEl) {
      // Fade out → swap src → fade in
      imgEl.style.transition = "opacity 0.25s ease";
      imgEl.style.opacity = "0";
      setTimeout(() => {
        imgEl.src = currentQuickViewProduct.colorImages[color];
        imgEl.style.opacity = "1";
      }, 250);
    }
  }

  playSound("click");
}

function addQuickViewToCart() {
  if (!currentQuickViewProduct) return;
  quickAddToCart(currentQuickViewProduct.id, currentQuickViewSize, currentQuickViewColor);
  closeProductQuickView();
}

function closeProductQuickView() {
  const modal = document.getElementById("quickViewModal");
  if (!modal) return;
  modal.classList.add("opacity-0");
  setTimeout(() => modal.classList.add("hidden"), 300);
}

// ==========================================
// 10. Hidden Admin Dashboard System
// ==========================================
let secretClickCount = 0;
let secretClickTimer = null;

function setupAdminSecretTriggers() {
  // 1. Keyboard Shortcut: Ctrl + Alt + A
  window.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.altKey && (e.key === "a" || e.key === "A" || e.key === "ش")) {
      e.preventDefault();
      openAdminAuthModal();
    }
  });

  // 2. URL Hash: #admin-gs
  if (window.location.hash === "#admin-gs") {
    openAdminAuthModal();
  }
  window.addEventListener("hashchange", () => {
    if (window.location.hash === "#admin-gs") {
      openAdminAuthModal();
    }
  });
}

function onSecretBadgeClick() {
  secretClickCount++;
  clearTimeout(secretClickTimer);
  playSound("click");

  if (secretClickCount >= 5) {
    secretClickCount = 0;
    openAdminAuthModal();
  } else {
    secretClickTimer = setTimeout(() => {
      secretClickCount = 0;
    }, 2500);
  }
}

function openAdminAuthModal() {
  const modal = document.getElementById("adminAuthModal");
  if (!modal) return;
  const pinInput = document.getElementById("adminPinInput");
  if (pinInput) pinInput.value = "";
  
  modal.classList.remove("hidden");
  setTimeout(() => modal.classList.remove("opacity-0"), 10);
  if (pinInput) pinInput.focus();
  playSound("swoosh");
}

function closeAdminAuthModal() {
  const modal = document.getElementById("adminAuthModal");
  if (!modal) return;
  modal.classList.add("opacity-0");
  setTimeout(() => modal.classList.add("hidden"), 300);
  if (window.location.hash === "#admin-gs") {
    history.replaceState(null, null, " ");
  }
}

function appendPin(digit) {
  const input = document.getElementById("adminPinInput");
  if (!input || input.value.length >= 6) return;
  input.value += digit;
  playSound("click");
}

function clearPin() {
  const input = document.getElementById("adminPinInput");
  if (input) input.value = "";
  playSound("click");
}

function verifyAdminPin() {
  const input = document.getElementById("adminPinInput");
  const entered = input ? input.value.trim() : "";
  const card = document.getElementById("adminAuthCard");

  if (entered === state.adminPin) {
    playSound("success");
    closeAdminAuthModal();
    openAdminDashboard();
  } else {
    playSound("punch");
    if (card) {
      card.classList.add("shake");
      setTimeout(() => card.classList.remove("shake"), 500);
    }
    showToast("رمز الـ PIN غير صحيح! تأكد من المحاولة مجدداً", "warning");
    if (input) input.value = "";
  }
}

// Admin Panel Logic
function openAdminDashboard() {
  const panel = document.getElementById("adminDashboardPanel");
  if (!panel) return;

  renderAdminKPIs();
  renderAdminProductsTable();
  renderAdminOrdersTable();
  populateAdminSettings();

  panel.classList.remove("hidden");
  setTimeout(() => panel.classList.remove("opacity-0"), 10);
  playSound("success");
}

function closeAdminDashboard() {
  const panel = document.getElementById("adminDashboardPanel");
  if (!panel) return;
  panel.classList.add("opacity-0");
  setTimeout(() => panel.classList.add("hidden"), 300);
  if (window.location.hash === "#admin-gs") {
    history.replaceState(null, null, " ");
  }
}

function switchAdminTab(tabName) {
  document.querySelectorAll("[data-admin-tab-content]").forEach(el => {
    el.classList.add("hidden");
  });
  document.querySelectorAll("[data-admin-tab-btn]").forEach(btn => {
    btn.className = "px-5 py-2.5 rounded-xl font-bold text-xs md:text-sm text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 transition-all";
  });

  const targetContent = document.getElementById(`adminTabContent-${tabName}`);
  const targetBtn = document.getElementById(`adminTabBtn-${tabName}`);

  if (targetContent) targetContent.classList.remove("hidden");
  if (targetBtn) {
    targetBtn.className = "px-5 py-2.5 rounded-xl font-black text-xs md:text-sm text-black bg-gradient-to-r from-amber-500 to-amber-600 shadow-lg shadow-amber-500/20";
  }
  playSound("click");
}

function renderAdminKPIs() {
  const totalProducts = state.products.length;
  const totalOrders = state.orders.length;
  const totalItemsOrdered = state.orders.reduce((sum, o) => sum + (o.itemCount || (o.items ? o.items.reduce((s, i) => s + i.quantity, 0) : 0)), 0);
  const outOfStock = state.products.filter(p => !p.inStock).length;

  document.getElementById("kpiTotalProducts").textContent = totalProducts;
  document.getElementById("kpiTotalOrders").textContent = totalOrders;
  document.getElementById("kpiTotalRevenue").textContent = `${totalItemsOrdered} قطعة`;
  document.getElementById("kpiOutOfStock").textContent = outOfStock;
}

function renderAdminProductsTable() {
  const tbody = document.getElementById("adminProductsTableBody");
  if (!tbody) return;

  tbody.innerHTML = state.products.map(p => `
    <tr class="border-b border-zinc-800/60 hover:bg-zinc-800/30 transition-colors">
      <td class="p-3 text-right">
        <div class="flex items-center gap-3">
          <img src="${p.image}" alt="" onerror="this.src='./assets/logo.jpeg'" class="w-10 h-10 rounded-lg object-cover bg-black border border-zinc-800 shrink-0"/>
          <div>
            <div class="font-bold text-xs text-white">${p.name}</div>
            <div class="text-[10px] text-zinc-500">${p.id}</div>
          </div>
        </div>
      </td>
      <td class="p-3 text-right">
        <span class="text-xs bg-zinc-800 px-2 py-0.5 rounded text-amber-300 font-semibold">${getCategoryTitle(p.category)}</span>
      </td>
      <td class="p-3 text-right">
        <div class="flex items-center gap-1 flex-wrap max-w-xs">
          ${p.colors && p.colors.length > 0 ? p.colors.map(c => `
            <span class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] bg-zinc-900 border border-zinc-700 text-zinc-300">
              <span class="w-2 h-2 rounded-full border border-black/50" style="background:${getColorHex(c)}"></span>
              <span>${c}</span>
            </span>
          `).join("") : `<span class="text-[10px] text-zinc-500">-</span>`}
        </div>
      </td>
      <td class="p-3 text-center">
        <button onclick="toggleProductStock('${p.id}')" class="px-2.5 py-1 rounded-full text-[11px] font-bold ${p.inStock ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-red-950 text-red-400 border border-red-800'}">
          ${p.inStock ? 'متوفر' : 'غير متوفر'}
        </button>
      </td>
      <td class="p-3 text-center">
        <div class="flex items-center justify-center gap-2">
          <button onclick="editProductModal('${p.id}')" class="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-amber-400 text-xs cursor-pointer" title="تعديل">
            ✏️
          </button>
          <button onclick="deleteProduct('${p.id}')" class="p-1.5 rounded-lg bg-zinc-800 hover:bg-red-900/60 text-red-400 text-xs cursor-pointer" title="حذف">
            🗑️
          </button>
        </div>
      </td>
    </tr>
  `).join("");
}

function toggleProductStock(id) {
  const product = state.products.find(p => p.id === id);
  if (!product) return;
  product.inStock = !product.inStock;
  saveProducts();
  renderAdminProductsTable();
  renderAdminKPIs();
  renderProducts();
  playSound("click");
  showToast(`تم تحديث حالة توفر "${product.name}"`);
}

function deleteProduct(id) {
  if (!confirm("هل أنت متأكد من حذف هذا المنتج نهائياً من المتجر؟")) return;
  state.products = state.products.filter(p => p.id !== id);
  saveProducts();
  renderAdminProductsTable();
  renderAdminKPIs();
  renderProducts();
  playSound("punch");
  showToast("تم حذف المنتج بنجاح");
}

let editingProductId = null;

function appendColorToForm(colorName) {
  const input = document.getElementById("prodFormColors");
  if (!input) return;
  const current = input.value.trim();
  const arr = current ? current.split(",").map(c => c.trim()).filter(Boolean) : [];
  if (!arr.includes(colorName)) {
    arr.push(colorName);
    input.value = arr.join(", ");
    playSound("click");
  }
}

function openAddProductModal() {
  editingProductId = null;
  document.getElementById("productModalTitle").textContent = "إضافة معدات وواقي جديد";
  document.getElementById("prodFormName").value = "";
  document.getElementById("prodFormNameEn").value = "";
  document.getElementById("prodFormCategory").value = "hand";
  document.getElementById("prodFormBadge").value = "";
  document.getElementById("prodFormImage").value = "";
  document.getElementById("prodFormSizes").value = "12oz, 14oz, 16oz";
  document.getElementById("prodFormColors").value = "أسود ملكي, ذهبي ميتاليك, أحمر قتالي";
  document.getElementById("prodFormDesc").value = "";

  const modal = document.getElementById("adminProductFormModal");
  if (modal) {
    modal.classList.remove("hidden");
    setTimeout(() => modal.classList.remove("opacity-0"), 10);
  }
}

function editProductModal(id) {
  const p = state.products.find(item => item.id === id);
  if (!p) return;

  editingProductId = id;
  document.getElementById("productModalTitle").textContent = "تعديل المنتج والواقي";
  document.getElementById("prodFormName").value = p.name;
  document.getElementById("prodFormNameEn").value = p.nameEn || "";
  document.getElementById("prodFormCategory").value = p.category;
  document.getElementById("prodFormBadge").value = p.badge || "";
  document.getElementById("prodFormImage").value = p.image || "";
  document.getElementById("prodFormSizes").value = p.sizes ? p.sizes.join(", ") : "";
  document.getElementById("prodFormColors").value = p.colors ? p.colors.join(", ") : "";
  document.getElementById("prodFormDesc").value = p.description || "";

  const modal = document.getElementById("adminProductFormModal");
  if (modal) {
    modal.classList.remove("hidden");
    setTimeout(() => modal.classList.remove("opacity-0"), 10);
  }
}

function closeProductFormModal() {
  const modal = document.getElementById("adminProductFormModal");
  if (!modal) return;
  modal.classList.add("opacity-0");
  setTimeout(() => modal.classList.add("hidden"), 300);
}

function saveProductFromForm(e) {
  if (e) e.preventDefault();

  const name = document.getElementById("prodFormName").value.trim();
  const nameEn = document.getElementById("prodFormNameEn").value.trim();
  const category = document.getElementById("prodFormCategory").value;
  const badge = document.getElementById("prodFormBadge").value.trim();
  let image = document.getElementById("prodFormImage").value.trim();
  const sizesRaw = document.getElementById("prodFormSizes").value.trim();
  const colorsRaw = document.getElementById("prodFormColors").value.trim();
  const description = document.getElementById("prodFormDesc").value.trim();

  if (!name) {
    showToast("يرجى إدخال اسم المنتج", "warning");
    return;
  }

  if (!image) {
    image = "./assets/logo.jpeg";
  }

  const sizes = sizesRaw ? sizesRaw.split(",").map(s => s.trim()).filter(Boolean) : [];
  const colors = colorsRaw ? colorsRaw.split(",").map(c => c.trim()).filter(Boolean) : ["أسود"];

  if (editingProductId) {
    // Update
    const product = state.products.find(p => p.id === editingProductId);
    if (product) {
      product.name = name;
      product.nameEn = nameEn;
      product.category = category;
      product.categoryLabel = getCategoryTitle(category);
      product.badge = badge;
      product.image = image;
      product.sizes = sizes;
      product.colors = colors;
      product.description = description;
    }
    showToast("تم تحديث بيانات المنتج والألوان بنجاح! ⚔️");
  } else {
    // Add New
    const newProduct = {
      id: `gs-${category}-${Date.now().toString().slice(-4)}`,
      name,
      nameEn,
      category,
      categoryLabel: getCategoryTitle(category),
      price: 0,
      oldPrice: null,
      rating: 5.0,
      reviews: 1,
      badge: badge || "جديد ⭐",
      badgeType: "gold",
      image,
      sizes,
      colors,
      description,
      inStock: true
    };
    state.products.unshift(newProduct);
    showToast("تمت إضافة المنتج الجديد بنجاح! 🥊");
  }

  saveProducts();
  closeProductFormModal();
  renderAdminProductsTable();
  renderAdminKPIs();
  renderProducts();
  playSound("success");
}

// Admin Orders Log
function renderAdminOrdersTable() {
  const tbody = document.getElementById("adminOrdersTableBody");
  if (!tbody) return;

  if (state.orders.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" class="p-8 text-center text-zinc-500 text-sm">
          لا توجد طلبات مسجلة حتى الآن. ستظهر هنا كافة الطلبات المرسلة عبر واتساب تلقائياً.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = state.orders.map(order => `
    <tr class="border-b border-zinc-800/60 hover:bg-zinc-800/30 transition-colors">
      <td class="p-3 text-right">
        <span class="font-bold text-amber-400 text-xs">#${order.id}</span>
        <div class="text-[10px] text-zinc-500">${order.displayDate || ""}</div>
      </td>
      <td class="p-3 text-right">
        <div class="font-bold text-xs text-white">${order.customer?.name || "عميل"}</div>
        <div class="text-[11px] text-zinc-400">${order.customer?.phone || ""} - ${order.customer?.city || ""}</div>
      </td>
      <td class="p-3 text-right text-xs text-zinc-300">
        ${order.items ? order.items.map(i => `• ${i.name} (${i.size}${i.color ? ` / ${i.color}` : ""}) × ${i.quantity}`).join("<br/>") : "-"}
      </td>
      <td class="p-3 text-right font-bold text-amber-400 text-xs">
        ${order.itemCount || (order.items ? order.items.reduce((s, i) => s + i.quantity, 0) : 1)} قطع
      </td>
      <td class="p-3 text-center">
        <select onchange="updateOrderStatus('${order.id}', this.value)" class="text-[11px] font-bold bg-zinc-900 border border-zinc-700 rounded-lg px-2 py-1 text-zinc-200 focus:border-amber-500">
          <option value="جديد" ${order.status === 'جديد' || order.status?.includes('New') ? 'selected' : ''}>جديد</option>
          <option value="تم التواصل" ${order.status === 'تم التواصل' ? 'selected' : ''}>تم التواصل</option>
          <option value="تم الشحن" ${order.status === 'تم الشحن' ? 'selected' : ''}>تم الشحن</option>
          <option value="مكتمل" ${order.status === 'مكتمل' ? 'selected' : ''}>مكتمل</option>
        </select>
      </td>
      <td class="p-3 text-center">
        <button onclick="deleteOrder('${order.id}')" class="p-1.5 rounded-lg bg-zinc-800 hover:bg-red-900/60 text-red-400 text-xs" title="حذف الطلب">
          🗑️
        </button>
      </td>
    </tr>
  `).join("");
}

function updateOrderStatus(orderId, newStatus) {
  const order = state.orders.find(o => o.id === orderId);
  if (!order) return;
  order.status = newStatus;
  saveOrders();
  playSound("click");
  showToast(`تم تحديث حالة الطلب #${orderId} إلى: ${newStatus}`);
}

function deleteOrder(orderId) {
  if (!confirm("هل أنت متأكد من حذف هذا السجل؟")) return;
  state.orders = state.orders.filter(o => o.id !== orderId);
  saveOrders();
  renderAdminOrdersTable();
  renderAdminKPIs();
  playSound("click");
  showToast("تم حذف الطلب من السجل");
}

function clearAllOrders() {
  if (state.orders.length === 0) return;
  if (!confirm("هل تريد تفريغ كامل سجل الطلبات؟ لا يمكن التراجع عن هذا الإجراء.")) return;
  state.orders = [];
  saveOrders();
  renderAdminOrdersTable();
  renderAdminKPIs();
  playSound("punch");
  showToast("تم تفريغ سجل الطلبات بالكامل");
}

// Admin Settings
function populateAdminSettings() {
  const phoneInput = document.getElementById("settingsPhoneInput");
  const pinInput = document.getElementById("settingsPinInput");
  const currencyInput = document.getElementById("settingsCurrencyInput");

  if (phoneInput) phoneInput.value = state.storePhone;
  if (pinInput) pinInput.value = state.adminPin;
  if (currencyInput) currencyInput.value = state.currency;
}

function saveStoreSettings(e) {
  if (e) e.preventDefault();
  const phone = document.getElementById("settingsPhoneInput")?.value.trim();
  const pin = document.getElementById("settingsPinInput")?.value.trim();
  const currency = document.getElementById("settingsCurrencyInput")?.value.trim();

  if (phone) state.storePhone = phone;
  if (pin && pin.length >= 4) state.adminPin = pin;
  if (currency) state.currency = currency;

  saveSettings();
  renderProducts();
  renderAdminKPIs();
  playSound("success");
  showToast("تم حفظ إعدادات المتجر بنجاح! 💾");
}

function resetCatalogToDefault() {
  if (!confirm("تحذير: هل أنت متأكد من استعادة المنتجات الأصلية؟ سيتم مسح أي تعديلات أو منتجات أضفتها.")) return;
  state.products = [...INITIAL_PRODUCTS];
  saveProducts();
  renderAdminProductsTable();
  renderAdminKPIs();
  renderProducts();
  playSound("punch");
  showToast("تم استعادة كتالوج المنتجات الافتراضي بنجاح! 🔄");
}

function exportStoreData() {
  const data = {
    products: state.products,
    orders: state.orders,
    settings: {
      phone: state.storePhone,
      currency: state.currency
    },
    exportDate: new Date().toISOString()
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `GStools-Backup-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  playSound("success");
  showToast("تم تصدير ملف النسخة الاحتياطية بنجاح 📁");
}

// ==========================================
// 11. Audio Toggle & UI Initializer
// ==========================================
function toggleSound() {
  state.soundEnabled = !state.soundEnabled;
  localStorage.setItem("gstools_sound", JSON.stringify(state.soundEnabled));
  updateSoundIcon();
  if (state.soundEnabled) {
    playSound("click");
    showToast("تم تفعيل المؤثرات الصوتية 🔊");
  } else {
    showToast("تم كتم الصوت 🔇", "info");
  }
}

function updateSoundIcon() {
  const btn = document.getElementById("soundToggleBtn");
  if (!btn) return;
  btn.innerHTML = state.soundEnabled ? "🔊" : "🔇";
  btn.title = state.soundEnabled ? "كتم المؤثرات الصوتية" : "تفعيل المؤثرات الصوتية";
}

// Size Guide Modal
function toggleSizeGuideModal(open) {
  const modal = document.getElementById("sizeGuideModal");
  if (!modal) return;
  if (open) {
    modal.classList.remove("hidden");
    setTimeout(() => modal.classList.remove("opacity-0"), 10);
    playSound("swoosh");
  } else {
    modal.classList.add("opacity-0");
    setTimeout(() => modal.classList.add("hidden"), 300);
  }
}

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  loadSavedState();
  initHeroCanvas();
  renderProducts();
  updateCartBadge();
  updateSoundIcon();
  setupAdminSecretTriggers();

  // Search Input Handler
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value.trim();
      renderProducts();
    });
  }

  // Sort Dropdown
  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      state.sortBy = e.target.value;
      renderProducts();
      playSound("click");
    });
  }
});
