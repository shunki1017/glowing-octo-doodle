import { Zap, Sparkles, Smile, Activity } from "lucide-react";
import { MENU_CATEGORIES } from "@/constants/menu";
import { MenuCard } from "./MenuCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { calcDiscountedPrice, formatPrice } from "@/lib/utils";
import type { IconName } from "@/types/menu";

const ICON_MAP: Record<IconName, React.ElementType> = {
  zap: Zap,
  sparkles: Sparkles,
  smile: Smile,
  activity: Activity,
};

export function PriceTable() {
  return (
    <div className="space-y-16">
      {MENU_CATEGORIES.map((category, i) => {
        const Icon = ICON_MAP[category.icon];
        return (
          <AnimatedSection key={category.id} delay={i * 100}>
            <div id={category.id} className="scroll-mt-24">
              {/* カテゴリヘッダー */}
              <div className="flex items-center gap-4 border-b-2 border-navy-950 pb-4">
                <div className="rounded-full bg-navy-950 p-3 text-gold-400">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.3em] text-navy-400 uppercase">
                    {category.nameEn}
                  </p>
                  <h2 className="text-xl font-bold tracking-wider text-navy-900">
                    {category.name}
                  </h2>
                </div>
              </div>

              <p className="mt-4 text-sm leading-loose text-navy-500">
                {category.description}
              </p>

              {/* 料金リスト */}
              <div className="mt-6">
                {category.items.map((item) => (
                  <MenuCard key={item.id} item={item} />
                ))}
              </div>

              {/* 新規割引 */}
              {category.newClientDiscount && (
                <div className="mt-6 bg-navy-950 p-6">
                  <div className="flex items-center gap-2">
                    <Badge variant="gold">新規限定</Badge>
                    <p className="text-sm font-bold tracking-widest text-white">
                      初回最大 80% OFF
                    </p>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    {category.newClientDiscount.map((d) => (
                      <div key={d.session} className="border border-white/10 p-3 text-center">
                        <p className="text-xs text-white/40">{d.session}回目</p>
                        <p className="mt-1 text-lg font-bold text-gold-400">
                          {d.discountRate}% OFF
                        </p>
                        <p className="mt-1 text-xs text-white/30">
                          例：{formatPrice(calcDiscountedPrice(4400, d.discountRate))}〜
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </AnimatedSection>
        );
      })}
    </div>
  );
}
