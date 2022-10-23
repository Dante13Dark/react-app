import { createContext, useState } from "react";

export const COLOR_THEMES = {
  dark: "dark",
  light: "light",
};

export const ThemeContext = createContext({});

export const isDarkTheme = (theme) => theme === COLOR_THEMES.dark;

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(COLOR_THEMES.light);

  document.documentElement.dataset.theme = theme;

  const toggleTheme = (currentTheme) => {
    setTheme(currentTheme);
    document.documentElement.dataset.theme = currentTheme;
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;