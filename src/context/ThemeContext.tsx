import React, { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

type ThemeMode = "light" | "dark";

interface ThemeContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
  setTheme: (theme: ThemeMode) => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isVyomaPage = location.pathname.includes("/vyoma");

  // Vyoma is permanently and strictly dark mode only
  const isDark = isVyomaPage;
  const theme: ThemeMode = isVyomaPage ? "dark" : "light";

  // Apply dark class to document root permanently when on Vyoma
  useEffect(() => {
    const root = document.documentElement;
    if (isVyomaPage) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isVyomaPage]);

  const setTheme = () => {
    // No-op: Vyoma is completely dark only
  };

  const toggleTheme = () => {
    // No-op: Vyoma is completely dark only
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useAppTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useAppTheme must be used within a ThemeProvider");
  }
  return context;
}
