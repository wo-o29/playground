import { createContext, useState, useContext, memo } from "react";
export const outerThemeContext = createContext("");
export const innerThemeContext = createContext("");

const AComponents = memo(function AComponents() {
  const outerTheme = useContext(outerThemeContext);
  return <h3 style={{ padding: "10px 0" }}>A 컴포넌트의 테마: {outerTheme}</h3>;
});

const BComponents = memo(function BComponents() {
  const innerTheme = useContext(innerThemeContext);
  return <h3 style={{ padding: "10px 0" }}>B 컴포넌트의 테마: {innerTheme}</h3>;
});

const CComponents = memo(function CComponents() {
  const innerTheme = useContext(innerThemeContext);
  return <h3 style={{ padding: "10px 0" }}>C 컴포넌트의 테마: {innerTheme}</h3>;
});

export default function Home() {
  const [outerTheme, setOuterTheme] = useState("light");
  const [innerTheme, setInnerTheme] = useState("light");

  const toggleTheme = () => {
    setInnerTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      <outerThemeContext.Provider value={outerTheme}>
        <AComponents />
        <innerThemeContext.Provider value={innerTheme}>
          <BComponents />
          <CComponents />
        </innerThemeContext.Provider>
        <h3 style={{ padding: "0px 0" }}>Inner Theme: {innerTheme}</h3>
        <h3 style={{ padding: "0px 0" }}>Outer Theme: {outerTheme}</h3>
        <button onClick={toggleTheme}>Inner Theme Toggle Button</button>
      </outerThemeContext.Provider>
    </>
  );
}

// 토글 버튼을 눌러 setState가 발생해 리렌더링이 일어난다.
// 리렌더링 과정에서 Context Provider가 value에 변화가 있는지 이전 값과 비교한다.
// 변화가 있을 경우 propagateContextChange 함수를 호출하여 변경된 context를 사용하는 하위 Fiber 노드에 대해 업데이트를 스케줄링 한다.
// propagateContextChange 함수의 결과로, 해당 Context에 의존하는 Consumer 컴포넌트들이(A컴포넌트, B컴포넌트) 업데이트 대상이 된다.
// 이 과정에서 updateContextConsumer 함수를 통해 각 Consumer 컴포넌트는 새로운 Context 값을 다시 렌더링된다.
// 새로운 컨텍스트 값으로 Consumer 컴포넌트들이 렌더링되고, 이전 렌더링 결과와 비교(diffing)하여 변경 사항이 있다면 DOM에 커밋된다.
