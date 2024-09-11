import React, { startTransition, useDeferredValue } from "react";

// 기본 Input 컴포넌트
const Input = ({ type, ...props }) => <input type={type} {...props} />;

// Label 컴포넌트
const Label = ({ children, ...props }) => <label {...props}>{children}</label>;

// 에러 메시지 컴포넌트
const ErrorMessage = ({ message }) => <span style={{ color: "red" }}>{message}</span>;

// 합성 컴포넌트 생성
const FormField = Object.assign(({ children }) => <div className="form-field">{children}</div>, {
  Input,
  Label,
  ErrorMessage,
});

// 사용 예시
const Form = () => (
  <form>
    <FormField>
      <FormField.Label htmlFor="name">이름:</FormField.Label>
      <FormField.Input type="text" id="name" name="name" />
      <FormField.ErrorMessage message="이름을 입력해주세요." />
    </FormField>
    <FormField>
      <FormField.Label htmlFor="email">이메일:</FormField.Label>
      <FormField.Input type="email" id="email" name="email" />
      <FormField.ErrorMessage message="유효한 이메일 주소를 입력해주세요." />
    </FormField>
  </form>
);

const Home = () => {
  function handleClick() {
    startTransition(() => {
      console.log("comments");
    });
  }

  return (
    <div>
      <Form />
    </div>
  );
};

export default Home;
