import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { MenuSection } from "@/components/sections/MenuSection";
import { CampaignSection } from "@/components/sections/CampaignSection";
import { AccessSection } from "@/components/sections/AccessSection";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <MenuSection />
      <CampaignSection />
      <AccessSection />
      <CTASection />
    </>
  );
}
