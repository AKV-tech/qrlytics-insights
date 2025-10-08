import { QrCode, TrendingUp, Activity, Award } from "lucide-react";
import StatCard from "@/components/StatCard";
import { mockDashboardStats, mockQRCodes, mockAnalyticsData } from "@/lib/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Dashboard() {
  // TODO: Replace with actual API calls
  // const stats = await fetchDashboardStats();
  const stats = mockDashboardStats;

  const recentQRs = mockQRCodes
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 5);

  const totalScansToday = mockAnalyticsData[mockAnalyticsData.length - 1]?.scans || 0;

  return (
    <div className="flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-card px-8 py-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Overview of your QR code analytics and performance
          </p>
        </div>
      </header>

      {/* Main content */}
      <div className="flex-1 space-y-6 p-8">
        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total QR Codes"
            value={stats.totalQRs}
            icon={QrCode}
            description="Active QR codes"
          />
          <StatCard
            title="Total Scans"
            value={stats.totalScans.toLocaleString()}
            icon={TrendingUp}
            trend={{ value: "12% from last month", isPositive: true }}
          />
          <StatCard
            title="Scans Today"
            value={totalScansToday.toLocaleString()}
            icon={Activity}
            trend={{ value: "8% from yesterday", isPositive: true }}
          />
          <StatCard
            title="Top Performing"
            value={stats.topQRSlug}
            icon={Award}
            description="Most scanned QR"
          />
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent QR Codes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentQRs.map((qr) => (
                <div
                  key={qr.id}
                  className="flex items-center justify-between rounded-lg border border-border p-4 transition-colors hover:bg-accent/5"
                >
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{qr.slug}</p>
                    <p className="text-sm text-muted-foreground">{qr.destinationUrl}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-primary">
                      {qr.totalScans.toLocaleString()}
                    </p>
                    <p className="text-xs text-muted-foreground">scans</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
