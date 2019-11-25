import setCity from './logic/set-city';
import setWeather from './logic/set-weather';

export const requestWeather = async (lang, city) => {
  try {
    const ipUrl = `http://ipinfo.io?token=f37edba9afa8ce`;
    const place = await fetch(ipUrl);
    const placeData = await place.json();

    const [lat, lon] = placeData.loc.split(',');
    setCity(placeData.city, placeData.country);

    const weatherUrl = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&lang=${lang}&units=metric&APPID=c09c4ffaf69055257be3ac07f2dcd9cd`;
    
    const weather = await fetch(weatherUrl);
    const weatherData = await weather.json();
    console.log(weatherData);
    setWeather(weatherData.list[0], 'c');

  } catch (err) {
    console.log('error ', err);
  }
}