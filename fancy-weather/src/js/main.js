import createDiv from './div';
import createWeather from './map/map';
import createMap from './weather/weather';

const createMain = () => {
  const main = createDiv('main');
  const weather = createWeather();
  const map = createMap();
  main.append(map, weather);

  return main;
}

export default createMain;