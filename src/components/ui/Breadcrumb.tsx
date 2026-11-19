import Link from "next/link";
import { ChevronRight } from "lucide-react";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="パンくずリスト" className="bg-navy-950/50 px-4 pt-24 pb-0">
      <ol className="container-narrow flex flex-wrap items-center gap-1 text-xs text-white/40">
        <li>
          <Link href="/" className="transition-colors hover:text-gold-400">
            ホーム
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            <ChevronRight size={12} className="shrink-0" />
            {item.href ? (
              <Link href={item.href} className="transition-colors hover:text-gold-400">
                {item.label}
              </Link>
            ) : (
              <span className="text-white/60">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
