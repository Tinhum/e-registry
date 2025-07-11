import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Metadata } from "next";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Settings",
  description: "here you can customize your web page",
};
export default function Page() {
  return (
    <div className="p-4">
      {/* breadcrumb */}
      <Breadcrumb>
        <BreadcrumbList>
          {/* home item  */}
          <BreadcrumbItem>
            <BreadcrumbLink></BreadcrumbLink>
            <Link href={"/"}>Home</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          {/* staff item */}
          <BreadcrumbItem>
            <BreadcrumbLink></BreadcrumbLink>
            <Link href={"/settings"}>settings</Link>
          </BreadcrumbItem>
        
         
        </BreadcrumbList>
      </Breadcrumb>
      {/* page content */}
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-blue-800 mb-8">Settings</h1>

      {/* Profile Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" placeholder="Jane Okello" />
          </div>
          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="jane.okello@lira.go.ug" />
          </div>
          <Button className="mt-4">Save Changes</Button>
        </CardContent>
      </Card>

      {/* Password Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Change Password</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="current-password">Current Password</Label>
            <Input id="current-password" type="password" />
          </div>
          <div>
            <Label htmlFor="new-password">New Password</Label>
            <Input id="new-password" type="password" />
          </div>
          <Button className="mt-4">Update Password</Button>
        </CardContent>
      </Card>

      {/* Notification Preferences */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Notification Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <Label>Email Notifications</Label>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label>SMS Alerts</Label>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <Label>System Reminders</Label>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      {/* Danger Zone */}
      <Card className="mb-8 border-red-500">
        <CardHeader>
          <CardTitle className="text-red-600">Danger Zone</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-red-500">
            Deleting your account will remove all associated records. This action cannot be undone.
          </p>
          <Button variant="destructive">Delete Account</Button>
        </CardContent>
      </Card>
    </div>
    </div>
  );
}
