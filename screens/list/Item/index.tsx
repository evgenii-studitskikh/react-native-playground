import React from "react";
import {
  TouchableOpacity,
  Text
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

export const Item = ({
  data,
  onItemLongPress,
  onItemPress,
  onItemPressOut,
  navigation
}: IItemProps) =>
  <TouchableOpacity
    onLongPress={onItemLongPress}
    onPress={() => {
      navigation.navigate('Detail');
      onItemPress({
        id: null,
        title: data.name
      });
    }}
    onPressOut={onItemPressOut}
    style={styles.item}
    >
    <Text>{data.name}</Text>
  </TouchableOpacity>