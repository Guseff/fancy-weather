import createDiv from '../div';

export const [
  todayTemp,
  todaySummary,
  todayApparent,
  todayWind,
  todayHumidity,
  todayIcon
] = [
  createDiv('today-temp'),
  createDiv('today-summary'),
  createDiv('today-apparent'),
  createDiv('today-wind'),
  createDiv('today-humidity'),
  document.createElement('img')
]
todayIcon.classList.add('today-icon');

const createToday = () => {
  const todayLeft =  createDiv('today-container-left');
  todayLeft.append(todayTemp);
  const todayRight = createDiv('today-container-right');
  todayRight.append(todayIcon, todaySummary, todayApparent, todayWind, todayHumidity,);
  const today = createDiv('today-container');
  today.append(todayLeft, todayRight);

  return today;
} 

export default createToday;