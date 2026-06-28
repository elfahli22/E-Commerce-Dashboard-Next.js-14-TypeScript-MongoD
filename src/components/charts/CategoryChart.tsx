"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { categoryData } from "@/lib/mockData";

const CustomTooltip = ({ active, payload }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="glass-card rounded-xl p-3 border border-border-default shadow-card">
      <div className="flex items-center gap-2">
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: payload[0].payload.color }} />
        <span className="text-text-primary text-sm font-semibold">{payload[0].name}</span>
        <span className="text-text-secondary text-sm ml-2">{payload[0].value}%</span>
      </div>
    </div>
  );
};

export default function CategoryChart() {
  return (
    <div className="glass-card rounded-2xl p-6 border border-border-subtle h-full">
      <div className="mb-6">
        <h3 className="text-text-primary font-bold text-lg">Sales by Category</h3>
        <p className="text-text-secondary text-sm mt-0.5">This month's breakdown</p>
      </div>

      <ResponsiveContainer width="100%" height={180}>
        <PieChart>
          <Pie
            data={categoryData}
            cx="50%"
            cy="50%"
            innerRadius={55}
            outerRadius={80}
            paddingAngle={3}
            dataKey="value"
            stroke="none"
          >
            {categoryData.map((entry, i) => (
              <Cell key={i} fill={entry.color} opacity={0.9} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>

      <div className="space-y-2.5 mt-2">
        {categoryData.map((cat) => (
          <div key={cat.name} className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: cat.color }} />
            <span className="text-text-secondary text-sm flex-1">{cat.name}</span>
            <div className="flex items-center gap-2">
              <div className="w-20 h-1.5 rounded-full bg-bg-elevated overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${cat.value}%`, background: cat.color }}
                />
              </div>
              <span className="text-text-primary text-sm font-semibold w-8 text-right">{cat.value}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
