import { MapPin, Phone, Clock, Car } from "lucide-react";
import { SITE_CONFIG } from "@/constants/siteConfig";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function AccessSection() {
  return (
    <section className="bg-white section-padding">
      <div className="container-wide">
        <AnimatedSection>
          <SectionHeader en="Access" ja="アクセス" />
        </AnimatedSection>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          {/* 地図 */}
          <AnimatedSection>
            <div className="aspect-video w-full overflow-hidden bg-navy-100">
              {/* Google Maps埋め込み：実装時にAPIキー設定後に差し替え */}
              <iframe
                src="https://maps.google.com/maps?q=福島県郡山市菜根5丁目18-18+ダイユービル103&output=embed&hl=ja"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="店舗地図"
              />
            </div>
          </AnimatedSection>

          {/* 店舗情報 */}
          <AnimatedSection delay={100}>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="shrink-0 rounded-full border border-gold-400/30 p-2 text-gold-500">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-xs tracking-[0.2em] text-navy-400 uppercase">Address</p>
                  <p className="mt-1 text-sm leading-loose text-navy-800">
                    {SITE_CONFIG.address.full}
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="shrink-0 rounded-full border border-gold-400/30 p-2 text-gold-500">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="text-xs tracking-[0.2em] text-navy-400 uppercase">Tel</p>
                  <a
                    href={SITE_CONFIG.telHref}
                    className="mt-1 text-lg font-bold tracking-wider text-navy-900 transition-colors hover:text-gold-600"
                  >
                    {SITE_CONFIG.tel}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="shrink-0 rounded-full border border-gold-400/30 p-2 text-gold-500">
                  <Clock size={16} />
                </div>
                <div>
                  <p className="text-xs tracking-[0.2em] text-navy-400 uppercase">Hours</p>
                  <p className="mt-1 text-sm leading-loose text-navy-800">
                    {SITE_CONFIG.hours.display}
                    <br />
                    <span className="text-navy-400">定休日：{SITE_CONFIG.holiday}</span>
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="shrink-0 rounded-full border border-gold-400/30 p-2 text-gold-500">
                  <Car size={16} />
                </div>
                <div>
                  <p className="text-xs tracking-[0.2em] text-navy-400 uppercase">Parking</p>
                  <p className="mt-1 text-sm leading-loose text-navy-800">
                    {SITE_CONFIG.parking.description}
                    <br />
                    <span className="text-navy-400">店舗裏に{SITE_CONFIG.parking.count}台（無料）</span>
                  </p>
                </div>
              </li>
            </ul>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
