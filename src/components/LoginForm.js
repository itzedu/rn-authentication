import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection } from './common';

export default class LoginForm extends Component {
  render() {
    return <Card>
        <CardSection />
        <CardSection />
        <CardSection>
          <Button>
            <Text>Log In</Text>
          </Button>
        </CardSection>
      </Card>;
  }
}
