import { createContext, PropsWithChildren, useState } from "react";

export const outerThemeContext = createContext<ThemeContextType>({
  outerTheme: "light",
  toggleTheme: () => {},
});

interface ThemeContextType {
  outerTheme: string;
  toggleTheme: () => void;
}

function OuterProvider({ children }: PropsWithChildren) {
  const [outerTheme, setOuterTheme] = useState("light");

  const toggleTheme = () => {
    setOuterTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return <outerThemeContext.Provider value={{ outerTheme, toggleTheme }}>{children}</outerThemeContext.Provider>;
}

export default OuterProvider;
