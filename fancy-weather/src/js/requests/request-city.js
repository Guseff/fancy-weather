import {
  CITY_KEY,
  IP_TOKEN,
} from '../constants/keys';

import { setMapCenter } from '../map/map';
import setCityRequestResult from '../logic/set-city-request-result';
import { getStorage, setStorage } from '../storage';

const requestCity = async (city) => {
  try {
    let lat, lon;
    if (!city) {
      const ipUrl = `http://ipinfo.io?token=${IP_TOKEN}`;
      const place = await fetch(ipUrl);
      const placeData = await place.json();

      [lat, lon] = placeData.loc.split(',');
      setCityRequestResult(placeData.city, placeData.country, lon, lat);
    } else {
      const cityUrl =`https://api.opencagedata.com/geocode/v1/json?q=${city}&language=${getStorage('lang')}&key=${CITY_KEY}`;
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
        
        setCityRequestResult(c, placeData.results[0].components.country, lon, lat);
        setMapCenter(lon, lat);
      } else {
        console.log('No such city...');
      }
    }
  } catch (err) {
    console.log('error ', err);
  }
}

export default requestCity;