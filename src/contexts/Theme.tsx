import { createContext, useContext, useEffect, useState } from "react";
import {
  ThemeProvider as StyledThemeProvider,
  useTheme as useStyledTheme,
} from "styled-components";
import { themes } from "../theme/theme";
import { Theme, Mode } from "../theme/types/theme";

type ThemeModeContext = {
  setThemeMode: (mode: Mode) => void;
};

const ThemeModeContext = createContext<ThemeModeContext>(
  {} as ThemeModeContext
);

type Props = {
  children: React.ReactNode;
};

const getModeFromStorage = (): Mode => {
  try {
    const mode = JSON.parse(
      window.localStorage.getItem("theme:mode") as Mode
    ) as Mode;

    if (themes[mode]) {
      return mode;
    }
    return "light";
  } catch (_) {
    return "light";
  }
};

const setModeToStorage = (mode: Mode) => {
  window.localStorage.setItem("theme:mode", JSON.stringify(mode));
};

export const ThemeProvider = ({ children }: Props) => {
  const [mode, setMode] = useState(getModeFromStorage());
  const [theme, setTheme] = useState<Theme>(themes[mode]);

  const setThemeMode: ThemeModeContext["setThemeMode"] = (mode) => {
    setMode(mode);
  };
  const value = {
    setThemeMode,
  };

  useEffect(() => {
    setTheme(themes[mode]);
    setModeToStorage(mode);
  }, [mode]);

  return (
    <ThemeModeContext.Provider value={value}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeModeContext.Provider>
  );
};

export const useTheme = (): Theme => useStyledTheme();
export const useThemeMode = (): ThemeModeContext =>
  useContext(ThemeModeContext);
