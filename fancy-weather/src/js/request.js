import {
  CITY_KEY,
  IP_TOKEN,
  WEATHER_APPID,
} from './constants/keys';
import setCity from './logic/set-city';
import setWeather from './logic/set-weather';
import setNextWeather from './logic/set-next-weather';
import { setMapCenter } from './map/map';
import { getStorage, setStorage } from './storage';
import setCityRequestResult from './logic/set-city-request-result';

export let timeZone;

export const requestWeather = async (lang, city) => {

  try {
    let lat, lon;
    if (!city) {
      const ipUrl = `http://ipinfo.io?token=${IP_TOKEN}`;
      const place = await fetch(ipUrl);
      const placeData = await place.json();

      [lat, lon] = placeData.loc.split(',');
      setCityRequestResult(placeData.city, placeData.country, lon, lat);
    } else {
      const cityUrl =`https://api.opencagedata.com/geocode/v1/json?q=${city}&language=${lang}&key=${CITY_KEY}`;
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
    
    const weatherUrl = `http://api.openweathermap.org/data/2.5/forecast?lat=${getStorage('lat')}&lon=${getStorage('lon')}&lang=${lang}&units=metric&APPID=${WEATHER_APPID}`;
    const weather = await fetch(weatherUrl);
    const weatherData = await weather.json();

    timeZone = weatherData.city.timezone;
    setWeather(weatherData.list[0], getStorage('degrees'));
    setNextWeather(weatherData.list, getStorage('degrees'));
    
  } catch (err) {
    console.log('error ', err);
  }
}