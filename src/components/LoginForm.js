// native imoprts
import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
// plugin imports
import firebase from 'firebase';
// component imports
import Button from './Button';
import Card from './Card';
import CardSection from './CardSection';
import Input from './Input';
import Spinner from './Spinner';

// LoginForm component class
class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false
    };
  }

  onSignIn() {
   const { email, password } = this.state;
   console.log(email);
   this.setState({ error: '', loading: true });

   firebase.auth().signInWithEmailAndPassword(email, password)
     .then(this.onLoginSuccess.bind(this))
     .catch(() => {
       firebase.auth().createUserWithEmailAndPassword(email, password)
         .then(this.onLoginSuccess.bind(this))
         .catch(this.onLoginFail.bind(this));
     });
 }

  onLoginFail() {
    this.setState({ error: 'Authentication Failed', loading: false });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    return (
      <Button
        btnTxt='Sign In'
        onPress={this.onSignIn.bind(this)}>
      </Button>
    );
  }

  render() {
    return(
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="user@example.com"
            onChangeText={(data) => this.setState({email: data})}
            value={this.state.email}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Password"
            placeholder="enter password"
            secureTextEntry
            onChangeText={(data) => this.setState({password: data})}
            value={this.state.password}
          />
        </CardSection>
        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }

}

const styles = StyleSheet.create( {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
});

export default LoginForm;
