import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTASection } from "@/components/sections/CTASection";
import { formatPrice } from "@/lib/utils";

export const metadata: Metadata = {
  title: "郡山市DEP（ダーマエレクトロポレーション）・痩身 メンズサロン | 美men",
  description:
    "郡山市のメンズ専門サロン「美men」のDEP（ダーマエレクトロポレーション）・痩身メニュー。福島県メンズサロン初導入。顔への有効成分導入＋キャビテーション＆ラジオ波による痩身。男性スタッフのみ対応。",
  keywords: [
    "郡山 DEP", "郡山 ダーマエレクトロポレーション", "郡山 痩身 メンズ",
    "福島 DEP メンズサロン", "郡山 キャビテーション 男性", "郡山市 痩身サロン 男性",
    "郡山 ラジオ波 メンズ", "郡山 スキンケア 導入 男性", "郡山市 DEP 料金",
  ],
  alternates: {
    canonical: "https://bimen-salon.vercel.app/menu/dep",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://bimen-salon.vercel.app" },
    { "@type": "ListItem", position: 2, name: "メニュー・料金", item: "https://bimen-salon.vercel.app/menu" },
    { "@type": "ListItem", position: 3, name: "DEP・痩身", item: "https://bimen-salon.vercel.app/menu/dep" },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "DEP（ダーマエレクトロポレーション）・痩身",
  description: "郡山市の男性専門美容サロン美menのDEP・痩身サービス。福島県メンズサロン初導入。",
  provider: {
    "@type": "BeautySalon",
    name: "美men",
    url: "https://bimen-salon.vercel.app",
    address: {
      "@type": "PostalAddress",
      postalCode: "963-8862",
      addressRegion: "福島県",
      addressLocality: "郡山市",
      streetAddress: "菜根５丁目18-18 ダイユービル103",
      addressCountry: "JP",
    },
  },
  areaServed: { "@type": "City", name: "郡山市" },
  offers: [
    { "@type": "Offer", name: "DEP（ダーマエレクトロポレーション）", price: "16000", priceCurrency: "JPY" },
    { "@type": "Offer", name: "キャビテーション＆ラジオ波（腹部・背中）", price: "7000", priceCurrency: "JPY" },
    { "@type": "Offer", name: "キャビテーション＆ラジオ波（両脚）", price: "5000", priceCurrency: "JPY" },
    { "@type": "Offer", name: "キャビテーション＆ラジオ波（両腕）", price: "3000", priceCurrency: "JPY" },
  ],
};

const FAQS = [
  {
    q: "DEP（ダーマエレクトロポレーション）とは何ですか？",
    a: "DEP（ダーマエレクトロポレーション）は、電気パルスを使って皮膚に微細な通路を作り、有効成分（ビタミンC・ヒアルロン酸など）を肌の深部まで浸透させる最新スキンケア技術です。針を使わないため痛みがなく、即効性が高いのが特徴です。美menは福島県のメンズサロンとして初めてこの技術を導入しました。",
  },
  {
    q: "キャビテーション＆ラジオ波とはどんな施術ですか？",
    a: "キャビテーションは超音波を使って脂肪細胞に直接アプローチし、ラジオ波（高周波）は組織を深部から温めて代謝を促進します。この2つを組み合わせることで、気になる部位（腹部・背中・脚・腕）の引き締め効果が期待できます。",
  },
  {
    q: "DEPの効果はいつから実感できますか？",
    a: "施術直後から肌のハリや透明感の変化を感じる方も多いです。継続して施術を受けることで、より安定した効果が得られます。",
  },
  {
    q: "痩身メニューは何回通えばいいですか？",
    a: "週1〜2回のペースで6〜8回を1クールの目安としている方が多いです。ただし都度払い制のため、自分のペースで無理なく通えます。",
  },
];

export default function DepPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

      {/* ヒーロー */}
      <section className="bg-gradient-brand pt-32 pb-16 text-center">
        <AnimatedSection>
          <p className="text-xs font-medium tracking-[0.5em] text-gold-400 uppercase">DEP &amp; Body Slimming</p>
          <h1 className="mt-4 text-3xl font-bold tracking-widest text-white md:text-4xl">
            DEP・痩身
          </h1>
          <p className="mt-4 text-sm text-white/60">
            福島県メンズサロン初導入 ・ 郡山市のメンズ専門サロン
          </p>
        </AnimatedSection>
      </section>

      {/* DEP説明 */}
      <section className="bg-cream section-padding">
        <div className="container-narrow">
          <AnimatedSection>
            <SectionHeader en="DEP" ja="DEP（ダーマエレクトロポレーション）" />
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <p className="mt-8 text-sm leading-[2.2] text-navy-600">
              <strong className="text-navy-900">DEP（ダーマエレクトロポレーション）</strong>は、
              電気パルスを使って皮膚に微細な通路を作り、
              ビタミンCやヒアルロン酸などの有効成分を<strong className="text-navy-900">肌の深部まで直接届ける</strong>最新技術。
              美menは<strong className="text-navy-900">福島県のメンズサロンとして初導入</strong>しました。
              <br /><br />
              針を使わないため痛みはなく、施術直後からハリや透明感の変化を実感できる方も多いです。
              郡山市で最先端のスキンケアを体験したい男性に選ばれています。
            </p>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "福島県メンズサロン初導入",
                "針不使用・痛みなし",
                "施術直後から効果を実感",
                "男性スタッフのみ対応",
                "都度払い・コース不要",
                "導入価格で提供中",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 border border-navy-200 bg-white p-4">
                  <CheckCircle size={16} className="mt-0.5 shrink-0 text-gold-500" />
                  <span className="text-sm text-navy-700">{f}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* 料金表 */}
      <section className="bg-navy-950 section-padding">
        <div className="container-narrow">
          <AnimatedSection>
            <SectionHeader en="Price" ja="料金表" light />
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <div className="mt-10 space-y-4">
              {[
                { name: "DEP（ダーマエレクトロポレーション）", desc: "顔全体への有効成分導入", price: 16000, original: 18000, badge: "県内初" },
                { name: "キャビテーション＆ラジオ波（腹部・背中）", desc: "腹部または背中", price: 7000, original: 8000 },
                { name: "キャビテーション＆ラジオ波（両脚）", desc: "両脚", price: 5000, original: 6000 },
                { name: "キャビテーション＆ラジオ波（両腕）", desc: "両腕", price: 3000, original: 4000 },
              ].map((item) => (
                <div key={item.name} className="border border-white/10 p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      {item.badge && (
                        <span className="mb-2 inline-block bg-gold-400 px-2 py-0.5 text-xs font-bold text-navy-950">
                          {item.badge}
                        </span>
                      )}
                      <p className="font-bold tracking-wide text-white">{item.name}</p>
                      <p className="mt-1 text-xs text-white/40">{item.desc}</p>
                    </div>
                    <div className="text-right shrink-0">
                      {item.original && (
                        <p className="text-xs text-white/30 line-through">{formatPrice(item.original)}</p>
                      )}
                      <p className="text-xl font-bold text-gold-400">{formatPrice(item.price)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-white/30">※ 料金は税込。都度払い制で高額なコース契約はありません。</p>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream section-padding">
        <div className="container-narrow">
          <AnimatedSection>
            <SectionHeader en="FAQ" ja="よくある質問" />
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <dl className="mt-10 space-y-6">
              {FAQS.map((faq) => (
                <div key={faq.q} className="border border-navy-200 bg-white p-6">
                  <dt className="font-bold tracking-wide text-navy-900">Q. {faq.q}</dt>
                  <dd className="mt-3 text-sm leading-loose text-navy-500">A. {faq.a}</dd>
                </div>
              ))}
            </dl>
          </AnimatedSection>
        </div>
      </section>

      {/* 他のメニュー */}
      <section className="bg-white section-padding">
        <div className="container-narrow">
          <AnimatedSection>
            <SectionHeader en="Other Menu" ja="他のメニュー" />
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                { href: "/menu/koudatsu", label: "光脱毛", sub: "ヒゲ・VIO・全身脱毛" },
                { href: "/menu/hbl", label: "ハリウッドブロウリフト・Wax", sub: "眉毛の形成＆リフトアップ" },
                { href: "/menu/whitening", label: "セルフホワイトニング", sub: "白い歯への近道" },
                { href: "/menu/skincare", label: "フォトフェイシャル・スキンケア", sub: "肌のキメを整える" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between border border-navy-200 bg-cream p-4 transition-colors hover:border-gold-400/50"
                >
                  <div>
                    <p className="text-sm font-bold text-navy-900">{item.label}</p>
                    <p className="text-xs text-navy-400">{item.sub}</p>
                  </div>
                  <ArrowRight size={16} className="text-gold-500" />
                </Link>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTASection />
    </>
  );
}
