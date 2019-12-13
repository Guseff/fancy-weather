import createDiv from '../div';

const lanLot = createDiv('lon-lat');

const createLanLot = () => {
  return lanLot;
}

export const setLonLat = (lon, lat) => {
  lanLot.innerHTML = `Latitude: ${lat}, longitude: ${lon}.`;
}

export default createLanLot;