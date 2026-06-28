"use client";

import { TrendingUp, TrendingDown, Package } from "lucide-react";
import { topProducts } from "@/lib/mockData";
import clsx from "clsx";

export default function TopProducts() {
  const max = Math.max(...topProducts.map((p) => p.revenue));

  return (
    <div className="glass-card rounded-2xl p-6 border border-border-subtle h-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-text-primary font-bold text-lg">Top Products</h3>
          <p className="text-text-secondary text-sm mt-0.5">By revenue this month</p>
        </div>
        <div className="w-9 h-9 rounded-xl bg-brand-emerald/10 border border-brand-emerald/20 flex items-center justify-center">
          <Package size={16} className="text-brand-emerald" />
        </div>
      </div>

      <div className="space-y-4">
        {topProducts.map((product, i) => {
          const barWidth = (product.revenue / max) * 100;
          const isPositive = product.growth >= 0;

          return (
            <div key={product.name} className="group">
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2.5">
                  <span className="text-[10px] font-bold text-text-muted font-mono w-4">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-text-primary text-sm font-medium group-hover:text-brand-purple-light transition-colors">
                    {product.name}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-text-primary text-sm font-bold counter">
                    ${(product.revenue / 1000).toFixed(0)}k
                  </span>
                  <div
                    className={clsx(
                      "flex items-center gap-0.5 text-xs font-semibold w-14 justify-end",
                      isPositive ? "text-brand-emerald" : "text-brand-rose"
                    )}
                  >
                    {isPositive ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
                    {Math.abs(product.growth)}%
                  </div>
                </div>
              </div>
              <div className="h-1.5 rounded-full bg-bg-elevated overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700 ease-out"
                  style={{
                    width: `${barWidth}%`,
                    background: i === 0
                      ? "linear-gradient(90deg, #4F46E5, #7C3AED)"
                      : i === 1
                      ? "linear-gradient(90deg, #06B6D4, #0284C7)"
                      : i === 2
                      ? "linear-gradient(90deg, #10B981, #059669)"
                      : i === 3
                      ? "linear-gradient(90deg, #F59E0B, #D97706)"
                      : "linear-gradient(90deg, #F43F5E, #DC2626)",
                  }}
                />
              </div>
              <div className="flex items-center justify-between mt-1">
                <span className="text-text-muted text-[10px]">{product.sales.toLocaleString()} units</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
