import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext({});

const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme:dark)"
  ).matches;
  console.log("Initial dark mode preference:", prefersDarkMode);
  const savedMode = localStorage.getItem("darkMode");
  if (savedMode !== null) {
    return savedMode === "true";
  } else {
    return prefersDarkMode;
  }
};

export const AppProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(getInitialDarkMode());

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) {
      setIsDarkMode(savedMode === "true");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", isDarkMode);
    document.body.classList.toggle("dark-theme", isDarkMode);
  }, [isDarkMode]);

  const ctxValue = {
    isDarkMode,
    toggleDarkMode,
  };

  return <AppContext.Provider value={ctxValue}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
