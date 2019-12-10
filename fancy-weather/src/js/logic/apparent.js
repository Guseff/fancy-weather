// https://en.wikipedia.org/wiki/Wind_chill

const getApparent = (temp, hum, wind) => {
  const e = (hum / 100) * 6.05 ** ((17.27 * temp)/(237.7 + temp));
  return temp + 0.33 * e - 0.7 * wind - 4.0;
}

export default getApparent;