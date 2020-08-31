import createDiv from '../div';

const createCity = () => {
  const city = createDiv('city');
  city.setAttribute('id', 'city');

  return city;
}

export default createCity;
