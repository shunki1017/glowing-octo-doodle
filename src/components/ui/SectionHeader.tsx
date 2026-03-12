import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  en: string;
  ja: string;
  description?: string;
  center?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeader({
  en,
  ja,
  description,
  center = false,
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(center && "text-center", className)}>
      <p className="text-xs font-medium tracking-[0.4em] text-gold-500 uppercase">
        {en}
      </p>
      <h2
        className={cn(
          "mt-2 text-2xl font-bold tracking-widest md:text-3xl",
          light ? "text-white" : "text-navy-900"
        )}
      >
        {ja}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-sm leading-loose",
            light ? "text-white/60" : "text-navy-600"
          )}
        >
          {description}
        </p>
      )}
      <div className={cn("mt-4 h-px w-12 bg-gold-400", center && "mx-auto")} />
    </div>
  );
}
