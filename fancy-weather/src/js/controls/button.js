const createButton = (name, id, btnClass) => {
  const button = document.createElement('button');
  button.classList.add('btn');
  button.classList.add(btnClass);
  button.setAttribute('id', id);
  button.innerHTML = name;

  return button;
}

export default createButton;
