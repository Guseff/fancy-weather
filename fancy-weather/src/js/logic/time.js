import { WEEK, YEAR } from '../constants/dates';
import { timeZone } from '../request';
import { dateTime } from '../index';

const setTime = () => {
  const here = new Date();
  const actual = timeZone ? new Date(here.getTime() + here.getTimezoneOffset() * 60000 + timeZone * 1000) : here;
  const day = WEEK.en[actual.getDay()];
  const month = YEAR.en[actual.getMonth()];
  const hour = ('0' + actual.getHours()).slice(-2);
  const min = ('0' + actual.getMinutes()).slice(-2);

  dateTime.innerText = `${day} ${actual.getDate()} ${month} ${actual.getFullYear()} ${hour}:${min}`;
}

export default setTime;