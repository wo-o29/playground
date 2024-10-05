import type { AppProps } from "next/app";
import { OverlayProvider } from "overlay-kit";
import React from "react";
import { createPortal } from "react-dom";
import AComponents from "@/components/a";

export const MyContext = React.createContext(0);
export default function BComponents() {
  const [count, setCount] = React.useState(0);

  return (
    <MyContext.Provider value={count}>
      <main onClick={() => console.log("click")}>
        <button
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
        >
          plus
        </button>
        {createPortal(<AComponents />, document.body)}
      </main>
    </MyContext.Provider>
  );
}
