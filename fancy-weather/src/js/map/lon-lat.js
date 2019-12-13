import createDiv from '../div';
import translate from '../languages';

const lanLot = createDiv('lon-lat');

const createLanLot = () => {
  return lanLot;
}

export const setLonLat = (lon, lat) => {
  lanLot.innerHTML = `${translate('com.map.latitude')}: ${lat}, ${translate('com.map.longitude')}: ${lon}.`;
}

export default createLanLot;