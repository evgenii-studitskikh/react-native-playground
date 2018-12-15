import React, { Component } from "react";
import {
  TouchableOpacity,
  Text
} from "react-native";

import { styles } from '../../../styles';

interface IItemProps {
  data: any,
  onItemLongPress: any,
  onItemPressOut: any,
  onItemPress: () => any
}

export const Item = ({
  data,
  onItemLongPress,
  onItemPress,
  onItemPressOut,
}: IItemProps) =>
  <TouchableOpacity
    onLongPress={onItemLongPress}
    onPress={onItemPress}
    onPressOut={onItemPressOut}
    style={styles.item}
    >
    <Text>{data.name}</Text>
  </TouchableOpacity>