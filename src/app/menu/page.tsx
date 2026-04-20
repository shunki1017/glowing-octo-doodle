import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MENU_CATEGORIES } from "@/constants/menu";
import { PriceTable } from "@/components/menu/PriceTable";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "メニュー・料金 | 郡山市メンズ脱毛・HBL・ホワイトニング",
  description:
    "美menのメニューと料金一覧。郡山市の光脱毛（Aパーツ880円〜）・ハリウッドブロウリフト・セルフホワイトニング・DEP。すべて都度払いで高額なコース契約なし。新規最大80%OFF。",
  keywords: [
    "郡山市 メンズ脱毛 料金", "光脱毛 料金", "ハリウッドブロウリフト 郡山",
    "HBL 郡山", "セルフホワイトニング 郡山", "DEP 郡山", "都度払い 脱毛",
  ],
  alternates: {
    canonical: "https://bimen-salon.vercel.app/menu",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://bimen-salon.vercel.app" },
    { "@type": "ListItem", position: 2, name: "メニュー・料金", item: "https://bimen-salon.vercel.app/menu" },
  ],
};

export default function MenuPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* ページヒーロー */}
      <section className="bg-gradient-brand pt-32 pb-16 text-center">
        <AnimatedSection>
          <p className="text-xs font-medium tracking-[0.5em] text-gold-400 uppercase">
            Menu &amp; Price
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-widest text-white md:text-4xl">
            メニュー・料金
          </h1>
          <p className="mt-4 text-sm text-white/40">
            すべてのメニューは都度払い。高額なコース契約は一切ありません。
          </p>
        </AnimatedSection>

        {/* カテゴリアンカー */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {MENU_CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`#${cat.id}`}
              className="border border-white/20 px-4 py-2 text-xs tracking-wider text-white/60 transition-colors hover:border-gold-400/50 hover:text-gold-400"
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </section>

      {/* 料金表 */}
      <section className="bg-cream section-padding">
        <div className="container-narrow">
          <PriceTable />

          {/* 注意書き */}
          <AnimatedSection>
            <div className="mt-16 border border-navy-200 p-6 text-xs leading-loose text-navy-400">
              <ul className="list-disc space-y-1 pl-4">
                <li>料金は税込表示です。</li>
                <li>新規割引は1パーツごとに適用されます（複数パーツ同時施術の場合も各パーツに適用）。</li>
                <li>学割は学生証のご提示が必要です。</li>
                <li>施術内容・肌質によって効果に個人差があります。</li>
                <li>初めての方はカウンセリング（無料）からご予約ください。</li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection className="mt-10 text-center">
            <Link href="/contact" className="btn-primary">
              <span>無料カウンセリングを予約する</span>
              <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
