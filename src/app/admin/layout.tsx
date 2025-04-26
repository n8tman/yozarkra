import { ReactNode } from "react";
import { redirect } from "next/navigation";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";
import { AdminProvider } from "@/components/admin/AdminContext";
import { ThemeProvider } from "@/components/theme-provider";

// This would normally check if the user is authenticated and has admin permissions
// For now, this is just a placeholder
const checkAdminAuth = () => {
  // In a real implementation, you would:
  // 1. Check if the user is authenticated
  // 2. Check if the user has admin privileges
  // 3. Redirect if they don't
  
  // Mock implementation for now - always returns true
  return true;
  
  // Future implementation will look something like:
  // if (!session || !session.user?.roles.includes("admin")) {
  //   return false;
  // }
  // return true;
};

export default function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const isAuthorized = checkAdminAuth();
  
  if (!isAuthorized) {
    // Redirect to login page if not authorized
    redirect("/login");
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      storageKey="medprep-theme-admin"
    >
      <AdminProvider>
        <div className="flex h-screen">
          <AdminSidebar />
          <div className="flex flex-col flex-1 overflow-hidden">
            <AdminHeader />
            <main className="flex-1 overflow-y-auto p-6 bg-gray-50 dark:bg-gray-900">
              {children}
            </main>
          </div>
        </div>
      </AdminProvider>
    </ThemeProvider>
  );
} 