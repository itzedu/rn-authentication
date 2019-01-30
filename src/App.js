import React, { Component } from 'react';
import { View, Text, StyleSheet }  from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <Text>Auth App</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    backgroundColor: 'white',
  }
})