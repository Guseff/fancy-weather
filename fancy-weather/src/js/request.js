import setCity from './logic/set-city';
import setWeather from './logic/set-weather';
import { getStorage, setStorage } from './storage';
import { searchInput } from './controls/search';

export let timeZone;

export const requestWeather = async (lang, city) => {
  try {
    let lat, lon;
    if (!city) {
      const ipUrl = `http://ipinfo.io?token=f37edba9afa8ce`;
      const place = await fetch(ipUrl);
      const placeData = await place.json();

      [lat, lon] = placeData.loc.split(',');
      setCity(placeData.city, placeData.country);
    } else {
      const cityUrl =`https://api.opencagedata.com/geocode/v1/json?q=${city}&language=${lang}&key=00176103bd074775a35e07ce732ab127`;
      const place = await fetch(cityUrl);
      const placeData = await place.json();
      [lat, lon] = [
        placeData.results[0].geometry.lat,
        placeData.results[0].geometry.lng
      ];
      const c = placeData.results[0].components.city ? placeData.results[0].components.city : placeData.results[0].components.state;
      setCity(c, placeData.results[0].components.country);
      console.log(lang, placeData.results[0]);
    }

    const weatherUrl = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&lang=${lang}&units=metric&APPID=c09c4ffaf69055257be3ac07f2dcd9cd`;
    const weather = await fetch(weatherUrl);
    const weatherData = await weather.json();
    // setCity(weatherData.city.name, weatherData.city.country);
    console.log(weatherData);

    timeZone = weatherData.city.timezone;
    setWeather(weatherData.list[0], 'c');

  } catch (err) {
    console.log('error ', err);
  }
}