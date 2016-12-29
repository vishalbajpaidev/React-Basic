import React from 'react'
import { render } from 'react-dom'
import  {route_exe1,route_exe2,route_exe3} from './routes'

import { Router, Route, Link , browserHistory, IndexRoute} from 'react-router'

render((
  <Router history = {browserHistory} routes={route_exe3}>
  </Router>
), document.getElementById('main'))
