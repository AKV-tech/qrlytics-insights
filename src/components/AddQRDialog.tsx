import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function AddQRDialog() {
  const [open, setOpen] = useState(false);
  const [destinationUrl, setDestinationUrl] = useState("");
  const [customSlug, setCustomSlug] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!destinationUrl) {
      toast.error("Please enter a destination URL");
      return;
    }

    setLoading(true);

    // TODO: Implement actual API call to backend
    // try {
    //   const newQR = await createQRCode(destinationUrl, customSlug || undefined);
    //   toast.success(`QR code created: ${newQR.slug}`);
    //   setOpen(false);
    //   setDestinationUrl("");
    //   setCustomSlug("");
    // } catch (error) {
    //   toast.error("Failed to create QR code");
    // } finally {
    //   setLoading(false);
    // }

    // Mock success for now
    setTimeout(() => {
      toast.success("QR code created successfully!");
      console.log("Creating QR for:", { destinationUrl, customSlug });
      setOpen(false);
      setDestinationUrl("");
      setCustomSlug("");
      setLoading(false);
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Create QR Code
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Create New QR Code</DialogTitle>
            <DialogDescription>
              Enter a destination URL to generate a new QR code. Optionally add a custom slug.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="url">Destination URL *</Label>
              <Input
                id="url"
                placeholder="https://example.com/your-page"
                value={destinationUrl}
                onChange={(e) => setDestinationUrl(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="slug">Custom Slug (optional)</Label>
              <Input
                id="slug"
                placeholder="my-custom-slug"
                value={customSlug}
                onChange={(e) => setCustomSlug(e.target.value)}
              />
              <p className="text-xs text-muted-foreground">
                Leave empty for auto-generated slug
              </p>
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? "Creating..." : "Create QR Code"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
