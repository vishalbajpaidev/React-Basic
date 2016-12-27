/**
 * Created by ttnd on 27/12/16.
 */
import React from 'react';
import Header from './Header';
import Users from './Users';
import Footer from './Footer';

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
      <Header />
      Hello World
      <Users/>
      <Footer/>

    </div>
    );
  }

}

