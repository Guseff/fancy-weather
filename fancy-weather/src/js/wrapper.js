const createWrapper = () => {
  const wrapper = document.createElement('div');
  
  wrapper.classList.add('wrapper-main');
  wrapper.setAttribute('id', 'wrapper-main');
  
  return wrapper;
}

export default createWrapper;
