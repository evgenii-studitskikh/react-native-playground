import React, { PureComponent } from "react";
import { connect } from 'react-redux';
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
import { setActiveListItem } from '../../store/actions/app';


interface IListScreenLayoutState {
  data: any[],
  url: string,
  isLoading: boolean,
}

class ListScreenLayout extends PureComponent<any, IListScreenLayoutState> {

  public state: IListScreenLayoutState = {
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
        isLoading: false
      }))
      .catch((error) => console.log(error));
  }
  
  public componentDidMount() {
    this.getData();
  }
  
  render() {
    
    const { data, isLoading } = this.state;
    const { setActiveListItem, navigation } = this.props;

    return (
      <View style={[styles.flex]}>
        <DraggableFlatList
          data={data}
          scrollPercent={5}
          renderItem={({item, move, moveEnd}) =>
            <Item 
              onItemLongPress={move}
              onItemPressOut={moveEnd}
              data={item}
              onItemPress={setActiveListItem}
              navigation={navigation}
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

export default connect(null, {
  setActiveListItem
})(ListScreenLayout);
