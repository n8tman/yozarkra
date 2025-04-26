"use client";

import { useState, useEffect } from "react";
import { useMountedTheme } from "@/components/hooks/use-mounted-theme";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Moon, Sun, Laptop, Check } from "lucide-react";
import { useLayout } from "@/components/LayoutContext";

export default function SettingsPage() {
  const { theme, setTheme, mounted } = useMountedTheme();
  const { compactMode, toggleCompactMode } = useLayout();
  const [showConfirmation, setShowConfirmation] = useState<boolean | null>(null);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [browserNotifications, setBrowserNotifications] = useState(false);
  const [progressUpdates, setProgressUpdates] = useState(true);
  const [showRank, setShowRank] = useState(true);
  const [shareProgress, setShareProgress] = useState(false);

  // Handle compact mode toggle with confirmation message
  const handleCompactModeToggle = () => {
    toggleCompactMode();
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 2000);
  };

  // Track changes to compact mode from outside
  useEffect(() => {
    // Only show confirmation if it's explicitly set (not on initial render)
    if (showConfirmation === null) {
      setShowConfirmation(null);
    }
  }, [compactMode]);

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Settings</h1>
      </div>

      {showConfirmation && (
        <div className="fixed bottom-4 right-4 bg-primary text-white p-3 rounded-md shadow-lg flex items-center gap-2 animate-in slide-in-from-right duration-300 z-50">
          <Check className="h-5 w-5" />
          <span>Compact mode {compactMode ? 'enabled' : 'disabled'}</span>
        </div>
      )}

      <div className="space-y-6">
        <Card hover={false}>
          <CardHeader>
            <CardTitle>Appearance</CardTitle>
            <CardDescription>
              Customize how the application looks on your device.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="theme-toggle">Theme</Label>
                <p className="text-sm text-muted-foreground">
                  Choose your preferred theme
                </p>
              </div>
              {mounted ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="flex items-center gap-2">
                      {theme === "light" && <Sun className="h-4 w-4" />}
                      {theme === "dark" && <Moon className="h-4 w-4" />}
                      {theme === "system" && <Laptop className="h-4 w-4" />}
                      <span>{theme === "light" ? "Light" : theme === "dark" ? "Dark" : "System"}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setTheme("light")} className="flex items-center gap-2">
                      <Sun className="h-4 w-4" />
                      Light
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("dark")} className="flex items-center gap-2">
                      <Moon className="h-4 w-4" />
                      Dark
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("system")} className="flex items-center gap-2">
                      <Laptop className="h-4 w-4" />
                      System
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button variant="outline" className="flex items-center gap-2">
                  <span>Loading...</span>
                </Button>
              )}
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="compact-mode">Compact Mode</Label>
                <p className="text-sm text-muted-foreground">
                  Display more content with less spacing
                </p>
              </div>
              <Switch 
                id="compact-mode" 
                checked={compactMode}
                onCheckedChange={handleCompactModeToggle}
              />
            </div>
          </CardContent>
        </Card>

        <Card hover={false}>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>
              Configure how you want to receive notifications.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="email-notifications">Email Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Receive email notifications about new exams and courses
                </p>
              </div>
              <Switch 
                id="email-notifications" 
                checked={emailNotifications}
                onCheckedChange={setEmailNotifications}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="browser-notifications">Browser Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Show notifications in your browser
                </p>
              </div>
              <Switch 
                id="browser-notifications" 
                checked={browserNotifications}
                onCheckedChange={setBrowserNotifications}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="progress-updates">Weekly Progress Updates</Label>
                <p className="text-sm text-muted-foreground">
                  Get weekly summaries of your learning progress
                </p>
              </div>
              <Switch 
                id="progress-updates" 
                checked={progressUpdates}
                onCheckedChange={setProgressUpdates}
              />
            </div>
          </CardContent>
        </Card>

        <Card hover={false}>
          <CardHeader>
            <CardTitle>Privacy</CardTitle>
            <CardDescription>
              Manage your data and privacy preferences.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="show-rank">Show My Rank to Others</Label>
                <p className="text-sm text-muted-foreground">
                  Allow other users to see your ranking position
                </p>
              </div>
              <Switch 
                id="show-rank" 
                checked={showRank}
                onCheckedChange={setShowRank}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="share-progress">Share Learning Progress</Label>
                <p className="text-sm text-muted-foreground">
                  Share your learning progress with friends
                </p>
              </div>
              <Switch 
                id="share-progress" 
                checked={shareProgress}
                onCheckedChange={setShareProgress}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">Download My Data</Button>
          </CardFooter>
        </Card>

        <Card className="border-destructive" hover={false}>
          <CardHeader>
            <CardTitle className="text-destructive">Danger Zone</CardTitle>
            <CardDescription>
              Irreversible actions related to your account.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col space-y-2">
              <h3 className="font-medium">Reset All Progress</h3>
              <p className="text-sm text-muted-foreground">
                This will reset all your course progress, exam results, and statistics.
              </p>
              <Button variant="destructive" className="mt-2 w-full sm:w-auto">Reset Progress</Button>
            </div>

            <div className="flex flex-col space-y-2">
              <h3 className="font-medium">Delete Account</h3>
              <p className="text-sm text-muted-foreground">
                Permanently delete your account and all associated data.
              </p>
              <Button variant="destructive" className="mt-2 w-full sm:w-auto">Delete Account</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 