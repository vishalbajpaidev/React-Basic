import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from './logger.middleware.js';
import errorHandler from './error.middleware.js';

const middlewares = applyMiddleware(logger, errorHandler, thunk);

export default middlewares;
