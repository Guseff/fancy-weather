import createButton from './button';

export const reBtn = createButton('&#8634;', 're-btn', 're-btn');

const createBkg = () => {
  const bkg = document.createElement('div');
  bkg.classList.add('lang-container');
  bkg.append(reBtn);

  return bkg;
} 

export default createBkg;