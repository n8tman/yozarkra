'use client';

import React from 'react';
import { cn } from "@/lib/design-system";
import { containers } from "@/lib/design-system";
import { motion } from "framer-motion";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  variant?: "default" | "gradient" | "muted" | "glass";
  animate?: boolean;
  id?: string;
}

export function Section({
  children,
  className,
  containerClassName,
  variant = "default",
  animate = true,
  id,
}: SectionProps) {
  const Component = animate ? motion.section : "section";
  
  // Define variant styles
  const variantStyles = {
    default: "bg-background",
    gradient: "bg-gradient-blue text-white",
    muted: "bg-muted",
    glass: "glass",
  };
  
  return (
    <Component
      id={id}
      className={cn(
        containers.section,
        variantStyles[variant],
        className
      )}
      {...(animate && {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.5 }
      })}
    >
      <div className={cn(containers.content, containerClassName)}>
        {children}
      </div>
    </Component>
  );
}

export function SectionGrid({
  children,
  className,
  containerClassName,
  variant = "default",
  animate = true,
  id,
}: SectionProps) {
  return (
    <Section
      id={id}
      className={className}
      containerClassName={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", containerClassName)}
      variant={variant}
      animate={animate}
    >
      {children}
    </Section>
  );
}

export function SectionDivider({ className }: { className?: string }) {
  return (
    <div className={cn("h-px w-full bg-border", className)} />
  );
} 