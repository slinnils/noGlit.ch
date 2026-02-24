import classes from "./weather.module.css";
import weatherIconChange from "../WeatherApp/util/weatherIconChange";

export default function LocationForecast({ place, country, weather }) {
  if(!weather) return null
  const date = new Date(weather.time);
  return (
    <>
      <div className={classes.locationForecast}>
        <h2 className={classes.locationHeader}>
          {place}, {country}
          <br />
          <span>{date.toLocaleDateString("de-CH")}</span>
        </h2>

        <img src={weatherIconChange(weather.weather_code)} alt="" />
        <p className={classes.localTemp}>
          {Math.round(weather.temperature_2m)}°
        </p>
      </div>
      <div className={classes.locationForecastDetails}>
        <div className={classes.dataCard}>
          <p>Feels Like</p>
          <span>{Math.round(weather.apparent_temperature)}°</span>
        </div>
        <div className={classes.dataCard}>
          <p>Humidity</p>
          <span>{Math.round(weather.relative_humidity_2m)}%</span>
        </div>
        <div className={classes.dataCard}>
          <p>Wind</p>
          <span>{Math.round(weather.wind_speed_10m)}km/h</span>
        </div>
        <div className={classes.dataCard}>
          <p>Precipitation</p>
          <span>{Math.round(weather.precipitation)} cm</span>
        </div>
      </div>
    </>
  );
}
