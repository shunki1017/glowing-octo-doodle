import { Badge } from "@/components/ui/Badge";
import { formatPrice } from "@/lib/utils";
import type { MenuItem } from "@/types/menu";

interface MenuCardProps {
  item: MenuItem;
}

export function MenuCard({ item }: MenuCardProps) {
  return (
    <div className="flex items-start justify-between border-b border-navy-100 py-5 last:border-0">
      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-medium text-navy-900">{item.name}</span>
          {item.popular && <Badge variant="gold">人気</Badge>}
          {item.badge && <Badge variant="outline">{item.badge}</Badge>}
        </div>
        <p className="mt-1 text-xs leading-relaxed text-navy-400">
          {item.parts.join("、")}
        </p>
        {item.note && (
          <p className="mt-1 text-xs text-gold-600">{item.note}</p>
        )}
      </div>
      <div className="ml-6 shrink-0 text-right">
        <p className="text-lg font-bold text-navy-900">{formatPrice(item.price)}</p>
        <p className="text-xs text-navy-400">{item.unit}</p>
      </div>
    </div>
  );
}
