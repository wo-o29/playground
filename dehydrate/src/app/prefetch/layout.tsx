import { PropsWithChildren } from "react";
import PrefetchProviders from "./providers";

function PrefetchLayout({ children }: PropsWithChildren) {
  return <PrefetchProviders>{children}</PrefetchProviders>;
}

export default PrefetchLayout;
