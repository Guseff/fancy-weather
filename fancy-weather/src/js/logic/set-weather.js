import { nowWeather } from '../weather/today';
import translate from '../languages';
import getFahrenheit from '../logic/fahrenheit';
import getApparent from '../logic/apparent';
import { getStorage } from '../storage';

const setWeather = (obj) => {
  const degrees = getStorage('degrees');
  const tt = degrees === 'c' ? '' + Math.round(obj.main.temp) : '' + Math.round(getFahrenheit(obj.main.temp));
  const appTT = getApparent(obj.main.temp, obj.main.humidity, obj.wind.speed);
  const apparent = degrees === 'c' ? '' + Math.round(appTT) : '' + Math.round(getFahrenheit(appTT));
  const tempString = (tt[0] === '0' || tt[0] === '-') ? `${tt}°`: `+${tt}°`;
  const apparentString = (apparent[0] === '0' || apparent[0] === '-') ? `${apparent}°`: `+${apparent}°`;
  console.log(obj);
  nowWeather.todayTemp.innerText = tempString;
  nowWeather.todayIcon.src = `http://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`;
  nowWeather.todaySummary.innerText = translate(`com.weather.${[obj.weather[0].id]}`);
  nowWeather.todayApparent.innerText = `${translate('com.weather.feels')}: ${apparentString}`;
  nowWeather.todayWind.innerText = `${translate('com.weather.wind')}: ${obj.wind.speed} ${translate('com.weather.ms')}`;
  nowWeather.todayHumidity.innerText = `${translate('com.weather.humidity')}: ${obj.main.humidity}%`
}

export default setWeather;