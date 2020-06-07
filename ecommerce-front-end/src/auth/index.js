import {API} from "../config";

export const signup = (user) => { //user = name, email password
  //console.log(name, email, password)
  //could use axios instead of fetch
  return fetch(`${API}/signup`, {
    method: "POST",
    headers: {
      Accept: 'application/json',
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user) //JSON.stringify{name, email, password}
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    });
};

export const signin = (user) => { //user = name, email password
  //console.log(name, email, password)
  //could use axios instead of fetch
  return fetch(`${API}/signin`, {
    method: "POST",
    headers: {
      Accept: 'application/json',
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user) //JSON.stringify{name, email, password}
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    });
};

export const authenticate = (data, next) => {
  //check if we have local storage
  if(typeof window !== 'undefined') {
    //first argument is key and second is data (type JSON)
    localStorage.setItem('jwt', JSON.stringify(data))
    next();
  }
};

export const signout = (next) => {
  //check if we have local storage
  if(typeof window !== 'undefined') {
    //first argument is key and second is data (type JSON)
    localStorage.removeItem('jwt');
    next();
    return fetch(`${API}/signout`, {
      method: "GET",
    })
    .then(response => {
      console.log("signout", response);
    })
    .catch(err => console.log(err));
  }
};

export const isAuthenticated = () => {
  //check if there is a jwt
  if(typeof window == 'undefined'){
    return false
  }
  //pass jwt to json
  if (localStorage.getItem('jwt')) {
    return JSON.parse(localStorage.getItem('jwt'))
  } else {
    return false;
  }
}
