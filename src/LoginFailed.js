import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link , browserHistory} from 'react-router'


export default class LoginPage extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div>
        <Link to="/">Login Failed go back</Link>
      </div>
    )
  }
}
