/**
 * Created by ttnd on 5/1/17.
 */
import {createStore} from 'redux'
import {browserHistory} from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'


import RootReducer from '../reducers/'

//const middleware = routerMiddleware(browserHistory)


const store = createStore(RootReducer)

export default store
