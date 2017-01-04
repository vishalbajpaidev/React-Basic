import { combineReducers } from 'redux';
import dateReducer from './date.reducer.js';

const rootReducer = combineReducers({
  date: dateReducer
});

export default rootReducer;