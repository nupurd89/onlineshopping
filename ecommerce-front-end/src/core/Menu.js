import React, {Fragment} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {signout, isAuthenticated} from "../auth"

//Helper method for styling
//actual path currently in is history
//path is the path you are going to
const isActive = (history, path) => {
  if(history.location.pathname == path) {
    return {color: '#cc5939'}
  } else {
    return {color: '#ffffff'}
  }
};

//{history} => (props) and using props.history
const Menu = ({history}) => (
  <div>
    <ul className="nav nav-tabs bg-dark">
      <li className="nav-item">
        <Link className = "nav-link" style={isActive(history, '/')} to="/">
          Home
        </Link>
      </li>

      <li className="nav-item">
        <Link className = "nav-link" style={isActive(history, '/shop')} to="/shop">
          Shop
        </Link>
      </li>

      {isAuthenticated() && isAuthenticated().user.role === 0 && (
        <li className="nav-item">
          <Link className = "nav-link" style={isActive(history, '/user/dashboard')} to="/user/dashboard">
            Dashboard
          </Link>
        </li>
      )}

      {isAuthenticated() && isAuthenticated().user.role === 1 && (
        <li className="nav-item">
          <Link className = "nav-link" style={isActive(history, '/admin/dashboard')} to="/admin/dashboard">
            Dashboard
          </Link>
        </li>
      )}

      {!isAuthenticated() && (
        <Fragment>
          <li className="nav-item">
            <Link className = "nav-link" style={isActive(history, '/Signin')} to="/Signin">
              Signin
            </Link>
          </li>
          <li className="nav-item">
            <Link className = "nav-link" style={isActive(history, '/Signup')} to="/Signup">
              Signup
            </Link>
          </li>
        </Fragment>
      )}

    {isAuthenticated() && (
      <li className="nav-item">
        <span
          className = "nav-link"
          style={{cursor: 'pointer', color: '#ffffff'}}
           onClick ={() => signout(() => {
             history.push("/");
           })}
           >
          Signout
        </span>
      </li>
    )}

    </ul>
  </div>
);

export default withRouter(Menu)
