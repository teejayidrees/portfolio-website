import React, { createContext, useContext, useState, useEffect } from "react";

/**
 * Theme Context for managing dark/light mode throughout the application
 * Provides theme state and toggle functionality to all child components
 */
const ThemeContext = createContext();

/**
 * Custom hook to use theme context
 * @returns {Object} Theme context value containing isDark state and toggleTheme function
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

/**
 * Theme Provider Component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to wrap with theme context
 */
export const ThemeProvider = ({ children }) => {
  // State to track if dark mode is active (default: false for light mode)
  const [isDark, setIsDark] = useState(true);

  /**
   * Effect to apply theme classes to document body and load saved preference
   * Runs on component mount and whenever isDark state changes
   */
  useEffect(() => {
    // Load saved theme preference from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
    }
  }, []);

  /**
   * Effect to apply theme classes to document body
   * Updates body classes and saves preference to localStorage
   */
  useEffect(() => {
    // Apply Bootstrap theme classes to body
    document.body.className = isDark
      ? "bg-dark text-light"
      : "bg-light text-dark";

    // Save theme preference to localStorage for persistence
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  /**
   * Function to toggle between dark and light themes
   */
  const toggleTheme = () => {
    setIsDark((prevIsDark) => !prevIsDark);
  };

  // Context value object containing theme state and toggle function
  const value = {
    isDark,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
