import { nextArr } from '../weather/next';
import translate from '../languages';
import getFahrenheit from '../logic/fahrenheit';

const setNextWeather = (arr, degrees) => {
  nextArr.forEach((el, i) => {
    const tt = degrees === 'c' ? '' + Math.round(arr[(i + 1) * 8].main.temp) : '' + Math.round(getFahrenheit(arr[(i + 1) * 8].main.temp));
    const tempString = (tt[0] === '0' || tt[0] === '-') ? `${tt}°`: `+${tt}°`;
    const day = new Date(arr[(i + 1) * 8].dt * 1000);
    
    el.querySelector('.next-day').innerText = translate(`com.week.${day.getDay()}`);
    el.querySelector('.next-temp').innerText = tempString;
    el.querySelector('.next-icon').src = `http://openweathermap.org/img/wn/${arr[(i + 1) * 8].weather[0].icon}@2x.png`;
  });
}

export default setNextWeather;