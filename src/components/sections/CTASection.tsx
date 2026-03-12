import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/constants/siteConfig";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function CTASection() {
  return (
    <section className="bg-gradient-brand section-padding">
      <div className="container-narrow text-center">
        <AnimatedSection>
          <p className="text-xs font-medium tracking-[0.5em] text-gold-400 uppercase">
            Reservation
          </p>
          <h2 className="mt-4 text-2xl font-bold tracking-widest text-white md:text-3xl">
            まずは無料カウンセリングへ
          </h2>
          <p className="mt-4 text-sm leading-loose text-white/50">
            初めての方も安心。施術内容・料金・効果について、
            <br className="hidden sm:block" />
            男性スタッフが丁寧にご説明します。
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact" className="btn-primary">
              <span>Webで予約する</span>
              <ArrowRight size={16} />
            </Link>
            <a
              href={SITE_CONFIG.sns.line}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <MessageCircle size={16} />
              <span>LINEで相談する</span>
            </a>
          </div>

          <p className="mt-6 text-xs text-white/30">
            お電話でもご予約を承ります：
            <a href={SITE_CONFIG.telHref} className="ml-1 text-white/50 hover:text-gold-400 transition-colors">
              {SITE_CONFIG.tel}
            </a>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
