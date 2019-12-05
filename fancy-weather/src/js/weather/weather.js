import createDiv from '../div';
import createToday from './today';
import createNextArray from './next';

const createWeather = () => {
  const today = createToday();
  const next = createNextArray();
  const weather = createDiv('main');

  weather.append(today, next);

  return weather;
}

export default createWeather;