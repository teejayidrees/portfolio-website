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
export const ThemeProvider = ({ children }) => {
  // State to track if dark mode is active (default: false for light mode)
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(false);
  }, []);

  // Context value object containing theme state and toggle function
  const value = {
    isDark,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
