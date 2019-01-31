import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: null };
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBTdIShvOlnJIsx01vG7ymfYhJwb4v1wCg',
      authDomain: 'rn-authentication-f36e8.firebaseapp.com',
      databaseURL: 'https://rn-authentication-f36e8.firebaseio.com',
      projectId: 'rn-authentication-f36e8',
      storageBucket: 'rn-authentication-f36e8.appspot.com',
      messagingSenderId: '144435506500'
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
          <View style={{ height: 40 }}>
            <Button onPress={() => firebase.auth().signOut()}>
              <Text>Logout</Text>
            </Button>
          </View>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size='large' />;
    }
  }
  render() {
    return (
      <View style={styles.viewStyle}>
        <Header headerText="Authentication" />
        {this.renderContent()}
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
