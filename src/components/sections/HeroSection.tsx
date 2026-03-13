import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { SITE_CONFIG } from "@/constants/siteConfig";

const PARTICLES = [
  { x: 8,  y: 20, delay: 0,   size: 2 },
  { x: 22, y: 65, delay: 1.2, size: 1 },
  { x: 38, y: 12, delay: 0.5, size: 2 },
  { x: 52, y: 78, delay: 2.1, size: 1 },
  { x: 68, y: 33, delay: 0.8, size: 2 },
  { x: 83, y: 58, delay: 1.7, size: 1 },
  { x: 14, y: 72, delay: 3.0, size: 2 },
  { x: 46, y: 48, delay: 2.5, size: 1 },
  { x: 61, y: 8,  delay: 1.0, size: 2 },
  { x: 79, y: 83, delay: 0.3, size: 1 },
  { x: 30, y: 38, delay: 4.0, size: 2 },
  { x: 91, y: 22, delay: 2.8, size: 1 },
  { x: 5,  y: 52, delay: 1.5, size: 2 },
  { x: 57, y: 88, delay: 3.5, size: 1 },
  { x: 74, y: 44, delay: 0.7, size: 2 },
  { x: 18, y: 90, delay: 4.2, size: 1 },
  { x: 43, y: 28, delay: 1.9, size: 2 },
  { x: 88, y: 70, delay: 3.3, size: 1 },
];

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* 背景グラデーション */}
      <div className="absolute inset-0 bg-gradient-tech" />

      {/* グリッド */}
      <div className="absolute inset-0 bg-grid-tech" />

      {/* グロウオーブ */}
      <div className="absolute -left-20 top-1/4 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl animate-pulse-slow" />
      <div className="absolute -right-20 bottom-1/4 h-64 w-64 rounded-full bg-cyan-500/15 blur-3xl animate-pulse-slow [animation-delay:1.5s]" />
      <div className="absolute left-1/3 top-3/4 h-72 w-72 rounded-full bg-purple-800/15 blur-3xl animate-pulse-slow [animation-delay:3s]" />

      {/* パーティクル */}
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className="particle-dot"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      {/* スキャンライン */}
      <div className="scan-line" />

      {/* コーナーブラケット */}
      <div className="absolute left-6 top-24 h-10 w-10 border-l-2 border-t-2 border-gold-400/50 md:left-10 md:top-28" />
      <div className="absolute right-6 top-24 h-10 w-10 border-r-2 border-t-2 border-gold-400/50 md:right-10 md:top-28" />
      <div className="absolute bottom-16 left-6 h-10 w-10 border-b-2 border-l-2 border-gold-400/50 md:left-10" />
      <div className="absolute bottom-16 right-6 h-10 w-10 border-b-2 border-r-2 border-gold-400/50 md:right-10" />

      <div className="container-narrow relative z-10 px-4 text-center sm:px-6">
        {/* サブタイトル */}
        <p className="animate-fade-in text-xs font-medium tracking-[0.5em] text-cyan-400 uppercase opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
          {SITE_CONFIG.address.city} · Men&apos;s Beauty Salon
        </p>

        {/* メインタイトル */}
        <h1 className="animate-fade-up mt-6 opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]">
          <div className="relative inline-block px-10 py-4 md:px-16 md:py-6">
            {/* コーナー装飾 */}
            <span className="absolute left-0 top-0 h-5 w-5 border-l-2 border-t-2 border-gold-400" />
            <span className="absolute right-0 top-0 h-5 w-5 border-r-2 border-t-2 border-gold-400" />
            <span className="absolute bottom-0 left-0 h-5 w-5 border-b-2 border-l-2 border-gold-400" />
            <span className="absolute bottom-0 right-0 h-5 w-5 border-b-2 border-r-2 border-gold-400" />
            {/* 上下のライン */}
            <span className="absolute left-5 right-5 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />
            <span className="absolute bottom-0 left-5 right-5 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
            <span className="font-display text-7xl font-light italic tracking-[0.1em] text-white sm:text-8xl md:text-9xl">
              <span className="text-white">美</span>men
            </span>
          </div>
        </h1>

        {/* キャッチコピー */}
        <p className="animate-fade-up mt-4 text-sm font-light tracking-[0.4em] text-white/50 opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards] md:text-base">
          {SITE_CONFIG.tagline}
        </p>

        {/* 区切り線 */}
        <div
          className="animate-fade-in mx-auto mt-8 h-px w-32 opacity-0 [animation-delay:700ms] [animation-fill-mode:forwards]"
          style={{ background: "linear-gradient(90deg, transparent, #e4ae2a, #22d3ee, transparent)" }}
        />

        {/* キーワードタグ */}
        <div className="animate-fade-up mt-8 flex flex-wrap justify-center gap-3 opacity-0 [animation-delay:800ms] [animation-fill-mode:forwards]">
          {["光脱毛", "HBL", "ホワイトニング", "DEP", "男性スタッフのみ"].map((tag) => (
            <span
              key={tag}
              className="border border-cyan-400/30 bg-cyan-400/5 px-4 py-1.5 text-xs tracking-wider text-cyan-300/70 backdrop-blur-sm"
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
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-cyan-400/50">
        <ChevronDown size={24} />
      </div>
    </section>
  );
}
