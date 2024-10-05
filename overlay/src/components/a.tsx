import { MyContext } from "@/pages/_app";
import React, { useContext } from "react";

function AComponents() {
  const context = useContext(MyContext);
  return (
    <div>
      <div>title</div>
      <div>{context}</div>
      <button>123</button>
    </div>
  );
}

export default AComponents;
