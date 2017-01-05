/**
 * Created by ttnd on 5/1/17.
 */

import React from 'react'
import {Route, IndexRoute} from 'react-router'

import App from './components/App'
import Login from './components/Login'
import Home from './components/Home'
import LoginFailed from './components/LoginFailed'
import AppCart from '../LoginPage/components/Cart'
import AppWatch from '../LoginPage/components/App'

export default (

  <Route path="/" component={App}>
    <IndexRoute component={Login}/>
    <Route path="home" component={Home}>
      <Route path="/mycart" component={AppCart}/>
      <Route path="/mywatch" component={AppWatch}/>
    </Route>
    <Route path="loginFailed" component={LoginFailed}/>
  </Route>

)
