import AnalyticsChart from "@/components/AnalyticsChart";
import { mockAnalyticsData, mockQRCodes } from "@/lib/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, Clock } from "lucide-react";

export default function Analytics() {
  // TODO: Replace with actual API calls
  // const analyticsData = await fetchAnalytics(startDate, endDate);
  const analyticsData = mockAnalyticsData;

  const totalScans = analyticsData.reduce((sum, day) => sum + day.scans, 0);
  const avgScansPerDay = Math.round(totalScans / analyticsData.length);
  const topQR = mockQRCodes.reduce((prev, current) =>
    prev.totalScans > current.totalScans ? prev : current
  );

  return (
    <div className="flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-card px-8 py-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Track scan performance and engagement metrics
          </p>
        </div>
      </header>

      {/* Main content */}
      <div className="flex-1 space-y-6 p-8">
        {/* Quick Stats */}
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Scans (8 days)
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {totalScans.toLocaleString()}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Avg. Scans/Day
              </CardTitle>
              <Clock className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {avgScansPerDay.toLocaleString()}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Top QR Code
              </CardTitle>
              <Users className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{topQR.slug}</div>
              <p className="text-xs text-muted-foreground">
                {topQR.totalScans.toLocaleString()} scans
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Chart */}
        <AnalyticsChart data={analyticsData} />

        {/* Top Performing QR Codes */}
        <Card>
          <CardHeader>
            <CardTitle>Top Performing QR Codes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockQRCodes
                .sort((a, b) => b.totalScans - a.totalScans)
                .slice(0, 5)
                .map((qr, index) => (
                  <div
                    key={qr.id}
                    className="flex items-center justify-between rounded-lg border border-border p-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary">
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{qr.slug}</p>
                        <p className="text-sm text-muted-foreground">{qr.destinationUrl}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-primary">
                        {qr.totalScans.toLocaleString()}
                      </p>
                      <p className="text-xs text-muted-foreground">total scans</p>
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
