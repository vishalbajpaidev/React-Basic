/**
 * Created by ttnd on 28/12/16.
 */

import React from 'react';
import {render} from 'react-dom';

// import ReactDom from 'react-dom';

export default class Water extends React.Component {
  constructor() {
    super();
    this.state = {
      temperature : -5,
    }
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


