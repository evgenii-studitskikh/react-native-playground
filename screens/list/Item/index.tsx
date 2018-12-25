import React, { PureComponent } from "react";
import {
  TouchableOpacity,
  Text,
  Animated
} from "react-native";

import { styles } from '../../../styles';
import { IListItem } from '../../../store/reducers/app';

interface IItemProps {
  data: any,
  onItemLongPress: any,
  onItemPressOut: any,
  onItemPress: (data: IListItem) => void,
  navigation: any
}

interface IItemState {
  fadeAnim: Animated.Value
}

export class Item extends PureComponent<IItemProps, IItemState> {
  
  public state = {
    fadeAnim: new Animated.Value(0),
  }

  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 1000,
      }
    ).start();
  }
  
  public render() {

    const {
      data,
      onItemLongPress,
      onItemPress,
      onItemPressOut,
      navigation
    } = this.props;

    const { fadeAnim } = this.state;

    return (
      <Animated.View
        onLongPress={onItemLongPress}
        onPress={() => {
          navigation.navigate('Detail', {
            name: data.name
          });
          onItemPress({
            url: data.url,
            title: data.name
          });
        }}
        onPressOut={onItemPressOut}
        style={[
          styles.item,
          {
            opacity: fadeAnim
          }
        ]}
        >
        <Text>{data.name}</Text>
      </Animated.View>
    )
  }
}
  