import {
  WEATHER_APPID,
} from '../constants/keys';
import { getStorage } from '../storage';

const requestWeather = async () => {
  const weatherUrl = `http://api.openweathermap.org/data/2.5/forecast?lat=${getStorage('lat')}&lon=${getStorage('lon')}&lang=${getStorage('lang')}&units=metric&APPID=${WEATHER_APPID}`;
  const weather = await fetch(weatherUrl);
  const weatherData = await weather.json();

  return weatherData;
}

export default requestWeather;