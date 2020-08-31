import createDiv from '../div';

const createDateTime = () => {
  const dateTime = createDiv('date-time');
  dateTime.setAttribute('id', 'date-time');

  return dateTime;
}

export default createDateTime;
