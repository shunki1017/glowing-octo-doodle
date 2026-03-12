import {
  Users, ShieldCheck, ZapOff, Award, Car, Clock,
} from "lucide-react";
import { FEATURES } from "@/constants/features";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import type { FeatureIconName } from "@/types/common";

const ICON_MAP: Record<FeatureIconName, React.ElementType> = {
  "users": Users,
  "shield-check": ShieldCheck,
  "zap-off": ZapOff,
  "award": Award,
  "car": Car,
  "clock": Clock,
};

export function FeaturesSection() {
  return (
    <section className="bg-navy-950 section-padding">
      <div className="container-wide">
        <AnimatedSection>
          <SectionHeader
            en="Why Choose Us"
            ja="選ばれる理由"
            description="男性のためだけに設計された、こだわりのサロン環境。"
            center
            light
          />
        </AnimatedSection>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => {
            const Icon = ICON_MAP[feature.icon];
            return (
              <AnimatedSection key={feature.id} delay={i * 80}>
                <div className="group border border-white/10 p-8 transition-all duration-300 hover:border-gold-400/40 hover:bg-white/5">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 rounded-full border border-gold-400/30 p-2.5 text-gold-400 transition-all duration-300 group-hover:border-gold-400 group-hover:bg-gold-400/10">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[0.3em] text-gold-500 uppercase">
                        {feature.titleEn}
                      </p>
                      <h3 className="mt-1 text-base font-bold tracking-wider text-white">
                        {feature.title}
                      </h3>
                      <p className="mt-3 text-xs leading-loose text-white/50">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
