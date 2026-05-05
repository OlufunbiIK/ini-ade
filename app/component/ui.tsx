import type { AnchorHTMLAttributes, ReactNode } from "react";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  tone = "dark",
}: SectionHeadingProps) {
  const light = tone === "light";

  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <p
        className={cn(
          "text-xs font-semibold uppercase tracking-[0.34em]",
          light ? "text-[#f3ddb1]" : "text-[#ae762f]",
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "mt-4 font-serif text-4xl leading-tight sm:text-5xl",
          light ? "text-white" : "text-[#4d2432]",
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          "mt-4 text-base leading-8 sm:text-lg",
          light ? "text-white/80" : "text-[#6d5560]",
        )}
      >
        {subtitle}
      </p>
    </div>
  );
}

export function CountdownTile({ value, label }: { value: string; label: string }) {
  return (
    <div className="countdown-card rounded-[1.6rem] border border-white/16 px-4 py-4 text-center text-[#7b5c67] backdrop-blur">
      <div className="font-serif text-4xl sm:text-5xl">{value}</div>
      <div className="mt-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#7b5c67]">
        {label}
      </div>
    </div>
  );
}

type LinkPillProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "soft" | "light" | "ghost";
};

export function LinkPill({
  children,
  className,
  variant = "primary",
  ...props
}: LinkPillProps) {
  const variantClasses = {
    primary:
      "bg-[#6d2039] text-white shadow-[0_16px_40px_rgba(92,29,46,0.18)] hover:-translate-y-0.5 hover:bg-[#5c1930]",
    soft:
      "border border-[#eadde0] bg-white text-[#5d2436] shadow-[0_14px_35px_rgba(92,29,46,0.08)] hover:-translate-y-0.5 hover:border-[#d9c7ce]",
    light:
      "bg-[#f5dfb0] text-[#5f2436] shadow-[0_16px_40px_rgba(160,126,59,0.22)] hover:-translate-y-0.5 hover:bg-[#f3e5c2]",
    ghost:
      "border border-white/20 bg-white/10 text-white hover:-translate-y-0.5 hover:bg-white/15",
  };

  return (
    <a
      className={cn(
       "inline-flex w-full sm:w-auto items-center justify-center rounded-full px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em]",
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
