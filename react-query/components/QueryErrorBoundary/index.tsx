import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";

interface QueryErrorBoundaryProps {
  children: React.ReactNode;
}

function QueryErrorBoundary({ children }: QueryErrorBoundaryProps) {
  const { reset } = useQueryErrorResetBoundary();
  return (
    <ErrorBoundary
      onReset={reset}
      fallbackRender={({ error, resetErrorBoundary }) => {
        // resetErrorBoundary -> 모든 쿼리 에러 초기화
        console.log(error);
        return (
          <div>
            {error.toString().split(":")}
            <button onClick={resetErrorBoundary}>모든 쿼리 에러 초기화</button>
          </div>
        );
      }}
    >
      {children}
    </ErrorBoundary>
  );
}

export default QueryErrorBoundary;
