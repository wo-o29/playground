/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState<string[]>([]);
  const [state, setState] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = (e: any) => {
    e.preventDefault();
    console.log(inputValue);
    setTodoList((prev) => [...prev, inputValue]);
    setInputValue("");
  };

  return (
    <>
      <div>{state}</div>
      <button type="button" onClick={() => setState((prev) => prev++)}>
        클릭
      </button>
      <h1>TODO APP</h1>
      <form>
        <input
          type="text"
          value={inputValue}
          onChange={(e: any) => setInputValue(e.target.value)}
        />
        <button type="submit" onClick={handleAddTodo}>
          추가
        </button>
      </form>
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
