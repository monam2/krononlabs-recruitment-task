"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type LightTheme = "light" | "dark";
type ChartTheme = "fresh" | "traditinal" | "colorVisionDeficiency";

interface ThemeProviderProps {
  initialLightTheme: LightTheme;
  initialChartTheme: ChartTheme;
}

interface ThemeContextValue extends ThemeProviderProps {
  toggleLightTheme: () => void;
  changeChartTheme: (theme: ChartTheme) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const ThemeProvider = ({
  initialLightTheme,
  initialChartTheme,
  children,
}: React.PropsWithChildren<ThemeProviderProps>) => {
  const [lightTheme, setLightTheme] = useState<LightTheme>(initialLightTheme);
  const [chartTheme, setChartTheme] = useState<ChartTheme>(initialChartTheme);

  useEffect(() => {
    document.cookie = `lightTheme=${lightTheme}; max-age=604800`;
    document.cookie = `chartTheme=${chartTheme}; max-age=604800`;
  }, [lightTheme, chartTheme]);

  const toggleLightTheme = () => {
    setLightTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  const changeChartTheme = (theme: ChartTheme) => {
    setChartTheme(theme);
  };

  const value: ThemeContextValue = {
    initialLightTheme,
    initialChartTheme,
    toggleLightTheme,
    changeChartTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;

/** 다른 컴포넌트에서 테마 관련 기능을 사용하기 위한 커스텀 훅 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  return context;
};
