"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="sm"
        className="px-2 text-base hover:bg-transparent focus:ring-0"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle menu</span>
      </Button>
      
      {isOpen && (
        <div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 animate-in fade-in slide-in-from-bottom-80 md:hidden">
          <div className="relative z-20 grid gap-6 rounded-md bg-white p-4 shadow-md dark:bg-card">
            <Link
              href="/dashboard"
              className="flex items-center space-x-2 text-sm font-medium text-muted-foreground hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              href="/exams"
              className="flex items-center space-x-2 text-sm font-medium text-muted-foreground hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Exams
            </Link>
            <Link
              href="/learning"
              className="flex items-center space-x-2 text-sm font-medium text-muted-foreground hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Learning
            </Link>
            <Link
              href="/tasks"
              className="flex items-center space-x-2 text-sm font-medium text-muted-foreground hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Tasks
            </Link>
            <Link
              href="/stats"
              className="flex items-center space-x-2 text-sm font-medium text-muted-foreground hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Statistics
            </Link>
          </div>
        </div>
      )}
    </div>
  );
} 