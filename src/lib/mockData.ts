import { RevenueData, CategoryData, TopProduct, Order, Customer, Product } from "@/types";

// ─── Revenue Chart Data (Last 12 months) ─────────────────────────────────────
export const revenueData: RevenueData[] = [
  { date: "Jul", revenue: 42000, orders: 320 },
  { date: "Aug", revenue: 55000, orders: 410 },
  { date: "Sep", revenue: 48000, orders: 380 },
  { date: "Oct", revenue: 61000, orders: 460 },
  { date: "Nov", revenue: 79000, orders: 590 },
  { date: "Dec", revenue: 95000, orders: 720 },
  { date: "Jan", revenue: 67000, orders: 510 },
  { date: "Feb", revenue: 72000, orders: 540 },
  { date: "Mar", revenue: 83000, orders: 620 },
  { date: "Apr", revenue: 91000, orders: 680 },
  { date: "May", revenue: 88000, orders: 660 },
  { date: "Jun", revenue: 104000, orders: 780 },
];

// ─── Category Breakdown ────────────────────────────────────────────────────────
export const categoryData: CategoryData[] = [
  { name: "Electronics", value: 38, color: "#4F46E5" },
  { name: "Fashion", value: 24, color: "#06B6D4" },
  { name: "Home & Garden", value: 18, color: "#10B981" },
  { name: "Sports", value: 12, color: "#F59E0B" },
  { name: "Books", value: 8, color: "#F43F5E" },
];

// ─── Top Products ─────────────────────────────────────────────────────────────
export const topProducts: TopProduct[] = [
  { name: "iPhone 15 Pro Max", sales: 1240, revenue: 1_488_000, growth: 18.4 },
  { name: "MacBook Air M3", sales: 856, revenue: 1_027_200, growth: 24.1 },
  { name: "Sony WH-1000XM5", sales: 1890, revenue: 567_000, growth: 12.7 },
  { name: "Nike Air Jordan 1", sales: 2340, revenue: 468_000, growth: -3.2 },
  { name: "Samsung 4K OLED TV", sales: 420, revenue: 378_000, growth: 31.5 },
];

// ─── Recent Orders ─────────────────────────────────────────────────────────────
export const recentOrders: Order[] = [
  {
    _id: "1",
    orderNumber: "ORD-2024-001",
    customer: { name: "محمد العمري", email: "mohammed@email.com" },
    items: [{ productId: "p1", name: "iPhone 15 Pro", quantity: 1, price: 1199 }],
    total: 1199,
    status: "delivered",
    paymentMethod: "Credit Card",
    createdAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: "2",
    orderNumber: "ORD-2024-002",
    customer: { name: "Sarah Johnson", email: "sarah@email.com" },
    items: [{ productId: "p2", name: "MacBook Air M3", quantity: 1, price: 1299 }],
    total: 1299,
    status: "processing",
    paymentMethod: "PayPal",
    createdAt: new Date(Date.now() - 1000 * 60 * 90).toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: "3",
    orderNumber: "ORD-2024-003",
    customer: { name: "أحمد السالم", email: "ahmed@email.com" },
    items: [
      { productId: "p3", name: "Sony Headphones", quantity: 1, price: 299 },
      { productId: "p4", name: "AirPods Pro", quantity: 2, price: 249 },
    ],
    total: 797,
    status: "shipped",
    paymentMethod: "Mada",
    createdAt: new Date(Date.now() - 1000 * 60 * 180).toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: "4",
    orderNumber: "ORD-2024-004",
    customer: { name: "Emma Williams", email: "emma@email.com" },
    items: [{ productId: "p5", name: "Samsung TV 65\"", quantity: 1, price: 899 }],
    total: 899,
    status: "pending",
    paymentMethod: "Bank Transfer",
    createdAt: new Date(Date.now() - 1000 * 60 * 300).toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: "5",
    orderNumber: "ORD-2024-005",
    customer: { name: "فاطمة الزهراني", email: "fatima@email.com" },
    items: [{ productId: "p6", name: "Nike Air Max", quantity: 2, price: 189 }],
    total: 378,
    status: "cancelled",
    paymentMethod: "Credit Card",
    createdAt: new Date(Date.now() - 1000 * 60 * 480).toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

// ─── Top Customers ─────────────────────────────────────────────────────────────
export const topCustomers: Customer[] = [
  {
    _id: "c1",
    name: "محمد العمري",
    email: "mohammed@email.com",
    totalOrders: 47,
    totalSpent: 28450,
    status: "vip",
    joinedAt: "2022-03-15T00:00:00Z",
    location: "الرياض، السعودية",
  },
  {
    _id: "c2",
    name: "Sarah Johnson",
    email: "sarah@email.com",
    totalOrders: 31,
    totalSpent: 19800,
    status: "vip",
    joinedAt: "2022-06-20T00:00:00Z",
    location: "Dubai, UAE",
  },
  {
    _id: "c3",
    name: "أحمد السالم",
    email: "ahmed@email.com",
    totalOrders: 24,
    totalSpent: 14230,
    status: "active",
    joinedAt: "2023-01-10T00:00:00Z",
    location: "الكويت",
  },
  {
    _id: "c4",
    name: "Emma Williams",
    email: "emma@email.com",
    totalOrders: 18,
    totalSpent: 11590,
    status: "active",
    joinedAt: "2023-04-05T00:00:00Z",
    location: "Cairo, Egypt",
  },
];
