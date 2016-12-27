/* eslint-disable no-console */
import React from 'react'
import {render} from 'react-dom';
import App from './App'
import Footer from './Footer'

let app = document.getElementById('main')
let footer = document.getElementById('footer')


render(<App />, app)
render(<Footer />, footer)
