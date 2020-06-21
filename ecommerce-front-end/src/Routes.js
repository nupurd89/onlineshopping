import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom' //makes routes available to nested parts.
import Signup from './user/Signup'
import Signin from './user/Signin'
import Home from './core/Home'
import PrivateRoute from './auth/PrivateRoute'
import AdminRoute from './auth/AdminRoute'
import Dashboard from './user/UserDashboard'
import AdminDashboard from './user/AdminDashboard'
import AddCategory from './admin/AddCategory'
import AddProduct from './admin/AddProduct'
import Shop from './core/Shop'

const Routes = () => {
  return (
    <div>
    <BrowserRouter>
      <Switch>
        <Route path="/onlineshopping" exact component = {Home}/>
        <Route path="/onlineshopping/shop" exact component = {Shop}/>
        <Route path="/onlineshopping/signin" exact component = {Signin}/>
        <Route path="/onlineshopping/signup" exact component = {Signup}/>
        <PrivateRoute path="/onlineshopping/user/dashboard" exact component = {Dashboard} />
        <AdminRoute path="/onlineshopping/admin/dashboard" exact component = {AdminDashboard} />
        <AdminRoute path="/onlineshopping/create/category" exact component = {AddCategory} />
        <AdminRoute path="/onlineshopping/create/product" exact component = {AddProduct} />
      </Switch>
    </BrowserRouter>
    </div>
  )
};

export default Routes;
