"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Globe, Lock, Bell, Brush, UserCog, Mail, Shield } from "lucide-react";
import { useState, useEffect } from "react";

export default function AdminSettingsPage() {
  const [compactMode, setCompactMode] = useState(false);
  
  // Apply compact mode to the entire application
  useEffect(() => {
    document.body.classList.toggle("compact-mode", compactMode);
    
    // Save preference to localStorage
    if (compactMode) {
      localStorage.setItem("adminCompactMode", "true");
    } else {
      localStorage.setItem("adminCompactMode", "false");
    }
    
    // Cleanup when component unmounts
    return () => {
      document.body.classList.remove("compact-mode");
    };
  }, [compactMode]);
  
  // Load saved preference on initial render
  useEffect(() => {
    const savedMode = localStorage.getItem("adminCompactMode");
    if (savedMode === "true") {
      setCompactMode(true);
    }
  }, []);
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Settings</h1>
        <Button>Save All Changes</Button>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="general" className="flex items-center gap-2">
            <UserCog className="h-4 w-4" />
            <span className="hidden sm:inline">General</span>
          </TabsTrigger>
          <TabsTrigger value="appearance" className="flex items-center gap-2">
            <Brush className="h-4 w-4" />
            <span className="hidden sm:inline">Appearance</span>
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            <span className="hidden sm:inline">Notifications</span>
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            <span className="hidden sm:inline">Security</span>
          </TabsTrigger>
          <TabsTrigger value="integrations" className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            <span className="hidden sm:inline">Integrations</span>
          </TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general" className="space-y-4 mt-4 tabs-content">
          <Card className="card">
            <CardHeader className="card-header">
              <CardTitle>Admin Information</CardTitle>
              <CardDescription>
                Update your admin profile information
              </CardDescription>
            </CardHeader>
            <CardContent className="card-content space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="adminName">Admin Name</Label>
                  <Input id="adminName" placeholder="John Doe" defaultValue="Admin User" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="adminEmail">Admin Email</Label>
                  <Input id="adminEmail" placeholder="admin@example.com" defaultValue="admin@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="adminTitle">Job Title</Label>
                <Input id="adminTitle" placeholder="System Administrator" defaultValue="System Administrator" />
              </div>
            </CardContent>
            <CardFooter className="card-footer">
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>

          <Card className="card">
            <CardHeader className="card-header">
              <CardTitle>Platform Settings</CardTitle>
              <CardDescription>
                Configure general platform settings
              </CardDescription>
            </CardHeader>
            <CardContent className="card-content space-y-4">
              <div className="space-y-2">
                <Label htmlFor="siteName">Site Name</Label>
                <Input id="siteName" placeholder="Yozarkra" defaultValue="Yozarkra" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="siteUrl">Site URL</Label>
                <Input id="siteUrl" placeholder="https://example.com" defaultValue="https://yozarkra.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="timezone">Default Timezone</Label>
                <Select defaultValue="utc">
                  <SelectTrigger>
                    <SelectValue placeholder="Select timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="utc">UTC</SelectItem>
                    <SelectItem value="est">Eastern Time (EST)</SelectItem>
                    <SelectItem value="cst">Central Time (CST)</SelectItem>
                    <SelectItem value="mst">Mountain Time (MST)</SelectItem>
                    <SelectItem value="pst">Pacific Time (PST)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter className="card-footer">
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Appearance Settings */}
        <TabsContent value="appearance" className="space-y-4 mt-4 tabs-content">
          <Card className="card">
            <CardHeader className="card-header">
              <CardTitle>Theme Settings</CardTitle>
              <CardDescription>
                Customize the appearance of your admin panel
              </CardDescription>
            </CardHeader>
            <CardContent className="card-content space-y-4">
              <div className="space-y-2">
                <Label htmlFor="primaryColor">Primary Color</Label>
                <div className="grid grid-cols-6 gap-2">
                  <div className="w-10 h-10 rounded-full bg-blue-600 cursor-pointer ring-2 ring-offset-2 ring-blue-600"></div>
                  <div className="w-10 h-10 rounded-full bg-purple-600 cursor-pointer"></div>
                  <div className="w-10 h-10 rounded-full bg-green-600 cursor-pointer"></div>
                  <div className="w-10 h-10 rounded-full bg-red-600 cursor-pointer"></div>
                  <div className="w-10 h-10 rounded-full bg-amber-600 cursor-pointer"></div>
                  <div className="w-10 h-10 rounded-full bg-cyan-600 cursor-pointer"></div>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="fontSize">Font Size</Label>
                <Select defaultValue="medium">
                  <SelectTrigger>
                    <SelectValue placeholder="Select font size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Small</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="large">Large</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="animations">Interface Animations</Label>
                  <Switch id="animations" defaultChecked={true} />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Enable animations in the user interface
                </p>
              </div>
            </CardContent>
            <CardFooter className="card-footer">
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>

          <Card className="card">
            <CardHeader className="card-header">
              <CardTitle>Layout Settings</CardTitle>
              <CardDescription>
                Configure the layout of your admin panel
              </CardDescription>
            </CardHeader>
            <CardContent className="card-content space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="compactSidebar">Compact Sidebar</Label>
                  <Switch id="compactSidebar" />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Use a more compact sidebar layout
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="compactMode">Compact Mode</Label>
                  <Switch 
                    id="compactMode" 
                    checked={compactMode}
                    onCheckedChange={setCompactMode}
                  />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Reduce spacing throughout the interface for a denser layout
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="stickyHeader">Sticky Header</Label>
                  <Switch id="stickyHeader" defaultChecked={true} />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Keep the header fixed at the top while scrolling
                </p>
              </div>
            </CardContent>
            <CardFooter className="card-footer">
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Notifications Settings */}
        <TabsContent value="notifications" className="space-y-4 mt-4 tabs-content">
          <Card className="card">
            <CardHeader className="card-header">
              <CardTitle>Email Notifications</CardTitle>
              <CardDescription>
                Configure when to receive email notifications
              </CardDescription>
            </CardHeader>
            <CardContent className="card-content space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="newUser" defaultChecked />
                <Label htmlFor="newUser">New user registrations</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="newOrder" defaultChecked />
                <Label htmlFor="newOrder">New orders/purchases</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="courseCompletion" />
                <Label htmlFor="courseCompletion">Course completions</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="supportTicket" defaultChecked />
                <Label htmlFor="supportTicket">New support tickets</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="systemUpdates" defaultChecked />
                <Label htmlFor="systemUpdates">System updates and maintenance</Label>
              </div>
            </CardContent>
            <CardFooter className="card-footer">
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>

          <Card className="card">
            <CardHeader className="card-header">
              <CardTitle>In-App Notifications</CardTitle>
              <CardDescription>
                Configure which notifications appear in the admin panel
              </CardDescription>
            </CardHeader>
            <CardContent className="card-content space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="userActivity" defaultChecked />
                <Label htmlFor="userActivity">User activity</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="systemAlerts" defaultChecked />
                <Label htmlFor="systemAlerts">System alerts</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="taskReminders" defaultChecked />
                <Label htmlFor="taskReminders">Task reminders</Label>
              </div>
              <div className="space-y-2 mt-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="notificationSound">Notification Sound</Label>
                  <Switch id="notificationSound" defaultChecked={true} />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Play a sound when new notifications arrive
                </p>
              </div>
            </CardContent>
            <CardFooter className="card-footer">
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Security Settings */}
        <TabsContent value="security" className="space-y-4 mt-4 tabs-content">
          <Card className="card">
            <CardHeader className="card-header">
              <CardTitle>Password Settings</CardTitle>
              <CardDescription>
                Update your password and security settings
              </CardDescription>
            </CardHeader>
            <CardContent className="card-content space-y-4">
              <div className="space-y-2">
                <Label htmlFor="currentPassword">Current Password</Label>
                <Input id="currentPassword" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="newPassword">New Password</Label>
                <Input id="newPassword" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <Input id="confirmPassword" type="password" />
              </div>
              <div className="flex items-center space-x-2 mt-4">
                <Checkbox id="twoFactor" />
                <div>
                  <Label htmlFor="twoFactor">Enable Two-Factor Authentication</Label>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Add an extra layer of security to your account
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="card-footer">
              <Button>Update Password</Button>
            </CardFooter>
          </Card>

          <Card className="card">
            <CardHeader className="card-header">
              <CardTitle>Login History</CardTitle>
              <CardDescription>
                Recent login activity for your account
              </CardDescription>
            </CardHeader>
            <CardContent className="card-content">
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b">
                  <div>
                    <p className="font-medium">Chrome on Windows</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">IP: 192.168.1.1</p>
                  </div>
                  <p className="text-sm">Today, 9:45 AM</p>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <div>
                    <p className="font-medium">Safari on MacOS</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">IP: 192.168.1.5</p>
                  </div>
                  <p className="text-sm">Yesterday, 3:30 PM</p>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <div>
                    <p className="font-medium">Firefox on Windows</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">IP: 192.168.1.8</p>
                  </div>
                  <p className="text-sm">Sep 20, 2023, 11:20 AM</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="card-footer">
              <Button variant="outline">View Full History</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Integrations Settings */}
        <TabsContent value="integrations" className="space-y-4 mt-4 tabs-content">
          <Card className="card">
            <CardHeader className="card-header">
              <CardTitle>API Keys</CardTitle>
              <CardDescription>
                Manage API keys for external integrations
              </CardDescription>
            </CardHeader>
            <CardContent className="card-content space-y-4">
              <div className="space-y-2">
                <Label htmlFor="apiKey">API Key</Label>
                <div className="flex space-x-2">
                  <Input id="apiKey" value="sk_test_51KjH7gXnHtrEfgH8P5rTgH" readOnly className="font-mono" />
                  <Button variant="outline">Copy</Button>
                  <Button variant="outline">Regenerate</Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="webhookUrl">Webhook URL</Label>
                <Input id="webhookUrl" placeholder="https://your-site.com/api/webhook" />
              </div>
            </CardContent>
            <CardFooter className="card-footer">
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>

          <Card className="card">
            <CardHeader className="card-header">
              <CardTitle>Connected Services</CardTitle>
              <CardDescription>
                Manage connections to external services
              </CardDescription>
            </CardHeader>
            <CardContent className="card-content space-y-4">
              <div className="flex items-center justify-between py-2 border-b">
                <div className="flex items-center space-x-4">
                  <Mail className="h-8 w-8 text-blue-500" />
                  <div>
                    <p className="font-medium">Email Service</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Connected to SendGrid</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">Configure</Button>
              </div>
              <div className="flex items-center justify-between py-2 border-b">
                <div className="flex items-center space-x-4">
                  <Lock className="h-8 w-8 text-green-500" />
                  <div>
                    <p className="font-medium">Payment Gateway</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Connected to Stripe</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">Configure</Button>
              </div>
              <div className="flex items-center justify-between py-2 border-b">
                <div className="flex items-center space-x-4">
                  <Globe className="h-8 w-8 text-purple-500" />
                  <div>
                    <p className="font-medium">Social Media</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Not connected</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">Connect</Button>
              </div>
            </CardContent>
            <CardFooter className="card-footer">
              <Button variant="outline">Connect New Service</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
} 