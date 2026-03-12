import Link from "next/link";
import Image from "next/image";
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
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt={SITE_CONFIG.name}
                width={64}
                height={64}
                className="rounded object-contain"
              />
            </Link>
            <p className="mt-3 text-xs leading-loose tracking-widest text-white/40">
              {SITE_CONFIG.tagline}
            </p>
            <div className="mt-6 flex gap-5">
              <a
                href={SITE_CONFIG.sns.line}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gold-400"
                aria-label="LINE"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                </svg>
              </a>
              <a
                href={SITE_CONFIG.sns.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gold-400"
                aria-label="Instagram"
              >
                <Instagram size={22} />
              </a>
              <a
                href={SITE_CONFIG.sns.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gold-400"
                aria-label="X (Twitter)"
              >
                <Twitter size={22} />
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
