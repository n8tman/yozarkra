"use client";

import { Menu, Bell, Search } from "lucide-react";
import { useAdmin } from "./AdminContext";
import { ModeToggle } from "@/components/ui/mode-toggle";

export default function AdminHeader() {
  // Get state from admin context
  const { user, toggleSidebar } = useAdmin();
  
  return (
    <header className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 h-16 flex items-center justify-between px-6">
      {/* Mobile menu button */}
      <button
        className="md:hidden text-gray-500 dark:text-gray-400 focus:outline-none"
        onClick={toggleSidebar}
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Search */}
      <div className="hidden md:flex items-center flex-1 max-w-md">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-white dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm text-gray-900 dark:text-white"
            placeholder="Search..."
          />
        </div>
      </div>

      {/* Right side buttons */}
      <div className="flex items-center space-x-4">
        <ModeToggle />
        <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-0 right-0 -mt-1 -mr-1 px-1.5 py-0.5 bg-red-500 rounded-full text-xs text-white">
            3
          </span>
        </button>

        <div className="flex items-center">
          <div className="ml-3 relative">
            <div>
              <button className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white">
                  {user.name ? user.name.charAt(0) : 'A'}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 