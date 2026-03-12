import type { Metadata } from "next";
import { AccessSection } from "@/components/sections/AccessSection";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "アクセス",
  description:
    "美men（びめん）のアクセス情報。福島県郡山市菜根５丁目18-18 ダイユービル103。駐車場2台完備。営業時間12:00〜22:00。",
};

export default function AccessPage() {
  return (
    <>
      {/* ページヒーロー */}
      <section className="bg-gradient-brand pt-32 pb-16 text-center">
        <AnimatedSection>
          <p className="text-xs font-medium tracking-[0.5em] text-gold-400 uppercase">Access</p>
          <h1 className="mt-4 text-3xl font-bold tracking-widest text-white md:text-4xl">
            アクセス
          </h1>
        </AnimatedSection>
      </section>

      <AccessSection />
      <CTASection />
    </>
  );
}
