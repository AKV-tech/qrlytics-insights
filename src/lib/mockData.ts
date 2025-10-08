// Mock data for QRlytics dashboard
// TODO: Replace with actual API calls to backend

export interface QRCode {
  id: string;
  slug: string;
  destinationUrl: string;
  totalScans: number;
  lastScanned: string | null;
  createdAt: string;
  qrImageUrl: string;
}

export interface AnalyticsData {
  date: string;
  scans: number;
}

export interface DashboardStats {
  totalQRs: number;
  totalScans: number;
  activeQRs: number;
  topQRSlug: string;
}

// Mock QR codes data
export const mockQRCodes: QRCode[] = [
  {
    id: "qr-001",
    slug: "summer-promo",
    destinationUrl: "https://example.com/summer-sale",
    totalScans: 1247,
    lastScanned: "2025-10-07T14:32:00Z",
    createdAt: "2025-09-15T10:00:00Z",
    qrImageUrl: "/placeholder.svg",
  },
  {
    id: "qr-002",
    slug: "menu-digital",
    destinationUrl: "https://restaurant.com/menu",
    totalScans: 3421,
    lastScanned: "2025-10-08T09:15:00Z",
    createdAt: "2025-08-20T12:30:00Z",
    qrImageUrl: "/placeholder.svg",
  },
  {
    id: "qr-003",
    slug: "event-rsvp",
    destinationUrl: "https://events.com/conference-2025",
    totalScans: 892,
    lastScanned: "2025-10-06T16:45:00Z",
    createdAt: "2025-09-01T08:00:00Z",
    qrImageUrl: "/placeholder.svg",
  },
  {
    id: "qr-004",
    slug: "product-info",
    destinationUrl: "https://shop.com/product/12345",
    totalScans: 2156,
    lastScanned: "2025-10-08T11:20:00Z",
    createdAt: "2025-07-10T14:15:00Z",
    qrImageUrl: "/placeholder.svg",
  },
  {
    id: "qr-005",
    slug: "contact-card",
    destinationUrl: "https://profile.com/johndoe",
    totalScans: 567,
    lastScanned: "2025-10-05T13:10:00Z",
    createdAt: "2025-09-25T11:00:00Z",
    qrImageUrl: "/placeholder.svg",
  },
];

// Mock analytics data (scans over time)
export const mockAnalyticsData: AnalyticsData[] = [
  { date: "2025-10-01", scans: 145 },
  { date: "2025-10-02", scans: 198 },
  { date: "2025-10-03", scans: 234 },
  { date: "2025-10-04", scans: 187 },
  { date: "2025-10-05", scans: 312 },
  { date: "2025-10-06", scans: 289 },
  { date: "2025-10-07", scans: 356 },
  { date: "2025-10-08", scans: 421 },
];

// Mock dashboard stats
export const mockDashboardStats: DashboardStats = {
  totalQRs: 5,
  totalScans: 8283,
  activeQRs: 5,
  topQRSlug: "menu-digital",
};

// TODO: API integration functions
/*
export async function fetchQRCodes(): Promise<QRCode[]> {
  const response = await fetch('/api/qrs');
  return response.json();
}

export async function fetchAnalytics(startDate: string, endDate: string): Promise<AnalyticsData[]> {
  const response = await fetch(`/api/analytics?start=${startDate}&end=${endDate}`);
  return response.json();
}

export async function fetchDashboardStats(): Promise<DashboardStats> {
  const response = await fetch('/api/analytics/stats');
  return response.json();
}

export async function createQRCode(destinationUrl: string, customSlug?: string): Promise<QRCode> {
  const response = await fetch('/api/links', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ destinationUrl, customSlug }),
  });
  return response.json();
}

export async function downloadQRCode(slug: string): Promise<Blob> {
  const response = await fetch(`/api/qrs/${slug}/download`);
  return response.blob();
}
*/
