/**
 * Seed script — run with: npx ts-node src/lib/seed.ts
 * (or use tsx: npx tsx src/lib/seed.ts)
 */
import mongoose from "mongoose";
import { Order, Product, Customer } from "../models";

const MONGODB_URI = process.env.MONGODB_URI ?? "mongodb://localhost:27017/storex";

const products = [
  { name: "iPhone 15 Pro Max", sku: "APL-IP15PM", category: "Electronics", price: 1199, stock: 45, sold: 1240, status: "active", rating: 4.8, reviews: 342 },
  { name: "MacBook Air M3", sku: "APL-MBA-M3", category: "Electronics", price: 1299, stock: 23, sold: 856, status: "active", rating: 4.9, reviews: 218 },
  { name: "Sony WH-1000XM5", sku: "SNY-WH1000", category: "Electronics", price: 299, stock: 0, sold: 1890, status: "out_of_stock", rating: 4.7, reviews: 567 },
  { name: "Nike Air Jordan 1", sku: "NKE-AJ1-R", category: "Fashion", price: 189, stock: 120, sold: 2340, status: "active", rating: 4.6, reviews: 891 },
  { name: "Samsung 65\" 4K OLED", sku: "SAM-65OLED", category: "Electronics", price: 899, stock: 8, sold: 420, status: "active", rating: 4.5, reviews: 123 },
];

const customers = [
  { name: "Mohammed Al-Omari", email: "mohammed@example.com", totalOrders: 47, totalSpent: 28450, status: "vip", location: "Riyadh, SA", joinedAt: new Date("2022-03-15") },
  { name: "Sarah Johnson", email: "sarah@example.com", totalOrders: 31, totalSpent: 19800, status: "vip", location: "Dubai, AE", joinedAt: new Date("2022-06-20") },
  { name: "Ahmed Al-Salem", email: "ahmed@example.com", totalOrders: 24, totalSpent: 14230, status: "active", location: "Kuwait City", joinedAt: new Date("2023-01-10") },
  { name: "Emma Williams", email: "emma@example.com", totalOrders: 18, totalSpent: 11590, status: "active", location: "Cairo, EG", joinedAt: new Date("2023-04-05") },
];

const orders = [
  { orderNumber: "ORD-2024-001", customer: { name: "Mohammed Al-Omari", email: "mohammed@example.com" }, items: [{ productId: "p1", name: "iPhone 15 Pro", quantity: 1, price: 1199 }], total: 1199, status: "delivered", paymentMethod: "Credit Card" },
  { orderNumber: "ORD-2024-002", customer: { name: "Sarah Johnson", email: "sarah@example.com" }, items: [{ productId: "p2", name: "MacBook Air M3", quantity: 1, price: 1299 }], total: 1299, status: "processing", paymentMethod: "PayPal" },
  { orderNumber: "ORD-2024-003", customer: { name: "Ahmed Al-Salem", email: "ahmed@example.com" }, items: [{ productId: "p3", name: "Sony Headphones", quantity: 1, price: 299 }, { productId: "p4", name: "AirPods Pro", quantity: 2, price: 249 }], total: 797, status: "shipped", paymentMethod: "Mada" },
];

async function seed() {
  await mongoose.connect(MONGODB_URI);
  console.log("✅ Connected to MongoDB");

  await Promise.all([
    Product.deleteMany({}),
    Customer.deleteMany({}),
    Order.deleteMany({}),
  ]);
  console.log("🗑️  Cleared existing data");

  await Product.insertMany(products);
  await Customer.insertMany(customers);
  await Order.insertMany(orders);
  console.log("🌱 Seed complete!");

  await mongoose.disconnect();
  process.exit(0);
}

seed().catch(console.error);
