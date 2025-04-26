import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Authentification - MedPrep",
  description: "Connectez-vous ou inscrivez-vous à MedPrep, la plateforme d'apprentissage pour étudiants en médecine.",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      storageKey="medprep-theme-auth"
    >
      <div className="min-h-screen bg-white">
        {children}
      </div>
    </ThemeProvider>
  );
} 