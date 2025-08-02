import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('everrise-theme') || 'light';
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem('everrise-theme', theme);
    document.documentElement.className = `theme-${theme}`;
    document.body.style.backgroundColor = 'var(--bg-primary)';
    document.body.style.color = 'var(--text-primary)';
  }, [theme]);

  const themes = {
    light: { name: 'Light', icon: '🔵' },
    dark: { name: 'Dark', icon: '🟢' },
    ocean: { name: 'Ocean', icon: '🟣' },
    gold: { name: 'Gold', icon: '🔴' }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};