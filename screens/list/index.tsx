import React, { Component } from "react";
import {
  View,
  ActivityIndicator
} from "react-native";
import DraggableFlatList from 'react-native-draggable-flatlist';
import axios from 'axios';

import { config } from '../../config'
import { styles } from '../../styles';
import { Item } from './Item';
import { Button } from '../../components/Button';

interface IListScreenState {
  data: any[],
  url: string,
  isLoading: boolean,
}

export class ListScreen extends Component<any, IListScreenState> {

  public state: IListScreenState = {
    data: [],
    url: `${config.apiPath}/people/`,
    isLoading: false
  }

  public getData = () => {

    const { data, url } = this.state;

    this.setState({ isLoading: true });

    axios.get(url)
      .then((response) => this.setState({
        data: [...data, ...response.data.results],
        url: response.data.next,
        isLoading: false // change to setState
      }))
      .catch((error) => console.log(error));
  }
  
  public componentDidMount() {
    this.getData();
  }
  
  render() {
    
    const { data, isLoading } = this.state;

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
        {isLoading &&
          <ActivityIndicator style={{marginTop: 10}}/>
        }
        <View style={[styles.flexCenter, {marginBottom: 20}]}>
          <Button
            title={isLoading ? 'loading...' : 'Load more'}
            onPress={() => this.getData()}
          />
        </View>
      </View>
    )
  }
}
