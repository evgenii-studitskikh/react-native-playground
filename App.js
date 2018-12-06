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
      <View style={styles.flex}>
        <View style={[styles.flex, styles.flexCenter]}>
          {colors.map((color, index) =>
            <Square key={index} color={color} size={20}/>
          )}
        </View>
        <View style={[styles.flex, styles.flexCenter]}>
          <Picture />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  flexCenter: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  flexRow: {
    flexDirection: 'row'
  },
  flexColumn: {
    flexDirection: 'column'
  }
});
