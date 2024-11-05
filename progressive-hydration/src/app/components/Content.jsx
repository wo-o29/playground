import { use } from "react";
import InteractiveContent from "./InteractiveContent";

async function fetchData(delay) {
  await new Promise((resolve) => setTimeout(resolve, delay));
  return "data received from server";
}

export default function Content({ id, delay }) {
  const data = use(fetchData(delay));
  return (
    <div>
      <p>{data}</p>
      <InteractiveContent id={id} />
    </div>
  );
}
