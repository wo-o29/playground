import { getErrorMessage } from "@/utils/getErrorMessage";

function ErrorFallback({ error, resetErrorBoundary }: any) {
  const status = error.toString().split("code")[1];
  const { title, content } = getErrorMessage(Number(status));

  const onClickHandler = () => {
    resetErrorBoundary();
  };

  return (
    <div className="error-fallback-wrapper">
      <div className="inner">
        <h2 className="title">{title}</h2>
        <p className="content">{content}</p>
        <button type="button" onClick={onClickHandler}>
          재접속 하기
        </button>
      </div>
    </div>
  );
}

export default ErrorFallback;
