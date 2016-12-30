/**
 * Created by ttnd on 27/12/16.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import CustomInput from './CustomInput'

var FontAwesome = require('react-fontawesome');
// require('./demo.scss')

export default class App extends React.Component {
  constructor() {
    super()
    this.changeColor = this.changeColor.bind(this)
  }
  changeColor(e){
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div>
        <CustomInput/>
      </div>
    )
  }

}

