import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link , browserHistory} from 'react-router'


export default class Users extends React.Component {
  render() {
    return (
      <div>
        <h1>Users</h1>
        {this.props.children}
      </div>
    )
  }
}
