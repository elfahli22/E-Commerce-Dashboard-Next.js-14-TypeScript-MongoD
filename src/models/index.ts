import mongoose, { Schema, Document } from "mongoose";

// ─── Order Model ──────────────────────────────────────────────────────────────
export interface IOrder extends Document {
  orderNumber: string;
  customer: { name: string; email: string; avatar?: string };
  items: Array<{ productId: string; name: string; quantity: number; price: number; image?: string }>;
  total: number;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  paymentMethod: string;
  createdAt: Date;
  updatedAt: Date;
}

const OrderSchema = new Schema<IOrder>(
  {
    orderNumber: { type: String, required: true, unique: true },
    customer: {
      name: { type: String, required: true },
      email: { type: String, required: true },
      avatar: String,
    },
    items: [
      {
        productId: String,
        name: { type: String, required: true },
        quantity: { type: Number, required: true, min: 1 },
        price: { type: Number, required: true, min: 0 },
        image: String,
      },
    ],
    total: { type: Number, required: true, min: 0 },
    status: {
      type: String,
      enum: ["pending", "processing", "shipped", "delivered", "cancelled"],
      default: "pending",
    },
    paymentMethod: { type: String, default: "credit_card" },
  },
  { timestamps: true }
);

// ─── Product Model ────────────────────────────────────────────────────────────
export interface IProduct extends Document {
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
  createdAt: Date;
}

const ProductSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    sku: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    stock: { type: Number, default: 0, min: 0 },
    sold: { type: Number, default: 0, min: 0 },
    image: String,
    status: {
      type: String,
      enum: ["active", "inactive", "out_of_stock"],
      default: "active",
    },
    rating: { type: Number, default: 0, min: 0, max: 5 },
    reviews: { type: Number, default: 0, min: 0 },
  },
  { timestamps: true }
);

// ─── Customer Model ───────────────────────────────────────────────────────────
export interface ICustomer extends Document {
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
  totalOrders: number;
  totalSpent: number;
  status: "active" | "inactive" | "vip";
  joinedAt: Date;
  lastOrderAt?: Date;
  location?: string;
}

const CustomerSchema = new Schema<ICustomer>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: String,
    avatar: String,
    totalOrders: { type: Number, default: 0, min: 0 },
    totalSpent: { type: Number, default: 0, min: 0 },
    status: {
      type: String,
      enum: ["active", "inactive", "vip"],
      default: "active",
    },
    joinedAt: { type: Date, default: Date.now },
    lastOrderAt: Date,
    location: String,
  },
  { timestamps: true }
);

// ─── Export Models ────────────────────────────────────────────────────────────
export const Order =
  (mongoose.models.Order as mongoose.Model<IOrder>) ||
  mongoose.model<IOrder>("Order", OrderSchema);

export const Product =
  (mongoose.models.Product as mongoose.Model<IProduct>) ||
  mongoose.model<IProduct>("Product", ProductSchema);

export const Customer =
  (mongoose.models.Customer as mongoose.Model<ICustomer>) ||
  mongoose.model<ICustomer>("Customer", CustomerSchema);
