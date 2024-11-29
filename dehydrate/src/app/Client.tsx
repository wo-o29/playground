"use client";

import { PropsWithChildren } from "react";

function Client({ children }: PropsWithChildren) {
  return (
    <div>
      Client
      <div>{children}</div>
    </div>
  );
}

export default Client;
