import { city } from '../index';

const setCity = (name, country) => {
  city.innerText = `${name}, ${country}`;
}

export default setCity;
