# 🛍️ StoreX — Premium E-Commerce Dashboard

> Dashboard فاخر لمتجرك الإلكتروني — مبني بـ Next.js 14 + TypeScript + MongoDB

![Dashboard Preview](https://via.placeholder.com/1200x600/0F0F14/4F46E5?text=StoreX+Dashboard)

## ✨ المميزات

- **📊 تحليلات متقدمة** — Revenue charts, category breakdown, live activity
- **🛒 إدارة الطلبات** — فلترة، بحث، تصفية حالات الطلبات
- **📦 إدارة المنتجات** — Grid view مع مخزون وتقييمات
- **👥 إدارة العملاء** — VIP tracking وإحصاءات
- **🎨 تصميم فاخر** — Dark mode, glassmorphism, animations
- **⚡ Real-time** — Live visitors counter و activity feed
- **📱 Responsive** — يعمل على جميع الشاشات

## 🛠️ التقنيات

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Database | MongoDB + Mongoose |
| Charts | Recharts |
| Icons | Lucide React |

## 🚀 التشغيل

### 1. تثبيت المكتبات
```bash
npm install
```

### 2. ضبط المتغيرات البيئية
```bash
cp .env.local.example .env.local
# ثم عدّل MONGODB_URI
```

### 3. تشغيل السيرفر
```bash
npm run dev
```

افتح [http://localhost:3000](http://localhost:3000) — سيُعيد توجيهك إلى `/dashboard`

### 4. إضافة بيانات تجريبية (اختياري)
```bash
npx tsx src/lib/seed.ts
```

## 📁 هيكل المشروع

```
src/
├── app/
│   ├── api/
│   │   ├── stats/          # GET /api/stats
│   │   ├── orders/         # GET/POST /api/orders
│   │   └── products/       # GET/POST /api/products
│   ├── dashboard/
│   │   ├── page.tsx        # الصفحة الرئيسية
│   │   ├── orders/         # إدارة الطلبات
│   │   └── products/       # إدارة المنتجات
│   ├── globals.css
│   └── layout.tsx
├── components/
│   ├── charts/
│   │   ├── RevenueChart.tsx
│   │   └── CategoryChart.tsx
│   ├── layout/
│   │   ├── Sidebar.tsx
│   │   └── Header.tsx
│   └── ui/
│       ├── StatsCard.tsx
│       ├── OrdersTable.tsx
│       ├── TopProducts.tsx
│       └── LiveActivity.tsx
├── lib/
│   ├── mongodb.ts          # اتصال قاعدة البيانات
│   ├── mockData.ts         # بيانات تجريبية
│   └── seed.ts             # سكريبت لملء DB
├── models/
│   └── index.ts            # Order, Product, Customer
└── types/
    └── index.ts            # TypeScript interfaces
```

## 🎨 نظام الألوان

| اللون | Hex | الاستخدام |
|-------|-----|-----------|
| Purple | `#4F46E5` | Primary brand, active states |
| Cyan | `#06B6D4` | Secondary charts, info |
| Emerald | `#10B981` | Success, positive trends |
| Gold | `#F59E0B` | Highlights, warnings |
| Rose | `#F43F5E` | Errors, negative trends |
| BG Primary | `#0F0F14` | Main background |
| BG Card | `#16161E` | Card backgrounds |

## 🔌 API Endpoints

```
GET  /api/stats      — Dashboard statistics
GET  /api/orders     — List orders (pagination + filter)
POST /api/orders     — Create order
GET  /api/products   — List products
POST /api/products   — Create product
```

## 🧩 إضافة صفحات جديدة

```tsx
// src/app/dashboard/customers/page.tsx
import Header from "@/components/layout/Header";

export default function CustomersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header title="Customers" />
      <div className="flex-1 p-6">
        {/* your content */}
      </div>
    </div>
  );
}
```

## 📝 الترخيص

MIT — استخدمه كما تشاء!
