import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      email: '',
      password: '',
      error: '',
      loading: false,
    };
  }

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });
    
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginSuccess() {
    this.setState({ 
      error: '',
      email: '',
      password: '',
      loading: false 
    });
  }

  onLoginFail() {
    this.setState({ error: 'Authentication Failed', loading: false });
  }

  renderButton() {
    if (this.state.loading) {
      return (
        <Spinner size='small' />
      );
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        <Text>Log In</Text>
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label='Email:'
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            placeholder='example@email.com'
          />
        </CardSection>
        <CardSection>
          <Input
            label='Password:'
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            placeholder='********'
            secureTextEntry
          />
        </CardSection>
        <Text style={styles.errorTextStyle}>{this.state.error}</Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
});
