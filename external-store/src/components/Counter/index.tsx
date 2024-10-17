import React from "react";
import { useSyncExternalStore } from "react";

// 간단한 상태 관리 스토어 구현
function createStore(initialState) {
  let state = initialState;
  const listeners = new Set();

  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };

  const getSnapshot = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };
      case "DECREMENT":
        return { count: state.count - 1 };
      default:
        return state;
    }
  };

  return { subscribe, getSnapshot, dispatch };
}

const store = createStore({ count: 0 });

function Counter() {
  const count = useSyncExternalStore(store.subscribe, store.getSnapshot, store.getSnapshot);

  return (
    <div>
      <h1>카운터: {count.count}</h1>
      <button onClick={() => store.dispatch({ type: "INCREMENT" })}>증가</button>
      <button onClick={() => store.dispatch({ type: "DECREMENT" })}>감소</button>
    </div>
  );
}

export default Counter;
