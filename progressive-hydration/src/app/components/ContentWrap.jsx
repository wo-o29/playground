"use client";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import Content from "./Content";

const InteractiveContent = dynamic(() => import("./InteractiveContent"), {
  ssr: false,
  loading: () => <p>Loading interactive content...</p>,
});

export function ContentWrapper({ id, delay }) {
  return (
    <div>
      <Suspense fallback={<div>Loading content...</div>}>
        <Content delay={delay} />
      </Suspense>
      <Suspense fallback={<div>Loading interactive content...</div>}>
        <InteractiveContent id={id} />
      </Suspense>
    </div>
  );
}
