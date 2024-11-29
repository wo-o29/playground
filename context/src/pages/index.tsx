import { createContext, PropsWithChildren, useContext } from "react";

export const ContextA = createContext<string | null>(null);
export const ContextB = createContext<string | null>(null);

function ProviderA({ children }: PropsWithChildren) {
  return <ContextA.Provider value={"A"}>{children}</ContextA.Provider>;
}

function ProviderB({ children }: PropsWithChildren) {
  return <ContextB.Provider value={"B"}>{children}</ContextB.Provider>;
}

function ProviderBB({ children }: PropsWithChildren) {
  return <ContextB.Provider value={"BB"}>{children}</ContextB.Provider>;
}

function AComponents() {
  const value = useContext(ContextB);
  return <h1>A 컴포넌트</h1>;
}

export default function Home() {
  return (
    <>
      <ProviderA>
        <ProviderB>
          <ProviderBB>
            <AComponents />
          </ProviderBB>
        </ProviderB>
      </ProviderA>
    </>
  );
}
