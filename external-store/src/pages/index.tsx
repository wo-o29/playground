import Tearing from "@/components/Tearing";
import Test from "@/components/Test";

export default function Home() {
  return (
    <div style={{ margin: 200, display: "flex", gap: 150 }}>
      <Tearing />
      <Test />
    </div>
  );
}
