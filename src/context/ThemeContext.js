import { useState, createContext } from "react";

const ThemeContext = createContext("light");
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light"); // Initial theme state

  const contextValue = {
    theme,
    setTheme,
  };
  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}
export default ThemeProvider;
