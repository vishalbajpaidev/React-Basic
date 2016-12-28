/**
 * Created by ttnd on 27/12/16.
 */
import React from 'react'
import Water from './Water'
import RandomTempWater from './RandomTempWater'
import UserDetail from './UserDetail'
export default class UserDetailValidationApp extends React.Component {
  constructor() {
    super();
  }

  render() {
    let data  = [
      {name: 'John', age: 25, avatar: 'https://randomuser.me/api/portraits/men/15.jpg'},
      {name: 'Joe', age: 35, avatar: 'https://randomuser.me/api/portraits/men/13.jpg'},
      {name: 'Andrei', age: 45, avatar: 'https://randomuser.me/api/portraits/men/10.jpg'},
      {name: 'Ted', age: 29, avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
      {name: 'Ben', age: 30, avatar:'https://randomuser.me/api/portraits/men/2.jpg' }
    ];
    return (<div>
       <h2> Day 2</h2>
        {
          data.map((user,i)=>
            <UserDetail user={user} key={i} />
          )
        }
      </div>)
  }

}

UserDetailValidationApp.propTypes =  {
  user: React.PropTypes.shape({
    age: React.PropTypes.number.isRequired,
    name: React.PropTypes.string,
    avatar: React.PropTypes.string,

  })
}
