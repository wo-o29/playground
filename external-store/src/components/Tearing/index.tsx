import { useEffect, startTransition, useState } from "react";

let data = 1;

function getData() {
  return data;
}

setTimeout(() => (data = 2), 100);

function Cell() {
  const start = Date.now();
  while (Date.now() - start < 50) {
    // force yielding to main thread in concurrent mode
  }

  const data = getData();

  return <div style={{ padding: "1rem", border: "1px solid red" }}>{data}</div>;
}

export default function Tearing() {
  const [showCells, setShowCells] = useState(false);

  useEffect(() => {
    startTransition(() => setShowCells(true));
  }, []);
  return (
    <>
      <p>
        Example of tearing. <br />
        startTransition(동시성 렌더링) 사용 컴포넌트
      </p>
      {showCells ? (
        <div style={{ display: "flex", gap: "1rem" }}>
          <Cell />
          <Cell />
          <Cell />
          <Cell />
        </div>
      ) : (
        <p>preparing..</p>
      )}
    </>
  );
}
