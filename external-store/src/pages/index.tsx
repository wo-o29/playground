import countStore from "@/store";
import { useSyncExternalStore } from "react";

export default function App() {
  const count = useSyncExternalStore(countStore.subscribe, countStore.read);

  return (
    <div className="App">
      count: {count}
      <div>
        <button onClick={countStore.increment}>Increment</button>
        <button onClick={countStore.decrement}>Decrement</button>
      </div>
    </div>
  );
}
