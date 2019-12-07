import { MAPBOX_TOKEN } from '../constants/keys';
import createDiv from '../div';
import mapboxgl from 'mapbox-gl';

const createMap = (coords) => {
  const mapContainer = createDiv('map');

  mapboxgl.accessToken = MAPBOX_TOKEN;
  const map = new mapboxgl.Map({
    width: '100%',
    container: mapContainer,
    style: 'mapbox://styles/mapbox/streets-v9',
    center: coords,
    zoom: 3
  });

  map.once('load', () => {
    // Waiting for other components to be rendered
    setTimeout(() => map.resize(), 100);
  })

  return mapContainer;
}

export default createMap;