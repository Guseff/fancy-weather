import createDiv from '../div';
import translate from '../languages';

const lanLot = createDiv('lon-lat');

const createLanLot = () => {
  return lanLot;
}

export const setLonLat = (lon, lat) => {
  const lonGrad = Math.trunc(lon);
  const lonMin = Math.round((lon - lonGrad) * 60);
  const latGrad = Math.trunc(lat);
  const latMin = Math.round((lat - latGrad) * 60);
  lanLot.innerHTML = `${translate('com.map.latitude')}: ${latGrad}°${latMin}', ${translate('com.map.longitude')}: ${lonGrad}°${lonMin}'.`;
}

export default createLanLot;