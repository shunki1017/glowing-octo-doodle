import Link from "next/link";
import { Phone, MapPin, Clock, Instagram, Twitter } from "lucide-react";
import { SITE_CONFIG } from "@/constants/siteConfig";
import { NAV_LINKS } from "@/constants/navigation";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white/60">
      <div className="container-wide section-padding">
        <div className="grid gap-12 md:grid-cols-3">
          {/* ブランド */}
          <div>
            <Link href="/" className="flex items-baseline gap-2">
              <span className="font-display text-3xl font-light italic tracking-widest text-gold-400">
                {SITE_CONFIG.nameEn}
              </span>
            </Link>
            <p className="mt-3 text-xs leading-loose tracking-widest text-white/40">
              {SITE_CONFIG.tagline}
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href={SITE_CONFIG.sns.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gold-400"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={SITE_CONFIG.sns.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gold-400"
                aria-label="X (Twitter)"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* 店舗情報 */}
          <div>
            <h3 className="mb-4 text-xs font-medium tracking-[0.3em] text-white/40 uppercase">
              Store Info
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="mt-0.5 shrink-0 text-gold-500" />
                <span className="leading-loose">{SITE_CONFIG.address.full}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="shrink-0 text-gold-500" />
                <a href={SITE_CONFIG.telHref} className="tracking-wider transition-colors hover:text-gold-400">
                  {SITE_CONFIG.tel}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={14} className="mt-0.5 shrink-0 text-gold-500" />
                <span className="leading-loose">
                  {SITE_CONFIG.hours.display}
                  <br />
                  <span className="text-white/40">定休日：{SITE_CONFIG.holiday}</span>
                </span>
              </li>
            </ul>
          </div>

          {/* ナビ */}
          <div>
            <h3 className="mb-4 text-xs font-medium tracking-[0.3em] text-white/40 uppercase">
              Navigation
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm tracking-widest transition-colors hover:text-gold-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/20">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.nameEn}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
