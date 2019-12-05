import createDiv from '../div';

const createNext = () => {
  const day = createDiv('next-day');
  const temp = createDiv('next-temp');
  const icon = document.createElement('img');
  icon.className = 'next-icon';
  const next = createDiv('next-block');
 
  next.append(day, temp, icon);
  return next;
}

const a = new Array(3);
export const nextArr = a.fill(0).map((x) => createNext());

const createNextArray = () => {
  const arr = createDiv('next-container');
  arr.append(...nextArr);
  return arr;
}

export default createNextArray;