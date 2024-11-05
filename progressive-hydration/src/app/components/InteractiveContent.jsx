"use client";
import { useState, useEffect } from "react";

export default function InteractiveContent({ id }) {
  const [count, setCount] = useState(0);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    console.log(`InteractiveContent id: ${id} has been hydrated`);
  }, []);

  return (
    <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc" }}>
      <p>This is an interactive part of the content.</p>
      <p>Hydration status: {hydrated ? "Hydrated" : "Not hydrated"}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Click me (Clicks: {count})</button>
    </div>
  );
}
