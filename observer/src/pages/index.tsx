import useToast from "@/hooks/useToast";

const api = async () => {
  const response = await fetch(
    "http://apis.data.go.kr/B551177/StatusOfPassengerWorldWeatherInfo/getPassengerArrivalsWorldWeather?serviceKey=Nje0yEa8C31DXnWv9s72ejSQ1becaiLf6Hz8dTpYJQMD4cP27agyK2V6%2B2dduwneC2RC0%2FOJgmJoyKSNroiwwQ%3D%3D&numOfRows=10000000&pageNo=1&from_time=0000&to_time=2400&lang=K&type=json"
  );
  await fetch(
    "http://apis.data.go.kr/B551177/StatusOfPassengerWorldWeatherInfo/getPassengerArrivalsWorldWeather?serviceKey=Nje0yEa8C31DXnWv9s72ejSQ1becaiLf6Hz8dTpYJQMD4cP27agyK2V6%2B2dduwneC2RC0%2FOJgmJoyKSNroiwwQ%3D%3D&numOfRows=10000000&pageNo=1&from_time=0000&to_time=2400&lang=K&type=json"
  );
  await fetch(
    "http://apis.data.go.kr/B551177/StatusOfPassengerWorldWeatherInfo/getPassengerArrivalsWorldWeather?serviceKey=Nje0yEa8C31DXnWv9s72ejSQ1becaiLf6Hz8dTpYJQMD4cP27agyK2V6%2B2dduwneC2RC0%2FOJgmJoyKSNroiwwQ%3D%3D&numOfRows=10000000&pageNo=1&from_time=0000&to_time=2400&lang=K&type=json"
  );
  await fetch(
    "http://apis.data.go.kr/B551177/StatusOfPassengerWorldWeatherInfo/getPassengerArrivalsWorldWeather?serviceKey=Nje0yEa8C31DXnWv9s72ejSQ1becaiLf6Hz8dTpYJQMD4cP27agyK2V6%2B2dduwneC2RC0%2FOJgmJoyKSNroiwwQ%3D%3D&numOfRows=10000000&pageNo=1&from_time=0000&to_time=2400&lang=K&type=json"
  );

  // throw new Error("Failed to load data.");
  const data = await response.json();
  return data;
};

export default function Home() {
  const { pendingToast, successToast, errorToast, infoToast, warningToast } = useToast();

  const handleToastButtonClick = async () => {
    const response = await pendingToast(api, {
      pending: "Loading data...",
      success: "Data fetched successfully 👌",
      error: "Failed to fetch data 🤯",
    });
    console.log(response);
  };

  return (
    <div
      style={{
        margin: "30px 50px",
        display: "flex",
        gap: "20px",
      }}
    >
      <button onClick={handleToastButtonClick}>토스트 버튼</button>
      <button onClick={() => successToast("성공!")}>이삭 토스트</button>
      <button onClick={() => errorToast("에러!")}>햄치즈계란 토스트</button>
      <button onClick={() => infoToast("ㅇ_ㅇ!")}>석봉 토스트</button>
      <button onClick={() => warningToast("경고!")}>바삭 토스트</button>
    </div>
  );
}
