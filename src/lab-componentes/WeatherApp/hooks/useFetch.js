import { fetchWeatherApi } from "openmeteo";
import { useState } from "react";

export default function useFetchLocation(place) {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [fetchedLocation, setFetchedLocation] = useState(place);
  const [weatherData, setWeatherData] = useState(null);

  async function fetchLocation(place) {
    setIsFetching(true);

    try {
      const geoResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${place}&count=10&language=en&format=json`,
      );

      const geoData = await geoResponse.json();

      const location = geoData.results?.[0];
      if (!location) {
        throw new Error("Place not found");
      }

      const { latitude, longitude, name, country } = location;

      setFetchedLocation({
        name,
        country,
        latitude,
        longitude,
      });
      const params = {
        latitude,
        longitude,
        daily: ["temperature_2m_max", "temperature_2m_min", "weather_code"],
        hourly: ["", "temperature_2m", "rain", "showers", "snowfall", "weather_code"],
        current: [
          "rain",
          "showers",
          "snowfall",
          "weather_code",
          "temperature_2m",
          "relative_humidity_2m",
          "apparent_temperature",
          "is_day",
          "wind_speed_10m",
          "precipitation",
        ],
        timezone: "Europe/Berlin",
        forecast_hours: 24,
      };

      const url = "https://api.open-meteo.com/v1/forecast";
      const responses = await fetchWeatherApi(url, params);
      const weatherResponse = responses[0];

      const elevation = weatherResponse.elevation();
      const timezone = weatherResponse.timezone();
      const timezoneAbbreviation = weatherResponse.timezoneAbbreviation();
      const utcOffsetSeconds = weatherResponse.utcOffsetSeconds();

      console.log(
        `\nCoordinates: ${latitude}°N ${longitude}°E`,
        `\nElevation: ${elevation}m asl`,
        `\nTimezone: ${timezone} ${timezoneAbbreviation}`,
        `\nTimezone difference to GMT+0: ${utcOffsetSeconds}s`,
      );

      const current = weatherResponse.current();
      const hourly = weatherResponse.hourly();
      const daily = weatherResponse.daily();

      const weatherData = {
        current: {
          time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
          rain: current.variables(0).value(),
          showers: current.variables(1).value(),
          snowfall: current.variables(2).value(),
          weather_code: current.variables(3).value(),
          temperature_2m: current.variables(4).value(),
          relative_humidity_2m: current.variables(5).value(),
          apparent_temperature: current.variables(6).value(),
          is_day: current.variables(7).value(),
          wind_speed_10m: current.variables(8).value(),
          precipitation: current.variables(9).value(),
        },
        hourly: {
          time: Array.from(
            {
              length:
                (Number(hourly.timeEnd()) - Number(hourly.time())) /
                hourly.interval(),
            },
            (_, i) =>
              new Date(
                (Number(hourly.time()) +
                  i * hourly.interval() +
                  utcOffsetSeconds) *
                  1000,
              ),
          ).slice(0, 8),
          weather_code: Array.from(hourly.variables(1).valuesArray()),
          rain: hourly.variables(2).valuesArray(),
          showers: hourly.variables(3).valuesArray(),
          snowfall: hourly.variables(4).valuesArray(),
          temp: hourly.variables(0).valuesArray(),
        },
        daily: {
          time: Array.from(
            {
              length:
                (Number(daily.timeEnd()) - Number(daily.time())) /
                daily.interval(),
            },
            (_, i) =>
              new Date(
                (Number(daily.time()) +
                  i * daily.interval() +
                  utcOffsetSeconds) *
                  1000,
              ),
          ),
          max: Array.from(daily.variables(0).valuesArray()),
          min: Array.from(daily.variables(1).valuesArray()),
		weather_code: Array.from(daily.variables(2).valuesArray()),
        },
      };

      setWeatherData(weatherData);
    } catch (error) {
      setError({ message: error.message || "failed to fetch data!" });
    } finally {
      setIsFetching(false);
    }
  }

  return {
    isFetching,
    fetchedLocation,
    fetchLocation,
    error,
    weatherData,
  };
}
