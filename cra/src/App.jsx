import { useState, useRef } from "react";

function A() {
  console.log("A 컴포넌트 렌더링");
  return null;
}

function App() {
  const [state, setState] = useState(false);
  const counter = useRef(0);
  console.log(`현재 state: ${state}`);
  console.log("App 컴포넌트 렌더링");

  return (
    <div>
      <button
        onClick={() => {
          console.log(`-------\n버튼 ${++counter.current}회 클릭\n-------`);
          setState(true);
        }}
      >
        click me
      </button>
      <A />
    </div>
  );
}

export default App;
