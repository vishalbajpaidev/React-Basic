import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link , browserHistory} from 'react-router'

export default (
  <Router history = {browserHistory}>
    <Route path="/" component={App}>
      <Route path="about" component={About} />
      <Route path="home" component={Home}>
        {//<Route path="messages/:id" component={Message} /> }
      </Route>
      <Route path=":name" component={user}></Route>
    </Route>
  </Router>
);
