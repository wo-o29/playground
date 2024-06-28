import { useState } from "react";
import useToast from "@/hooks/useToast";

const key = "Nje0yEa8C31DXnWv9s72ejSQ1becaiLf6Hz8dTpYJQMD4cP27agyK2V6%2B2dduwneC2RC0%2FOJgmJoyKSNroiwwQ%3D%3D";

const api = async () => {
  try {
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
    console.log("Response data:", data);
  } catch (error) {
    console.error("Error:", error);
  }
};

export default function Home() {
  const [id, setId] = useState(1);
  const { pendingToast, successToast, errorToast, infoToast, warningToast } = useToast();

  const handleToastButtonClick = async () => {
    setId((prev) => prev + 1);
    pendingToast(api, {
      pending: "Loading data...",
      success: "Data fetched successfully 👌",
      error: "Failed to fetch data 🤯",
    });
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
