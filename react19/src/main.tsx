import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

// console.log(
//   JSON.stringify(
//     App(),
//     (key, value) => {
//       if (typeof value === "function") {
//         return `[Function: ${value.name || "anonymous"}] ${value.toString()}`;
//       }
//       if (typeof value === "symbol") {
//         return `[Symbol: ${value.toString()}]`;
//       }
//       return value;
//     },
//     2
//   )
// );

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
