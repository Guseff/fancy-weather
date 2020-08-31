import createLang from './lang';
import createDegrees from './degrees';
import createBkg from './bkg';

const createControls = () => {
  const controls = document.createElement('div');
  controls.classList.add('controls-container');

  const lang = createLang();
  const degrees = createDegrees();
  const refresh = createBkg(); 
  controls.append(degrees, refresh, lang);

  return controls;
} 

export default createControls;