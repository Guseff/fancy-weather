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
import { searchInput } from './controls/search';

export let timeZone;

export const requestWeather = async (lang, city) => {

  try {
    let lat, lon;
    if (!city) {
      const ipUrl = `http://ipinfo.io?token=${IP_TOKEN}`;
      const place = await fetch(ipUrl);
      const placeData = await place.json();

      [lat, lon] = placeData.loc.split(',');
      setCity(placeData.city, placeData.country);
    } else {
      const cityUrl =`https://api.opencagedata.com/geocode/v1/json?q=${city}&language=${lang}&key=${CITY_KEY}`;
      const place = await fetch(cityUrl);
      const placeData = await place.json();
      // console.log(placeData);
      [lat, lon] = [
        placeData.results[0].geometry.lat,
        placeData.results[0].geometry.lng
      ];
      const c = placeData.results[0].components.city ? placeData.results[0].components.city : placeData.results[0].components.state;
      setCity(c, placeData.results[0].components.country);
    }
    setMapCenter(lon, lat);
    
    const weatherUrl = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&lang=${lang}&units=metric&APPID=${WEATHER_APPID}`;
    const weather = await fetch(weatherUrl);
    const weatherData = await weather.json();

    timeZone = weatherData.city.timezone;
    setWeather(weatherData.list[0], 'c');
    setNextWeather(weatherData.list, 'c');
    
  } catch (err) {
    console.log('error ', err);
  }
}