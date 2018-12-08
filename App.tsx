import React from 'react';
import {
  View,
} from 'react-native';

import { AuthorizationScreen } from './screens/authorization';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AuthorizationScreen/>
      </View>
    );
  }
}