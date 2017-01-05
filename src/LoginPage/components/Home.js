/**
 * Created by ttnd on 5/1/17.
 */

import React from 'react'
import {Link} from 'react-router'
import '../../style.css'

export default class Home extends React.Component {

  render(){
    return(
      <div>

        <ul className="navigation">
          <li className=".navigation li"><Link to="/mycart">MyCart</Link></li>
          <li className=".navigation li"><Link to="/mywatch">MyWatch</Link></li>
        </ul>

        <div>
          {this.props.children}
        </div>
      </div>
    )
  }

}
