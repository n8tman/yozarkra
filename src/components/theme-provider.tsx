"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps as NextThemesProviderProps } from "next-themes"

export interface ThemeProviderProps extends NextThemesProviderProps {
  children: React.ReactNode
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Keep using the theme provider, but make sure components that use theme
  // values have their own mounting checks in place
  return (
    <NextThemesProvider {...props}>
      {children}
    </NextThemesProvider>
  )
} 