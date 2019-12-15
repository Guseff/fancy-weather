import {
  WEATHER_APPID,
} from '../constants/keys';
import { getStorage } from '../storage';

const requestWeather = async () => {
  const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${getStorage('lat')}&lon=${getStorage('lon')}&lang='en'&units=metric&APPID=${WEATHER_APPID}`;
  const weather = await fetch(weatherUrl);
  const weatherData = await weather.json();
  
  sessionStorage.setItem('weather', weatherData.list[0].weather[0].main);
  const period = weatherData.list[0].sys.pod === 'd' ? 'day' : 'night';
  sessionStorage.setItem('period', period);
  return weatherData;
}

export default requestWeather;