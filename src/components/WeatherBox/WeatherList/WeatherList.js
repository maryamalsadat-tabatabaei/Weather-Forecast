import React from "react";
import GetDay from "../../../helper/GetDay";
import "./WeatherList.css";
export default function WeatherList(props) {
  console.log("days", props.days);
  return (
    <ul className="weather-box-list">
      {props.days.map((item, index) => {
        return (
          <li key={index}>
            <div className="weather-box">
              <h1>{GetDay(item.date)}</h1>
              <img src={item.icon} alt="weatherIcon" />
              <span className="temp">
                {item.temp}
                °C
              </span>
              {/* <p>{item.description}</p> */}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
