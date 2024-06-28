import axios from "axios";
import { useState } from "react";
import { kelvinToCelsius } from "@/utils/kelvinToCelsius";
import { translateWeatherToKorean } from "@/utils/translateWeatherToKorean";

const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY;
const CITY = "Seoul";
const url = `http://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}`;

export type TMainWeather =
  | "맑음"
  | "구름"
  | "비"
  | "눈"
  | "천둥"
  | "이슬비"
  | "안개"
  | "강풍"
  | "알 수 없음";

type TWeatherData = {
  main: TMainWeather;
  temp: number;
  minTemp: number;
  maxTemp: number;
  feelTemp: number;
};

export default function Home() {
  const [data, setData] = useState<TWeatherData>();
  const fetchData = async () => {
    const res = await axios.get(url);
    const data = res.data;
    setData({
      main: translateWeatherToKorean(data.weather[0].main),
      temp: kelvinToCelsius(data.main.temp),
      minTemp: kelvinToCelsius(data.main.temp_min),
      maxTemp: kelvinToCelsius(data.main.temp_max),
      feelTemp: kelvinToCelsius(data.main.feels_like),
    });
  };

  return (
    <>
      <button type="button" onClick={() => fetchData()}>
        API 테스트
      </button>

      <div>날씨: {data?.main}</div>
      <div>평균 기온: {data?.temp}</div>
      <div>최저 기온: {data?.minTemp}</div>
      <div>최고 기온: {data?.maxTemp}</div>
      <div>체감 온도: {data?.feelTemp}</div>
    </>
  );
}
