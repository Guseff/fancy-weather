import '../styles/style.scss';
import createWrapper from './wrapper';
import createHeader from './header';
import createControls from './controls/controls';
import createSearch from './controls/search';
import { refreshMainBkg } from './logic/background';
import { getStorage, setStorage } from './storage';
import { changeDegrees } from './controls/degrees';
import { changeLang } from './controls/lang';
import { searchInput } from './controls/search';
import requestAll from './requests/request';
import createCity from './city/city';
import createDateTime from './city/date-time';
import setTime from './logic/time';
import createMain from './main';

export let timeZone;

const wrapper = createWrapper();
document.body.appendChild(wrapper);

const header = createHeader();
const search = createSearch();
const controls = createControls();
header.append(search, controls);

export const city = createCity();
export const dateTime = createDateTime();

setTime();
requestAll();

const main = createMain();
wrapper.append(header, city, dateTime, main);

refreshMainBkg('rain');

document.addEventListener('click', e => {
  switch (e.target.id) {
    case 're-btn':
      refreshMainBkg(getStorage('city'));     
      break;
    case 'c-btn':
      setStorage('degrees', 'c');
      changeDegrees();
      break;
    case 'f-btn':
      setStorage('degrees', 'f');
      changeDegrees();
      break;
    case 'en-btn':
      setStorage('lang', 'en');
      changeLang();
      break;
    case 'ru-btn':
      setStorage('lang', 'ru');
      changeLang();
      break;
    case 'be-btn':
      setStorage('lang', 'be');
      changeLang();
      break;
    case 'search-btn':
      setStorage('city', searchInput.value);
      refreshMainBkg(getStorage('city'));
      break;
    default:
      break;
  }
  requestAll(searchInput.value);
  setTime();
});

document.addEventListener('keydown', (e) => {
  if (e.key !== 'Enter' || searchInput.value === '') {
    return;
  }
  setStorage('city', searchInput.value);
  refreshMainBkg(getStorage('city')); 
  requestAll(searchInput.value);
  setTime();
})

setInterval(setTime, 10000);