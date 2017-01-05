/**
 * Created by ttnd on 5/1/17.
 */

import {combineReducers} from 'redux'
import { routerReducer } from 'react-router-redux'


import cartReducer from '../../LoginPage/reducers'
import timerReducer from '../../LoginPage/reducers'

const rootReducer = combineReducers({
  cart: cartReducer,
  timer: timerReducer,
  routing: routerReducer
})

export default rootReducer
