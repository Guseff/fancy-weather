import createButton from './button';

const input = document.createElement('input');
input.setAttribute("type", "text");

export const [searchInput, searchBtn] = 
[
  input,
  createButton('>', 'search-btn', 'search-btn')
];

const createSearch = () => {
  const search = document.createElement('div');
  search.classList.add('search-container');
  search.append(searchInput, searchBtn);

  return search;
} 

export default createSearch;