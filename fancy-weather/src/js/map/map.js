import { MAPBOX_TOKEN } from '../constants/keys';
import createDiv from '../div';
import mapboxgl from 'mapbox-gl';

const mapContainer = createDiv('map');
mapboxgl.accessToken = MAPBOX_TOKEN;

const map = new mapboxgl.Map({
  width: '100%',
  container: mapContainer,
  style: 'mapbox://styles/mapbox/outdoors-v11',
  zoom: 8
});

const createMap = () => {
  map.once('load', () => {
    // Waiting for other components to be rendered
    setTimeout(() => map.resize(), 300);
  })
  
  return mapContainer;
}

const marker = createDiv('marker');

export const setMapCenter = (x, y) => {
  map.flyTo({center: [x, y]});
} 

export default createMap;