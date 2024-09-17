// src/theme-context.js

import React, { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Set initial theme based on the user's system preference
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeMediaQuery.matches);

    // Listen for changes in the system theme
    const darkModeListener = (e) => setIsDarkMode(e.matches);
    darkModeMediaQuery.addEventListener('change', darkModeListener);

    // Cleanup listener on unmount
    return () => darkModeMediaQuery.removeEventListener('change', darkModeListener);
  }, []);

  useEffect(() => {
    // Update the document's class based on the current theme
    const htmlElement = document.documentElement;
    if (isDarkMode) {
      htmlElement.classList.add('dark-theme');
      htmlElement.classList.remove('light-theme');
    } else {
      htmlElement.classList.add('light-theme');
      htmlElement.classList.remove('dark-theme');
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
