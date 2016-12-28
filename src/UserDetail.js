/**
 * Created by ttnd on 28/12/16.
 */
import React from 'react';

export default class UserDetail extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    let {name,age,avatar,key} = this.props.user;
    return (<table key={key}>
      <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Avatar</th>
      </tr>
      </thead>
      <tfoot>
      </tfoot>
      <tbody>
      <tr>
        <td>{name}</td>
        <td>{age}</td>
        <td><img src={avatar} /></td>
      </tr>
      </tbody>
      </table>);
  }
}
