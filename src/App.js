import React from 'react';
import { connect } from 'react-redux';

import {
  changeName,
  changeAge,
  addTweet,
  fetchTweets
} from './actions';

import { TweetsList } from './components/TweetsList';
import { AddTweet } from './components/AddTweet'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeNameClick = this.onChangeNameClick.bind(this);
    this.onAddTweet = this.onAddTweet.bind(this);
    this.fetchMoreTweets = this.fetchMoreTweets.bind(this);
  }

  onChangeNameClick() {
    this.props.dispatch(changeName('Manoj'));
  }

  onAddTweet(tweet) {
    this.props.dispatch(addTweet(tweet));
  }

  fetchMoreTweets() {
    this.props.getTweets();
  }

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        {
          this.props.tweets.loading ? <p>Loading tweets</p> : null
        }
        <button onClick={this.onChangeNameClick}>Change Name to Manoj</button>
        <button onClick={this.fetchMoreTweets}>fetch more tweets</button>
        <TweetsList tweets={this.props.tweets.tweets} />

        <AddTweet onAdd={this.props.addTweet} />
      </div>
    )
  }
}

var AppComponent = connect((state) => {
  return state;
}, (dispatch) => {
  return {
    addTweet (tweet) {
      dispatch(addTweet(tweet));
    },
    getTweets() {
      dispatch(fetchTweets());
    }
  }
})(App);

export default AppComponent;
