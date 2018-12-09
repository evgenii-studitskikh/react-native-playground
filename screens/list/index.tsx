import React, { Component } from "react";
import {
  View,
  FlatList,
} from "react-native";
import DraggableFlatList from 'react-native-draggable-flatlist';

import { styles } from '../../styles';
import { Item } from './Item';
import { Button } from '../../components/Button';

export class ListScreen extends Component {
  
  render() {
    
    return (
      <View style={[styles.flex, {marginTop: 20}]}>
        <DraggableFlatList
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          scrollPercent={5}
          renderItem={({item, move, moveEnd}) =>
            <Item 
              onItemPress={move}
              onItemPressOut={moveEnd}
              data={item}
            />
          }
        />
        <Button
          title='Add item'
        />
      </View>
    )
  }
}
