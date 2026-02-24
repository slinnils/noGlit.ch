import rain from "../../../assets/weather-app/weather-app-assets/icon-rain.webp";
import drizzle from "../../../assets/weather-app/weather-app-assets/icon-drizzle.webp";
import snow from "../../../assets/weather-app/weather-app-assets/icon-snow.webp";
import fog from "../../../assets/weather-app/weather-app-assets/icon-fog.webp";
import storm from "../../../assets/weather-app/weather-app-assets/icon-storm.webp";
import cloudy from "../../../assets/weather-app/weather-app-assets/icon-overcast.webp";
import partCloud from "../../../assets/weather-app/weather-app-assets/icon-partly-cloudy.webp";
import sunny from "../../../assets/weather-app/weather-app-assets/icon-sunny.webp";

function weatherIconChange(code) {
  if (code === 0) return sunny;

  if (code >= 1 && code <= 3) return partCloud;

  if (code === 45 || code === 48) return fog;

  if (code >= 51 && code <= 57) return drizzle;

  if (code >= 61 && code <= 67) return rain;

  if (code >= 71 && code <= 77) return snow;

  if (code >= 80 && code <= 82) return rain;

  if (code >= 95) return storm;

  return cloudy;
}

export default weatherIconChange
