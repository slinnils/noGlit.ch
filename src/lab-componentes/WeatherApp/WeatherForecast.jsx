import classes from "./weather.module.css";
import weatherIconChange from "./util/weatherIconChange"

export default function WeatherForecast({ weather }) {
  if (!weather) return null;

  return (
    <div className="flex flex-col card">
      <h3 className={classes.title}>Daily forecast</h3>
      <div className={classes.forecastSection}>
        {weather.max.map((card, i) => (
          <div key={i} className="inner-card">
            <h2>
              {weather.time[i].toLocaleDateString("en-US", {
                weekday: "short",
              })}
            </h2>
            <img src={weatherIconChange(weather.weather_code?.[i])} alt="" />
            <div className={classes.minMaxTemp}>
              <p>{Math.round(weather.min[i])}°</p>
              <p>{Math.round(weather.max[i])}°</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
