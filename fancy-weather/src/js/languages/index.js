import { getStorage } from '../storage';

import ruJson from './ru.json';
import enJson from './en.json';
import beJson from './be.json';

const LANGS = {
  en: enJson,
  ru: ruJson,
  be: beJson,
}

const translate = (key) => {  
  const lang = getStorage('lang');

  return LANGS[lang][key];
}

export default translate;