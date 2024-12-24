import { useState } from "react";

function A() {
  return null;
}

function App() {
  return (
    <div>
      <div onClick={() => console.log("부모")}>
        aaaaaaaa-
        <span onClick={() => console.log("자식")}>123</span>
      </div>
    </div>
  );
}

export default App;
