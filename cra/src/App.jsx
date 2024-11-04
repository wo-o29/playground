import * as React from "react";

function createCounter(delay) {
  return {
    data: null,
    promise: null,
    fetch() {
      // data가 있다면 즉시 반환
      if (this.data !== null) {
        return this.data;
      }

      // promise가 없다면
      if (this.promise === null) {
        // 새로운 Promise 객체 생성
        this.promise = new Promise((resolve) => {
          // delay 이후에 data 설정
          setTimeout(() => {
            this.data = `패칭된 데이터 - delay(${delay})`;
            resolve(this.data);
          }, delay);
        });
      }
      // Promise가 완료되지 않았다면 해당 Promise를 throw
      throw this.promise;
    },
  };
}

const counter1000 = createCounter(1000);
const counter2000 = createCounter(2000);

// counter의 fetch 결과를 버튼으로 렌더링
function Component({ counter }) {
  const count = counter.fetch();
  return <button>{count}</button>;
}

// JSX를 문자열로 변환하는 함수
function render(jsx, context) {
  // null 체크
  if (jsx === null) {
    return "";
  }

  // jsx의 타입이 문자열 or 숫자인 경우
  if (typeof jsx === "string" || typeof jsx === "number") {
    return jsx;
  }

  // JSX가 HTML 태그인 경우 해당 태그를 문자열로 만들고 자식들을 재귀적으로 렌더링
  if (typeof jsx.type === "string") {
    return `<${jsx.type}>${render(jsx.props.children, context)}</${jsx.type}>`;
  }

  // 배열이라면 각 요소를 render하여 문자열로 합치기
  if (Array.isArray(jsx)) {
    return jsx.map((item) => render(item, context)).join("");
  }

  // 함수형 컴포넌트로 처리
  if (typeof jsx.type === "function") {
    return render(jsx.type(jsx.props), context);
  }

  // suspense 컴포넌트 처리
  if (jsx.type === Symbol.for("react.suspense")) {
    try {
      // 자식 컴포넌트 렌더링 시도
      return `<div hidden id="S:${context.id}">${render(
        jsx.props.children,
        context
      )}</div><script>스크립트 태그는 나중에 Suspense 경계를 다시 렌더링하기 위한 것</script>`;
    } catch (e) {
      // 에러 처리
      if ("then" in e) {
        // Promise인 경우
        const currentContext = { ...context }; // 컨텍스트 복사
        e.then(() => {
          // Promise가 해결되면 Suspense 컴포넌트를 다시 렌더링
          context.pipe(render(jsx, currentContext));
        });

        // fallback 렌더링
        return `<!--$?--><template id="F:${context.id++}"></template>${render(jsx.props.fallback, context)}<!--/$-->`;
      } else {
        throw new Error("error in rendering:" + e);
      }
    }
  }

  // 위에 해당되는 경우가 없다면 에러 throw
  throw new Error("unhandled type" + jsx.type);
}

// JSX를 렌더링하고 결과를 pipe 함수로 전달
function renderToPipe(jsx, pipe) {
  pipe(
    render(jsx, {
      pipe,
      id: 0, // increment id to differentiate suspense boundaries.
    })
  );
}

export default function App() {
  // 렌더링된 HTML 조각
  const [chunks, setChunks] = React.useState([]);

  // 새로운 HTML 조각을 chunks에 추가
  const pipe = React.useCallback((chunk) => {
    // console.log("pipe", chunk);
    setChunks((chunks) => [...chunks, chunk]);
  }, []);

  React.useEffect(() => {
    const jsx = (
      <div>
        <React.Suspense fallback="loading">
          <Component counter={counter1000} />
        </React.Suspense>
        <React.Suspense fallback="loading">
          <Component counter={counter2000} />
        </React.Suspense>
        <p>another p</p>
      </div>
    );
    renderToPipe(jsx, pipe);
  }, [pipe]);

  // chunks들을 렌더링
  return (
    <div>
      {chunks.map((chunk, i) => (
        <div key={i}>
          <p>chunk {i + 1}</p>
          <code>{chunk}</code>
          <hr />
        </div>
      ))}
    </div>
  );
}
