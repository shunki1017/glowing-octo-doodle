import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTASection } from "@/components/sections/CTASection";
import { formatPrice } from "@/lib/utils";

export const metadata: Metadata = {
  title: "郡山市セルフホワイトニング メンズ｜白い歯を手軽に | 美men",
  description:
    "郡山市のメンズ専門サロン「美men」のセルフホワイトニング。20分照射5,500円。痛みが少なく手軽に白い歯へ。男性スタッフのみ対応・都度払い・夜22時まで営業。",
  keywords: [
    "郡山 ホワイトニング メンズ", "郡山市 セルフホワイトニング", "郡山 歯 白くする 男性",
    "福島 ホワイトニング サロン 男性", "郡山市 ホワイトニング 安い", "郡山 歯のホワイトニング",
    "郡山 ホワイトニング 料金", "郡山市 男性 ホワイトニング",
  ],
  alternates: {
    canonical: "https://bimen-salon.vercel.app/menu/whitening",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://bimen-salon.vercel.app" },
    { "@type": "ListItem", position: 2, name: "メニュー・料金", item: "https://bimen-salon.vercel.app/menu" },
    { "@type": "ListItem", position: 3, name: "セルフホワイトニング", item: "https://bimen-salon.vercel.app/menu/whitening" },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "セルフホワイトニング",
  description: "郡山市の男性専門美容サロン美menのセルフホワイトニング。20分照射で手軽に白い歯へ。",
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
    { "@type": "Offer", name: "セルフホワイトニング（20分照射）", price: "5500", priceCurrency: "JPY" },
  ],
};

const FAQS = [
  {
    q: "セルフホワイトニングとは何ですか？",
    a: "サロンが用意した専用のホワイトニング剤とLED照射機器を使い、自分で歯に薬剤を塗布して照射するホワイトニング方法です。歯科でのホワイトニングより手軽・安価で、痛みが少ないのが特徴です。",
  },
  {
    q: "歯科ホワイトニングとの違いは何ですか？",
    a: "歯科ホワイトニングは高濃度の薬剤を使用するため効果が高い反面、費用が高く、知覚過敏になりやすい場合があります。セルフホワイトニングは低濃度の薬剤を使用するため、痛みが少なく手軽に受けられます。繰り返し通うことで徐々に白くなっていきます。",
  },
  {
    q: "何回通えば白くなりますか？",
    a: "個人差がありますが、2〜3回の施術から変化を実感される方が多いです。継続して通うことでより効果が出やすくなります。",
  },
  {
    q: "施術は痛いですか？",
    a: "セルフホワイトニングは低濃度の薬剤を使用するため、痛みはほとんどありません。ただし、もともと知覚過敏の方は若干の刺激を感じる場合があります。",
  },
  {
    q: "施術後に注意することはありますか？",
    a: "施術後2時間程度は、色の濃い飲食物（コーヒー・お茶・カレーなど）や喫煙を避けることで、ホワイトニングの効果を長持ちさせることができます。",
  },
];

export default function WhiteningPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

      {/* ヒーロー */}
      <section className="bg-gradient-brand pt-32 pb-16 text-center">
        <AnimatedSection>
          <p className="text-xs font-medium tracking-[0.5em] text-gold-400 uppercase">Self Whitening</p>
          <h1 className="mt-4 text-3xl font-bold tracking-widest text-white md:text-4xl">
            セルフホワイトニング
          </h1>
          <p className="mt-4 text-sm text-white/60">
            郡山市のメンズ専門サロン ・ 手軽に白い歯へ ・ 20分照射
          </p>
        </AnimatedSection>
      </section>

      {/* 説明 */}
      <section className="bg-cream section-padding">
        <div className="container-narrow">
          <AnimatedSection>
            <SectionHeader en="About" ja="セルフホワイトニングとは" />
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <p className="mt-8 text-sm leading-[2.2] text-navy-600">
              歯の白さは、清潔感や若々しい印象に直結します。
              美menのセルフホワイトニングは、専用のホワイトニング剤とLED照射機器を使い、
              <strong className="text-navy-900">約20分の施術</strong>で手軽に白い歯を目指せるメニューです。
              <br /><br />
              歯科でのホワイトニングと比べて、<strong className="text-navy-900">痛みが少なく費用も抑えられる</strong>のが特徴。
              郡山市内で気軽にホワイトニングを始めたい男性に人気のメニューです。
              脱毛施術との組み合わせで、トータルな清潔感アップも可能です。
            </p>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "約20分の短時間施術",
                "痛みが少ない",
                "手軽な価格（5,500円）",
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

      {/* 料金 */}
      <section className="bg-navy-950 section-padding">
        <div className="container-narrow">
          <AnimatedSection>
            <SectionHeader en="Price" ja="料金" light />
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <div className="mt-10 border border-gold-400/50 bg-white/5 p-8 text-center">
              <p className="text-xs tracking-widest text-white/40">セルフホワイトニング（20分照射）</p>
              <p className="mt-4 text-5xl font-bold text-gold-400">{formatPrice(5500)}</p>
              <p className="mt-2 text-xs text-white/40">税込 / 1回</p>
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
                { href: "/menu/dep", label: "DEP・痩身", sub: "福島県メンズサロン初導入" },
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
