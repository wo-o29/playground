import { createContext, useState } from "react";
import { AComponents, BComponents } from "./components";

export const ThemeContext = createContext<string>("");

export default function Home() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <AComponents />
        <BComponents />
        <div>현재 테마: {theme}</div>
        <button onClick={toggleTheme}>테마 토글 버튼</button>
      </ThemeContext.Provider>
    </>
  );
}
