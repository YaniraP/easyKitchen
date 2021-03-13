const BASE_URL = 'http://localhost:3001';

//DISHES
const getDishes = () => {
  return fetchRequest('/dish');
}

const addDish = (body) => {
  const httpOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  };
  return fetchRequest('/dish', httpOptions);
}


//MENUS
const getMenus = () => {
  return fetchRequest('/menu');
}

const getMenu = () => {
  return fetchRequest('/menu/:id');
}

const createMenu = (body) => {
  const httpOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  };
  return fetchRequest('/menu', httpOptions);
}

//TODO IMPLEMENT IT
const deleteMenu = (id) => {
  const httpOptions = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(id)
  };
  return fetchRequest(`/menu/:${id}`, httpOptions);
};

//ORDERS
const getOrders = () => {
  return fetchRequest('/order');
}

const createOrder = (body) => {
  const httpOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  };
  console.log('bodyApi -> ', body);
  return fetchRequest('/order', httpOptions);
}


function fetchRequest (path, options) {
  return fetch(BASE_URL + path, options)
    .then((res) => res.status >= 400 ? Promise.reject() : res)
    .then((res) => res.json())
    .catch((error) => console.log(`Error fetching ${path}`, error))
}

export default {
  getDishes,
  getMenus,
  getOrders,
  addDish,
  createMenu,
  createOrder,
  getMenu,
  deleteMenu
};
