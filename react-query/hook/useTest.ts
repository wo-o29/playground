import { useCallback, useEffect, useState } from "react";

function useTest() {
  const [state, setState] = useState<any[]>([]);
  console.log("A");
  useEffect(() => {
    const data = localStorage.getItem("test");

    if (data) {
      setState(JSON.parse(data));
    }
  }, []);

  const add = useCallback((item: any) => {
    setState((prev) => [...prev, item]);
    localStorage.setItem("test", JSON.stringify([...state, item]));
  }, []);

  const reset = useCallback(() => {
    setState([]);
    localStorage.removeItem("test");
  }, []);

  return { state, add, reset };
}

export default useTest;
