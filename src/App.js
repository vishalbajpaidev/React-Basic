import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link , browserHistory} from 'react-router'


export default class App extends React.Component {
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
}
