import React, { Component } from "react";
import {
  View,
} from "react-native";
import DraggableFlatList from 'react-native-draggable-flatlist';
import axios from 'axios';

import { config } from '../../config'
import { styles } from '../../styles';
import { Item } from './Item';
import { Button } from '../../components/Button';

interface IListScreenState {
  data: any[],
  url: string
}

export class ListScreen extends Component<any, IListScreenState> {

  public state: IListScreenState = {
    data: [],
    url: `${config.apiPath}/people/`
  }

  public getData = () => {

    const { data, url } = this.state;

    axios.get(url)
      .then((response) => this.setState({
        data: [...data, ...response.data.results],
        url: response.data.next
      }))
      .catch((error) => console.log(error));
  }
  
  public componentDidMount() {
    this.getData();
  }
  
  render() {
    
    const { data } = this.state;

    return (
      <View style={[styles.flex]}>
        <DraggableFlatList
          data={data}
          scrollPercent={5}
          renderItem={({item, move, moveEnd}) =>
            <Item 
              onItemPress={move}
              onItemPressOut={moveEnd}
              data={item}
            />
          }
        />
        <View style={[styles.flexCenter, {marginBottom: 20}]}>
          <Button
            title='Load more'
            onPress={() => this.getData()}
          />
        </View>
      </View>
    )
  }
}
