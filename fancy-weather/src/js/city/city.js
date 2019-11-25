import createDiv from '../div';

export let cityName = '';
export let countryName = '';

const createCity = () => {
  const city = createDiv('city');
  city.setAttribute('id', 'city');

  return city;
}

export default createCity;
