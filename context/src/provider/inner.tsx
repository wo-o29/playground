import { createContext, PropsWithChildren, useState } from "react";
interface ThemeContextType {
  innerTheme: string;
  toggleTheme: () => void;
}

export const innerThemeContext = createContext<ThemeContextType>({
  innerTheme: "light",
  toggleTheme: () => {},
});

function InnerProvider({ children }: PropsWithChildren) {
  const [innerTheme, setInnerTheme] = useState("light");

  const toggleTheme = () => {
    setInnerTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return <innerThemeContext.Provider value={{ innerTheme, toggleTheme }}>{children}</innerThemeContext.Provider>;
}

export default InnerProvider;
