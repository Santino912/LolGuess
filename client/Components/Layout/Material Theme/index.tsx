"use client";
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";
import { ThemeProvider, createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Theme {
    status?: {
      danger?: string;
    };
  }
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

interface ThemeContextProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  mode: string;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1e2328",
      light: "#aaaaaa",
      dark: "#191919",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#af9767",
      contrastText: "#ffffff",
    },
  },
});

export const useThemeContext = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};

export default function MaterialTheme({ children }: PropsWithChildren) {
  const [darkMode, setDarkMode] = useState(false);

  // Función para cambiar el modo del tema
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Crear un tema personalizado con el modo actualizado
  const updatedTheme = createTheme({
    ...theme,
    palette: {
      ...theme?.palette,
      mode: darkMode ? "light" : "dark",
    },
  });

  return (
    <ThemeContext.Provider
      value={{ darkMode, toggleDarkMode, mode: updatedTheme?.palette?.mode }}
    >
      <ThemeProvider theme={updatedTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
