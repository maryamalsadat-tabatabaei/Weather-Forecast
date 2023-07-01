import React from "react";
import WeatherForm from "../../components/WeatherBox/WeatherForm/WeatherForm";
import "./Weather.css";
export default function Weather() {
  return (
    <>
      <div className="inner-main">
        <h1 className="title">Weather Forecast</h1>
      </div>
      <WeatherForm />
    </>
  );
}
