// "use client";

// import { useState } from "react";
// import { MoreHorizontal, ExternalLink, Clock, CheckCircle2, Truck, XCircle, Loader2 } from "lucide-react";
// import { Order, OrderStatus } from "@/types";
// import { recentOrders } from "@/lib/mockData";
// import clsx from "clsx";
// import { formatDistanceToNow } from "date-fns";

// const statusConfig: Record<OrderStatus, {
//   label: string;
//   className: string;
//   icon: React.ComponentType<{ size?: number }>;
// }> = {
//   pending: { label: "Pending", className: "badge-warning", icon: Clock },
//   processing: { label: "Processing", className: "badge-info", icon: Loader2 },
//   shipped: { label: "Shipped", className: "badge-info", icon: Truck },
//   delivered: { label: "Delivered", className: "badge-success", icon: CheckCircle2 },
//   cancelled: { label: "Cancelled", className: "badge-error", icon: XCircle },
// };

// export default function OrdersTable() {
//   const [activeFilter, setActiveFilter] = useState<"all" | OrderStatus>("all");

//   const filtered = activeFilter === "all"
//     ? recentOrders
//     : recentOrders.filter((o) => o.status === activeFilter);

//   const filters: Array<{ label: string; value: "all" | OrderStatus }> = [
//     { label: "All", value: "all" },
//     { label: "Pending", value: "pending" },
//     { label: "Processing", value: "processing" },
//     { label: "Shipped", value: "shipped" },
//     { label: "Delivered", value: "delivered" },
//   ];

//   return (
//     <div className="glass-card rounded-2xl border border-border-subtle overflow-hidden">
//       {/* Header */}
//       <div className="flex items-center justify-between px-6 py-4 border-b border-border-subtle">
//         <div>
//           <h3 className="text-text-primary font-bold text-lg">Recent Orders</h3>
//           <p className="text-text-secondary text-sm">{recentOrders.length} orders today</p>
//         </div>
//         <button className="flex items-center gap-1.5 text-brand-purple-light text-sm font-medium hover:text-brand-purple transition-colors">
//           View all <ExternalLink size={13} />
//         </button>
//       </div>

//       {/* Filters */}
//       <div className="flex items-center gap-2 px-6 py-3 border-b border-border-subtle overflow-x-auto">
//         {filters.map(({ label, value }) => (
//           <button
//             key={value}
//             onClick={() => setActiveFilter(value)}
//             className={clsx(
//               "px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200",
//               activeFilter === value
//                 ? "bg-brand-purple text-white"
//                 : "text-text-secondary hover:text-text-primary hover:bg-bg-elevated"
//             )}
//           >
//             {label}
//           </button>
//         ))}
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto">
//         <table className="w-full">
//           <thead>
//             <tr className="border-b border-border-subtle">
//               {["Order", "Customer", "Items", "Total", "Status", "Time", ""].map((h) => (
//                 <th key={h} className="px-6 py-3 text-left text-xs font-semibold text-text-muted uppercase tracking-wider">
//                   {h}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-border-subtle">
//             {filtered.map((order) => {
//               const status = statusConfig[order.status];
//               const StatusIcon = status.icon;
//               return (
//                 <tr key={order._id} className="table-row-hover transition-colors duration-150">
//                   {/* Order # */}
//                   <td className="px-6 py-4">
//                     <span className="text-brand-purple-light font-mono text-sm font-semibold">
//                       {order.orderNumber}
//                     </span>
//                   </td>
//                   {/* Customer */}
//                   <td className="px-6 py-4">
//                     <div className="flex items-center gap-2.5">
//                       <div className="w-8 h-8 rounded-full bg-purple-gradient flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
//                         {order.customer.name.charAt(0)}
//                       </div>
//                       <div>
//                         <p className="text-text-primary text-sm font-medium">{order.customer.name}</p>
//                         <p className="text-text-muted text-xs">{order.customer.email}</p>
//                       </div>
//                     </div>
//                   </td>
//                   {/* Items */}
//                   <td className="px-6 py-4">
//                     <span className="text-text-secondary text-sm">
//                       {order.items.length} item{order.items.length > 1 ? "s" : ""}
//                     </span>
//                   </td>
//                   {/* Total */}
//                   <td className="px-6 py-4">
//                     <span className="text-text-primary font-bold text-sm counter">
//                       ${order.total.toLocaleString()}
//                     </span>
//                   </td>
//                   {/* Status */}
//                   <td className="px-6 py-4">
//                     <span className={status.className}>
//                       <StatusIcon size={10} />
//                       {status.label}
//                     </span>
//                   </td>
//                   {/* Time */}
//                   <td className="px-6 py-4">
//                     <span className="text-text-muted text-xs">
//                       {formatDistanceToNow(new Date(order.createdAt), { addSuffix: true })}
//                     </span>
//                   </td>
//                   {/* Actions */}
//                   <td className="px-6 py-4">
//                     <button className="p-1.5 rounded-lg hover:bg-bg-elevated text-text-muted hover:text-text-primary transition-all duration-200">
//                       <MoreHorizontal size={16} />
//                     </button>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import {
  MoreHorizontal,
  ExternalLink,
  Clock,
  CheckCircle2,
  Truck,
  XCircle,
  Loader2,
  LucideIcon,
} from "lucide-react";
import { OrderStatus } from "@/types";
import { recentOrders } from "@/lib/mockData";
import clsx from "clsx";
import { formatDistanceToNow } from "date-fns";

const statusConfig: Record<
  OrderStatus,
  {
    label: string;
    className: string;
    icon: LucideIcon;
  }
> = {
  pending: {
    label: "Pending",
    className: "badge-warning",
    icon: Clock,
  },
  processing: {
    label: "Processing",
    className: "badge-info",
    icon: Loader2,
  },
  shipped: {
    label: "Shipped",
    className: "badge-info",
    icon: Truck,
  },
  delivered: {
    label: "Delivered",
    className: "badge-success",
    icon: CheckCircle2,
  },
  cancelled: {
    label: "Cancelled",
    className: "badge-error",
    icon: XCircle,
  },
};

export default function OrdersTable() {
  const [activeFilter, setActiveFilter] = useState<"all" | OrderStatus>("all");

  const filtered =
    activeFilter === "all"
      ? recentOrders
      : recentOrders.filter((o) => o.status === activeFilter);

  const filters: Array<{ label: string; value: "all" | OrderStatus }> = [
    { label: "All", value: "all" },
    { label: "Pending", value: "pending" },
    { label: "Processing", value: "processing" },
    { label: "Shipped", value: "shipped" },
    { label: "Delivered", value: "delivered" },
  ];

  return (
    <div className="glass-card rounded-2xl border border-border-subtle overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-border-subtle">
        <div>
          <h3 className="text-text-primary font-bold text-lg">
            Recent Orders
          </h3>
          <p className="text-text-secondary text-sm">
            {recentOrders.length} orders today
          </p>
        </div>

        <button className="flex items-center gap-1.5 text-brand-purple-light text-sm font-medium hover:text-brand-purple transition-colors">
          View all
          <ExternalLink size={13} />
        </button>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-2 px-6 py-3 border-b border-border-subtle overflow-x-auto">
        {filters.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => setActiveFilter(value)}
            className={clsx(
              "px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200",
              activeFilter === value
                ? "bg-brand-purple text-white"
                : "text-text-secondary hover:text-text-primary hover:bg-bg-elevated"
            )}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border-subtle">
              {[
                "Order",
                "Customer",
                "Items",
                "Total",
                "Status",
                "Time",
                "",
              ].map((h) => (
                <th
                  key={h}
                  className="px-6 py-3 text-left text-xs font-semibold text-text-muted uppercase tracking-wider"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-border-subtle">
            {filtered.map((order) => {
              const status = statusConfig[order.status];
              const StatusIcon = status.icon;

              return (
                <tr
                  key={order._id}
                  className="table-row-hover transition-colors duration-150"
                >
                  {/* Order */}
                  <td className="px-6 py-4">
                    <span className="text-brand-purple-light font-mono text-sm font-semibold">
                      {order.orderNumber}
                    </span>
                  </td>

                  {/* Customer */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-purple-gradient flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                        {order.customer.name.charAt(0)}
                      </div>

                      <div>
                        <p className="text-text-primary text-sm font-medium">
                          {order.customer.name}
                        </p>

                        <p className="text-text-muted text-xs">
                          {order.customer.email}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Items */}
                  <td className="px-6 py-4">
                    <span className="text-text-secondary text-sm">
                      {order.items.length} item
                      {order.items.length > 1 ? "s" : ""}
                    </span>
                  </td>

                  {/* Total */}
                  <td className="px-6 py-4">
                    <span className="text-text-primary font-bold text-sm counter">
                      ${order.total.toLocaleString()}
                    </span>
                  </td>

                  {/* Status */}
                  <td className="px-6 py-4">
                    <span className={status.className}>
                      <StatusIcon size={10} />
                      {status.label}
                    </span>
                  </td>

                  {/* Time */}
                  <td className="px-6 py-4">
                    <span className="text-text-muted text-xs">
                      {formatDistanceToNow(new Date(order.createdAt), {
                        addSuffix: true,
                      })}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4">
                    <button className="p-1.5 rounded-lg hover:bg-bg-elevated text-text-muted hover:text-text-primary transition-all duration-200">
                      <MoreHorizontal size={16} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}