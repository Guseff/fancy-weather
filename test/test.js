import getApparent from '../src/js/logic/apparent.js';
import getFahrenheit from '../src/js/logic/fahrenheit';
import createBkg from '../src/js/controls/bkg';
import createCity from '../src/js/city/city';
import createDateTime from '../src/js/city/date-time';
import { getStorage, setStorage } from '../src/js/storage';

describe('calculates an apparent air temperature when wind 3 m/s', () => {
  it('0*C and 50% humidity', () => {
    expect(getApparent(0, 50, 3)).toBeLessThan(0);
  })
  it('+10*C and 100% humidity', () => {
    expect(getApparent(10, 100, 3)).toBeLessThan(10);
  })
});

describe('converts a temperature from *C to *F', () => {
  it('-20*C', () => {
    expect(getFahrenheit(-20)).toBeCloseTo(-4);
  })
  it('0*C', () => {
    expect(getFahrenheit(0)).toBeCloseTo(32);
  })
  it('+20*C', () => {
    expect(getFahrenheit(20)).toBeCloseTo(68);
  })
});

describe('return DOM element for refresh button', () => {
  it('return DOM element', () => {
    expect(createBkg()).toBeDefined();
  });
  it('return DOM element', () => {
    expect(createBkg()).toBeInstanceOf(HTMLDivElement);
  });
});

describe('return DOM element for City Name Div', () => {
  it('return DOM element', () => {
    expect(createCity()).toBeDefined();
  });
  it('return DOM element', () => {
    expect(createCity()).toBeInstanceOf(HTMLDivElement);
  });
  it('return DOM element with id="city"', () => {
    expect(createCity().getAttribute('id')).toEqual('city');
  });
});

describe('return DOM element for Date and Time', () => {
  it('return DOM element', () => {
    expect(createDateTime()).toBeDefined();
  });
  it('return DOM element', () => {
    expect(createDateTime()).toBeInstanceOf(HTMLDivElement);
  });
  it('return DOM element with id="date-time"', () => {
    expect(createDateTime().getAttribute('id')).toEqual('date-time');
  });
});

describe('set and return items to/from app storage', () => {
  it('set and return "lang" "en"', () => {
    setStorage('lang', 'en');
    expect(getStorage('lang')).not.toEqual('be');
    expect(getStorage('lang')).not.toEqual('ru');
    expect(getStorage('lang')).toEqual('en');
  });
  it('set and return "lang" "ru"', () => {
    setStorage('lang', 'ru');
    expect(getStorage('lang')).not.toEqual('be');
    expect(getStorage('lang')).not.toEqual('en');
    expect(getStorage('lang')).toEqual('ru');
  });
  it('set and return "lang" "be"', () => {
    setStorage('lang', 'be');
    expect(getStorage('lang')).not.toEqual('en');
    expect(getStorage('lang')).not.toEqual('ru');
    expect(getStorage('lang')).toEqual('be');
  });
  it('set and return "degrees" "c"', () => {
    setStorage('degrees', 'c');
    expect(getStorage('degrees')).not.toEqual('f');
    expect(getStorage('degrees')).not.toEqual(/!c/);
    expect(getStorage('degrees')).toEqual('c');
  });
  it('set and return "degrees" "f"', () => {
    setStorage('degrees', 'f');
    expect(getStorage('degrees')).not.toEqual('c');
    expect(getStorage('degrees')).not.toEqual('/!f/');
    expect(getStorage('degrees')).toEqual('f');
  });
});