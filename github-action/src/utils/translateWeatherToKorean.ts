import { TMainWeather } from "@/pages";

export const translateWeatherToKorean = (weather: string): TMainWeather => {
  switch (weather) {
    case "Clear":
      return "맑음";
    case "Clouds":
      return "구름";
    case "Rain":
      return "비";
    case "Snow":
      return "눈";
    case "Thunderstorm":
      return "천둥";
    case "Drizzle":
      return "이슬비";
    case "Mist" || "Fog" || "Smoke" || "Haze" || "Dust" || "화산재" || "모래":
      return "안개";
    case "Squall" || "Tornado":
      return "강풍";
    default:
      return "알 수 없음";
  }
};

// "Clear": 맑음
// "Clouds": 구름
// "Rain": 비
// "Snow": 눈
// "Thunderstorm": 천둥 번개
// "Drizzle": 이슬비
// "Mist": 안개
// "Smoke": 연기
// "Haze": 안개 또는 스모그
// "Dust": 먼지
// "Fog": 안개
// "Sand": 모래
// "Ash": 화산재
// "Squall": 돌풍
// "Tornado": 토네이도
