"use client";

import { Search, Plus, Star, Package, AlertTriangle } from "lucide-react";
import Header from "@/components/layout/Header";
import clsx from "clsx";

const products = [
  { id: "p1", name: "iPhone 15 Pro Max", sku: "APL-IP15PM", category: "Electronics", price: 1199, stock: 45, sold: 1240, status: "active", rating: 4.8, reviews: 342 },
  { id: "p2", name: "MacBook Air M3", sku: "APL-MBA-M3", category: "Electronics", price: 1299, stock: 23, sold: 856, status: "active", rating: 4.9, reviews: 218 },
  { id: "p3", name: "Sony WH-1000XM5", sku: "SNY-WH1000", category: "Electronics", price: 299, stock: 0, sold: 1890, status: "out_of_stock", rating: 4.7, reviews: 567 },
  { id: "p4", name: "Nike Air Jordan 1", sku: "NKE-AJ1-R", category: "Fashion", price: 189, stock: 120, sold: 2340, status: "active", rating: 4.6, reviews: 891 },
  { id: "p5", name: "Samsung 65\" 4K OLED", sku: "SAM-65OLED", category: "Electronics", price: 899, stock: 8, sold: 420, status: "active", rating: 4.5, reviews: 123 },
  { id: "p6", name: "Dyson V15 Vacuum", sku: "DYS-V15", category: "Home & Garden", price: 649, stock: 34, sold: 289, status: "active", rating: 4.4, reviews: 98 },
];

const statusConfig = {
  active: { label: "Active", className: "badge-success" },
  inactive: { label: "Inactive", className: "badge-warning" },
  out_of_stock: { label: "Out of Stock", className: "badge-error" },
};

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header title="Products" subtitle={`${products.length} products in catalog`} />

      <div className="flex-1 p-6 space-y-4">
        {/* Controls */}
        <div className="flex items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
            <input
              placeholder="Search products..."
              className="w-full pl-9 pr-4 py-2.5 text-sm rounded-xl bg-bg-secondary border border-border-subtle text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-purple transition-colors"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-purple-gradient text-white shadow-glow hover:opacity-90 transition-all">
            <Plus size={16} /> Add Product
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {products.map((product, i) => {
            const status = statusConfig[product.status as keyof typeof statusConfig];
            const isLowStock = product.stock > 0 && product.stock < 10;
            return (
              <div
                key={product.id}
                className="glass-card rounded-2xl p-5 border border-border-subtle gradient-border hover:shadow-card-hover transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${i * 60}ms`, animationFillMode: "both" }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-bg-elevated border border-border-subtle flex items-center justify-center">
                    <Package size={22} className="text-brand-purple-light" />
                  </div>
                  <span className={status.className + " badge"}>{status.label}</span>
                </div>

                {/* Info */}
                <h4 className="text-text-primary font-bold text-base mb-1">{product.name}</h4>
                <p className="text-text-muted text-xs font-mono mb-3">{product.sku} · {product.category}</p>

                {/* Rating */}
                <div className="flex items-center gap-1.5 mb-4">
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star
                        key={j}
                        size={12}
                        className={j < Math.floor(product.rating) ? "text-brand-gold fill-brand-gold" : "text-text-muted"}
                      />
                    ))}
                  </div>
                  <span className="text-text-secondary text-xs">{product.rating} ({product.reviews})</span>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 pt-3 border-t border-border-subtle">
                  <div className="text-center">
                    <p className="text-text-primary font-bold text-sm counter">${product.price}</p>
                    <p className="text-text-muted text-[10px] mt-0.5">Price</p>
                  </div>
                  <div className="text-center border-x border-border-subtle">
                    <div className="flex items-center justify-center gap-1">
                      <p className={clsx("font-bold text-sm counter", product.stock === 0 ? "text-brand-rose" : isLowStock ? "text-brand-gold" : "text-text-primary")}>
                        {product.stock}
                      </p>
                      {isLowStock && <AlertTriangle size={10} className="text-brand-gold" />}
                    </div>
                    <p className="text-text-muted text-[10px] mt-0.5">Stock</p>
                  </div>
                  <div className="text-center">
                    <p className="text-brand-emerald font-bold text-sm counter">{product.sold.toLocaleString()}</p>
                    <p className="text-text-muted text-[10px] mt-0.5">Sold</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
