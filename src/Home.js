import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link , browserHistory} from 'react-router'


export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>You have landed on Home Page ...</h1>
      </div>
    )
  }
}
