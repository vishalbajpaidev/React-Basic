import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link , browserHistory} from 'react-router'


export default class LoginApp extends React.Component {
  render() {
    return (
      <div>
        login form
        {this.props.children}

      </div>
    )
  }
}
