import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTASection } from "@/components/sections/CTASection";
import { formatPrice } from "@/lib/utils";

export const metadata: Metadata = {
  title: "郡山市メンズ光脱毛｜男性スタッフ対応・都度払い | 美men",
  description:
    "郡山市のメンズ専門サロン「美men」の光脱毛。ヒゲ・VIO・全身に対応。男性スタッフのみで安心。Aパーツ880円〜（新規初回80%OFF）、高額コース不要の都度払い制。夜22時まで営業・駐車場完備。",
  keywords: [
    "郡山 メンズ脱毛", "郡山市 光脱毛 男性", "郡山 ヒゲ脱毛", "郡山 VIO脱毛 メンズ",
    "郡山 全身脱毛 男性", "郡山市 脱毛 男性スタッフ", "福島 メンズ脱毛 郡山",
    "郡山 脱毛 都度払い", "郡山 脱毛 安い", "郡山市 メンズサロン 脱毛",
  ],
  alternates: {
    canonical: "https://bimen-salon.vercel.app/menu/koudatsu",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://bimen-salon.vercel.app" },
    { "@type": "ListItem", position: 2, name: "メニュー・料金", item: "https://bimen-salon.vercel.app/menu" },
    { "@type": "ListItem", position: 3, name: "光脱毛", item: "https://bimen-salon.vercel.app/menu/koudatsu" },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "メンズ光脱毛",
  description: "郡山市の男性専門美容サロン美menの光脱毛サービス。ヒゲ・VIO・全身に対応。男性スタッフのみで安心施術。",
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
    { "@type": "Offer", name: "Aパーツ（鼻下・顎・眉間・指など）", price: "4400", priceCurrency: "JPY" },
    { "@type": "Offer", name: "Bパーツ（ワキ・うなじ・肩など）", price: "5500", priceCurrency: "JPY" },
    { "@type": "Offer", name: "VIOセット", price: "29700", priceCurrency: "JPY" },
    { "@type": "Offer", name: "全身脱毛（VIO含む）", price: "122430", priceCurrency: "JPY" },
  ],
};

const PRICE_TABLE = [
  { name: "Aパーツ", parts: "おでこ・ほほ・鼻下・あご・眉間・指（手）", price: 4400 },
  { name: "Bパーツ", parts: "うなじ・肩・ワキ・もみあげ・耳・デコルテ", price: 5500 },
  { name: "Cパーツ", parts: "胸・ひじ上・ひじ下・腹部・指（足）", price: 6600 },
  { name: "Dパーツ", parts: "背中・おしり", price: 7700 },
  { name: "Eパーツ", parts: "ひざ上・ひざ下", price: 8800 },
  { name: "V・I・Oパーツ", parts: "各ゾーン（各11,000円）", price: 11000 },
  { name: "VIOセット", parts: "V・I・O 3箇所セット", price: 29700 },
  { name: "全身脱毛（VIO含む）", parts: "全パーツ＋VIO", price: 122430 },
];

const FEATURES = [
  "完全男性スタッフ制 — VIOも安心",
  "高額なコース契約一切なし・都度払い",
  "新規初回最大80%OFF",
  "夜22時まで営業（仕事帰りにも通いやすい）",
  "駐車場2台完備",
  "3箇所同時でセット割引（最大25%OFF）",
];

const FAQS = [
  {
    q: "郡山市でメンズ脱毛を受けられるサロンですか？",
    a: "はい。美menは郡山市菜根にある完全メンズ専門の美容サロンです。光脱毛をはじめ、ヒゲ・VIO・全身の脱毛に対応しています。",
  },
  {
    q: "ヒゲ脱毛はできますか？",
    a: "はい、ヒゲ脱毛（鼻下・あご・ほほ）はAパーツとして対応しています。新規初回は80%OFFの880円〜からご利用いただけます。",
  },
  {
    q: "VIO脱毛は恥ずかしくないですか？",
    a: "美menはスタッフ全員が男性です。デリケートゾーンの施術も同性スタッフが担当するので、安心してお受けいただけます。",
  },
  {
    q: "光脱毛とレーザー脱毛の違いは？",
    a: "光（フラッシュ）脱毛は広範囲に光を照射するため、痛みが少なく肌への負担が小さいのが特徴です。施術時間も短く、初めての方でも受けやすい方法です。",
  },
  {
    q: "何回通えば効果が出ますか？",
    a: "個人差はありますが、一般的に6〜12回程度の施術で効果を実感される方が多いです。都度払い制なので、自分のペースで無理なく通えます。",
  },
];

export default function KoudatsuPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

      {/* ヒーロー */}
      <section className="bg-gradient-brand pt-32 pb-16 text-center">
        <AnimatedSection>
          <p className="text-xs font-medium tracking-[0.5em] text-gold-400 uppercase">Hair Removal</p>
          <h1 className="mt-4 text-3xl font-bold tracking-widest text-white md:text-4xl">
            郡山市のメンズ光脱毛
          </h1>
          <p className="mt-4 text-sm text-white/60">
            男性スタッフのみ対応 ・ ヒゲ・VIO・全身 ・ 都度払いで安心
          </p>
        </AnimatedSection>
      </section>

      {/* 特徴 */}
      <section className="bg-cream section-padding">
        <div className="container-narrow">
          <AnimatedSection>
            <SectionHeader en="Features" ja="美menの光脱毛の特徴" />
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <p className="mt-8 text-sm leading-[2.2] text-navy-600">
              美men（びめん）は、<strong className="text-navy-900">福島県郡山市</strong>にある
              <strong className="text-navy-900">メンズ専門の美容サロン</strong>です。
              「美容サロンに通いたいけど、女性スタッフに施術されるのは恥ずかしい」という男性の声から誕生した、
              完全男性スタッフ制のプライベートサロン。
              <br /><br />
              ヒゲ・ワキ・胸・背中・VIOまで、全身の光脱毛に対応。
              高額な長期コース契約は一切なく、<strong className="text-navy-900">都度払い制</strong>で必要なときに必要な施術だけ受けられます。
              新規初回は<strong className="text-navy-900">最大80%OFF</strong>で、Aパーツ（鼻下・あご・眉間など）が通常4,400円のところ
              <strong className="text-navy-900">880円〜</strong>始められます。
            </p>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-3 rounded-none border border-navy-200 bg-white p-4">
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
            <SectionHeader en="Price" ja="光脱毛 料金表" light />
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <div className="mt-10 overflow-hidden border border-white/10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="px-4 py-3 text-left text-xs tracking-wider text-white/40">パーツ</th>
                    <th className="px-4 py-3 text-left text-xs tracking-wider text-white/40">施術部位</th>
                    <th className="px-4 py-3 text-right text-xs tracking-wider text-white/40">通常料金</th>
                    <th className="px-4 py-3 text-right text-xs tracking-wider text-gold-400">初回料金</th>
                  </tr>
                </thead>
                <tbody>
                  {PRICE_TABLE.map((row, i) => (
                    <tr key={row.name} className={`border-b border-white/10 ${i % 2 === 0 ? "" : "bg-white/3"}`}>
                      <td className="px-4 py-3 font-bold text-white">{row.name}</td>
                      <td className="px-4 py-3 text-white/50">{row.parts}</td>
                      <td className="px-4 py-3 text-right text-white/50">{formatPrice(row.price)}</td>
                      <td className="px-4 py-3 text-right font-bold text-gold-400">
                        {formatPrice(Math.floor(row.price * 0.2))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-white/30">※ 料金は税込。初回料金は通常料金の80%OFFを適用した価格です。</p>
          </AnimatedSection>

          {/* 新規割引 */}
          <AnimatedSection delay={200}>
            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                { label: "初回", rate: 80 },
                { label: "2回目", rate: 60 },
                { label: "3回目", rate: 40 },
              ].map((d) => (
                <div key={d.label} className="border border-white/10 p-5 text-center">
                  <p className="text-xs tracking-widest text-white/40">{d.label}</p>
                  <p className="mt-2 text-3xl font-bold text-gold-400">{d.rate}%</p>
                  <p className="text-sm text-white/60">OFF</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 施術の流れ */}
      <section className="bg-white section-padding">
        <div className="container-narrow">
          <AnimatedSection>
            <SectionHeader en="Flow" ja="施術の流れ" />
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <ol className="mt-10 space-y-6">
              {[
                { step: "01", title: "ご予約", body: "電話・LINE・Webフォームからご予約ください。初めての方は無料カウンセリングからのご予約をおすすめします。" },
                { step: "02", title: "カウンセリング（無料）", body: "施術の説明・肌状態の確認・施術部位のご相談。疑問点はお気軽にご質問ください。" },
                { step: "03", title: "シェービング", body: "施術部位を剃毛します（シェービング追加：1,500円）。事前に自己処理いただいても構いません。" },
                { step: "04", title: "光脱毛施術", body: "専用機器で光を照射します。Aパーツなら施術時間は約15〜30分程度です。" },
                { step: "05", title: "アフターケア", body: "施術後の肌状態を確認し、次回の施術についてご案内します。" },
              ].map((item) => (
                <li key={item.step} className="flex gap-6">
                  <span className="text-2xl font-bold text-gold-400/40 tabular-nums">{item.step}</span>
                  <div>
                    <p className="font-bold tracking-wider text-navy-900">{item.title}</p>
                    <p className="mt-1 text-sm leading-loose text-navy-500">{item.body}</p>
                  </div>
                </li>
              ))}
            </ol>
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
                { href: "/menu/hbl", label: "ハリウッドブロウリフト・Wax", sub: "眉毛の形成＆リフトアップ" },
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
