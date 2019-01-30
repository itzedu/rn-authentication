import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBTdIShvOlnJIsx01vG7ymfYhJwb4v1wCg',
      authDomain: 'rn-authentication-f36e8.firebaseapp.com',
      databaseURL: 'https://rn-authentication-f36e8.firebaseio.com',
      projectId: 'rn-authentication-f36e8',
      storageBucket: 'rn-authentication-f36e8.appspot.com',
      messagingSenderId: '144435506500'
    });
  }
  
  render() {
    return (
      <View style={styles.viewStyle}>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    backgroundColor: 'white',
  }
});
