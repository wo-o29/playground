import { useEffect, useSyncExternalStore, startTransition, useState } from "react";

let data = 1;
function getData() {
  return data;
}

setTimeout(() => (data = 2), 100); // 100밀리초 후 데이터 변경

function Cell() {
  const start = Date.now();

  // 50밀리초 지연
  while (Date.now() - start < 50) {
    // 메인 스레드에게 제어권 양보
  }

  const data = useSyncExternalStore(() => {
    return () => {};
  }, getData);

  return <div style={{ padding: "2rem", border: "1px solid red" }}>{data}</div>;
}

export default function Test() {
  const [showCells, setShowCells] = useState(false);

  useEffect(() => {
    startTransition(() => setShowCells(true));
  }, []);
  return (
    <div>
      <h3>useSyncExternalStore 사용 컴포넌트</h3>
      {showCells ? (
        <div style={{ display: "flex", gap: "1rem" }}>
          <Cell />
          <Cell />
          <Cell />
          <Cell />
        </div>
      ) : (
        <p>준비 중..</p>
      )}
    </div>
  );
}
