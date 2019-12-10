import getApparent from '../js/logic/apparent.js';
import getFahrenheit from '../js/logic/fahrenheit';

test('calculates an apparent air temperature when 0*C, wind 3 m/s and 50% humidity ', () => {
  expect(getApparent(0, 50, 3)).toBeLessThan(0);
  expect(getApparent(10, 100, 3)).toBeLessThan(10);
});

test('converts a temperature from *C to *F', () => {
  expect(getFahrenheit(-20)).toBeCloseTo(-4);
  expect(getFahrenheit(0)).toBeCloseTo(32);
  expect(getFahrenheit(20)).toBeCloseTo(68);
});