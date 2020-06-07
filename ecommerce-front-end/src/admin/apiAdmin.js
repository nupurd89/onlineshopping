import {API} from "../config";

export const createCategory = (userId, token, category) => { //user = name, email password
  //console.log(name, email, password)
  //could use axios instead of fetch
  return fetch(`${API}/category/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: 'application/json',
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(category) //JSON.stringify{name, email, password}
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    });
};

export const getCategories = () => {
  return fetch(`${API}/categories`, {
    method: "GET"
  })
  .then(response => {
    return response.json();
  })
  .catch(err => console.log(err));
}

export const createProduct = (userId, token, product) => {
  return fetch(`${API}/product/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: product
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    });
};
