import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Gift, Tag, Star, UserPlus } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { formatPrice, calcDiscountedPrice } from "@/lib/utils";

export const metadata: Metadata = {
  title: "キャンペーン",
  description:
    "美menのキャンペーン情報。新規最大80%OFF・学割・ポイントカード・紹介制度など、お得に通えるシステムをご紹介。",
};

export default function CampaignPage() {
  return (
    <>
      {/* ページヒーロー */}
      <section className="bg-gradient-brand pt-32 pb-16 text-center">
        <AnimatedSection>
          <p className="text-xs font-medium tracking-[0.5em] text-gold-400 uppercase">Campaign</p>
          <h1 className="mt-4 text-3xl font-bold tracking-widest text-white md:text-4xl">
            キャンペーン
          </h1>
        </AnimatedSection>
      </section>

      <section className="bg-cream section-padding">
        <div className="container-narrow space-y-16">

          {/* 新規割引 */}
          <AnimatedSection>
            <div>
              <SectionHeader
                en="New Client Discount"
                ja="新規パーツ脱毛割引"
                description="初めてのご来店は最大80%OFF。3回目まで継続割引が適用されます。"
              />
              <div className="mt-8 bg-navy-950 p-8">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { session: "1回目", rate: 80, example: 880 },
                    { session: "2回目", rate: 60, example: 1760 },
                    { session: "3回目", rate: 40, example: 2640 },
                  ].map((d) => (
                    <div key={d.session} className="border border-white/10 p-5 text-center">
                      <p className="text-xs tracking-widest text-white/40">{d.session}</p>
                      <p className="mt-2 text-3xl font-bold text-gold-400">{d.rate}%</p>
                      <p className="text-sm text-white/60">OFF</p>
                      <p className="mt-3 border-t border-white/10 pt-3 text-xs text-white/30">
                        Aパーツ例：{formatPrice(d.example)}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-white/30">
                  ※ Aパーツ通常料金 {formatPrice(4400)}（鼻下・顎・眉間・指）
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* 学割 */}
          <AnimatedSection>
            <div className="border border-navy-200 p-8">
              <div className="flex items-start gap-4">
                <Tag size={24} className="shrink-0 text-gold-500" />
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h2 className="text-xl font-bold tracking-wider text-navy-900">学割</h2>
                    <Badge variant="gold">学生限定</Badge>
                  </div>
                  <p className="mt-2 text-sm leading-loose text-navy-500">
                    学生証をご提示いただくと、セット割からさらに
                    <strong className="text-gold-600"> 5% OFF</strong>。
                    学生のうちから始めるスキンケア習慣を応援します。
                  </p>
                  <p className="mt-3 text-xs text-navy-400">
                    ※ ご来店時に有効な学生証の提示が必要です。
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* ポイントカード */}
          <AnimatedSection>
            <div>
              <SectionHeader en="Point Card" ja="ポイントカード" />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="bg-navy-950 p-6 text-center">
                  <Star size={28} className="mx-auto text-gold-400" />
                  <p className="mt-3 text-3xl font-bold text-gold-400">1 pt</p>
                  <p className="mt-1 text-sm text-white/60">
                    {formatPrice(2000)} ごとに獲得
                  </p>
                </div>
                <div className="bg-navy-800 p-6 text-center">
                  <Gift size={28} className="mx-auto text-gold-400" />
                  <p className="mt-3 text-3xl font-bold text-gold-400">
                    {formatPrice(6000)}
                  </p>
                  <p className="mt-1 text-sm text-white/60">30pt 達成で割引</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* 紹介制度 */}
          <AnimatedSection>
            <div>
              <SectionHeader en="Referral" ja="紹介制度" />
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="border border-gold-400/30 p-6">
                  <UserPlus size={22} className="text-gold-500" />
                  <p className="mt-3 text-sm font-bold tracking-wider text-navy-900">
                    紹介した方（紹介者）
                  </p>
                  <p className="mt-3 text-2xl font-bold text-gold-600">
                    {formatPrice(2000)} 割引券
                  </p>
                  <p className="mt-2 text-xs text-navy-400">
                    友人・知人を紹介していただくと、次回ご利用時に割引券をプレゼント。
                  </p>
                </div>
                <div className="border border-navy-200 bg-navy-50 p-6">
                  <UserPlus size={22} className="text-navy-400" />
                  <p className="mt-3 text-sm font-bold tracking-wider text-navy-900">
                    紹介された方（新規）
                  </p>
                  <p className="mt-3 text-2xl font-bold text-navy-700">
                    {formatPrice(1000)} 割引券
                  </p>
                  <p className="mt-2 text-xs text-navy-400">
                    紹介を受けてご来店いただいた方にも、初回割引券をプレゼント。
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="text-center">
            <Link href="/contact" className="btn-primary">
              <span>今すぐ予約する</span>
              <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
