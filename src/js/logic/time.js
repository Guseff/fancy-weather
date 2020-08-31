import { timeZone } from '../requests/request';
import { dateTime } from '../index';
import translate from '../languages';
import { getStorage } from '../storage';

const setTime = () => {
  const here = new Date();
  const actual = timeZone ? new Date(here.getTime() + here.getTimezoneOffset() * 60000 + timeZone * 1000) : here;
  const monthNumber = actual.getMonth();
  const day = translate(`com.week.${actual.getDay()}`);
  const month = translate(`com.month.${monthNumber}`);
  const hourNumber = actual.getHours();
  const hour = ('0' + hourNumber).slice(-2);
  const min = ('0' + actual.getMinutes()).slice(-2);

  dateTime.innerText = `${day} ${actual.getDate()} ${month} ${actual.getFullYear()} ${hour}:${min}`;

  let season = '';
  const latitude = getStorage('lat');
  if (monthNumber === 1 || monthNumber === 0 || monthNumber === 11) {
    if (latitude > 0) {
      season = 'winter';
    } else {
      season = 'summer';
    }
  } else if (monthNumber === 2 || monthNumber === 3 || monthNumber === 4) {
    if (latitude > 0) {
      season = 'spring';
    } else {
      season = 'autumn';
    }
  } else if (monthNumber === 5 || monthNumber === 6 || monthNumber === 7) {
    if (latitude <= 0) {
      season = 'winter';
    } else {
      season = 'summer';
    }
  } else {
    if (latitude <= 0) {
      season = 'spring';
    } else {
      season = 'autumn';
    }
  }
  sessionStorage.setItem('season', season);
}

export default setTime;