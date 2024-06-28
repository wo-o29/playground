import ErrorFallback from "@/components/Fallback";
import Test from "@/components/Test";
import { useStore } from "@/store/testStore";
import {
  QueryClient,
  dehydrate,
  useQuery,
  useQueryErrorResetBoundary,
} from "@tanstack/react-query";

import { ErrorBoundary } from "react-error-boundary";

export interface UserInfoType {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetchTodo = async (): Promise<UserInfoType> => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
    if (!res.ok) {
      throw new Error(res.status.toString());
    }
    return res.json();
  } catch (e: any) {
    console.error(e);
    throw new Error(e);
  }
};

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["todos", "1"],
    queryFn: fetchTodo,
  });

  return {
    props: { dehydratedState: dehydrate(queryClient) },
  };
};

export default function Home() {
  const { data } = useQuery({
    queryKey: ["todos", "1"],
    queryFn: fetchTodo,
    refetchInterval: 30000,
    refetchIntervalInBackground: true,
  });
  const { reset } = useQueryErrorResetBoundary();

  return (
    <>
      <div>{`유저 ID: ${data?.userId}`}</div>
      <div>{`ID: ${data?.id}`}</div>
      <div>{`제목: ${data?.title}`}</div>
      <div>{`상태: ${data?.completed}`}</div>
      <hr />
      <hr />
      {/* <Suspense fallback={<div>로딩중입니다.....</div>}> */}
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={reset}>
        {/* <ErrorBoundary
        fallbackRender={({ error, resetErrorBoundary }) => (
          <ErrorFallback
            error={error}
            resetErrorBoundary={resetErrorBoundary}
          />
        )}
      > */}
        <Test />
      </ErrorBoundary>
      {/* </Suspense> */}
    </>
  );
}
