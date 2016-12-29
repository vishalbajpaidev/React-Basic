import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link , browserHistory} from 'react-router'


export default class LoginPage extends React.Component {
  constructor(){
    super();
    this.login = this.login.bind(this);
  }
  login(e){
    if(this.refs.name.value === "vishal" && this.refs.password.value === "vishal"){
      console.log("login>>>>",this.refs.name.value);
      browserHistory.push('/home');
    }else{
      console.log("error>>>>",this.refs.name.value);
      browserHistory.push('/login-failed')
    }
  }
  render() {
    return (
      <div>
        <h3>login Page</h3>
        Username: <input type="text" ref="name" /><br/>
        Password: <input type="password" ref="password"/><br/>
        <button onClick={this.login}>Login</button>
      </div>
    )
  }
}
