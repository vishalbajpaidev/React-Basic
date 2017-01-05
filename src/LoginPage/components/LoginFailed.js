/**
 * Created by ttnd on 5/1/17.
 */

import React from 'react'
import {browserHistory} from 'react-router'

export default class LoginFailed extends React.Component{

  goBack(){
    browserHistory.push("/")
  }

  render(){

    return(

      <div>
        Login Failed.
        <div>
          <button onClick={this.goBack.bind()} >Click to go to the login page.</button>
        </div>
      </div>

    )

  }

}
