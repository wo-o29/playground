import React, { startTransition, Suspense, useDeferredValue } from "react";
import { ErrorBoundary } from "react-error-boundary";

// 사용 예시
function App() {
  return (
    <ErrorBoundary fallback={<div>AComponent 에러 바운러디</div>}>
      <Suspense fallback={<div>로딩 중...</div>}>
        <ACompoents />
      </Suspense>
    </ErrorBoundary>
  );
}

const Home = () => {
  function handleClick() {
    startTransition(() => {
      console.log("comments");
    });
  }

  return (
    <div>
      <Form />
    </div>
  );
};

export default Home;
