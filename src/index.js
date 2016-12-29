import React from 'react'
import { render } from 'react-dom'
import  Home from './Home'
import  About from './About'
import  ContactUs from './ContactUs'
import { Router, Route, Link , browserHistory, IndexRoute} from 'react-router'

const App = React.createClass({
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})


render((
  <Router history = {browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute  component={Home} />
      <Route path="about" component={About} />
      <Route path="contact-us" component={ContactUs} />
     </Route>
  </Router>
), document.getElementById('main'))
