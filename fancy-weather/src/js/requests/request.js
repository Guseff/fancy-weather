import setWeather from '../logic/set-weather';
import setNextWeather from '../logic/set-next-weather';
import requestCity from './request-city';
import requestWeather from './request-weather';

export let timeZone;

const requestAll = async (city) => {
  try {
    await requestCity(city);
    const weatherData = await requestWeather();

    timeZone = weatherData.city.timezone;
    setWeather(weatherData.list[0]);
    setNextWeather(weatherData.list);
    
  } catch (err) {
    console.log('error ', err);
  }
}

export default requestAll;