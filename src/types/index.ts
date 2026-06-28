// ─── Stats ────────────────────────────────────────────────────────────────────
export interface DashboardStats {
  totalRevenue: number;
  totalOrders: number;
  totalCustomers: number;
  totalProducts: number;
  revenueChange: number;
  ordersChange: number;
  customersChange: number;
  productsChange: number;
}

// ─── Orders ───────────────────────────────────────────────────────────────────
export type OrderStatus = "pending" | "processing" | "shipped" | "delivered" | "cancelled";

export interface Order {
  _id: string;
  orderNumber: string;
  customer: {
    name: string;
    email: string;
    avatar?: string;
  };
  items: OrderItem[];
  total: number;
  status: OrderStatus;
  paymentMethod: string;
  createdAt: string;
  updatedAt: string;
}

export interface OrderItem {
  productId: string;
  name: string;
  quantity: number;
  price: number;
  image?: string;
}

// ─── Products ─────────────────────────────────────────────────────────────────
export interface Product {
  _id: string;
  name: string;
  sku: string;
  category: string;
  price: number;
  stock: number;
  sold: number;
  image?: string;
  status: "active" | "inactive" | "out_of_stock";
  rating: number;
  reviews: number;
  createdAt: string;
}

// ─── Customers ────────────────────────────────────────────────────────────────
export interface Customer {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
  totalOrders: number;
  totalSpent: number;
  status: "active" | "inactive" | "vip";
  joinedAt: string;
  lastOrderAt?: string;
  location?: string;
}

// ─── Charts ───────────────────────────────────────────────────────────────────
export interface RevenueData {
  date: string;
  revenue: number;
  orders: number;
}

export interface CategoryData {
  name: string;
  value: number;
  color: string;
}

export interface TopProduct {
  name: string;
  sales: number;
  revenue: number;
  growth: number;
}

// ─── Notifications ────────────────────────────────────────────────────────────
export interface Notification {
  id: string;
  type: "order" | "stock" | "customer" | "payment" | "system";
  title: string;
  message: string;
  read: boolean;
  createdAt: string;
}

// ─── API Response ─────────────────────────────────────────────────────────────
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}
