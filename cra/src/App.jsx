import { useState, createContext, useContext } from "react";
import { createPortal } from "react-dom";

export const myContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  return (
    <myContext.Provider value={{ count }}>
      <main onClick={() => console.log("MAIN")}>
        <div>{count}</div>
        <button
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
        >
          plus ++
        </button>
        {createPortal(<Modal />, document.body)}
      </main>
    </myContext.Provider>
  );
}

function Modal() {
  const context = useContext(myContext);
  return (
    <div>
      <p>title</p>
      <p>{context.count}</p>
      <button>click v</button>
    </div>
  );
}

export default App;
