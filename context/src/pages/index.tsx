import AComponents from "@/components/A";
import BComponents from "@/components/B";
import CComponents from "@/components/C";
import DComponents from "@/components/D";
import InnerProvider from "@/provider/inner";
import OuterProvider from "@/provider/outer";

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <OuterProvider>
        <AComponents />
        <DComponents />
        <BComponents />
        <InnerProvider>
          <CComponents />
        </InnerProvider>
        {/* <h3 style={{ padding: "0px 0" }}>Inner Theme: {innerTheme}</h3>
        <h3 style={{ padding: "0px 0" }}>Outer Theme: {outerTheme}</h3> */}
      </OuterProvider>
    </div>
  );
}
