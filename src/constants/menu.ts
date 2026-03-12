import type { MenuCategory } from "@/types/menu";

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "hair-removal",
    name: "光脱毛",
    nameEn: "Hair Removal",
    description:
      "痛みが少ない光脱毛を採用。高額な契約不要の都度払いで、自分のペースで通えます。",
    icon: "zap",
    items: [
      {
        id: "removal-a",
        name: "Aパーツ",
        parts: ["鼻下", "顎", "眉間", "指"],
        price: 4400,
        unit: "1回",
      },
      {
        id: "removal-b",
        name: "Bパーツ",
        parts: ["頬", "もみあげ", "耳", "首", "デコルテ", "腹部（へそ周り）", "ひじ", "ひざ", "指（足）"],
        price: 6600,
        unit: "1回",
      },
      {
        id: "removal-c",
        name: "Cパーツ",
        parts: ["ひげ全体", "胸", "お腹", "背中上部", "背中下部", "腕（片腕）", "脚（片脚）"],
        price: 8800,
        unit: "1回",
      },
      {
        id: "removal-vio",
        name: "VIOパーツ",
        parts: ["V", "I", "O（各）"],
        price: 8800,
        unit: "1回",
        note: "デリケートゾーンも男性スタッフが丁寧に対応",
      },
      {
        id: "removal-full",
        name: "全身（VIOなし）",
        parts: ["顔・首・胴体・腕・脚"],
        price: 38500,
        unit: "1回",
        popular: true,
      },
      {
        id: "removal-full-vio",
        name: "全身（VIO込み）",
        parts: ["顔・首・胴体・腕・脚・VIO"],
        price: 49500,
        unit: "1回",
        popular: true,
      },
    ],
    newClientDiscount: [
      { session: 1, discountRate: 80 },
      { session: 2, discountRate: 60 },
      { session: 3, discountRate: 40 },
    ],
  },
  {
    id: "hbl",
    name: "ハリウッドブロウリフト",
    nameEn: "Hollywood Brow Lift",
    description:
      "まつ毛のパーマのような感覚で眉毛を整える最新トリートメント。自然な眉の形を長期キープ。",
    icon: "sparkles",
    items: [
      {
        id: "hbl-standard",
        name: "HBL スタンダード",
        parts: ["眉毛のリフトアップ・形成"],
        price: 8800,
        unit: "1回",
        popular: true,
      },
      {
        id: "hbl-color",
        name: "HBL + カラーリング",
        parts: ["リフトアップ＋眉毛染め"],
        price: 11000,
        unit: "1回",
      },
    ],
  },
  {
    id: "whitening",
    name: "セルフホワイトニング",
    nameEn: "Self Whitening",
    description:
      "サロンケアとセルフケアを組み合わせた歯のホワイトニング。通いやすい料金設定。",
    icon: "smile",
    items: [
      {
        id: "whitening-trial",
        name: "トライアル（1回）",
        parts: ["20分照射"],
        price: 3300,
        unit: "1回",
      },
      {
        id: "whitening-3",
        name: "3回コース",
        parts: ["20分照射 × 3回"],
        price: 8800,
        unit: "3回",
        popular: true,
      },
      {
        id: "whitening-5",
        name: "5回コース",
        parts: ["20分照射 × 5回"],
        price: 13200,
        unit: "5回",
      },
    ],
  },
  {
    id: "dep",
    name: "DEP（ディープ電子パルス）",
    nameEn: "DEP Treatment",
    description:
      "福島県メンズサロン初導入。電子パルスで美容成分を肌深部へ浸透させる次世代スキンケア。",
    icon: "activity",
    items: [
      {
        id: "dep-standard",
        name: "DEP フェイシャル",
        parts: ["顔全体への電子パルス導入"],
        price: 11000,
        unit: "1回",
        popular: true,
        badge: "県内初",
      },
      {
        id: "dep-scalp",
        name: "DEP スカルプ",
        parts: ["頭皮ケア電子パルス導入"],
        price: 11000,
        unit: "1回",
      },
    ],
  },
];
