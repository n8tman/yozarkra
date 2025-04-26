"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

/**
 * A custom hook that wraps next-themes useTheme to prevent hydration mismatches
 * by only exposing theme information after client-side mount
 */
export function useMountedTheme() {
  const [mounted, setMounted] = useState(false);
  const themeContext = useTheme();
  
  // Only expose theme info after mount to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Return empty/placeholder values for SSR
  // and real values after mount
  return {
    ...themeContext,
    // Override values that might cause hydration mismatch during SSR
    theme: mounted ? themeContext.theme : undefined,
    resolvedTheme: mounted ? themeContext.resolvedTheme : undefined,
    systemTheme: mounted ? themeContext.systemTheme : undefined,
    // Flag to let components know if it's safe to render theme-dependent UI
    mounted
  };
} 