import { Suspense } from "react";
import Posts from "../components/posts";

export default async function Home() {
  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <Posts />
    </Suspense>
  );
}
