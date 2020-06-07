import React, {useState} from "react";
import {Link} from 'react-router-dom'
import Layout from "../core/Layout"
import {API} from "../config"
import {signup} from "../auth"; //dont have to write index

const Signup = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    error: '',
    success: false
  })

  const {name, email, password, success, error} = values

  //"name" could be name, email or password
  const handleChange = name => event => {
    setValues({...values, error:false, [name]: event.target.value})
  }

  const clickSubmit = (event) => {
    //prevents page from reloading (which is default)
    event.preventDefault()
    setValues({...values, error:false})
    signup({name: name, email: email, password: password})
    .then(data => {
        if(data.error) {
          setValues({...values, error: data.error, success: false})
        } else {
          setValues({
            ...values,
            name: '',
            email: '',
            password: '',
            error: '',
            success: true
          })
        }
      })
  }

  const signUpForm = () => (
    <form>
      <div className="form-group">
        <label className="text-muted">Name</label>
        <input onChange={handleChange('name')} type="text" className="form-control" value = {name}/>
      </div>

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

  const showSuccess = () => (
    <div className = "alert alert-danger" style={{display: success ? '': 'none'}}>
      New account is created. Please <Link to="/signin">Sign In</Link> with your new login!
    </div>
  )

  return(

    <Layout title="Sign Up" description="Create your account to Sign up Today!" className="container col-md-8 offset-md-2">
      {showSuccess()}
      {showError()}
      {signUpForm()}
    </Layout>
  )
};

export default Signup
