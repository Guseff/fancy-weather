import setCity from './set-city';
import { setStorage } from '../storage'; 

const setCityRequestResult = (name, country, lon, lat) => {
  setCity(name, country);
  setStorage('lon', lon);
  setStorage('lat', lat);
}

export default setCityRequestResult;