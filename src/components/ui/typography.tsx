'use client';

import React from 'react';
import { cn } from "@/lib/design-system";
import { typography } from "@/lib/design-system";
import { motion } from "framer-motion";

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  gradient?: boolean;
  animate?: boolean;
}

export function H1({ children, className, gradient, animate }: TypographyProps) {
  const Component = animate ? motion.h1 : "h1";
  return (
    <Component
      className={cn(
        typography.h1,
        gradient && "bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-700",
        className
      )}
      {...(animate && {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
      })}
    >
      {children}
    </Component>
  );
}

export function H2({ children, className, gradient, animate }: TypographyProps) {
  const Component = animate ? motion.h2 : "h2";
  return (
    <Component
      className={cn(
        typography.h2,
        gradient && "bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-700",
        className
      )}
      {...(animate && {
        initial: { opacity: 0, y: 15 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.4 }
      })}
    >
      {children}
    </Component>
  );
}

export function H3({ children, className, gradient, animate }: TypographyProps) {
  const Component = animate ? motion.h3 : "h3";
  return (
    <Component
      className={cn(
        typography.h3,
        gradient && "bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-700",
        className
      )}
      {...(animate && {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.3 }
      })}
    >
      {children}
    </Component>
  );
}

export function P({ children, className, animate }: TypographyProps) {
  const Component = animate ? motion.p : "p";
  return (
    <Component
      className={cn(typography.p, className)}
      {...(animate && {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.3 }
      })}
    >
      {children}
    </Component>
  );
}

export function Lead({ children, className, animate }: TypographyProps) {
  const Component = animate ? motion.p : "p";
  return (
    <Component
      className={cn(typography.lead, className)}
      {...(animate && {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.3, delay: 0.1 }
      })}
    >
      {children}
    </Component>
  );
}

export function GradientText({ children, className }: TypographyProps) {
  return (
    <span className={cn("bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-700", className)}>
      {children}
    </span>
  );
} 