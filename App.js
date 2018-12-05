import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Square } from './components/Square';
import { Picture } from './components/Image'

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
        <View style={styles.container}>
          {colors.map((color, index) =>
            <Square key={index} color={color}/>
          )}
        </View>
        <View style={styles.container}>
          <Picture />
        </View>
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
