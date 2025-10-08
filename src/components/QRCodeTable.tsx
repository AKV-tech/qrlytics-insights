import { useState } from "react";
import { Download, ExternalLink, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QRCode } from "@/lib/mockData";
import { toast } from "sonner";

interface QRCodeTableProps {
  qrCodes: QRCode[];
}

export default function QRCodeTable({ qrCodes }: QRCodeTableProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredQRCodes = qrCodes.filter(
    (qr) =>
      qr.slug.toLowerCase().includes(searchQuery.toLowerCase()) ||
      qr.destinationUrl.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDownload = (qr: QRCode) => {
    // TODO: Implement actual download from backend API
    // const blob = await downloadQRCode(qr.slug);
    // const url = window.URL.createObjectURL(blob);
    // const a = document.createElement('a');
    // a.href = url;
    // a.download = `qr-${qr.slug}.png`;
    // a.click();
    
    toast.success(`Downloading QR code for ${qr.slug}`);
    console.log("Download QR:", qr.slug);
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "Never";
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <Card>
      <CardHeader className="space-y-4">
        <CardTitle>All QR Codes</CardTitle>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search by slug or URL..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Slug</TableHead>
                <TableHead>Destination URL</TableHead>
                <TableHead className="text-right">Total Scans</TableHead>
                <TableHead>Last Scanned</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredQRCodes.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center text-muted-foreground">
                    No QR codes found
                  </TableCell>
                </TableRow>
              ) : (
                filteredQRCodes.map((qr) => (
                  <TableRow key={qr.id}>
                    <TableCell className="font-medium">{qr.slug}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="max-w-md truncate text-sm text-muted-foreground">
                          {qr.destinationUrl}
                        </span>
                        <a
                          href={qr.destinationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                    </TableCell>
                    <TableCell className="text-right font-semibold">
                      {qr.totalScans.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {formatDate(qr.lastScanned)}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDownload(qr)}
                        className="gap-2"
                      >
                        <Download className="h-4 w-4" />
                        Download
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
