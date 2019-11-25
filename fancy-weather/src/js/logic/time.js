import { WEEK, YEAR } from '../constants/dates';
import { dateTime } from '../index';

const setTime = () => {
  const moment = new Date();
  const day = WEEK.en[moment.getDay()];
  const month = YEAR.en[moment.getMonth()];
  const hour = ('0' + moment.getHours()).slice(-2);
  const min = ('0' + moment.getMinutes()).slice(-2);
  dateTime.innerText = `${day} ${moment.getDate()} ${month} ${moment.getFullYear()} ${hour}:${min}`;
}

export default setTime;