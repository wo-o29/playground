import { use } from "react";

async function fetchData(delay) {
  await new Promise((resolve) => setTimeout(resolve, delay));
  return "data received from server";
}

export default function Content({ delay }) {
  const data = use(fetchData(delay));
  return <p>{data}</p>;
}
