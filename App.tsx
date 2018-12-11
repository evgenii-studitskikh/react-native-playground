import React from 'react';
import {
  View,
} from 'react-native';

import { AuthorizationScreen } from './screens/authorization';
import { ListScreen } from './screens/list';

export default class App extends React.Component {
  render() {
    return (
      <AuthorizationScreen/>
    );
  }
}