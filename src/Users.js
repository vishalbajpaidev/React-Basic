/**
 * Created by ttnd on 27/12/16.
 */
import React from 'react'

export default class Users extends React.Component {
  constructor() {
    super();
  }
  getUserData() {
    return [{
    "_id": "58613042d144513fd8c03bbc",
    "isActive": true,
    "age": 38,
    "name": "Noelle Finch",
    "gender": "female",
    "email": "noellefinch@codax.com"
  },
    {
      "_id": "58613042f1ddd22998f7c02f",
      "isActive": false,
      "age": 40,
      "name": "Dominique Middleton",
      "gender": "female",
      "email": "dominiquemiddleton@codax.com"
    },
    {
      "_id": "58613042b6f22acfb34097da",
      "isActive": true,
      "age": 21,
      "name": "Beulah Hoover",
      "gender": "female",
      "email": "beulahhoover@codax.com"
    },
    {
      "_id": "5861304228670a96b75bde35",
      "isActive": false,
      "age": 26,
      "name": "Casey Acosta",
      "gender": "male",
      "email": "caseyacosta@codax.com"
    },
    {
      "_id": "586130424d77931fe3e26704",
      "isActive": true,
      "age": 36,
      "name": "Kathleen Parsons",
      "gender": "female",
      "email": "kathleenparsons@codax.com"
    },
    {
      "_id": "58613042b81ed4aea4f8bdd1",
      "isActive": true,
      "age": 32,
      "name": "Tami Morse",
      "gender": "female",
      "email": "tamimorse@codax.com"
    },
    {
      "_id": "5861304235cd4776fd7ce5a7",
      "isActive": false,
      "age": 28,
      "name": "Annette Whitaker",
      "gender": "female",
      "email": "annettewhitaker@codax.com"
    }
  ]};

  render() {
    return (
      <div>
        User List
    {this.getUserData().map( (user,i) =>
    <Content key = {i} componentData = {user}/>
      {//<h1> {user.name} </h1>}}

    )}
      </div>
    )
  }

}

class Content extends React.Component {
  render() {
    return (
      <div>
      ----------

      <div>Name : {this.props.componentData.name}</div><br />
    <div>Email : {this.props.componentData.email}</div><br />

    </div>
  );
  }
}

