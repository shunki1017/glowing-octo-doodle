import type { Feature } from "@/types/common";

export const FEATURES: Feature[] = [
  {
    id: "men-only",
    icon: "users",
    title: "完全男性スタッフ",
    titleEn: "Men Staff Only",
    description:
      "施術スタッフはすべて男性。VIOを含む全身脱毛も、同性スタッフが対応するので安心してご利用いただけます。",
  },
  {
    id: "no-contract",
    icon: "shield-check",
    title: "高額契約なし",
    titleEn: "No Long-term Contract",
    description:
      "都度払い制を採用。コース契約や高額な前払いは一切不要。自分のペースで、必要な施術だけ受けられます。",
  },
  {
    id: "low-pain",
    icon: "zap-off",
    title: "痛みが少ない光脱毛",
    titleEn: "Low-pain Technology",
    description:
      "医療レーザーと比べて痛みや火傷のリスクが少ない光脱毛を採用。敏感肌の方にも安心の施術です。",
  },
  {
    id: "first-in-fukushima",
    icon: "award",
    title: "福島県メンズサロン初導入",
    titleEn: "First in Fukushima",
    description:
      "DEP（深部電子パルス導入）を福島県のメンズサロンとして初導入。最新テクノロジーで肌ケアをサポート。",
  },
  {
    id: "parking",
    icon: "car",
    title: "駐車場完備",
    titleEn: "Parking Available",
    description:
      "店舗裏に専用駐車場2台（No.29・No.30）をご用意。お車でのご来店も安心です。",
  },
  {
    id: "late-night",
    icon: "clock",
    title: "夜22時まで営業",
    titleEn: "Open Until 22:00",
    description:
      "12:00〜22:00（最終受付21:00）の営業。仕事帰りや休日など、ライフスタイルに合わせてご来店いただけます。",
  },
];

export const CAMPAIGNS = [
  {
    id: "new-client",
    title: "新規パーツ脱毛割引",
    description: "初めてのご来店は最大80%OFF",
    items: [
      { label: "1回目", discount: "80% OFF" },
      { label: "2回目", discount: "60% OFF" },
      { label: "3回目", discount: "40% OFF" },
    ],
    note: "Aパーツ（通常4,400円）→ 初回880円〜",
    color: "gold",
  },
  {
    id: "student",
    title: "学割",
    description: "学生証ご提示でさらにお得に",
    badge: "学生限定",
    items: [
      { label: "セット割からさらに", discount: "5% OFF" },
    ],
    color: "navy",
  },
  {
    id: "point-card",
    title: "ポイントカード",
    description: "通えば通うほどお得になる",
    items: [
      { label: "2,000円ごと", discount: "1pt 付与" },
      { label: "30pt 達成で", discount: "6,000円割引" },
    ],
    color: "navy",
  },
  {
    id: "referral",
    title: "紹介制度",
    description: "お友達紹介でダブル特典",
    items: [
      { label: "紹介した方", discount: "2,000円割引券" },
      { label: "紹介された方", discount: "1,000円割引券" },
    ],
    color: "gold",
  },
] as const;
