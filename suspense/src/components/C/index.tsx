import { useEffect, useState } from "react";
import D from "../D";

function C() {
  const [count, setCount] = useState(0);

  console.log("C");

  useEffect(() => {
    setCount((prev) => prev + 1);
  }, []);

  return <D />;
}

export default C;
