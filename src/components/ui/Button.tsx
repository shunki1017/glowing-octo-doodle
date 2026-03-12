import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 font-semibold tracking-widest transition-all duration-300",
        {
          primary: "bg-gradient-gold text-navy-950 hover:opacity-90 hover:shadow-lg hover:shadow-gold-400/20",
          outline: "border border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-navy-950",
          ghost: "text-white/70 hover:text-gold-400",
        }[variant],
        {
          sm: "px-5 py-2.5 text-xs",
          md: "px-8 py-4 text-sm",
          lg: "px-10 py-5 text-base",
        }[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
