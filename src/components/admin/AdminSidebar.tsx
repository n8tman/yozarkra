"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Shield,
  Settings,
  FileText,
  BarChart4,
  Bell,
  BookOpen,
  Receipt,
  LogOut,
} from "lucide-react";
import { useAdmin } from "./AdminContext";
import { Permission } from "@/lib/permissions";

interface SidebarItem {
  title: string;
  icon: React.ElementType;
  href: string;
  permission?: Permission;
}

const sidebarItems: SidebarItem[] = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/admin/dashboard",
  },
  {
    title: "Users",
    icon: Users,
    href: "/admin/users",
    permission: "users.view",
  },
  {
    title: "Roles & Permissions",
    icon: Shield,
    href: "/admin/roles",
    permission: "roles.view",
  },
  {
    title: "Courses",
    icon: BookOpen,
    href: "/admin/courses",
    permission: "courses.view",
  },
  {
    title: "Reports",
    icon: BarChart4,
    href: "/admin/reports",
    permission: "reports.view",
  },
  {
    title: "Notifications",
    icon: Bell,
    href: "/admin/notifications",
  },
  {
    title: "Logs",
    icon: FileText,
    href: "/admin/logs",
    permission: "logs.view",
  },
  {
    title: "Billing",
    icon: Receipt,
    href: "/admin/billing",
    permission: "billing.view",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/admin/settings",
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const { user, hasPermission, isSidebarOpen } = useAdmin();

  // Check if the current path matches or starts with the link's href
  const isActiveLink = (href: string) => {
    if (href === "/admin/dashboard") {
      return pathname === "/admin/dashboard";
    }
    return pathname.includes(href);
  };

  // Filter sidebar items based on user permissions
  const filteredItems = sidebarItems.filter(item => {
    // If no permission is required, show the item
    if (!item.permission) {
      return true;
    }
    
    // Otherwise, check if the user has the required permission
    return hasPermission(item.permission);
  });

  return (
    <div className={`${isSidebarOpen ? 'block' : 'hidden md:block'} w-64 bg-white dark:bg-gray-800 shadow-md h-screen overflow-y-auto`}>
      <div className="flex items-center justify-center h-16 border-b dark:border-gray-700">
        <h1 className="text-2xl font-bold text-primary">Admin Panel</h1>
      </div>
      
      {/* User profile section */}
      <div className="p-4 border-b dark:border-gray-700">
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white">
            {user.name ? user.name.charAt(0) : 'A'}
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900 dark:text-white">{user.name}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{user.email}</p>
          </div>
        </div>
      </div>
      
      <div className="py-4">
        <nav className="mt-2 px-4">
          <div className="space-y-1">
            {filteredItems.map((item) => {
              const active = isActiveLink(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                    active
                      ? "bg-primary text-white"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  <item.icon
                    className={`mr-3 h-5 w-5 ${
                      active
                        ? "text-white"
                        : "text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300"
                    }`}
                  />
                  {item.title}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
      <div className="px-4 py-4 mt-auto border-t dark:border-gray-700 absolute bottom-0 w-full">
        <button className="flex items-center px-4 py-2 text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-gray-700 rounded-md w-full">
          <LogOut className="mr-3 h-5 w-5" />
          Log Out
        </button>
      </div>
    </div>
  );
} 