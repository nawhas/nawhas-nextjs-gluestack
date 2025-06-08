"use client";

import React, { createContext, useState, useEffect, useContext } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setThemeState] = useState<Theme>("system");

  useEffect(() => {
    // On mount, read theme from localStorage or default to system
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme-mode") : null;
    if (stored === "light" || stored === "dark" || stored === "system") {
      setThemeState(stored);
      updateDocumentTheme(stored);
    } else {
      setThemeState("system");
      updateDocumentTheme("system");
    }
  }, []);

  const setTheme = (mode: Theme) => {
    setThemeState(mode);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme-mode", mode);
    }
    updateDocumentTheme(mode);
  };

  const updateDocumentTheme = (mode: Theme) => {
    if (typeof window === "undefined") return;
    const documentElement = document.documentElement;
    function getSystemColorMode() {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    const isSystem = mode === "system";
    const theme = isSystem ? getSystemColorMode() : mode;
    documentElement.classList.remove(theme === "light" ? "dark" : "light");
    documentElement.classList.add(theme);
    documentElement.style.colorScheme = theme;
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}; 