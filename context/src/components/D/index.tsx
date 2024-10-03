import { memo } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DComponents = memo(function DComponents() {
  return <h3 style={{ padding: "10px 0" }}>D 컴포넌트</h3>;
});

export default DComponents;
