import React, { useState } from "react";
import ReactDOM from "react-dom";

document.body.innerHTML = `
  <div id="container">
    <button>0</button>
  </div>
`;

function App() {
  const [state, setState] = useState(0);
  return <button onClick={() => setState((state) => state + 1)}>{state}</button>;
}
const rootElement = document.getElementById("container");
const originalButton = rootElement.firstChild;
ReactDOM.createRoot(rootElement).render(<App />);
setTimeout(
  () =>
    console.log(
      originalButton === rootElement.firstChild && originalButton === rootElement.firstChild
        ? "DOM이 재사용되고 있어요"
        : "DOM이 재사용되지 않고 있어요"
    ),
  0
);
