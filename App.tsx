import React from 'react';
import { createStackNavigator, createNavigationContainer } from 'react-navigation';

import { AuthorizationScreen } from './screens/authorization';
import { ListScreen } from './screens/list';

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Authorization: { 
      screen: AuthorizationScreen,
      navigationOptions: {
        header: null
      }
    },
    List: { screen: ListScreen },
  },
  {
    initialRouteName: 'Authorization',
  }
);

const AppContainer = createNavigationContainer(AppNavigator);
