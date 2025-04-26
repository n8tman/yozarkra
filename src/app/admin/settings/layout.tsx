import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Settings | Yozarkra",
  description: "Configure your admin panel settings",
};

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  return children;
} 