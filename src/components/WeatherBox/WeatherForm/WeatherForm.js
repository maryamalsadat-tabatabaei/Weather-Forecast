import React, { useRef, useState } from "react";
import Input from "../../UI/Input/Input";
import Spinner from "../../UI/Loading/Spinner";
import "./WeatherForm.css";
import { useNavigate } from "react-router-dom";
export default function WeatherForm(props) {
  const navigate = useNavigate();
  const enteredCityNameRef = useRef();
  const [weatherData, setWeatherData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchWeatherHandler = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    console.log("name", enteredCityNameRef.current.value);
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${enteredCityNameRef.current.value}&appid=0afc3f212a389e811dec06427401befe`
    );

    console.log(response);
    if (!response.ok) {
      navigate("/notfound", { replace: true });
      return;
    }
    setIsLoading(false);
    const data = await response.json();
    setWeatherData(data);
    navigate(`/weather/${enteredCityNameRef.current.value}`, {
      state: data,
    });
  };
  return (
    <>
      <form>
        <div className="form-group">
          <Input
            type="text"
            placeholder="Please enter a city name..."
            ref={enteredCityNameRef}
          />
          <button className="btn" onClick={fetchWeatherHandler}>
            Search
          </button>
        </div>
      </form>
      {/* {isLoading && <Spinner />} */}
    </>
  );
}
