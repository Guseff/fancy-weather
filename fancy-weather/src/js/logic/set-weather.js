import {
  todayTemp,
  todayIcon,
  todaySummary,
  todayApparent,
  todayWind,
  todayHumidity
} from '../weather/today';

const setTemp = (obj, degrees) => {
  console.log(obj);
  const val = degrees === 'c' ? '°C' : '°F';
  const tt = Math.round(obj.main.temp);
  todayTemp.innerText = `${tt}${val}`;
  todayIcon.src = `http://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`;
  todaySummary.innerText = obj.weather[0].description;
  todayApparent.innerText = `Feels like ${tt}${val}`;
  todayWind.innerText = `Wind: ${obj.wind.speed} m/s`;
  todayHumidity.innerText = `Humidity: ${obj.main.humidity}%`
}

export default setTemp;