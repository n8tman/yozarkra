"use client";

import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { Role, Permission, getUserPermissions } from "@/lib/permissions";

// Types for the context
interface AdminContextType {
  // User information
  user: {
    id?: string;
    name?: string;
    email?: string;
    avatar?: string;
    roles: Role[];
  };
  
  // Permissions
  permissions: Permission[];
  
  // Utility functions
  hasPermission: (permission: Permission) => boolean;
  hasAllPermissions: (permissions: Permission[]) => boolean;
  hasAnyPermission: (permissions: Permission[]) => boolean;
  
  // UI state
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

// Default values
const defaultContext: AdminContextType = {
  user: {
    roles: [],
  },
  permissions: [],
  hasPermission: () => false,
  hasAllPermissions: () => false,
  hasAnyPermission: () => false,
  isSidebarOpen: false,
  toggleSidebar: () => {},
};

// Create the context
const AdminContext = createContext<AdminContextType>(defaultContext);

// Provider component
export function AdminProvider({ children }: { children: ReactNode }) {
  // Sidebar state
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // Mock user data - in a real app this would come from your auth system
  const [user, setUser] = useState({
    id: "1",
    name: "Admin User",
    email: "admin@example.com",
    avatar: "/admin.jpg",
    roles: ["admin"] as Role[],
  });
  
  // Calculate permissions based on roles
  const [permissions, setPermissions] = useState<Permission[]>([]);
  
  useEffect(() => {
    // Get permissions based on user roles
    const userPermissions = getUserPermissions(user.roles);
    setPermissions(userPermissions);
  }, [user.roles]);
  
  // Permission check functions
  const hasPermission = (permission: Permission) => {
    // Admin has all permissions
    if (user.roles.includes("admin") || permissions.includes("*")) {
      return true;
    }
    
    return permissions.includes(permission);
  };
  
  const hasAllPermissions = (perms: Permission[]) => {
    // Admin has all permissions
    if (user.roles.includes("admin") || permissions.includes("*")) {
      return true;
    }
    
    return perms.every(p => permissions.includes(p));
  };
  
  const hasAnyPermission = (perms: Permission[]) => {
    // Admin has all permissions
    if (user.roles.includes("admin") || permissions.includes("*")) {
      return true;
    }
    
    return perms.some(p => permissions.includes(p));
  };
  
  // Toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };
  
  const value = {
    user,
    permissions,
    hasPermission,
    hasAllPermissions,
    hasAnyPermission,
    isSidebarOpen,
    toggleSidebar,
  };
  
  return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>;
}

// Custom hook to use the admin context
export function useAdmin() {
  const context = useContext(AdminContext);
  
  if (context === undefined) {
    throw new Error("useAdmin must be used within an AdminProvider");
  }
  
  return context;
} 