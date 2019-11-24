import createButton from './button';
import {STORAGE} from '../storage';

export const [dCel, dFar] = 
[
  createButton('°C', 'c-btn', 'c-btn'),
  createButton('°F', 'f-btn', 'f-btn')
];

export const changeDegrees = () => {
  
  switch (STORAGE.degrees) {
    case 'f':
      dCel.classList.remove('active');
      dFar.classList.add('active');
      break;
    default:
      dFar.classList.remove('active');
      dCel.classList.add('active');
      break;
  }
}

const createDegrees = () => {
  const degrees = document.createElement('div');
  degrees.classList.add('lang-container');
  degrees.append(dCel, dFar);
  changeDegrees();

  return degrees;
} 

export default createDegrees;