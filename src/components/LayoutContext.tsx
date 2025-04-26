"use client";

import { createContext, useContext, ReactNode, useState, useEffect } from "react";

// Types for the context
interface LayoutContextType {
  // Layout settings
  compactMode: boolean;
  toggleCompactMode: () => void;
  setCompactMode: (value: boolean) => void;
}

// Default values
const defaultContext: LayoutContextType = {
  compactMode: false,
  toggleCompactMode: () => {},
  setCompactMode: () => {},
};

// Create the context
const LayoutContext = createContext<LayoutContextType>(defaultContext);

// Check if we're on the client side
const isClient = typeof window !== 'undefined';

// Provider component
export function LayoutProvider({ children }: { children: ReactNode }) {
  // Get the initial state from localStorage if available
  const [initialized, setInitialized] = useState(false);
  const [compactMode, setCompactModeState] = useState<boolean>(false);
  
  // Initialize from localStorage when component mounts
  useEffect(() => {
    if (!initialized && isClient) {
      try {
        const storedValue = localStorage.getItem("compactMode");
        if (storedValue !== null) {
          setCompactModeState(storedValue === "true");
        }
      } catch (error) {
        console.error("Error accessing localStorage:", error);
      }
      setInitialized(true);
    }
  }, [initialized]);

  // Update localStorage when compactMode changes
  useEffect(() => {
    if (initialized && isClient) {
      try {
        localStorage.setItem("compactMode", compactMode.toString());
        console.log(`Compact mode set to: ${compactMode}`);
      } catch (error) {
        console.error("Error writing to localStorage:", error);
      }
    }
  }, [compactMode, initialized]);
  
  // Toggle compact mode
  const toggleCompactMode = () => {
    setCompactModeState(prev => {
      const newValue = !prev;
      console.log(`Toggling compact mode: ${prev} -> ${newValue}`);
      return newValue;
    });
  };
  
  // Set compact mode to a specific value
  const setCompactMode = (value: boolean) => {
    console.log(`Setting compact mode to: ${value}`);
    setCompactModeState(value);
  };
  
  const value = {
    compactMode,
    toggleCompactMode,
    setCompactMode,
  };
  
  return (
    <LayoutContext.Provider value={value}>
      {children}
    </LayoutContext.Provider>
  );
}

// Custom hook to use the layout context
export function useLayout() {
  const context = useContext(LayoutContext);
  
  if (context === undefined) {
    throw new Error("useLayout must be used within a LayoutProvider");
  }
  
  return context;
} 