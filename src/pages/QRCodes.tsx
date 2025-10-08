import QRCodeTable from "@/components/QRCodeTable";
import AddQRDialog from "@/components/AddQRDialog";
import { mockQRCodes } from "@/lib/mockData";

export default function QRCodes() {
  // TODO: Replace with actual API call
  // const qrCodes = await fetchQRCodes();
  const qrCodes = mockQRCodes;

  return (
    <div className="flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-border bg-card px-8 py-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">QR Codes</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Manage and monitor all your QR codes
          </p>
        </div>
        <AddQRDialog />
      </header>

      {/* Main content */}
      <div className="flex-1 p-8">
        <QRCodeTable qrCodes={qrCodes} />
      </div>
    </div>
  );
}
