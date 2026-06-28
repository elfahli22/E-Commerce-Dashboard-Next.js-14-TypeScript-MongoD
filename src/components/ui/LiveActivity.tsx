"use client";

import { useEffect, useState } from "react";
import { Activity, ShoppingCart, UserPlus, Eye } from "lucide-react";
import clsx from "clsx";

interface ActivityItem {
  id: number;
  type: "order" | "signup" | "view";
  message: string;
  location: string;
  time: number;
}

const initialActivity: ActivityItem[] = [
  { id: 1, type: "order", message: "New order placed", location: "Riyadh, SA", time: Date.now() - 12000 },
  { id: 2, type: "signup", message: "New customer registered", location: "Dubai, AE", time: Date.now() - 45000 },
  { id: 3, type: "view", message: "Product viewed 24 times", location: "Cairo, EG", time: Date.now() - 120000 },
  { id: 4, type: "order", message: "Order #ORD-2024-007", location: "Kuwait City", time: Date.now() - 180000 },
];

const typeConfig = {
  order: { icon: ShoppingCart, color: "text-brand-purple", bg: "bg-brand-purple/10" },
  signup: { icon: UserPlus, color: "text-brand-emerald", bg: "bg-brand-emerald/10" },
  view: { icon: Eye, color: "text-brand-cyan", bg: "bg-brand-cyan/10" },
};

function timeAgo(ms: number) {
  const diff = Date.now() - ms;
  if (diff < 60000) return `${Math.floor(diff / 1000)}s ago`;
  if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
  return `${Math.floor(diff / 3600000)}h ago`;
}

export default function LiveActivity() {
  const [activity, setActivity] = useState(initialActivity);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTick((t) => t + 1), 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass-card rounded-2xl p-6 border border-border-subtle">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-text-primary font-bold text-lg">Live Activity</h3>
          <p className="text-text-secondary text-sm mt-0.5">Real-time events</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-brand-emerald pulse-dot" />
          <span className="text-brand-emerald text-xs font-semibold">Live</span>
        </div>
      </div>

      <div className="space-y-3">
        {activity.map((item) => {
          const config = typeConfig[item.type];
          const Icon = config.icon;
          return (
            <div
              key={item.id}
              className="flex items-center gap-3 p-3 rounded-xl bg-bg-elevated border border-border-subtle hover:border-border-default transition-all duration-200"
            >
              <div className={clsx("w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0", config.bg)}>
                <Icon size={15} className={config.color} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-text-primary text-sm font-medium truncate">{item.message}</p>
                <p className="text-text-muted text-xs">{item.location}</p>
              </div>
              <span className="text-text-muted text-xs flex-shrink-0 font-mono">{timeAgo(item.time)}</span>
            </div>
          );
        })}
      </div>

      {/* Visitors counter */}
      <div className="mt-4 p-4 rounded-xl border border-brand-purple/20 bg-brand-purple/5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity size={15} className="text-brand-purple-light" />
            <span className="text-text-secondary text-sm">Active visitors</span>
          </div>
          <span className="text-2xl font-black gradient-text counter">
            {247 + tick * 3}
          </span>
        </div>
        <div className="mt-2 h-1 rounded-full bg-border-subtle overflow-hidden">
          <div
            className="h-full rounded-full bg-purple-gradient transition-all duration-1000"
            style={{ width: `${60 + (tick % 20) * 2}%` }}
          />
        </div>
      </div>
    </div>
  );
}
