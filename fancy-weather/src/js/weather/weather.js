import createDiv from '../div';
import createToday from './today';

const createWeather = () => {
  const today = createToday();
  const weather = createDiv('main');

  weather.append(today);

  return weather;
}

export default createWeather;