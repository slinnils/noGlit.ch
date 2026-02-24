import classes from "./weather.module.css";
import weatherIconChange from "../../util/weatherIconChange.js";

export default function HourlyForecast({ weather }) {
    if(!weather)return null
  return (
    <div className={classes.hourlyForecast}>
      <h2>Hourly forecast</h2>

      {weather.time.map((card, i) => (
        <div key={i} className={`flex items-center ${classes.hourlyCards}`}>
          <img src={weatherIconChange(weather.weather_code[i])} alt="" />
          <p>
            {weather.time[i].toLocaleString("de-CH", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
          <span>{Math.round(weather.temp?.[i])}°</span>
        </div>
      ))}
    </div>
  );
}

