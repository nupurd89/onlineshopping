import React, {useState} from "react";
import {Link, Redirect} from 'react-router-dom'
import Layout from "../core/Layout"
import {API} from "../config"
import {signin, authenticate, isAuthenticated} from "../auth"; //dont have to write index

const Signin = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    error: '',
    loading: false,
    redirectToReferrer: false
  })

  const {email, password, loading, error, redirectToReferrer} = values
  const {user} = isAuthenticated()

  //"name" could be name, email or password
  const handleChange = name => event => {
    setValues({...values, error:false, [name]: event.target.value})
  }

  const clickSubmit = (event) => {
    //prevents page from reloading (which is default)
    event.preventDefault();
    setValues({...values, error:false, loading: true});
    signin({ email, password}).then(data => {
        if(data.error) {
          setValues({
            ...values, error: data.error, loading: false});
        } else {
            authenticate(data, () => {
              setValues({
                ...values,
                redirectToReferrer: true
              });
            });
        }
      });
  };

  const signUpForm = () => (
    <form>
      <div className="form-group">
        <label className="text-muted">Email</label>
        <input onChange={handleChange('email')} type="email" className="form-control" value={email}/>
      </div>

      <div className="form-group">
        <label className="text-muted">Password</label>
        <input onChange={handleChange('password')} type="password" className="form-control" value= {password}/>
      </div>
      <button onClick={clickSubmit} className= "btn btn-primary">Submit</button>
    </form>
  )

  const showError = () => (
    <div className = "alert alert-danger" style={{display: error ? '': 'none'}}>
      {error}
    </div>
  )

  const showLoading = () =>
    loading && (
      <div className="alert alert-info">
        <h2>Loading ...</h2>
      </div>
    );

    const redirectUser = () => {
      if (redirectToReferrer) {
        if(user && user.role === 1) {
          return <Redirect to="/onlineshopping/admin/dashboard" />;
        } else {
          return <Redirect to="/onlineshopping/user/Dashboard" />;
        }
      }
      if(isAuthenticated()) {
        return <Redirect to ="/" />
      }
    };


  return(

    <Layout title="Sign In" description="Sign into your existing E-Commerce Account!" className="container col-md-8 offset-md-2">
      {showLoading()}
      {showError()}
      {signUpForm()}
      {redirectUser()}
    </Layout>
  )
};

export default Signin
