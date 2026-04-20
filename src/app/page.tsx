import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { MenuSection } from "@/components/sections/MenuSection";
import { CampaignSection } from "@/components/sections/CampaignSection";
import { AccessSection } from "@/components/sections/AccessSection";
import { CTASection } from "@/components/sections/CTASection";
import { FaqSection } from "@/components/sections/FaqSection";

export const metadata: Metadata = {
  title: "美men | 郡山市のメンズ専門美容サロン｜光脱毛・HBL・ホワイトニング",
  description:
    "福島県郡山市のメンズ専門美容サロン「美men（びめん）」。光脱毛・ハリウッドブロウリフト（HBL）・セルフホワイトニング・DEPを都度払いで提供。男性スタッフのみ対応で安心。新規最大80%OFF。",
  alternates: {
    canonical: "https://bimen-salon.vercel.app",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "スタッフは全員男性ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、美menは完全男性スタッフ制です。カウンセリングから施術まで、すべて男性スタッフが担当します。VIOを含む全身脱毛も、同性スタッフ対応で安心してお受けいただけます。",
      },
    },
    {
      "@type": "Question",
      name: "コース契約は必要ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "一切不要です。すべてのメニューは都度払い制で、高額な長期コース契約はありません。必要なときに必要な施術だけ受けることができます。",
      },
    },
    {
      "@type": "Question",
      name: "光脱毛は痛いですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "光（フラッシュ）脱毛は、従来のレーザー脱毛に比べて痛みが少ないのが特徴です。肌質・毛質によって個人差がありますが、初めての方でも受けやすい施術です。気になる方はカウンセリング時にご相談ください。",
      },
    },
    {
      "@type": "Question",
      name: "予約はどうすればいいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "電話（024-983-3533）・LINE・Webフォームの3つの方法でご予約いただけます。初めての方は無料カウンセリングからのご予約をおすすめしています。",
      },
    },
    {
      "@type": "Question",
      name: "駐車場はありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、店舗裏に専用駐車場（No.29・No.30）を2台分ご用意しています。お車でのご来店も安心です。",
      },
    },
    {
      "@type": "Question",
      name: "新規割引はどのくらいお得ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "初回は最大80%OFF、2回目60%OFF、3回目40%OFFの継続割引が適用されます。Aパーツ（鼻下・顎・眉間・指）の通常料金4,400円が、初回880円から施術できます。",
      },
    },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "美men",
  alternateName: ["びめん", "BIMEN"],
  description: "福島県郡山市のメンズ専門美容サロン。光脱毛・ハリウッドブロウリフト・セルフホワイトニング・DEPを都度払いで提供。",
  url: "https://bimen-salon.vercel.app",
  telephone: "024-983-3533",
  address: {
    "@type": "PostalAddress",
    postalCode: "963-8862",
    addressRegion: "福島県",
    addressLocality: "郡山市",
    streetAddress: "菜根５丁目18-18 ダイユービル103",
    addressCountry: "JP",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "12:00",
    closes: "22:00",
  },
  priceRange: "¥880〜",
  image: "https://bimen-salon.vercel.app/og-image.jpg",
  sameAs: [
    "https://www.instagram.com/bimen_koriyama/",
    "https://x.com/bimen_koriyama",
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HeroSection />
      <FeaturesSection />
      <MenuSection />
      <CampaignSection />
      <AccessSection />
      <FaqSection />
      <CTASection />
    </>
  );
}
