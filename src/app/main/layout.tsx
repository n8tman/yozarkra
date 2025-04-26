"use client";

import { ThemeProvider } from "@/components/theme-provider";
import "./landing.css";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      forcedTheme="light"
      disableTransitionOnChange
      storageKey="medprep-theme-landing"
      enableSystem={false}
      enableColorScheme
    >
      <div className="flex min-h-screen flex-col bg-[#121826] text-white dark">
        <style jsx global>{`
          :root {
            color-scheme: dark;
          }
          body {
            background-color: #121826 !important;
            color: white !important;
          }
        `}</style>
        {children}
      </div>
    </ThemeProvider>
  );
} 