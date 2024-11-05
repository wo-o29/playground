import { Suspense } from "react";
import Content from "./components/Content";

export default function Home() {
  return (
    <main>
      <h1>Welcome to Progressive Hydration Demo</h1>
      <Suspense fallback={<div>Loading content...</div>}>
        <Content id={1} delay={4000} />
      </Suspense>
      <Suspense fallback={<div>Loading content...</div>}>
        <Content id={2} delay={2000} />
      </Suspense>
    </main>
  );
}
