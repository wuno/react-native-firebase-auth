import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import firebase from 'firebase';
import Header from './components/Header';
import Button from './components/Button';
import Spinner from './components/Spinner';
import LoginForm from './components/LoginForm';
import CardSection from './components/CardSection';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: null
    };
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCdAY5Z6ZnMTlneHuncC1iMcJCKYsomNQM',
      authDomain: 'fir-authentication-353bb.firebaseapp.com',
      databaseURL: 'https://fir-authentication-353bb.firebaseio.com',
      projectId: 'fir-authentication-353bb',
      storageBucket: 'fir-authentication-353bb.appspot.com',
      messagingSenderId: '699714962898'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
      return (
        <CardSection>
          <Button
            btnTxt="Logout"
            onPress={() => firebase.auth().signOut()}>
          </Button>
        </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
      return <Spinner size="large" />;
    }
  }

  render() {
    return(
      <View>
        <Header heading="Authentication" />
          {this.renderContent()}
      </View>
    );
  }
}

export default App;
