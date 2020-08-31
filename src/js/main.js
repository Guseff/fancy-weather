import createDiv from './div';
import createMap from './map/map';
import createWeather from './weather/weather';
import createLanLot from './map/lon-lat';

const createMain = () => {
  const main = createDiv('main');
  const weather = createWeather();
  const mapWrap = createDiv('main-map');
  const mapBox = createMap();
  const lanLot = createLanLot();
  mapWrap.append(mapBox, lanLot);
  main.append(weather, mapWrap);

  return main;
}

export default createMain;