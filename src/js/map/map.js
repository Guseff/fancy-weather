import { MAPBOX_TOKEN } from '../constants/keys';
import createDiv from '../div';
import mapboxgl from 'mapbox-gl';
import { getStorage } from '../storage';

const mapContainer = createDiv('map');
mapboxgl.accessToken = MAPBOX_TOKEN;

const map = new mapboxgl.Map({
  width: '100%',
  container: mapContainer,
  style: 'mapbox://styles/mapbox/outdoors-v11',
  zoom: 10
});

export const resizeMap = () => {
  map.resize();
}

export const setMapCenter = (x, y) => {
  map.flyTo({center: [x, y]});
} 

const createMap = () => {
  map.once('load', () => {
    // Waiting for other components to be rendered
    setTimeout(() => {
      map.resize();
      setMapCenter(getStorage('lon'), getStorage('lat'));
    }, 300);
  })
  
  return mapContainer;
}

export default createMap;