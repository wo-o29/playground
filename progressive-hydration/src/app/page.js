import { Suspense } from "react";
import { ContentWrapper } from "./components/ContentWrap";

export default function Home() {
  return (
    <main>
      <h1>Welcome to Progressive Hydration Demo</h1>
      <Suspense fallback={<div>Loading content 1...</div>}>
        <ContentWrapper id={1} delay={4000} />
      </Suspense>
      <Suspense fallback={<div>Loading content 2...</div>}>
        <ContentWrapper id={2} delay={2000} />
      </Suspense>
    </main>
  );
}
