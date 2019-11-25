import {WEEK, YEAR} from '../constants/dates';
import { dateTime } from '../index';

const setTime = () => {
  const moment = new Date();
  console.log(moment.getDay());
  const day = WEEK.en[moment.getDay()];
  const month = YEAR.en[moment.getMonth()]
  dateTime.innerText = `${day} ${moment.getDate()} ${month} ${moment.getFullYear()}          ${moment.getHours()}:${moment.getMinutes()}`;
}

export default setTime;