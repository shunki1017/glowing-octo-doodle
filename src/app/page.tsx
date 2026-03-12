import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { MenuSection } from "@/components/sections/MenuSection";
import { CampaignSection } from "@/components/sections/CampaignSection";
import { AccessSection } from "@/components/sections/AccessSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "美men | 郡山市のメンズ専門美容サロン｜光脱毛・HBL・ホワイトニング",
  description:
    "福島県郡山市のメンズ専門美容サロン「美men（びめん）」。光脱毛・ハリウッドブロウリフト（HBL）・セルフホワイトニング・DEPを都度払いで提供。男性スタッフのみ対応で安心。新規最大80%OFF。",
  alternates: {
    canonical: "https://bimen-salon.vercel.app",
  },
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
      <HeroSection />
      <FeaturesSection />
      <MenuSection />
      <CampaignSection />
      <AccessSection />
      <CTASection />
    </>
  );
}
