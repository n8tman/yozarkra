import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  textClassName?: string;
  href?: string;
}

export function Logo({ 
  className, 
  showText = true, 
  textClassName,
  href = "/"
}: LogoProps) {
  return (
    <Link href={href} className={cn("font-bold flex items-center gap-2", className)}>
      <span className="bg-gradient-to-br from-teal-400 via-emerald-500 to-cyan-600 text-white p-1.5 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300 hover:shadow-lg flex items-center justify-center relative overflow-hidden group">
        <span className="relative z-10">M</span>
        <span className="absolute inset-0 bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
      </span>
      {showText && (
        <span className={cn("text-primary dark:text-white", textClassName)}>
          MedPrep
        </span>
      )}
    </Link>
  );
} 