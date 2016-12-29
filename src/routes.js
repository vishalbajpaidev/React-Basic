import React from 'react'
import { render } from 'react-dom'
import  App from './App'
import  Home from './Home'
import  About from './About'
import  ContactUs from './ContactUs'
import  LoginApp from './LoginApp'
import  LoginPage from './LoginPage'
import  LoginFailed from './LoginFailed'
import  Cart from './Cart'
import { Router, Route, Link , browserHistory, IndexRoute} from 'react-router'
export const route_exe1 = (
<Route path="/" component={App}>
  <IndexRoute  component={Home} />
  <Route path="about" component={About} />
  <Route path="contact-us" component={ContactUs} />
</Route>
);

export const route_exe2 = (
  <Router history = {browserHistory} >
    <Route path="/" component={LoginApp}>
      <IndexRoute  component={LoginPage} />
      <Route path="home" component={Home} />
    </Route>
  </Router>
);
export const route_exe3 = (
  <Router history = {browserHistory} >
    <Route path="/" component={Cart}>
      <IndexRoute  component={Cart} />
      <Route path="home" component={Home} />
    </Route>
  </Router>
);


/*render((

 ), document.getElementById('main'))*/
