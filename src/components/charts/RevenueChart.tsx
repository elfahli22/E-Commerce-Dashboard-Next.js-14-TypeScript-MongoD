"use client";

import { useState } from "react";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, ReferenceLine,
} from "recharts";
import { revenueData } from "@/lib/mockData";
import clsx from "clsx";

const periods = ["3M", "6M", "1Y", "ALL"];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="glass-card rounded-xl p-3 border border-border-default shadow-card">
      <p className="text-text-secondary text-xs mb-2 font-medium">{label}</p>
      <div className="space-y-1.5">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-brand-purple" />
          <span className="text-text-secondary text-xs">Revenue</span>
          <span className="text-text-primary text-xs font-bold ml-auto">
            ${payload[0]?.value?.toLocaleString()}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-brand-cyan" />
          <span className="text-text-secondary text-xs">Orders</span>
          <span className="text-text-primary text-xs font-bold ml-auto">
            {payload[1]?.value?.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default function RevenueChart() {
  const [activePeriod, setActivePeriod] = useState("1Y");

  const filteredData =
    activePeriod === "3M" ? revenueData.slice(-3)
    : activePeriod === "6M" ? revenueData.slice(-6)
    : revenueData;

  const maxRevenue = Math.max(...filteredData.map((d) => d.revenue));
  const avgRevenue = filteredData.reduce((s, d) => s + d.revenue, 0) / filteredData.length;

  return (
    <div className="glass-card rounded-2xl p-6 border border-border-subtle">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-text-primary font-bold text-lg">Revenue Overview</h3>
          <p className="text-text-secondary text-sm mt-0.5">
            Peak: <span className="text-brand-gold font-semibold">${maxRevenue.toLocaleString()}</span>
          </p>
        </div>
        <div className="flex items-center gap-1 p-1 bg-bg-secondary rounded-xl border border-border-subtle">
          {periods.map((p) => (
            <button
              key={p}
              onClick={() => setActivePeriod(p)}
              className={clsx(
                "px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200",
                activePeriod === p
                  ? "bg-purple-gradient text-white shadow-glow"
                  : "text-text-secondary hover:text-text-primary"
              )}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-0.5 bg-brand-purple rounded" />
          <span className="text-text-secondary text-xs">Revenue</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-0.5 bg-brand-cyan rounded" />
          <span className="text-text-secondary text-xs">Orders</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-0.5 border-t border-dashed border-text-muted" />
          <span className="text-text-secondary text-xs">Average</span>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={filteredData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="purpleGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4F46E5" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#4F46E5" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="cyanGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity={0.2} />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" vertical={false} />
          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#8B8B9A", fontSize: 11 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#8B8B9A", fontSize: 11 }}
            tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ stroke: "rgba(79,70,229,0.2)", strokeWidth: 1 }} />
          <ReferenceLine
            y={avgRevenue}
            stroke="#4A4A5A"
            strokeDasharray="4 4"
            strokeWidth={1}
          />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#4F46E5"
            strokeWidth={2.5}
            fill="url(#purpleGrad)"
            dot={false}
            activeDot={{ r: 5, fill: "#4F46E5", strokeWidth: 2, stroke: "#0F0F14" }}
          />
          <Area
            type="monotone"
            dataKey="orders"
            stroke="#06B6D4"
            strokeWidth={2}
            fill="url(#cyanGrad)"
            dot={false}
            activeDot={{ r: 4, fill: "#06B6D4", strokeWidth: 2, stroke: "#0F0F14" }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
