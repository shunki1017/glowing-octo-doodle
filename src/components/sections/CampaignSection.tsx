import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CAMPAIGNS } from "@/constants/features";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";

export function CampaignSection() {
  return (
    <section className="bg-navy-900 section-padding">
      <div className="container-wide">
        <AnimatedSection>
          <SectionHeader
            en="Campaign"
            ja="キャンペーン"
            description="はじめての方も、通い続ける方も、うれしい特典が満載。"
            light
          />
        </AnimatedSection>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CAMPAIGNS.map((campaign, i) => (
            <AnimatedSection key={campaign.id} delay={i * 80}>
              <div className="border border-white/10 p-6 transition-all duration-300 hover:border-gold-400/40">
                {"badge" in campaign && campaign.badge && (
                  <Badge variant="gold" className="mb-3">{campaign.badge as string}</Badge>
                )}
                <h3 className="text-base font-bold tracking-wider text-white">
                  {campaign.title}
                </h3>
                <p className="mt-1 text-xs text-white/40">{campaign.description}</p>

                <ul className="mt-5 space-y-2">
                  {campaign.items.map((item) => (
                    <li key={item.label} className="flex justify-between text-sm">
                      <span className="text-white/50">{item.label}</span>
                      <strong className="text-gold-400">{item.discount}</strong>
                    </li>
                  ))}
                </ul>

                {"note" in campaign && campaign.note && (
                  <p className="mt-4 border-t border-white/10 pt-4 text-xs text-white/30">
                    {campaign.note as string}
                  </p>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-10 text-center">
          <Link href="/campaign" className="btn-outline">
            <span>キャンペーン詳細</span>
            <ArrowRight size={16} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
