// "use client";

// import { TrendingUp, TrendingDown, LucideIcon } from "lucide-react";
// import clsx from "clsx";

// interface StatsCardProps {
//   title: string;
//   value: string | number;
//   change: number;
//   changeLabel?: string;
//   icon: LucideIcon;
//   gradient: "purple" | "gold" | "emerald" | "cyan" | "rose";
//   prefix?: string;
//   suffix?: string;
//   delay?: number;
// }

// const gradientMap = {
//   purple: {
//     bg: "bg-purple-gradient",
//     glow: "shadow-glow",
//     ring: "ring-brand-purple/20",
//     text: "text-brand-purple-light",
//     light: "bg-brand-purple/10",
//   },
//   gold: {
//     bg: "bg-gold-gradient",
//     glow: "shadow-glow-gold",
//     ring: "ring-brand-gold/20",
//     text: "text-brand-gold",
//     light: "bg-brand-gold/10",
//   },
//   emerald: {
//     bg: "bg-emerald-gradient",
//     glow: "shadow-[0_0_30px_rgba(16,185,129,0.15)]",
//     ring: "ring-brand-emerald/20",
//     text: "text-brand-emerald",
//     light: "bg-brand-emerald/10",
//   },
//   cyan: {
//     bg: "bg-cyan-gradient",
//     glow: "shadow-[0_0_30px_rgba(6,182,212,0.15)]",
//     ring: "ring-brand-cyan/20",
//     text: "text-brand-cyan",
//     light: "bg-brand-cyan/10",
//   },
//   rose: {
//     bg: "bg-rose-gradient",
//     glow: "shadow-[0_0_30px_rgba(244,63,94,0.15)]",
//     ring: "ring-brand-rose/20",
//     text: "text-brand-rose",
//     light: "bg-brand-rose/10",
//   },
// };

// export default function StatsCard({
//   title,
//   value,
//   change,
//   changeLabel = "vs last month",
//   icon: Icon,
//   gradient,
//   prefix = "",
//   suffix = "",
//   delay = 0,
// }: StatsCardProps) {
//   const g = gradientMap[gradient];
//   const isPositive = change >= 0;

//   return (
//     <div
//       className={clsx(
//         "glass-card rounded-2xl p-5 gradient-border",
//         "hover:shadow-card-hover transition-all duration-300 group",
//         "animate-fade-up"
//       )}
//       style={{ animationDelay: `${delay}ms`, animationFillMode: "both" }}
//     >
//       <div className="flex items-start justify-between mb-4">
//         <div>
//           <p className="text-text-secondary text-sm font-medium">{title}</p>
//           <p className="text-3xl font-black text-text-primary mt-1 counter tracking-tight">
//             {prefix}
//             {typeof value === "number" ? value.toLocaleString() : value}
//             {suffix}
//           </p>
//         </div>
//         <div
//           className={clsx(
//             "w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0",
//             g.bg, g.glow,
//             "ring-2", g.ring,
//             "group-hover:scale-110 transition-transform duration-300"
//           )}
//         >
//           <Icon size={20} className="text-white" />
//         </div>
//       </div>

//       <div className="flex items-center gap-2">
//         <div
//           className={clsx(
//             "flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-semibold",
//             isPositive
//               ? "bg-brand-emerald/10 text-brand-emerald"
//               : "bg-brand-rose/10 text-brand-rose"
//           )}
//         >
//           {isPositive ? <TrendingUp size={11} /> : <TrendingDown size={11} />}
//           {Math.abs(change)}%
//         </div>
//         <span className="text-text-muted text-xs">{changeLabel}</span>
//       </div>

//       {/* Bottom accent bar */}
//       <div className="mt-4 h-1 rounded-full bg-border-subtle overflow-hidden">
//         <div
//           className={clsx("h-full rounded-full transition-all duration-700", g.bg)}
//           style={{ width: `${Math.min(Math.abs(change) * 3, 100)}%` }}
//         />
//       </div>
//     </div>
//   );
// }

"use client";

import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  ShoppingCart,
  Users,
  Package,
} from "lucide-react";
import clsx from "clsx";

const icons = {
  DollarSign,
  ShoppingCart,
  Users,
  Package,
};

type IconName = keyof typeof icons;

interface StatsCardProps {
  title: string;
  value: string | number;
  change: number;
  changeLabel?: string;
  icon: IconName;
  gradient: "purple" | "gold" | "emerald" | "cyan" | "rose";
  prefix?: string;
  suffix?: string;
  delay?: number;
}

const gradientMap = {
  purple: {
    bg: "bg-purple-gradient",
    glow: "shadow-glow",
    ring: "ring-brand-purple/20",
    text: "text-brand-purple-light",
    light: "bg-brand-purple/10",
  },
  gold: {
    bg: "bg-gold-gradient",
    glow: "shadow-glow-gold",
    ring: "ring-brand-gold/20",
    text: "text-brand-gold",
    light: "bg-brand-gold/10",
  },
  emerald: {
    bg: "bg-emerald-gradient",
    glow: "shadow-[0_0_30px_rgba(16,185,129,0.15)]",
    ring: "ring-brand-emerald/20",
    text: "text-brand-emerald",
    light: "bg-brand-emerald/10",
  },
  cyan: {
    bg: "bg-cyan-gradient",
    glow: "shadow-[0_0_30px_rgba(6,182,212,0.15)]",
    ring: "ring-brand-cyan/20",
    text: "text-brand-cyan",
    light: "bg-brand-cyan/10",
  },
  rose: {
    bg: "bg-rose-gradient",
    glow: "shadow-[0_0_30px_rgba(244,63,94,0.15)]",
    ring: "ring-brand-rose/20",
    text: "text-brand-rose",
    light: "bg-brand-rose/10",
  },
};

export default function StatsCard({
  title,
  value,
  change,
  changeLabel = "vs last month",
  icon,
  gradient,
  prefix = "",
  suffix = "",
  delay = 0,
}: StatsCardProps) {
  const g = gradientMap[gradient];
  const isPositive = change >= 0;

  const Icon = icons[icon];

  return (
    <div
      className={clsx(
        "glass-card rounded-2xl p-5 gradient-border",
        "hover:shadow-card-hover transition-all duration-300 group",
        "animate-fade-up"
      )}
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: "both",
      }}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-text-secondary text-sm font-medium">
            {title}
          </p>

          <p className="text-3xl font-black text-text-primary mt-1 counter tracking-tight">
            {prefix}
            {typeof value === "number"
              ? value.toLocaleString()
              : value}
            {suffix}
          </p>
        </div>

        <div
          className={clsx(
            "w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0",
            g.bg,
            g.glow,
            "ring-2",
            g.ring,
            "group-hover:scale-110 transition-transform duration-300"
          )}
        >
          <Icon size={20} className="text-white" />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div
          className={clsx(
            "flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-semibold",
            isPositive
              ? "bg-brand-emerald/10 text-brand-emerald"
              : "bg-brand-rose/10 text-brand-rose"
          )}
        >
          {isPositive ? (
            <TrendingUp size={11} />
          ) : (
            <TrendingDown size={11} />
          )}

          {Math.abs(change)}%
        </div>

        <span className="text-text-muted text-xs">
          {changeLabel}
        </span>
      </div>

      <div className="mt-4 h-1 rounded-full bg-border-subtle overflow-hidden">
        <div
          className={clsx(
            "h-full rounded-full transition-all duration-700",
            g.bg
          )}
          style={{
            width: `${Math.min(Math.abs(change) * 3, 100)}%`,
          }}
        />
      </div>
    </div>
  );
}