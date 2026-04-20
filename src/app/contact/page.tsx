import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ContactForm } from "@/components/sections/ContactForm";
import { SITE_CONFIG } from "@/constants/siteConfig";
import { Phone, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "お問い合わせ・ご予約 | 無料カウンセリング受付中",
  description:
    "美men（びめん）へのお問い合わせ・ご予約はこちら。Webフォーム・電話（024-983-3533）・LINEからお気軽にどうぞ。無料カウンセリング受付中。郡山市のメンズ専門美容サロン。",
  keywords: [
    "美men 予約", "郡山市 メンズ脱毛 予約", "美容サロン 無料カウンセリング 郡山",
    "メンズサロン 問い合わせ 福島",
  ],
  alternates: {
    canonical: "https://bimen-salon.vercel.app/contact",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://bimen-salon.vercel.app" },
    { "@type": "ListItem", position: 2, name: "お問い合わせ・ご予約", item: "https://bimen-salon.vercel.app/contact" },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* ページヒーロー */}
      <section className="bg-gradient-brand pt-32 pb-16 text-center">
        <AnimatedSection>
          <p className="text-xs font-medium tracking-[0.5em] text-gold-400 uppercase">Contact</p>
          <h1 className="mt-4 text-3xl font-bold tracking-widest text-white md:text-4xl">
            お問い合わせ・ご予約
          </h1>
          <p className="mt-4 text-sm text-white/40">
            まずはお気軽にご連絡ください。無料カウンセリングも受け付けております。
          </p>
        </AnimatedSection>
      </section>

      <section className="bg-cream section-padding">
        <div className="container-narrow">
          {/* 連絡方法 */}
          <AnimatedSection>
            <div className="mb-12 grid gap-4 sm:grid-cols-2">
              <a
                href={SITE_CONFIG.telHref}
                className="flex items-center gap-4 border border-navy-200 bg-white p-6 transition-all hover:border-gold-400/50 hover:shadow-sm"
              >
                <Phone size={22} className="text-gold-500" />
                <div>
                  <p className="text-xs tracking-widest text-navy-400">お電話</p>
                  <p className="text-lg font-bold tracking-wider text-navy-900">
                    {SITE_CONFIG.tel}
                  </p>
                  <p className="text-xs text-navy-400">{SITE_CONFIG.hours.display}</p>
                </div>
              </a>

              <a
                href={SITE_CONFIG.sns.line}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 border border-navy-200 bg-white p-6 transition-all hover:border-gold-400/50 hover:shadow-sm"
              >
                <MessageCircle size={22} className="text-gold-500" />
                <div>
                  <p className="text-xs tracking-widest text-navy-400">LINE</p>
                  <p className="text-base font-bold tracking-wider text-navy-900">
                    LINEで相談・予約
                  </p>
                  <p className="text-xs text-navy-400">お気軽にメッセージをどうぞ</p>
                </div>
              </a>
            </div>
          </AnimatedSection>

          {/* Webフォーム */}
          <AnimatedSection delay={100}>
            <div className="bg-white p-8 shadow-sm">
              <h2 className="text-lg font-bold tracking-widest text-navy-900">
                Webフォームでのお問い合わせ
              </h2>
              <p className="mt-2 text-xs text-navy-400">
                ※ 通常2営業日以内にご返信いたします。お急ぎの場合はお電話にてお問い合わせください。
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
