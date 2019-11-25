export const STORAGE = {
  lang: 'en',
  degrees: 'c',
}

export function setStorage(key, value) {
  STORAGE[key] = value;
}

export function getStorage(key) {
  return STORAGE[key];
}