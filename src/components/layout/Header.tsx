"use client";

import { useState } from "react";
import { Search, Bell, Plus, ChevronDown, Moon, Globe } from "lucide-react";
import clsx from "clsx";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

const notifications = [
  { id: 1, type: "order", message: "طلب جديد #ORD-2024-006", time: "2 دقائق", unread: true },
  { id: 2, type: "stock", message: "مخزون منخفض: Sony WH-1000XM5", time: "15 دقيقة", unread: true },
  { id: 3, type: "customer", message: "عميل VIP جديد: Ahmed Al-Salem", time: "1 ساعة", unread: false },
];

export default function Header({ title, subtitle }: HeaderProps) {
  const [showNotifications, setShowNotifications] = useState(false);
  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <header className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-bg-primary/80 backdrop-blur-md border-b border-border-subtle">
      {/* Title */}
      <div>
        <h1 className="text-xl font-bold text-text-primary">{title}</h1>
        {subtitle && <p className="text-sm text-text-secondary mt-0.5">{subtitle}</p>}
      </div>

      {/* Right controls */}
      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="relative hidden md:block">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
          <input
            type="text"
            placeholder="Search orders, products..."
            className={clsx(
              "pl-9 pr-4 py-2 text-sm rounded-xl w-64",
              "bg-bg-secondary border border-border-subtle",
              "text-text-primary placeholder:text-text-muted",
              "focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple/30",
              "transition-all duration-200"
            )}
          />
        </div>

        {/* Globe / Language */}
        <button className="p-2 rounded-xl text-text-secondary hover:text-text-primary hover:bg-bg-secondary border border-border-subtle transition-all duration-200">
          <Globe size={16} />
        </button>

        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 rounded-xl text-text-secondary hover:text-text-primary hover:bg-bg-secondary border border-border-subtle transition-all duration-200"
          >
            <Bell size={16} />
            {unreadCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-brand-rose text-white text-[9px] font-bold flex items-center justify-center pulse-dot">
                {unreadCount}
              </span>
            )}
          </button>

          {showNotifications && (
            <div className="absolute right-0 top-12 w-80 glass-card rounded-2xl shadow-card-hover border border-border-subtle overflow-hidden animate-fade-up">
              <div className="flex items-center justify-between px-4 py-3 border-b border-border-subtle">
                <span className="text-sm font-semibold text-text-primary">Notifications</span>
                <button className="text-xs text-brand-purple-light hover:text-brand-purple transition-colors">
                  Mark all read
                </button>
              </div>
              {notifications.map((n) => (
                <div
                  key={n.id}
                  className={clsx(
                    "flex items-start gap-3 px-4 py-3 border-b border-border-subtle last:border-0",
                    "hover:bg-bg-elevated transition-colors cursor-pointer",
                    n.unread && "bg-brand-purple/5"
                  )}
                >
                  <div className={clsx(
                    "w-2 h-2 rounded-full mt-1.5 flex-shrink-0",
                    n.unread ? "bg-brand-purple" : "bg-text-muted"
                  )} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-text-primary">{n.message}</p>
                    <p className="text-xs text-text-secondary mt-0.5">{n.time}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Add button */}
        <button className={clsx(
          "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold",
          "bg-purple-gradient text-white shadow-glow",
          "hover:opacity-90 hover:shadow-glow transition-all duration-200",
          "border border-brand-purple/30"
        )}>
          <Plus size={16} />
          <span className="hidden sm:inline">New Order</span>
        </button>

        {/* Profile */}
        <button className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-border-subtle hover:bg-bg-secondary transition-all duration-200">
          <div className="w-7 h-7 rounded-full bg-purple-gradient flex items-center justify-center text-white text-xs font-bold">
            A
          </div>
          <ChevronDown size={14} className="text-text-secondary" />
        </button>
      </div>
    </header>
  );
}
