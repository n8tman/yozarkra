import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { MotionProps } from "framer-motion";

// Helper function to merge tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Typography styles
export const typography = {
  h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
  h2: "scroll-m-20 text-3xl font-bold tracking-tight transition-colors",
  h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
  h4: "scroll-m-20 text-xl font-semibold tracking-tight",
  p: "leading-7 [&:not(:first-child)]:mt-6",
  lead: "text-xl text-muted-foreground",
  large: "text-lg font-semibold",
  small: "text-sm font-medium leading-none",
  muted: "text-sm text-muted-foreground",
  gradient: "bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-700",
};

// Animation presets using Framer Motion
export const animations = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 }
  },
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
    transition: { duration: 0.3 }
  },
  stagger: (delay: number = 0.1): MotionProps => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { 
      staggerChildren: delay,
      delayChildren: 0.1
    }
  }),
  hover: {
    whileHover: { 
      scale: 1.03,
      transition: { duration: 0.2 }
    }
  }
};

// Container styles
export const containers = {
  card: "bg-card text-card-foreground rounded-lg border shadow-sm hover:shadow-md transition-all",
  section: "py-12 md:py-16 lg:py-20",
  content: "max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8",
};

// Button variants
export const buttonVariants = {
  gradient: "bg-gradient-to-r from-indigo-600 to-purple-700 text-white hover:brightness-110 transition-all",
  outline: "border border-primary/30 hover:bg-primary/10 transition-colors text-primary",
  primary: "bg-primary text-primary-foreground hover:bg-primary/90 transition-colors",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors",
}; 