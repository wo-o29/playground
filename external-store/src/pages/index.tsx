import countStore from "@/store";
import { useSyncExternalStore } from "react";
import Test from "@/components/Test";

export default function Home() {
  const count = useSyncExternalStore(countStore.subscribe, countStore.read, countStore.getServerSnapshot);

  return (
    <div>
      count: {count}
      <div>
        <button onClick={countStore.increment}>Increment</button>
        <button onClick={countStore.decrement}>Decrement</button>
      </div>
      <Test />
    </div>
  );
}
