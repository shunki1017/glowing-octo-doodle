"use client";

import Link from "next/link";
import { X, Phone, Instagram, Twitter } from "lucide-react";
import { NAV_LINKS } from "@/constants/navigation";
import { SITE_CONFIG } from "@/constants/siteConfig";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <>
      {/* オーバーレイ */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      {/* ドロワー */}
      <div
        className={cn(
          "fixed right-0 top-0 z-50 h-full w-72 bg-navy-950 transition-transform duration-300",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex h-16 items-center justify-between px-6">
          <span className="font-display text-xl italic tracking-widest text-gold-400">
            {SITE_CONFIG.nameEn}
          </span>
          <button
            onClick={onClose}
            className="text-white/70 transition-colors hover:text-gold-400"
            aria-label="メニューを閉じる"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="mt-4 flex flex-col">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="border-b border-white/10 px-6 py-4 text-sm font-medium tracking-[0.2em] text-white/70 transition-colors hover:bg-white/5 hover:text-gold-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-8 px-6">
          <a
            href={SITE_CONFIG.telHref}
            className="flex items-center gap-3 text-white/80 transition-colors hover:text-gold-400"
          >
            <Phone size={16} />
            <span className="tracking-wider">{SITE_CONFIG.tel}</span>
          </a>

          <div className="mt-6 flex gap-4">
            <a
              href={SITE_CONFIG.sns.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 transition-colors hover:text-gold-400"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href={SITE_CONFIG.sns.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 transition-colors hover:text-gold-400"
              aria-label="X (Twitter)"
            >
              <Twitter size={20} />
            </a>
          </div>

          <p className="mt-8 text-xs leading-loose text-white/30">
            {SITE_CONFIG.hours.display}
            <br />
            定休日：{SITE_CONFIG.holiday}
          </p>
        </div>
      </div>
    </>
  );
}
