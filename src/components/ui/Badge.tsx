import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "navy" | "outline";
  className?: string;
}

export function Badge({ children, variant = "gold", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block px-2.5 py-0.5 text-[10px] font-semibold tracking-widest uppercase",
        {
          gold: "bg-gold-400 text-navy-950",
          navy: "bg-navy-800 text-white/80",
          outline: "border border-gold-400/60 text-gold-400",
        }[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
