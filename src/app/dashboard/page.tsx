import { DollarSign, ShoppingCart, Users, Package } from "lucide-react";
import Header from "@/components/layout/Header";
import StatsCard from "@/components/ui/StatsCard";
import RevenueChart from "@/components/charts/RevenueChart";
import CategoryChart from "@/components/charts/CategoryChart";
import OrdersTable from "@/components/ui/OrdersTable";
import TopProducts from "@/components/ui/TopProducts";
import LiveActivity from "@/components/ui/LiveActivity";

export default async function DashboardPage() {
  // In production, fetch from API:
  // const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/stats`, { next: { revalidate: 60 } });
  // const { data: stats } = await res.json();

  const stats = {
    totalRevenue: 104000,
    totalOrders: 780,
    totalCustomers: 12480,
    totalProducts: 2340,
    revenueChange: 18.2,
    ordersChange: 12.5,
    customersChange: 8.1,
    productsChange: 4.3,
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        title="Dashboard"
        subtitle={`Good morning! Here's what's happening today — ${new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}`}
      />

      <div className="flex-1 p-6 space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {/* <StatsCard
            title="Total Revenue"
            value={stats.totalRevenue}
            change={stats.revenueChange}
            icon={DollarSign}
            gradient="purple"
            prefix="$"
            delay={0}
          />
          <StatsCard
            title="Total Orders"
            value={stats.totalOrders}
            change={stats.ordersChange}
            icon={ShoppingCart}
            gradient="cyan"
            delay={100}
          />
          <StatsCard
            title="Customers"
            value={stats.totalCustomers}
            change={stats.customersChange}
            icon={Users}
            gradient="emerald"
            delay={200}
          />
          <StatsCard
            title="Products"
            value={stats.totalProducts}
            change={stats.productsChange}
            icon={Package}
            gradient="gold"
            delay={300}
          /> */}
          <StatsCard
  title="Total Revenue"
  value={stats.totalRevenue}
  change={stats.revenueChange}
  icon="DollarSign"
  gradient="purple"
  prefix="$"
  delay={0}
/>

<StatsCard
  title="Total Orders"
  value={stats.totalOrders}
  change={stats.ordersChange}
  icon="ShoppingCart"
  gradient="cyan"
  delay={100}
/>

<StatsCard
  title="Customers"
  value={stats.totalCustomers}
  change={stats.customersChange}
  icon="Users"
  gradient="emerald"
  delay={200}
/>

<StatsCard
  title="Products"
  value={stats.totalProducts}
  change={stats.productsChange}
  icon="Package"
  gradient="gold"
  delay={300}
/>
        </div>

        {/* Revenue Chart + Category */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
          <div className="xl:col-span-2">
            <RevenueChart />
          </div>
          <div>
            <CategoryChart />
          </div>
        </div>

        {/* Orders + Top Products + Live Activity */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
          <div className="xl:col-span-2">
            <OrdersTable />
          </div>
          <div className="space-y-4">
            <TopProducts />
          </div>
        </div>

        {/* Live Activity - full width */}
        <LiveActivity />
      </div>
    </div>
  );
}
