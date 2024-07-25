import { useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(1);
  console.log(1);

  useEffect(() => {
    console.log(2);

    return () => {
      console.log(3);
    };
  }, [count]);

  useEffect(() => {
    console.log(4);

    setCount((count) => count + 1);
  }, []);

  return <Child count={count} />;
}

function Child({ count }: any) {
  console.log("A");
  useEffect(() => {
    console.log(5);

    return () => {
      console.log(6);
    };
  }, [count]);

  return null;
}
