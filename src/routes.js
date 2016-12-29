import React from 'react'
import { render } from 'react-dom'
import  App from './App'
import  Home from './Home'
import  About from './About'
import  ContactUs from './ContactUs'
import  route from './routes'
import { Router, Route, Link , browserHistory, IndexRoute} from 'react-router'
export default route = (
<Route path="/" component={App}>
  <IndexRoute  component={Home} />
  <Route path="about" component={About} />
  <Route path="contact-us" component={ContactUs} />
</Route>
);
