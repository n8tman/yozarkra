"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface UserNavProps {
  user: {
    name?: string;
    email?: string;
    image?: string | null;
  };
}

export function UserNav({ user }: UserNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    // Simple redirect to login page
    window.location.href = "/login";
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant="ghost"
        size="sm"
        className="relative h-8 w-8 rounded-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
          <span className="text-sm font-medium">
            {user.name ? user.name[0] : "U"}
          </span>
        </div>
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-md border bg-popover text-popover-foreground shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="p-2">
            <div className="px-2 py-1.5">
              <p className="text-sm font-medium">{user.name}</p>
              <p className="text-xs text-muted-foreground">{user.email}</p>
            </div>
            <div className="my-1 h-px bg-muted" />
            <Link
              href="/profile"
              className={cn(
                "block px-2 py-1.5 text-sm",
                "hover:bg-accent hover:text-accent-foreground rounded-md"
              )}
              onClick={() => setIsOpen(false)}
            >
              Profile
            </Link>
            <Link
              href="/settings"
              className={cn(
                "block px-2 py-1.5 text-sm",
                "hover:bg-accent hover:text-accent-foreground rounded-md"
              )}
              onClick={() => setIsOpen(false)}
            >
              Settings
            </Link>
            <div className="my-1 h-px bg-muted" />
            <button
              onClick={handleLogout}
              className={cn(
                "w-full text-left px-2 py-1.5 text-sm text-red-600",
                "hover:bg-accent hover:text-red-700 rounded-md"
              )}
            >
              Log out
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 