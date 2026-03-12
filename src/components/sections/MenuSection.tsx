import Link from "next/link";
import { ArrowRight, Zap, Sparkles, Smile, Activity } from "lucide-react";
import { MENU_CATEGORIES } from "@/constants/menu";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { formatPrice, calcDiscountedPrice } from "@/lib/utils";
import type { IconName } from "@/types/menu";

const ICON_MAP: Record<IconName, React.ElementType> = {
  zap: Zap,
  sparkles: Sparkles,
  smile: Smile,
  activity: Activity,
};

export function MenuSection() {
  return (
    <section className="bg-cream section-padding">
      <div className="container-wide">
        <AnimatedSection>
          <SectionHeader
            en="Menu & Price"
            ja="メニュー・料金"
            description="すべてのメニューは都度払い。高額なコース契約は一切ありません。"
          />
        </AnimatedSection>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {MENU_CATEGORIES.map((category, i) => {
            const Icon = ICON_MAP[category.icon];
            return (
              <AnimatedSection key={category.id} delay={i * 100}>
                <div className="bg-white p-8 shadow-sm">
                  {/* カテゴリヘッダー */}
                  <div className="flex items-center gap-3 border-b border-navy-100 pb-5">
                    <div className="rounded-full bg-navy-950 p-2.5 text-gold-400">
                      <Icon size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[0.3em] text-navy-400 uppercase">
                        {category.nameEn}
                      </p>
                      <h3 className="text-lg font-bold tracking-wider text-navy-900">
                        {category.name}
                      </h3>
                    </div>
                  </div>

                  {/* 料金リスト */}
                  <ul className="mt-5 space-y-3">
                    {category.items.slice(0, 3).map((item) => (
                      <li key={item.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-navy-700">{item.name}</span>
                          {item.popular && (
                            <Badge variant="gold">人気</Badge>
                          )}
                          {item.badge && (
                            <Badge variant="outline">{item.badge}</Badge>
                          )}
                        </div>
                        <div className="text-right">
                          <span className="font-bold text-navy-900">
                            {formatPrice(item.price)}
                          </span>
                          <span className="ml-1 text-xs text-navy-400">/{item.unit}</span>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* 新規割引バッジ */}
                  {category.newClientDiscount && (
                    <div className="mt-5 bg-navy-950 px-4 py-3">
                      <p className="text-[10px] tracking-[0.3em] text-gold-400 uppercase">
                        New Client Discount
                      </p>
                      <div className="mt-2 flex gap-3">
                        {category.newClientDiscount.map((d) => (
                          <span
                            key={d.session}
                            className="text-xs text-white/70"
                          >
                            {d.session}回目 <strong className="text-gold-400">{d.discountRate}% OFF</strong>
                          </span>
                        ))}
                      </div>
                      <p className="mt-1 text-xs text-white/40">
                        例：Aパーツ {formatPrice(4400)} →
                        初回 {formatPrice(calcDiscountedPrice(4400, 80))}
                      </p>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection className="mt-10 text-center">
          <Link href="/menu" className="btn-primary">
            <span>全メニューを見る</span>
            <ArrowRight size={16} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
