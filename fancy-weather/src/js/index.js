import '../styles/style.scss';
import createWrapper from './wrapper';
import createHeader from './header';
import createControls from './controls/controls';
import createSearch from './controls/search';
import { refreshMainBkg } from './logic/background';
import { getPlace } from './logic/get-place';
import { setStorage } from './storage';
import { changeDegrees } from './controls/degrees';
import { changeLang } from './controls/lang';

const wrapper = createWrapper();
document.body.appendChild(wrapper);

const header = createHeader();
wrapper.appendChild(header);

const search = createSearch();

const controls = createControls();
header.append(search, controls);

refreshMainBkg();
getPlace().then((data) => {
    console.log('CITY: ', data.city)
  }
);

document.addEventListener('click', e => {
  switch (e.target.id) {
    case 're-btn':
      refreshMainBkg('autumn');     
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
    default:
      break;
  }
});
