"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/dashboard/mobile-nav";
import { UserNav } from "@/components/dashboard/user-nav";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Logo } from "@/components/ui/logo";

interface DashboardHeaderProps {
  user: {
    name?: string;
    email?: string;
    image?: string | null;
  };
}

export function DashboardHeader({ user }: DashboardHeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40 dark:bg-[var(--card)] dark:border-[var(--border)]">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-10">
          <Logo className="text-xl" />
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/dashboard" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Dashboard
            </Link>
            <Link href="/exams" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Exams
            </Link>
            <Link href="/learning" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Learning
            </Link>
            <Link href="/tasks" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Tasks
            </Link>
            <Link href="/stats" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Statistics
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <Button variant="outline" size="sm" asChild>
            <Link href="/exams">
              Practice Now
            </Link>
          </Button>
          <UserNav user={user} />
          <MobileNav />
        </div>
      </div>
    </header>
  );
} 