import { useState, useEffect } from "react";
import GetDay from "../../helper/GetDay";
import WeatherList from "../../components/WeatherBox/WeatherList/WeatherList";
import WeatherForm from "../../components/WeatherBox/WeatherForm/WeatherForm";
import { useLocation } from "react-router";
import classes from "./WeatherDetail.module.css";
export default function WeatherDetail() {
  const [weatherInfo, setWeatherInfo] = useState({});
  const [weatherDays, setWeatherDays] = useState([]);
  const location = useLocation();

  console.log("data", location.state);

  const days = new Array(5);
  const array = [8, 16, 24, 32];
  for (let key in array) {
    let date = location.state.list[array[key]].dt_txt;
    let description = location.state.list[array[key]].weather[0].description;
    let temp = Math.round(location.state.list[array[key]].main.temp - 273.15);
    let icon = `http://openweathermap.org/img/wn/${
      location.state.list[array[key]].weather[0].icon
    }@4x.png`;
    days.push({
      date: date,
      description: description,
      temp: temp,
      icon: icon,
    });
  }

  useEffect(() => {
    setWeatherDays(days);
    setWeatherInfo({
      date: location.state.list[0].dt_txt,
      name: location.state.city.name,
      description: location.state.list[0].weather[0].description,
      temp: Math.round(location.state.list[0].main.temp - 273.15),
      icon: `http://openweathermap.org/img/wn/${location.state.list[0].weather[0].icon}@4x.png`,
    });
  }, [location.state]);

  return (
    <>
      <div className={classes.form}>
        <WeatherForm />
      </div>

      <div className={classes.inner_main}>
        <img src={weatherInfo.icon} />
        <div className={classes.today}>
          <span>{GetDay(weatherInfo.date)}</span>
          <h1>{weatherInfo.name}</h1>
          <p>
            Temperature: {weatherInfo.temp}
            °C
          </p>
          <p>{weatherInfo.description}</p>
        </div>
      </div>
      <WeatherList days={weatherDays} />
    </>
  );
}
