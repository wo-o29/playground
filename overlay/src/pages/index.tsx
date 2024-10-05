import BComponents from "@/components/b";
import dynamic from "next/dynamic";

const BComponentsB = dynamic(() => import("@/components/b"), { ssr: false });

export default function Home() {
  return <BComponentsB />;
}
