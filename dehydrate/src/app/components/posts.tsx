"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { getTodo } from "../prefetch/page";

function Posts() {
  const todoData = useSuspenseQuery({
    queryKey: ["todo"],
    queryFn: getTodo,
  });

  return (
    <div>
      <h3>Todo 컴포넌트</h3>
      <p>유저ID: {todoData.data.id}</p>
      <p>제목: {todoData.data.title}</p>
    </div>
  );
}

export default Posts;
