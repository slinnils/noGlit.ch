import { useEffect, useState } from "react";
import useFetchLocation from "../../hooks/useFetch.js";
import HourlyForecast from "./HourlyForecast.jsx";
import LocationForecast from "./LocationForecast.jsx";
import classes from "./weather.module.css";
import WeatherForecast from "./WeatherForecast.jsx";
import mag from "../../assets/weather-app-assets/icon-search.svg";

export default function WeatherApp() {
  const [place, setPlace] = useState("");

  const { fetchLocation, fetchedLocation, weatherData, isFetching, error } =
    useFetchLocation();

  useEffect(() => {
    fetchLocation(JSON.parse(localStorage.getItem("location") || "Berlin"));
  }, []);

  function handlePlaceInput(event) {
    setPlace(event.target.value);
  }

  return (
    <section className={classes.mainWeather}>
      <h1>How's the sky looking today?</h1>
      <div className={classes.searchBar}>
        <img src={mag} />
        <input
          value={place}
          onChange={handlePlaceInput}
          name="search-bar"
          placeholder="Please enter a Place..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              fetchLocation(place);
              setPlace("");
              localStorage.setItem("location", JSON.stringify(place))
            }
          }}
        />
        <button
          onClick={() => {
            fetchLocation(place);
            setPlace("");
            localStorage.setItem("location", JSON.stringify(place));
          }}
        >
          Search
        </button>
      </div>

      {isFetching ? (
        <p className={classes.placeholder}>Weather data is loading...</p>
      ) : (
        <>
          <LocationForecast
            place={fetchedLocation?.name}
            country={fetchedLocation?.country}
            weather={weatherData ? weatherData.current : null}
          />
          <WeatherForecast
            weather={weatherData ? weatherData.daily : null}
            isFetching={isFetching}
          />
          <HourlyForecast weather={weatherData ? weatherData.hourly : null} />
        </>
      )}
    </section>
  );
}
