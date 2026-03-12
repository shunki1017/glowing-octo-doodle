"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS } from "@/constants/navigation";
import { SITE_CONFIG } from "@/constants/siteConfig";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-500",
          isScrolled
            ? "bg-navy-950/95 backdrop-blur-md shadow-lg shadow-black/20"
            : "bg-transparent"
        )}
      >
        <div className="container-wide flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* ロゴ */}
          <Link href="/" className="flex items-baseline gap-2">
            <span className="font-display text-2xl font-light italic tracking-widest text-gold-400">
              {SITE_CONFIG.nameEn}
            </span>
            <span className="text-xs tracking-[0.3em] text-white/50">
              {SITE_CONFIG.nameKana}
            </span>
          </Link>

          {/* デスクトップナビ */}
          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-medium tracking-[0.2em] text-white/70 transition-colors hover:text-gold-400"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* 電話番号 & モバイルメニュー */}
          <div className="flex items-center gap-4">
            <a
              href={SITE_CONFIG.telHref}
              className="hidden items-center gap-2 text-sm text-white/80 transition-colors hover:text-gold-400 lg:flex"
            >
              <Phone size={14} />
              <span className="tracking-wider">{SITE_CONFIG.tel}</span>
            </a>
            <button
              className="text-white/80 transition-colors hover:text-gold-400 md:hidden"
              onClick={() => setIsMobileOpen(true)}
              aria-label="メニューを開く"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </>
  );
}
