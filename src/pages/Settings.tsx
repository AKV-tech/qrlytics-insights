import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Settings() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-card px-8 py-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Settings</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Manage your account and API configuration
          </p>
        </div>
      </header>

      {/* Main content */}
      <div className="flex-1 space-y-6 p-8">
        {/* Profile Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
            <CardDescription>
              Update your personal information and preferences
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" defaultValue="John Doe" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                defaultValue="john@example.com"
              />
            </div>
            <Button>Save Changes</Button>
          </CardContent>
        </Card>

        <Separator />

        {/* API Configuration */}
        <Card>
          <CardHeader>
            <CardTitle>API Configuration</CardTitle>
            <CardDescription>
              Configure your backend API connection settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="api-url">API Base URL</Label>
              <Input
                id="api-url"
                placeholder="https://api.qrlytics.com"
                defaultValue="https://api.qrlytics.com"
              />
              <p className="text-xs text-muted-foreground">
                Base URL for your QRlytics backend API
              </p>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="api-key">API Key</Label>
              <Input
                id="api-key"
                type="password"
                placeholder="••••••••••••••••"
                defaultValue="sk_test_1234567890"
              />
              <p className="text-xs text-muted-foreground">
                Your secret API key for authentication
              </p>
            </div>
            <Button>Update API Settings</Button>
          </CardContent>
        </Card>

        <Separator />

        {/* QR Code Defaults */}
        <Card>
          <CardHeader>
            <CardTitle>QR Code Defaults</CardTitle>
            <CardDescription>
              Set default options for new QR code generation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="default-size">Default QR Size (px)</Label>
              <Input id="default-size" type="number" defaultValue="512" min="128" max="2048" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="format">Image Format</Label>
              <select
                id="format"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="png">PNG</option>
                <option value="svg">SVG</option>
                <option value="jpg">JPG</option>
              </select>
            </div>
            <Button>Save Defaults</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
