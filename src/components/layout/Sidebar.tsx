"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard, ShoppingCart, Package, Users, BarChart3,
  Settings, Bell, ChevronLeft, Zap, Tag, Percent, HelpCircle,
} from "lucide-react";
import clsx from "clsx";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Orders", href: "/dashboard/orders", icon: ShoppingCart, badge: 12 },
  { label: "Products", href: "/dashboard/products", icon: Package },
  { label: "Customers", href: "/dashboard/customers", icon: Users },
  { label: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
  { label: "Promotions", href: "/dashboard/promotions", icon: Percent },
  { label: "Categories", href: "/dashboard/categories", icon: Tag },
];

const bottomItems = [
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
  { label: "Help", href: "/dashboard/help", icon: HelpCircle },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={clsx(
        "relative flex flex-col h-screen transition-all duration-300 ease-in-out",
        "bg-bg-secondary border-r border-border-subtle",
        collapsed ? "w-[72px]" : "w-[240px]"
      )}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 py-5 border-b border-border-subtle">
        <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-purple-gradient flex items-center justify-center shadow-glow">
          <Zap size={18} className="text-white" />
        </div>
        {!collapsed && (
          <div>
            <span className="text-text-primary font-bold text-lg tracking-tight">StoreX</span>
            <span className="block text-text-secondary text-xs">Admin Panel</span>
          </div>
        )}
      </div>

      {/* Collapse button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className={clsx(
          "absolute -right-3 top-16 z-10",
          "w-6 h-6 rounded-full bg-bg-elevated border border-border-default",
          "flex items-center justify-center",
          "text-text-secondary hover:text-text-primary hover:border-brand-purple",
          "transition-all duration-200 shadow-card"
        )}
      >
        <ChevronLeft size={12} className={clsx("transition-transform duration-300", collapsed && "rotate-180")} />
      </button>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {!collapsed && (
          <p className="px-3 mb-3 text-[10px] font-semibold text-text-muted uppercase tracking-wider">
            Main Menu
          </p>
        )}
        {navItems.map(({ label, href, icon: Icon, badge }) => {
          const isActive = pathname === href || (href !== "/dashboard" && pathname.startsWith(href));
          return (
            <Link
              key={href}
              href={href}
              title={collapsed ? label : undefined}
              className={clsx(
                "group flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200",
                "relative overflow-hidden",
                isActive
                  ? "nav-item-active text-brand-purple-light"
                  : "text-text-secondary hover:text-text-primary hover:bg-bg-elevated"
              )}
            >
              <Icon size={18} className="flex-shrink-0" />
              {!collapsed && (
                <span className="text-sm font-medium flex-1">{label}</span>
              )}
              {!collapsed && badge && (
                <span className="flex-shrink-0 px-1.5 py-0.5 rounded-md bg-brand-purple/20 text-brand-purple-light text-[10px] font-bold">
                  {badge}
                </span>
              )}
              {isActive && (
                <div className="absolute inset-0 bg-purple-gradient opacity-5 rounded-xl" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="px-3 py-4 border-t border-border-subtle space-y-1">
        {bottomItems.map(({ label, href, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            title={collapsed ? label : undefined}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-text-secondary hover:text-text-primary hover:bg-bg-elevated transition-all duration-200 text-sm font-medium"
          >
            <Icon size={18} className="flex-shrink-0" />
            {!collapsed && label}
          </Link>
        ))}

        {/* User */}
        <div className={clsx(
          "flex items-center gap-3 px-3 py-2.5 mt-2 rounded-xl",
          "bg-bg-elevated border border-border-subtle"
        )}>
          <div className="w-8 h-8 rounded-full bg-purple-gradient flex-shrink-0 flex items-center justify-center text-white text-sm font-bold">
            A
          </div>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-text-primary truncate">Admin User</p>
              <p className="text-xs text-text-secondary truncate">admin@storex.com</p>
            </div>
          )}
          {!collapsed && (
            <Bell size={15} className="flex-shrink-0 text-text-secondary hover:text-brand-purple cursor-pointer transition-colors" />
          )}
        </div>
      </div>
    </aside>
  );
}
