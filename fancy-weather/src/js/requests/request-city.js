import {
  CITY_KEY,
  IP_TOKEN,
} from '../constants/keys';

import { setMapCenter } from '../map/map';
import setCity from '../logic/set-city';
import setCityRequestResult from '../logic/set-city-request-result';
import { getStorage, setStorage } from '../storage';

const requestCity = async (city) => {
  try {
    let lat, lon;
    if (!city) {
      const ipUrl = `http://ipinfo.io?lang=${getStorage('lang')}&token=${IP_TOKEN}`;
      const place = await fetch(ipUrl);
      const placeData = await place.json();
      console.log(placeData);
      [lat, lon] = placeData.loc.split(',');
      setCityRequestResult(placeData.city, placeData.country, lon, lat);
    } 
    const region = !city ? `${getStorage('city')} ${getStorage('country')}` : city;
    const cityUrl =`https://api.opencagedata.com/geocode/v1/json?q=${region}&language=${getStorage('lang')}&key=${CITY_KEY}`;
    console.log(cityUrl);
    const place = await fetch(cityUrl);
    const placeData = await place.json();
    
    if (placeData.results.length > 0) {
      [lat, lon] = [
        placeData.results[0].geometry.lat,
        placeData.results[0].geometry.lng
      ];
      let c = placeData.results[0].components;
      if (c.city) {
        c = c.city;
      } else if (c.county) {
        c = c.county;
      } else {
        c = c.state;
      }
      console.log(c, placeData.results[0].components.country);

      setCityRequestResult(c, placeData.results[0].components.country, lon, lat);
      setCity(c, placeData.results[0].components.country);
      setMapCenter(lon, lat);
    } else {
      console.log('No such city...');
    }
  } catch (err) {
    console.log('error ', err);
  }
}

export default requestCity;