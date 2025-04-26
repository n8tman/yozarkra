"use client";

import { useEffect, useLayoutEffect } from "react";
import { useLayout } from "./LayoutContext";

// Create a client-side only useIsomorphicLayoutEffect
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

// Debug flag - set to true to log state changes
const DEBUG = true;

/**
 * This component applies the compact-mode class to the body element
 * based on the compactMode state in the LayoutContext.
 * It doesn't render anything in the DOM.
 */
export function CompactModeManager() {
  const { compactMode } = useLayout();
  
  // Use layout effect to apply the class before browser paint
  useIsomorphicLayoutEffect(() => {
    // Force a quick repaint by adding a temporary class
    document.body.classList.add("compact-mode-transition");
    
    // Apply compact mode class to the document body immediately
    if (compactMode) {
      document.body.classList.add("compact-mode");
      if (DEBUG) console.log("📏 Compact mode ON - added class to body");
    } else {
      document.body.classList.remove("compact-mode");
      if (DEBUG) console.log("📏 Compact mode OFF - removed class from body");
    }
    
    // Remove the transition class after a short delay
    setTimeout(() => {
      document.body.classList.remove("compact-mode-transition");
    }, 50);
    
    // Add a data attribute that can be used for debugging
    document.body.setAttribute("data-compact-mode", compactMode ? "on" : "off");
    
    // Cleanup function
    return () => {
      document.body.classList.remove("compact-mode");
      document.body.classList.remove("compact-mode-transition");
      document.body.removeAttribute("data-compact-mode");
      if (DEBUG) console.log("📏 Cleanup: removed compact-mode class");
    };
  }, [compactMode]);
  
  // Force immediate application on mount
  useEffect(() => {
    if (compactMode) {
      document.body.classList.add("compact-mode");
    }
    
    if (DEBUG) {
      console.log(`📏 CompactModeManager mounted, initial state: ${compactMode ? 'ON' : 'OFF'}`);
      console.log(`📏 Body has compact-mode class: ${document.body.classList.contains('compact-mode')}`);
    }
    
    return () => {
      if (DEBUG) console.log("📏 CompactModeManager unmounted");
    };
  }, [compactMode]);
  
  // This component doesn't render anything
  return null;
} 