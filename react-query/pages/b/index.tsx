import axios from "axios";
import { UserInfoType } from "..";

export async function getServerSideProps() {
  // 요청 시점에 데이터 가져오기
  const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/1`);
  const data = response.data as UserInfoType;
  const result = [
    {
      userId: 5,
      id: 5,
      title: "string",
      completed: true,
    },
    data,
  ];

  return {
    props: {
      result,
    },
  };
}

export default function Test({ result }: any) {
  if (!result) {
    return null;
  }

  return (
    <div>
      <h1>Welcome to my website</h1>
      <ul>
        {result?.map((item: any) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
