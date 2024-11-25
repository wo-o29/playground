import Link from "next/link";

export default async function Home() {
  return (
    <div style={{ display: "flex", gap: "50px" }}>
      <Link href="/prefetch">프리패칭 페이지</Link>
      <Link href="/streaming">스트리밍 페이지</Link>
    </div>
  );
}
