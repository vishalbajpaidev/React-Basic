/**
 * Created by ttnd on 28/12/16.
 */

import React from 'react';
import {render} from 'react-dom';

// import ReactDom from 'react-dom';

export default class RandomTempWater extends React.Component {
  constructor() {
    super();
    this.state = {
      temperature : -5,
    }
    this.changeTemp = function(){
      console.log("working...")
      setInterval(()=>{
        this.setState({temperature: Math.floor(Math.random() * 110) + (-10) });
      },2000)
    };
    this.changeTemp();
  }
    render() {
      let temperature = this.state.temperature;
      let waterState = temperature <= 0 ? 'solid' : (temperature > 0 && temperature < 100) ? 'liqued' : 'Gass';
    return (
      <div>
        Water in <b>{waterState}</b> state in Temperatue {temperature}
      </div>
    )
  }

}


