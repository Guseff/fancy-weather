import createDiv from '../div';

export const nowWeather = {
  todayTemp: createDiv('today-temp'),
  todaySummary: createDiv('today-summary'),
  todayApparent: createDiv('today-summary'),
  todayWind: createDiv('today-summary'),
  todayHumidity: createDiv('today-summary'),
  todayIcon: document.createElement('img')
}
nowWeather.todayIcon.classList.add('today-icon');

const createToday = () => {
  const todayLeft =  createDiv('today-container-left');
  todayLeft.append(nowWeather.todayTemp);
  const todayRight = createDiv('today-container-right');
  todayRight.append(nowWeather.todayIcon, nowWeather.todaySummary, nowWeather.todayApparent, nowWeather.todayWind, nowWeather.todayHumidity,);
  const today = createDiv('today-container');
  today.append(todayLeft, todayRight);

  return today;
} 

export default createToday;