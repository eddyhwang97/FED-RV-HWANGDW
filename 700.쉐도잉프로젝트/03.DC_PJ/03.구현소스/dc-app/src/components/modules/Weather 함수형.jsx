import { useEffect, useState } from "react";
import axios from "axios";
import "../../css/modules/weather.scss";

const Weather = () => {
  // 상태 변수 선언
  const [weatherData, setWeatherData] = useState({
    temp: "",
    desc: "",
    icon: "",
    loading: true,
    city: "",
  });

  useEffect(() => {
    // 도시 이름
    const cityName = "Seoul";
    // 날씨 정보 조회 키코드
    const apiKey = "7fdf8fb74f3e2ed02bfb7e298a32df49";
    // 날씨 정보 조회 URL
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    // axios를 이용한 데이터 조회
    axios
      .get(url)
      .then((res) => {
        const wData = res.data;
        // 상태 변수 업데이트
        setWeatherData({
          temp: wData.main.temp,
          desc: wData.weather[0].description,
          icon: wData.weather[0].icon,
          loading: false,
          city: cityName,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // 날씨 아이콘 URL
  const isrc = `https://openweathermap.com/img/w/${weatherData.icon}.png`;

  // 로딩 중일 때 출력
  if (weatherData.loading) {
    return <h4>Loading...</h4>; // 로딩 중일 때
  } else {
    // 절대온도를 섭씨온도로 변환
    let ctemp = (parseInt(weatherData.temp) - 273.15).toFixed(1);

    return (
      <div className="weather-bx">
        <h4>Now Weather</h4>
        <h5>{weatherData.city}</h5>
        <img src={isrc} alt="weather icon" />
        <p>{ctemp}℃</p>
        <p>{weatherData.desc}</p>
      </div>
    ); // 날씨 정보 출력
  } // 로딩 완료 시
}; // Weather 컴포넌트 끝

export default Weather; // Weather 컴포넌트 내보내기 끝