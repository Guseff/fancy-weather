const createDiv = (divClass) => {
  const dd = document.createElement('div');
  dd.classList.add(divClass);

  return dd;
}

export default createDiv;