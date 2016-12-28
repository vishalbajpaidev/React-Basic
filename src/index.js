/* eslint-disable no-console */
import React from 'react'
import {render} from 'react-dom';
// import App from './App'
import UserDetailApp from './UserDetailApp'
import UserDetailValidationApp from './UserDetailValidationApp'

let app = document.getElementById('main')


render(<UserDetailValidationApp />, app)
