import { DashboardHeader } from "@/components/dashboard/header";
import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { LayoutProvider } from "@/components/LayoutContext";
import { CompactModeManager } from "@/components/CompactModeManager";
import "@/styles/compact-mode.css";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Demo user object
  const demoUser = {
    name: "Demo User",
    email: "demo@medprep.com",
    image: null
  };

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      storageKey="medprep-theme"
    >
      <LayoutProvider>
        <CompactModeManager />
        <div className="flex min-h-screen flex-col bg-background">
          <DashboardHeader user={demoUser} />
          <div className="container flex-1 items-start md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
            <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
              <DashboardSidebar user={demoUser} />
            </aside>
            <main className="flex w-full flex-col overflow-hidden">
              {children}
            </main>
          </div>
        </div>
      </LayoutProvider>
    </ThemeProvider>
  );
} 