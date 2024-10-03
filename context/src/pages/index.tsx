import AComponents from "@/components/A";
import BComponents from "@/components/B";
import CComponents from "@/components/C";
import DComponents from "@/components/D";
import { createContext, useState } from "react";
export const outerThemeContext = createContext("");
export const innerThemeContext = createContext("");

export default function Home() {
  const [outerTheme, setOuterTheme] = useState("light");
  const [innerTheme, setInnerTheme] = useState("light");

  const toggleTheme = () => {
    setInnerTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <outerThemeContext.Provider value={outerTheme}>
        <AComponents />
        <DComponents />
        <BComponents />
        <innerThemeContext.Provider value={innerTheme}>
          <CComponents />
        </innerThemeContext.Provider>
        <h3 style={{ padding: "0px 0" }}>Inner Theme: {innerTheme}</h3>
        <h3 style={{ padding: "0px 0" }}>Outer Theme: {outerTheme}</h3>
        <button onClick={toggleTheme}>Inner Theme Toggle Button</button>
      </outerThemeContext.Provider>
    </div>
  );
}
