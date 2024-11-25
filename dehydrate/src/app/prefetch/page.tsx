import { Suspense } from "react";
import Posts from "../components/posts";
import { QueryClient } from "@tanstack/react-query";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const getTodo = async (): Promise<Todo> => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log("서버 요청");
  return res.json();
};

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["todo"],
    queryFn: getTodo,
  });

  console.log("prefetch 끝");
  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <Posts />
    </Suspense>
  );
}
