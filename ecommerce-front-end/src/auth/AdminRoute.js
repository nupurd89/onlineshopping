import React, {Component} from 'react'
import {Route, Redirect} from 'react-router-dom'
import {isAuthenticated} from './index'

//checks if user is signed in and then directs them accordingly
const AdminRoute = ({component: Component, ...rest}) => (
  <Route {...rest}
  render={props =>
    isAuthenticated() && isAuthenticated().user.role == 1 ? (
    //if it is authenticated, return props
    <Component {...props} />
  ) : (
    //if it isnt authenticated, redirec
     <Redirect
      to = {{
        pathname: "/signin",
        state: { from: props.location}
      }}
      />
   )
 }
 />
);

export default AdminRoute;
