import createButton from './button';
import {STORAGE} from '../storage';

export const [enBtn, ruBtn, beBtn] = 
[
  createButton('EN', 'en-btn', 'en-btn'),
  createButton('RU', 'ru-btn', 'ru-btn'),
  createButton('BE', 'be-btn', 'be-btn')
];

export const changeLang = () => {
  ruBtn.classList.remove('active');
  beBtn.classList.remove('active');
  enBtn.classList.remove('active');
  switch (STORAGE.lang) {
    case 'ru': 
      ruBtn.classList.add('active');
      break;
    case 'be': 
      beBtn.classList.add('active');
      break;
    default:
      enBtn.classList.add('active');
  }
}

const createLang = () => {
  const lang = document.createElement('div');
  lang.classList.add('lang-container');
  lang.append(enBtn, ruBtn, beBtn);

  changeLang();

  return lang;
} 

export default createLang;