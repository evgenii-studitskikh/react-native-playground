import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Button } from './components/Button';

const colors = [
  'red',
  'black',
  'green',
  'blue'
]

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        {colors.map((color, index) =>
          <Button key={index} color={color}/>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
