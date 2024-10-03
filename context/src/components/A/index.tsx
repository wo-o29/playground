import { innerThemeContext, outerThemeContext } from "@/pages";
import { memo, useContext } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AComponents = memo(function AComponents() {
  const outerTheme = useContext(outerThemeContext);
  return <h3 style={{ padding: "10px 0" }}>A 컴포넌트의 테마: {outerTheme}</h3>;
});

export default AComponents;
