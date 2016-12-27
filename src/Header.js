/**
 * Created by ttnd on 27/12/16.
 */
import React from 'react'

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      isUserLoggedIn: !true
    }
  }
  headContent() { return this.state.isUserLoggedIn ? (<button>Login</button>) : (<span>Hello...vishal</span>);}

  render() {
    return (
      <div>
        Header Content.....
    { this.state.isUserLoggedIn ? (<button>Login</button>) : (<span>Hello</span>)}
      </div>
    )
  }

}

