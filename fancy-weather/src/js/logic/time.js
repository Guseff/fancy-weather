import { timeZone } from '../requests/request';
import { dateTime } from '../index';
import translate from '../languages';

const setTime = () => {
  const here = new Date();
  const actual = timeZone ? new Date(here.getTime() + here.getTimezoneOffset() * 60000 + timeZone * 1000) : here;
  const monthNumber = actual.getMonth();
  const day = translate(`com.week.${actual.getDay()}`);
  const month = translate(`com.month.${monthNumber}`);
  const hour = ('0' + actual.getHours()).slice(-2);
  const min = ('0' + actual.getMinutes()).slice(-2);

  dateTime.innerText = `${day} ${actual.getDate()} ${month} ${actual.getFullYear()} ${hour}:${min}`;

  if (monthNumber === 1 || monthNumber === 0 || monthNumber === 11) {
    sessionStorage.setItem('season', 'winter');
  } else if (monthNumber === 2 || monthNumber === 3 || monthNumber === 4) {
    sessionStorage.setItem('season', 'spring');
  } else if (monthNumber === 5 || monthNumber === 6 || monthNumber === 7) {
    sessionStorage.setItem('season', 'summer');
  } else {
    sessionStorage.setItem('season', 'autumn');
  }
}

export default setTime;