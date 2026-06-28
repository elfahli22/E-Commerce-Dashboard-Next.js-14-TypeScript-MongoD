import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import { Product } from "@/models";

const mockProducts = [
  { _id: "p1", name: "iPhone 15 Pro Max", sku: "APL-IP15PM", category: "Electronics", price: 1199, stock: 45, sold: 1240, status: "active", rating: 4.8, reviews: 342, createdAt: "2024-01-15" },
  { _id: "p2", name: "MacBook Air M3", sku: "APL-MBA-M3", category: "Electronics", price: 1299, stock: 23, sold: 856, status: "active", rating: 4.9, reviews: 218, createdAt: "2024-02-10" },
  { _id: "p3", name: "Sony WH-1000XM5", sku: "SNY-WH1000", category: "Electronics", price: 299, stock: 0, sold: 1890, status: "out_of_stock", rating: 4.7, reviews: 567, createdAt: "2023-11-20" },
  { _id: "p4", name: "Nike Air Jordan 1", sku: "NKE-AJ1-R", category: "Fashion", price: 189, stock: 120, sold: 2340, status: "active", rating: 4.6, reviews: 891, createdAt: "2023-09-05" },
  { _id: "p5", name: "Samsung 65\" 4K OLED", sku: "SAM-65OLED", category: "Electronics", price: 899, stock: 8, sold: 420, status: "active", rating: 4.5, reviews: 123, createdAt: "2024-03-01" },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") ?? "1");
  const limit = parseInt(searchParams.get("limit") ?? "10");

  try {
    await connectDB();

    const [products, total] = await Promise.all([
      Product.find().sort({ sold: -1 }).skip((page - 1) * limit).limit(limit).lean(),
      Product.countDocuments(),
    ]);

    return NextResponse.json({
      success: true,
      data: products,
      pagination: { page, limit, total, pages: Math.ceil(total / limit) },
    });
  } catch {
    return NextResponse.json({
      success: true,
      data: mockProducts,
      pagination: { page: 1, limit: 10, total: mockProducts.length, pages: 1 },
    });
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();
    const product = await Product.create(body);
    return NextResponse.json({ success: true, data: product }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, message: String(error) }, { status: 400 });
  }
}
