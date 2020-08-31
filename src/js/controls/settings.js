import { getStorage, setStorage } from "../storage";

export const saveSettings = () => {
  localStorage.setItem('lang', getStorage('lang'));
  localStorage.setItem('degrees', getStorage('degrees'));
}

export const loadSettings = () => {
  const lang = localStorage.getItem('lang') || 'en';
  setStorage('lang', lang);
  const degrees = localStorage.getItem('degrees') || 'c';
  setStorage('degrees', degrees);
}