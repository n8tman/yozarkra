"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface DashboardSidebarProps {
  user: {
    name?: string;
    email?: string;
    image?: string | null;
  };
}

export function DashboardSidebar({ user }: DashboardSidebarProps) {
  const pathname = usePathname();

  const navItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="7" height="7" x="3" y="3" rx="1" />
          <rect width="7" height="7" x="14" y="3" rx="1" />
          <rect width="7" height="7" x="14" y="14" rx="1" />
          <rect width="7" height="7" x="3" y="14" rx="1" />
        </svg>
      ),
    },
    {
      title: "Anatomie 3",
      href: "/courses/anatomy-3",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <path d="M12 2v8" />
          <path d="M8 6l4-4 4 4" />
          <circle cx="12" cy="14" r="2" />
          <path d="M12 16v6" />
        </svg>
      ),
    },
    {
      title: "Physiologie 1",
      href: "/courses/physiology-1",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
        </svg>
      ),
    },
    {
      title: "Microbiologie",
      href: "/courses/microbiology",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M8.5 8.5a4 4 0 0 1 5 5m0-8a7 7 0 0 1 0 10m0-7a3 3 0 0 1 0 4" />
        </svg>
      ),
    },
    {
      title: "Histologie 2",
      href: "/courses/histology-2",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 3h4a2 2 0 0 1 2 2v4" />
          <path d="M9 3H5a2 2 0 0 0-2 2v4" />
          <path d="M15 21h4a2 2 0 0 0 2-2v-4" />
          <path d="M9 21H5a2 2 0 0 1-2-2v-4" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
    {
      title: "Sémiologie 1",
      href: "/courses/semiology-1",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 15h0a5 5 0 0 1 5-5h0a5 5 0 0 1 5 5h0" />
          <path d="M3 9h18" />
          <path d="M3 6h18" />
          <path d="M3 17h18" />
        </svg>
      ),
    },
    {
      title: "Medex Et Secourisme",
      href: "/courses/medex",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
          <line x1="4" y1="22" x2="4" y2="15" />
        </svg>
      ),
      subcategories: [
        {
          title: "Etats de choc",
          href: "/courses/medex/etats-de-choc",
          count: "78 Questions"
        },
        {
          title: "Insuffisance rénale aiguë",
          href: "/courses/medex/insuffisance-renale",
          count: "49 Questions"
        },
        {
          title: "Insuffisance respiratoire aiguë",
          href: "/courses/medex/insuffisance-respiratoire",
          count: "75 Questions"
        },
        {
          title: "Désordres métaboliques",
          href: "/courses/medex/desordres-metaboliques",
          count: "33 Questions"
        },
        {
          title: "Désordre acido-basique",
          href: "/courses/medex/desordre-acido-basique",
          count: "55 Questions"
        },
        {
          title: "Arrêt cardiaque",
          href: "/courses/medex/arret-cardiaque",
          count: "8 Questions"
        }
      ]
    },
    {
      title: "Exams",
      href: "/exams",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
        </svg>
      ),
    },
  ];

  return (
    <div className="py-6 pr-6">
      <nav className="grid gap-1">
        {navItems.map((item, index) => (
          <div key={index}>
            <Link
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium",
                pathname === item.href
                  ? "bg-accent text-primary"
                  : "text-muted-foreground hover:bg-accent hover:text-primary"
              )}
            >
              {item.icon}
              <span>{item.title}</span>
            </Link>
            
            {/* Subcategories for Medex */}
            {item.subcategories && pathname.includes(item.href) && (
              <div className="pl-10 mt-1 space-y-1">
                {item.subcategories.map((subItem, subIndex) => (
                  <Link
                    key={subIndex}
                    href={subItem.href}
                    className={cn(
                      "flex items-center justify-between text-xs px-3 py-1.5 rounded-md",
                      pathname === subItem.href
                        ? "bg-accent text-primary font-medium"
                        : "text-muted-foreground hover:bg-accent hover:text-primary"
                    )}
                  >
                    <span>{subItem.title}</span>
                    <span className="text-xs text-muted-foreground">{subItem.count}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
      
      <div className="mt-12 border-t border-border pt-6">
        <h3 className="text-xs font-medium uppercase text-muted-foreground mb-2 px-4">Account</h3>
        <nav className="grid gap-1">
          <Link 
            href="/profile"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium",
              pathname === "/profile"
                ? "bg-accent text-primary"
                : "text-muted-foreground hover:bg-accent hover:text-primary"
            )}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span>Profile</span>
          </Link>
          <Link 
            href="/settings"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium",
              pathname === "/settings"
                ? "bg-accent text-primary"
                : "text-muted-foreground hover:bg-accent hover:text-primary"
            )}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <span>Settings</span>
          </Link>
        </nav>
      </div>
    </div>
  );
} 