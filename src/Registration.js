/**
 * Created by ttnd on 28/12/16.
 */

import React from 'react';
import ReactDOM , {render} from 'react-dom';

// import ReactDom from 'react-dom';

export default class Registration extends React.Component {
  constructor() {
    super();
    this.state = {
      firstNameError:"",
      lastNameError:"",
      nameError:"",
      confirmPasswordError:"",
      passwordError:"",
      matchPasswordError:"",
      numberError:"",
    }
    this.saveAndContinue = this.saveAndContinue.bind(this);
    this.focusFirstName = this.focusFirstName.bind(this);
  }
  focusFirstName(){
    ReactDOM.findDOMNode(this.refs.firstName).focus();
  }
  componentDidMount(){
    this.focusFirstName()
  }

  checkValidation(data){
    let error = false;
    // frst name & last name cant be equal validation
    if((data.firstName && data.firstName !== "") && (data.lastName && data.lastName !== "") && data.lastName == data.firstName){
      error = true;
      this.setState({
        nameError:"First Name and Last name is cant be equal."
      });
    }else{
      this.setState({nameError:""});
    }

    // first name validation
    if(!data.firstName && data.firstName === ""){
      error = true;
      this.setState({
        firstNameError:"First name is required."
      });
    }else{
      this.setState({firstNameError:""});
    }

    // last name validation
    if(!data.lastName && data.lastName === ""){
      error = true;
      this.setState({
        lastNameError:"Last name is required."
      });
    }else{
      this.setState({lastNameError:""});
    }

    // frst name & last name cant be equal validation
    if((data.firstName && data.firstName !== "") && (data.lastName && data.lastName !== "") && data.lastName == data.firstName){
      error = true;
      this.setState({
        nameError:"First Name and Last name is cant be equal."
      });
    }else{
      this.setState({nameError:""});
    }

    // password validation
    if(!data.password && data.password === ""){
      error = true;
      this.setState({
        passwordError:"password is required."
      });
    }else{
      this.setState({passwordError:""});
    }

    // last name validation
    if(!data.confirmPassword && data.confirmPassword === ""){
      error = true;
      this.setState({
        confirmPasswordError:"Confirm Password is required."
      });
    }else{
      this.setState({confirmPasswordError:""});
    }

    // password match validation
    if((data.password && data.password !== "") && (data.confirmPassword && data.confirmPassword !== "") && data.password != data.confirmPassword){
      error = true;
      this.setState({
        matchPasswordError:"password not matched."
      });
    }else{
      this.setState({matchPasswordError:""});
    }

    // contact no validation
    if((data.number && data.number !== "") && data.number.length != "10"){
      // console.log(data.number.length)
      error = true;
      this.setState({
        numberError:"Contact number should have 10 digit."
      });
    }else{
      this.setState({numberError:""});
    }
    return error;
  }

  saveAndContinue(e) {
    // e.preventDefault()
    // Get values via this.refs
    var data = {
      firstName     : this.refs.firstName.value,
      lastName     : this.refs.lastName.value,
      email     : this.refs.email.value,
      password : this.refs.password.value,
      confirmPassword : this.refs.confirmPassword.value,
      number    : this.refs.number.value,
    }
    console.log(data)

    if(this.checkValidation(data) === false){
      this.setState({
        success:"Submitted successfully"
      });
    }else{
      this.setState({success:""});
    }

    // this.props.saveValues(data)
    // this.props.nextStep()
  }

  render() {
    return (
      <div>
        <h1>React Singup Form</h1>
        <div>
          {this.state.error}
          <span style={{color:'green'}}> {this.state.success}</span>

          <br/>
          <label>Name</label>
          <input type="text"
                 ref="firstName"
                 defaultValue={ 'Vishal' } />
          <span className="error"> {this.state.firstNameError}</span>
          <br/>

          <label>Name</label>
          <input type="text"
                 ref="lastName"
                 defaultValue={ 'Bajpai' } />
          <span className="error"> {this.state.lastNameError}</span>
          <span className="error"> {this.state.nameError}</span>
          <br/>

          <label>Email</label>
          <input type="email"
                 ref="email"
                 defaultValue={ 'vishal@gmail.com' } /><br/>

          <label>Contact Number</label>
          <input type="number"
                 ref="number"
                 defaultValue={ '9760201234' } />
          <span className="error"> {this.state.numberError}</span>
          <br/>

          <label>Password</label>
          <input type="password"
                 ref="password"
                 defaultValue={ '' } />
          <span className="error"> {this.state.passwordError}</span>
          <br/>

          <label>Confirm Password</label>
          <input type="password"
                 ref="confirmPassword"
                 defaultValue={ '' } />
          <span className="error"> {this.state.confirmPasswordError}</span>
          <span className="error"> {this.state.matchPasswordError}</span>
          <br/>


          <button onClick={ this.saveAndContinue }>Save and Continue</button></div>
      </div>
    )
  }

}
