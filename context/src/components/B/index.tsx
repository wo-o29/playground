import { outerThemeContext } from "@/pages";
import { memo, useContext } from "react";

const BComponents = memo(function BComponents() {
  const outerTheme = useContext(outerThemeContext);
  return <h3 style={{ padding: "10px 0" }}>B 컴포넌트의 테마: {outerTheme}</h3>;
});

export default BComponents;
