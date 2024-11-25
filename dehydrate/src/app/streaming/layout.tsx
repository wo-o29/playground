import { PropsWithChildren } from "react";
import StreamingProviders from "./providers";

function StreamingLayout({ children }: PropsWithChildren) {
  return <StreamingProviders>{children}</StreamingProviders>;
}

export default StreamingLayout;
