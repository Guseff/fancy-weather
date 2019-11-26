import { nowWeather } from '../weather/today';

const setWeather = (obj, degrees) => {
  const val = degrees === 'c' ? '°C' : '°F';
  const tt = '' + Math.round(obj.main.temp);
  const tempString = (tt[0] === '0' || tt[0] === '-') ? `${tt}°`: `+${tt}°`;
  nowWeather.todayTemp.innerText = tempString;
  nowWeather.todayIcon.src = `http://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`;
  nowWeather.todaySummary.innerText = obj.weather[0].description;
  nowWeather.todayApparent.innerText = `Feels like ${tempString}`;
  nowWeather.todayWind.innerText = `Wind: ${obj.wind.speed} m/s`;
  nowWeather.todayHumidity.innerText = `Humidity: ${obj.main.humidity}%`
}

export default setWeather;