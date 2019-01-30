import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input } from './common';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      email: '',
      password: '',
    };
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
        <CardSection>
          <Button>
            <Text>Log In</Text>
          </Button>
        </CardSection>
      </Card>
    );
  }
}
