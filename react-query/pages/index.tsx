import ErrorFallback from "@/components/Fallback";
import Test from "@/components/Test";
import { useStore } from "@/store/testStore";
import { QueryClient, dehydrate, useQueries, useQuery, useQueryErrorResetBoundary } from "@tanstack/react-query";

import { ErrorBoundary } from "react-error-boundary";

export interface UserInfoType {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetchTodo = async (id: number = 1): Promise<UserInfoType> => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
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
    queryFn: () => fetchTodo(1),
  });

  return {
    props: { dehydratedState: dehydrate(queryClient) },
  };
};

export default function Home() {
  const ids = [1, 2, 3];
  const combinedQueries = useQueries({
    queries: ids.map((id) => ({
      queryKey: ["post", id],
      queryFn: () => fetchTodo(id),
    })),
    combine: (results) => {
      return {
        data: results.map((result) => result.data),
        pending: results.some((result) => result.isPending),
      };
    },
  });
  console.log(combinedQueries);
  const { reset } = useQueryErrorResetBoundary();

  return (
    <>
      {/* <div>{`유저 ID: ${data?.userId}`}</div>
      <div>{`ID: ${data?.id}`}</div>
      <div>{`제목: ${data?.title}`}</div>
      <div>{`상태: ${data?.completed}`}</div> */}
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
        {/* <Test /> */}
      </ErrorBoundary>
      {/* </Suspense> */}
    </>
  );
}
