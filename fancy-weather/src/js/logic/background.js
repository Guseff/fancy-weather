import { BACKGROUND_IMAGE_TOKEN } from '../constants/keys';

const BACKGROUND_IMAGE_URL = (param) => `https://api.unsplash.com/photos/random?query=${param}&client_id=${BACKGROUND_IMAGE_TOKEN}`;

export const refreshMainBkg = async (param) => {
  const url = BACKGROUND_IMAGE_URL(param);
  console.log(url);
  try {
    const res = await fetch(url);
    const data = await res.json();
    document.body.style.backgroundImage = `url(${data.urls.regular})`;
  } catch (err) {
    console.log('Unsplash ', err);
  }
}