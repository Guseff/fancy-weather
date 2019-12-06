import createDiv from '../div';

const createNext = () => {
  const day = createDiv('next-day');
  const info = createDiv('next-info');
  const temp = createDiv('next-temp');
  const icon = document.createElement('img');
  icon.className = 'next-icon';
  const next = createDiv('next-block');
  info.append(temp, icon);
  next.append(day, info);
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