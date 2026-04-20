import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTASection } from "@/components/sections/CTASection";
import { formatPrice } from "@/lib/utils";

export const metadata: Metadata = {
  title: "郡山市ハリウッドブロウリフト（HBL）メンズ眉毛サロン | 美men",
  description:
    "郡山市のメンズ専門サロン「美men」のハリウッドブロウリフト（HBL）・眉Wax。男性の眉毛を自然に整えリフトアップ。初回特別価格4,950円〜。男性スタッフのみ対応・都度払い。",
  keywords: [
    "郡山 ハリウッドブロウリフト", "郡山 HBL", "郡山 眉毛 メンズ", "郡山市 眉Wax 男性",
    "福島 ハリウッドブロウリフト メンズ", "郡山 眉毛サロン 男性", "HBL 郡山市",
    "郡山 眉毛 整える 男性", "郡山市 メンズサロン 眉",
  ],
  alternates: {
    canonical: "https://bimen-salon.vercel.app/menu/hbl",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://bimen-salon.vercel.app" },
    { "@type": "ListItem", position: 2, name: "メニュー・料金", item: "https://bimen-salon.vercel.app/menu" },
    { "@type": "ListItem", position: 3, name: "ハリウッドブロウリフト", item: "https://bimen-salon.vercel.app/menu/hbl" },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "ハリウッドブロウリフト（HBL）・眉Wax",
  description: "郡山市の男性専門美容サロン美menのハリウッドブロウリフト・眉Waxサービス。男性の眉毛を自然に整えリフトアップ。",
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
    { "@type": "Offer", name: "HBL＆Waxセット", price: "4950", priceCurrency: "JPY" },
    { "@type": "Offer", name: "眉WaxまたはHBL単体", price: "2950", priceCurrency: "JPY" },
    { "@type": "Offer", name: "鼻毛ワックス", price: "550", priceCurrency: "JPY" },
  ],
};

const FAQS = [
  {
    q: "ハリウッドブロウリフトとは何ですか？",
    a: "ハリウッドブロウリフト（HBL）は、専用の薬剤を使って眉毛をリフトアップし、自然なアーチ形状を長期間（約6〜8週間）キープする施術です。眉毛をカットしたりデザインするのではなく、眉毛そのものをリフトアップするため、より自然な仕上がりになります。",
  },
  {
    q: "眉Waxとの違いは何ですか？",
    a: "眉WaxはWax（脱毛ワックス）を使って眉周りの余分な毛を除去し、眉の形を整える施術です。HBLは眉毛のリフトアップが目的で、眉Waxはシェーピング（形成）が目的です。セットメニューで両方受けると効果的です。",
  },
  {
    q: "男性でも眉毛ケアは必要ですか？",
    a: "はい。眉毛は顔の印象を大きく左右します。整った眉毛は清潔感・誠実さを演出し、ビジネスシーンでも好印象を与えます。初めての方でもカウンセリングで理想の眉毛の形をご相談いただけます。",
  },
  {
    q: "施術時間はどのくらいですか？",
    a: "HBL＆Waxセットで約60〜90分、眉Wax単体で約30〜45分が目安です。初回はカウンセリング込みのため少し長めにお時間をいただく場合があります。",
  },
  {
    q: "効果はどのくらい続きますか？",
    a: "HBLの効果は約6〜8週間持続します。定期的に施術を受けることで、常に整った眉毛をキープできます。",
  },
];

export default function HblPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

      {/* ヒーロー */}
      <section className="bg-gradient-brand pt-32 pb-16 text-center">
        <AnimatedSection>
          <p className="text-xs font-medium tracking-[0.5em] text-gold-400 uppercase">Hollywood Brow Lift</p>
          <h1 className="mt-4 text-3xl font-bold tracking-widest text-white md:text-4xl">
            ハリウッドブロウリフト・眉Wax
          </h1>
          <p className="mt-4 text-sm text-white/60">
            郡山市のメンズ専門サロン ・ 自然なリフトアップで清潔感アップ
          </p>
        </AnimatedSection>
      </section>

      {/* 説明 */}
      <section className="bg-cream section-padding">
        <div className="container-narrow">
          <AnimatedSection>
            <SectionHeader en="About HBL" ja="HBLとは" />
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <p className="mt-8 text-sm leading-[2.2] text-navy-600">
              <strong className="text-navy-900">ハリウッドブロウリフト（HBL）</strong>は、
              専用薬剤で眉毛をリフトアップし、自然なアーチ形状を
              <strong className="text-navy-900">約6〜8週間キープ</strong>する最新の眉毛ケア。
              毎朝の眉毛のセットが不要になり、すっきりとした顔立ちを長期間維持できます。
              <br /><br />
              美menではHBLと<strong className="text-navy-900">眉Wax（余分な毛の除去）</strong>をセットで提供。
              リフトアップ＋シェーピングで、より洗練された眉毛に仕上げます。
              郡山市の男性が清潔感のある第一印象を作るための定番メニューです。
            </p>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "約6〜8週間効果持続",
                "毎朝の眉セット不要に",
                "自然な仕上がり",
                "男性スタッフのみ対応",
                "初回特別価格あり",
                "都度払い・コース不要",
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
                { name: "HBL＆Waxセット", desc: "眉毛のリフトアップ＋Wax脱毛", price: 4950, original: 7000, popular: true },
                { name: "眉Waxまたは HBL単体", desc: "眉Wax単体またはHBL単体", price: 2950, original: 4000 },
                { name: "鼻毛ワックス", desc: "鼻毛のWax脱毛", price: 550 },
              ].map((item) => (
                <div key={item.name} className={`border p-6 ${item.popular ? "border-gold-400/50 bg-white/5" : "border-white/10"}`}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      {item.popular && (
                        <span className="mb-2 inline-block bg-gold-400 px-2 py-0.5 text-xs font-bold text-navy-950">
                          人気No.1
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
            <p className="mt-4 text-xs text-white/30">※ 料金は税込。</p>
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
                { href: "/menu/whitening", label: "セルフホワイトニング", sub: "白い歯への近道" },
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
