import createLang from './lang';
import createDegrees from './degrees';
import createBkg from './bkg';

const createWeather = () => {
  const weather = document.createElement('div');
  weather.classList.add('weather-container');

  weather.append();

  return weather;
} 

export default createWeather;