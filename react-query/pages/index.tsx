import { lazy, Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

const LazyComponents = lazy(() => import("../components/LazyComponents"));
function App() {
  const [shouldLoad, setShouldLoad] = useState(false);

  return (
    <>
      <h1>React lazy</h1>
      <button
        onClick={() => setShouldLoad((prev) => !prev)}
        style={{ marginBottom: "20px" }}
      >
        {shouldLoad ? "지우기" : "로드 시작"}
      </button>
      {shouldLoad && (
        <ErrorBoundary fallback={<div>에러 발생!</div>}>
          <Suspense fallback={<div>로딩 중...</div>}>
            <LazyComponents />
          </Suspense>
        </ErrorBoundary>
      )}
    </>
  );
}

export default App;
