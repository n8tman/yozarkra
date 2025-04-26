import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MedPrep - Plateforme d'apprentissage pour étudiants en médecine",
  description: "MedPrep est une plateforme éducative numérique innovante qui facilite la préparation aux examens, organise les tâches scolaires et renforce l'interaction pour les étudiants en médecine.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Using a path detection approach here would lead to hydration issues
  // Instead, each route group has its own ThemeProvider with appropriate settings
  
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
