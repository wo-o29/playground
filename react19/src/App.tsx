import { useState } from "react";

function Component({ id }: { id: string }) {
  const [state, setState] = useState(0);

  return (
    <div>
      {state}
      <button type="button" onClick={() => setState((prev) => (prev += 1))}>
        {id} - 버튼
      </button>
    </div>
  );
}

function App() {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <Component id="1" />
      {isShow && <Component id="2" />}
      <Component id="3" />
      <button type="button" onClick={() => setIsShow((prev) => !prev)}>
        클릭
      </button>
    </>
  );
}

export default App;
