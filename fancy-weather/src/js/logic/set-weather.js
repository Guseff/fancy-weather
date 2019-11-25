import { nowWeather } from '../weather/today';

const setWeather = (obj, degrees) => {
  const val = degrees === 'c' ? '°C' : '°F';
  const tt = Math.round(obj.main.temp);
  nowWeather.todayTemp.innerText = `${tt}°`;
  nowWeather.todayIcon.src = `http://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`;
  nowWeather.todaySummary.innerText = obj.weather[0].description;
  nowWeather.todayApparent.innerText = `Feels like ${tt}${val}`;
  nowWeather.todayWind.innerText = `Wind: ${obj.wind.speed} m/s`;
  nowWeather.todayHumidity.innerText = `Humidity: ${obj.main.humidity}%`
}

export default setWeather;