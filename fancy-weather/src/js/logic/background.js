import { BACKGROUND_IMAGE_TOKEN } from '../constants/keys';

const BACKGROUND_IMAGE_URL = (param) => `https://api.unsplash.com/search/photos?query=${param}&client_id=${BACKGROUND_IMAGE_TOKEN}`;

export const refreshMainBkg = async (param) => {
  const url = BACKGROUND_IMAGE_URL(param);
  
  try {
    const res = await fetch(url);
    const data = await res.json();
    const index = Math.floor(Math.random() * 10);
    document.body.style.backgroundImage = `url(${data.results[index].urls.small})`;
  } catch (err) {
    console.log('Unsplash ', err);
  }
}