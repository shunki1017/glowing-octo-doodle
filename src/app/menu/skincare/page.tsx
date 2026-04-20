import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTASection } from "@/components/sections/CTASection";
import { formatPrice } from "@/lib/utils";

export const metadata: Metadata = {
  title: "郡山市フォトフェイシャル・スキンケア メンズサロン | 美men",
  description:
    "郡山市のメンズ専門サロン「美men」のフォトフェイシャル・ウォーターピーリング。県内初導入のフォトフェイシャルで肌のキメを整え透明感アップ。男性スタッフのみ対応・都度払い。",
  keywords: [
    "郡山 フォトフェイシャル メンズ", "郡山市 メンズ スキンケア サロン",
    "郡山 ウォーターピーリング 男性", "福島 フォトフェイシャル メンズ",
    "郡山 メンズ 肌荒れ サロン", "郡山市 スキンケア 男性 安い",
    "郡山 男性 フェイシャル", "郡山市 光フェイシャル メンズ",
  ],
  alternates: {
    canonical: "https://bimen-salon.vercel.app/menu/skincare",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://bimen-salon.vercel.app" },
    { "@type": "ListItem", position: 2, name: "メニュー・料金", item: "https://bimen-salon.vercel.app/menu" },
    { "@type": "ListItem", position: 3, name: "フォトフェイシャル・スキンケア", item: "https://bimen-salon.vercel.app/menu/skincare" },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "フォトフェイシャル・スキンケア",
  description: "郡山市の男性専門美容サロン美menのフォトフェイシャル・ウォーターピーリングサービス。県内初導入。",
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
    { "@type": "Offer", name: "フォトフェイシャル（顔全体）", price: "11000", priceCurrency: "JPY" },
    { "@type": "Offer", name: "ウォーターピーリング", price: "2200", priceCurrency: "JPY" },
  ],
};

const FAQS = [
  {
    q: "フォトフェイシャルとは何ですか？",
    a: "フォトフェイシャルは、光（IPL）を顔全体に照射することで、シミ・くすみ・毛穴の開きなどを改善し、肌のキメを整える施術です。美menは福島県のサロンとして初めてこの機器を導入しました。",
  },
  {
    q: "ウォーターピーリングとはどんな施術ですか？",
    a: "超音波と水流を使って古い角質や汚れを除去する、肌への負担が少ないピーリング方法です。洗顔では落としきれない毛穴汚れもケアでき、施術後はお肌がなめらかになります。",
  },
  {
    q: "男性でもフェイシャルは必要ですか？",
    a: "はい。男性の肌は女性に比べて皮脂分泌が多く、毛穴が開きやすい傾向があります。定期的なスキンケアで清潔感のある肌を維持することは、ビジネスでも私生活でも好印象につながります。",
  },
  {
    q: "フォトフェイシャルは痛いですか？",
    a: "輪ゴムで軽く弾かれるような感覚を感じる場合がありますが、強い痛みはほとんどありません。肌質・照射部位によって感じ方に個人差があります。",
  },
];

export default function SkincarePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

      {/* ヒーロー */}
      <section className="bg-gradient-brand pt-32 pb-16 text-center">
        <AnimatedSection>
          <p className="text-xs font-medium tracking-[0.5em] text-gold-400 uppercase">Photo Facial &amp; Skin Care</p>
          <h1 className="mt-4 text-3xl font-bold tracking-widest text-white md:text-4xl">
            フォトフェイシャル・スキンケア
          </h1>
          <p className="mt-4 text-sm text-white/60">
            県内初導入 ・ 郡山市のメンズ専門サロン ・ 肌のキメを整える
          </p>
        </AnimatedSection>
      </section>

      {/* 説明 */}
      <section className="bg-cream section-padding">
        <div className="container-narrow">
          <AnimatedSection>
            <SectionHeader en="About" ja="フォトフェイシャルとは" />
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <p className="mt-8 text-sm leading-[2.2] text-navy-600">
              <strong className="text-navy-900">フォトフェイシャル</strong>は、光（IPL）を顔全体に照射することで、
              シミ・くすみ・毛穴の開きを改善し、肌のキメを整える施術です。
              美menは<strong className="text-navy-900">福島県のサロンとして初導入</strong>。
              <br /><br />
              合わせて提供している<strong className="text-navy-900">ウォーターピーリング</strong>は、
              超音波と水流で古い角質・毛穴汚れを優しく除去。
              化粧水や美容液の浸透が良くなり、肌全体のコンディションが整います。
              脱毛と組み合わせてトータルなメンズビューティを実現できます。
            </p>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "福島県サロン初導入",
                "シミ・くすみ・毛穴ケア",
                "肌への負担が少ない",
                "男性スタッフのみ対応",
                "都度払い・コース不要",
                "脱毛との組み合わせもOK",
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
                { name: "フォトフェイシャル", desc: "顔全体への光照射", price: 11000, badge: "県内初" },
                { name: "ウォーターピーリング", desc: "水流での角質ケア", price: 2200 },
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
                    <p className="text-xl font-bold text-gold-400 shrink-0">{formatPrice(item.price)}</p>
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
                { href: "/menu/dep", label: "DEP・痩身", sub: "福島県メンズサロン初導入" },
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
