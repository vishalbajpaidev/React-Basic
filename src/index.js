import React from 'react'
import { render } from 'react-dom'
import  App from './App'
import  Home from './Home'
import  About from './About'
import  ContactUs from './ContactUs'
import  LoginApp from './LoginApp'
import  LoginPage from './LoginPage'
import  LoginFailed from './LoginFailed'
// import  {route} from './routes'
import { Router, Route, Link , browserHistory, IndexRoute} from 'react-router'

/*render((
  <Router history = {browserHistory} >
    <Route path="/" component={App}>
      <IndexRoute  component={Home} />
      <Route path="about" component={About} />
      <Route path="contact-us" component={ContactUs} />
    </Route>
  </Router>
), document.getElementById('main'))*/

render((
  <Router history = {browserHistory} >
    <Route path="/" component={LoginApp}>
      <IndexRoute  component={LoginPage} />
      <Route path="home" component={Home} />
      <Route path="login-failed" component={LoginFailed} />
      <Route path="about" component={About} />
      <Route path="contact-us" component={ContactUs} />
    </Route>
  </Router>
), document.getElementById('main'))
