import { Metadata } from "next";
import { Suspense } from "react";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Admin Dashboard | Yozarkra",
  description: "Admin dashboard for Yozarkra platform",
};

// Use dynamic imports for stats cards to reduce initial load
const StatsCards = dynamic(() => import("@/components/admin/StatsCards"), { 
  ssr: true,
  loading: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="h-32 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-lg" />
      ))}
    </div>
  )
});

// Recent Activity component
function RecentActivity() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
      <div className="space-y-4">
        {/* Activity items would be dynamically generated in a real implementation */}
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="flex items-start pb-4 border-b last:border-0">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-sm">U{i}</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium">User {i} enrolled in a new course</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {i} hour{i !== 1 ? "s" : ""} ago
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// System Status component
function SystemStatus() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">System Status</h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-sm">Server Uptime</span>
          <span className="text-sm font-medium text-green-500">99.9%</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm">Database Health</span>
          <span className="text-sm font-medium text-green-500">Good</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm">API Status</span>
          <span className="text-sm font-medium text-green-500">Operational</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm">Storage Usage</span>
          <span className="text-sm font-medium">68%</span>
        </div>
        <div className="mt-4 pt-4 border-t">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">Last Backup</span>
            <span className="text-sm">Today, 04:30 AM</span>
          </div>
          <button className="w-full mt-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-sm rounded-md hover:bg-gray-200 dark:hover:bg-gray-600">
            Run Manual Backup
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <div className="flex items-center space-x-2">
          <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90">
            Export Data
          </button>
        </div>
      </div>

      {/* Stats Cards with Suspense for better loading */}
      <Suspense fallback={
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-32 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-lg" />
          ))}
        </div>
      }>
        <StatsCards />
      </Suspense>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity Section */}
        <Suspense fallback={<div className="h-96 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-lg" />}>
          <RecentActivity />
        </Suspense>

        {/* System Status Section */}
        <Suspense fallback={<div className="h-96 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-lg" />}>
          <SystemStatus />
        </Suspense>
      </div>
    </div>
  );
} 