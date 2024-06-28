import { UserInfoType } from "@/pages";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import axios from "axios";

interface type {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetchTodo = async (): Promise<type> => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/todosa/10");
  // throw new Error("하위 컴포넌트 API 에러");
  return res.data;
};

function Test() {
  const { data } = useQuery<UserInfoType>({
    queryKey: ["todos", "10"],
    queryFn: fetchTodo,
    retry: 0,
  });

  return (
    <>
      <div>--- 테스트 컴포넌트 ---</div>
      <div>{`유저 ID: ${data?.userId}`}</div>
      <div>{`ID: ${data?.id}`}</div>
      <div>{`제목: ${data?.title}`}</div>
      <div>{`상태: ${data?.completed}`}</div>
      {/* <button onClick={() => refetch()}>재요청</button> */}
    </>
  );
}

export default Test;
