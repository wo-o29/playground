import { useEffect, useSyncExternalStore, startTransition, useState } from "react";

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
  const data = useSyncExternalStore(() => {
    return () => {};
  }, getData);

  return <div style={{ padding: "1rem", border: "1px solid red" }}>{data}</div>;
}

export default function Test() {
  const [showCells, setShowCells] = useState(false);

  useEffect(() => {
    startTransition(() => setShowCells(true));
  }, []);
  return (
    <>
      <p>
        Example of tearing. <br />
        useSyncExternalStore 사용 컴포넌트
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
