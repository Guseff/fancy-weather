import { WEEK, YEAR } from '../constants/dates';
import { timeZone } from '../request';
import { dateTime } from '../index';
import { getStorage } from '../storage';

import translate from '../l10ns'

const setTime = () => {
  const lang = getStorage('lang');
  const here = new Date();
  const actual = timeZone ? new Date(here.getTime() + here.getTimezoneOffset() * 60000 + timeZone * 1000) : here;
  // const day = translate(`com.week.${getWeekName}`)
  const day = WEEK[lang][actual.getDay()];
  const month = YEAR[lang][actual.getMonth()];
  const hour = ('0' + actual.getHours()).slice(-2);
  const min = ('0' + actual.getMinutes()).slice(-2);

  dateTime.innerText = `${day} ${actual.getDate()} ${month} ${actual.getFullYear()} ${hour}:${min}`;
}

export default setTime;