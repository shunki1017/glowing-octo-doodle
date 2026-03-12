import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { SITE_CONFIG } from "@/constants/siteConfig";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-brand">
      {/* 背景装飾 */}
      <div className="absolute inset-0">
        {/* 画像プレースホルダー：public/images/hero/hero-bg.jpg を配置 */}
        <div className="absolute inset-0 bg-gradient-brand opacity-90" />
        {/* ゴールドの斜め線 */}
        <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-gold-400/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />
      </div>

      <div className="container-narrow relative z-10 px-4 text-center sm:px-6">
        {/* サブタイトル */}
        <p className="animate-fade-in text-xs font-medium tracking-[0.5em] text-gold-400 uppercase opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
          {SITE_CONFIG.address.city} · Men&apos;s Beauty Salon
        </p>

        {/* メインタイトル */}
        <h1 className="animate-fade-up mt-6 opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]">
          <span className="font-display text-7xl font-light italic tracking-[0.1em] text-white sm:text-8xl md:text-9xl">
            <span className="text-gold-400">美</span>men
          </span>
        </h1>

        {/* キャッチコピー */}
        <p className="animate-fade-up mt-4 text-sm font-light tracking-[0.4em] text-white/60 opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards] md:text-base">
          {SITE_CONFIG.tagline}
        </p>

        {/* 区切り線 */}
        <div className="animate-fade-in mx-auto mt-8 h-px w-24 bg-gold-400 opacity-0 [animation-delay:700ms] [animation-fill-mode:forwards]" />

        {/* キーワード */}
        <div className="animate-fade-up mt-8 flex flex-wrap justify-center gap-3 opacity-0 [animation-delay:800ms] [animation-fill-mode:forwards]">
          {["光脱毛", "HBL", "ホワイトニング", "DEP", "男性スタッフのみ"].map((tag) => (
            <span
              key={tag}
              className="border border-white/20 px-4 py-1.5 text-xs tracking-wider text-white/60"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTAボタン */}
        <div className="animate-fade-up mt-12 flex flex-col items-center gap-4 opacity-0 [animation-delay:1000ms] [animation-fill-mode:forwards] sm:flex-row sm:justify-center">
          <Link href="/contact" className="btn-primary">
            <span>無料カウンセリング予約</span>
            <ArrowRight size={16} />
          </Link>
          <Link href="/menu" className="btn-outline">
            メニューを見る
          </Link>
        </div>
      </div>

      {/* スクロールインジケーター */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/30">
        <ChevronDown size={24} />
      </div>
    </section>
  );
}
