import type { Metadata } from "next";
import { Users, Award, Leaf } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "サロンについて | 郡山市 男性スタッフのみのメンズ専門サロン",
  description:
    "美men（びめん）は福島県郡山市のメンズ専門美容サロン。全スタッフが男性なのでVIO脱毛も安心。都度払い制で高額コース契約なし。夜22時まで営業、駐車場完備。",
  keywords: [
    "郡山市 メンズサロン", "男性スタッフ 脱毛", "メンズ専門 美容サロン 郡山",
    "VIO脱毛 男性スタッフ", "プライベートサロン 郡山",
  ],
  alternates: {
    canonical: "https://bimen-salon.vercel.app/about",
  },
};

const VALUES = [
  {
    icon: Users,
    title: "男性スタッフのみ",
    body: "スタッフはすべて男性。VIOを含む全身の脱毛施術も、同性スタッフが担当するので、気兼ねなく相談・施術を受けていただけます。",
  },
  {
    icon: Award,
    title: "最新技術の導入",
    body: "ハリウッドブロウリフト（HBL）やDEP（深部電子パルス）など、最新の美容技術をいち早く取り入れ、郡山市のメンズサロンとして業界をリードします。",
  },
  {
    icon: Leaf,
    title: "無理のない通い方",
    body: "高額な長期コースは設けていません。都度払い制で、必要なときに必要なメニューだけ。ポイント特典や紹介制度で、通うほどお得になります。",
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://bimen-salon.vercel.app" },
    { "@type": "ListItem", position: 2, name: "サロンについて", item: "https://bimen-salon.vercel.app/about" },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* ページヒーロー */}
      <section className="bg-gradient-brand pt-32 pb-16 text-center">
        <AnimatedSection>
          <p className="text-xs font-medium tracking-[0.5em] text-gold-400 uppercase">About</p>
          <h1 className="mt-4 text-3xl font-bold tracking-widest text-white md:text-4xl">
            サロンについて
          </h1>
        </AnimatedSection>
      </section>

      {/* コンセプト */}
      <section className="bg-cream section-padding">
        <div className="container-narrow">
          <AnimatedSection>
            <SectionHeader en="Our Concept" ja="サロンコンセプト" />
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <p className="mt-8 text-sm leading-[2.2] text-navy-600">
              <strong className="font-bold text-navy-900">美men（びめん）</strong>は、
              郡山市で活躍する男性の「外見への自信」をサポートするメンズ専門美容サロンです。
              <br /><br />
              「美容に興味はあるけれど、女性向けサロンには入りにくい」という男性の声から生まれた、
              完全男性スタッフ・完全メンズ特化のプライベートサロン。
              脱毛・眉・歯・肌の4つの柱で、清潔感と品格を兼ね備えた「男の美」を提供します。
              <br /><br />
              高額な長期コースは設けず、都度払い制で気軽に通えるスタイルを採用。
              仕事帰りにも立ち寄れる夜22時までの営業と、店舗裏の専用駐車場で、
              忙しい男性のライフスタイルに寄り添います。
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* バリュー */}
      <section className="bg-navy-950 section-padding">
        <div className="container-wide">
          <AnimatedSection>
            <SectionHeader en="Our Values" ja="こだわり" light />
          </AnimatedSection>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {VALUES.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 100}>
                <div className="border border-white/10 p-8">
                  <v.icon size={28} className="text-gold-400" />
                  <h3 className="mt-5 text-lg font-bold tracking-wider text-white">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm leading-loose text-white/50">{v.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* スタッフ紹介プレースホルダー */}
      <section className="bg-white section-padding">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <SectionHeader en="Staff" ja="スタッフ紹介" center />
            <p className="mt-6 text-sm leading-loose text-navy-400">
              ※ スタッフ情報は追加次第掲載予定です。
              <br />
              <span className="text-xs">（public/images/about/ に写真画像を配置してください）</span>
            </p>
          </AnimatedSection>
        </div>
      </section>

      <CTASection />
    </>
  );
}
