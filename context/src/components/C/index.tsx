import { innerThemeContext } from "@/provider/inner";
import { memo, useContext } from "react";

const CComponents = memo(function CComponents() {
  const { innerTheme, toggleTheme } = useContext(innerThemeContext);
  return (
    <>
      <h3 style={{ padding: "10px 0" }}>C 컴포넌트의 테마: {innerTheme}</h3>
      <button onClick={toggleTheme}>Inner Theme Toggle Button</button>
    </>
  );
});

export default CComponents;
