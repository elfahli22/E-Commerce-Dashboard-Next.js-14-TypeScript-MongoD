"use client";

import { useState } from "react";
import { Search, Filter, Download, RefreshCw } from "lucide-react";
import Header from "@/components/layout/Header";
import { recentOrders } from "@/lib/mockData";
import { OrderStatus } from "@/types";
import clsx from "clsx";
import { formatDistanceToNow } from "date-fns";

const statusOptions: Array<{ label: string; value: "all" | OrderStatus }> = [
  { label: "All Orders", value: "all" },
  { label: "Pending", value: "pending" },
  { label: "Processing", value: "processing" },
  { label: "Shipped", value: "shipped" },
  { label: "Delivered", value: "delivered" },
  { label: "Cancelled", value: "cancelled" },
];

const statusColors: Record<OrderStatus, string> = {
  pending: "badge-warning",
  processing: "badge-info",
  shipped: "badge-info",
  delivered: "badge-success",
  cancelled: "badge-error",
};

export default function OrdersPage() {
  const [status, setStatus] = useState<"all" | OrderStatus>("all");
  const [search, setSearch] = useState("");

  const filtered = recentOrders.filter((o) => {
    const matchStatus = status === "all" || o.status === status;
    const matchSearch =
      !search ||
      o.orderNumber.toLowerCase().includes(search.toLowerCase()) ||
      o.customer.name.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Header title="Orders" subtitle={`${recentOrders.length} total orders`} />

      <div className="flex-1 p-6 space-y-4">
        {/* Controls */}
        <div className="glass-card rounded-2xl p-4 border border-border-subtle">
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
              <input
                type="text"
                placeholder="Search by order # or customer..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 text-sm rounded-xl bg-bg-elevated border border-border-subtle text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-purple transition-colors"
              />
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-text-secondary hover:text-text-primary border border-border-subtle hover:bg-bg-elevated transition-all">
                <Filter size={14} /> Filter
              </button>
              <button className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-text-secondary hover:text-text-primary border border-border-subtle hover:bg-bg-elevated transition-all">
                <Download size={14} /> Export
              </button>
              <button className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-brand-purple-light border border-brand-purple/30 hover:bg-brand-purple/10 transition-all">
                <RefreshCw size={14} /> Refresh
              </button>
            </div>
          </div>

          {/* Status filters */}
          <div className="flex items-center gap-2 mt-3 overflow-x-auto pb-1">
            {statusOptions.map(({ label, value }) => (
              <button
                key={value}
                onClick={() => setStatus(value)}
                className={clsx(
                  "px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all",
                  status === value
                    ? "bg-brand-purple text-white"
                    : "text-text-secondary hover:text-text-primary hover:bg-bg-elevated"
                )}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="glass-card rounded-2xl border border-border-subtle overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border-subtle bg-bg-elevated/50">
                  {["Order #", "Customer", "Items", "Total", "Payment", "Status", "Date"].map((h) => (
                    <th key={h} className="px-5 py-3.5 text-left text-xs font-semibold text-text-muted uppercase tracking-wider">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border-subtle">
                {filtered.map((order) => (
                  <tr key={order._id} className="table-row-hover cursor-pointer transition-colors">
                    <td className="px-5 py-4">
                      <span className="text-brand-purple-light font-mono text-sm font-semibold">
                        {order.orderNumber}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-purple-gradient flex items-center justify-center text-white text-xs font-bold">
                          {order.customer.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-text-primary text-sm font-medium">{order.customer.name}</p>
                          <p className="text-text-muted text-xs">{order.customer.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-text-secondary text-sm">
                      {order.items.length} item{order.items.length > 1 ? "s" : ""}
                    </td>
                    <td className="px-5 py-4">
                      <span className="text-text-primary font-bold text-sm counter">
                        ${order.total.toLocaleString()}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-text-secondary text-sm">{order.paymentMethod}</td>
                    <td className="px-5 py-4">
                      <span className={statusColors[order.status] + " badge"}>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-text-muted text-xs">
                      {formatDistanceToNow(new Date(order.createdAt), { addSuffix: true })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filtered.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-text-muted text-sm">No orders found matching your criteria</p>
            </div>
          )}

          {/* Pagination */}
          <div className="flex items-center justify-between px-5 py-4 border-t border-border-subtle">
            <span className="text-text-muted text-sm">Showing {filtered.length} of {recentOrders.length} orders</span>
            <div className="flex items-center gap-1">
              {[1, 2, 3].map((p) => (
                <button
                  key={p}
                  className={clsx(
                    "w-8 h-8 rounded-lg text-sm font-medium transition-all",
                    p === 1 ? "bg-brand-purple text-white" : "text-text-secondary hover:bg-bg-elevated"
                  )}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
