import React, { Component } from "react";
import {
  TouchableOpacity,
  Text
} from "react-native";

import { styles } from '../../../styles';

interface IItemProps {
  data: any,
  onItemPress: any
  onItemPressOut: any
}

export const Item = ({
  data,
  onItemPress,
  onItemPressOut,
}: IItemProps) =>
  <TouchableOpacity
    onLongPress={onItemPress}
    onPressOut={onItemPressOut}
    style={styles.item}
    >
    <Text>{data.name}</Text>
  </TouchableOpacity>