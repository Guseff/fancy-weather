import createDiv from './div';
import createMap from './map/map';
import createWeather from './weather/weather';

const createMain = () => {
  const main = createDiv('main');
  const weather = createWeather();
  const mapBox = createMap([-122.0, 37.0]);
  main.append(weather, mapBox);

  return main;
}

export default createMain;