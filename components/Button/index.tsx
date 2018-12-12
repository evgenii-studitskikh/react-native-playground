import React, { Component } from "react";
import {
  TouchableHighlight,
  Text
} from "react-native";

import { styles } from '../../styles';

interface IButtonProps {
  title: string,
  onPress: () => void
}

export const Button = ({
  title,
  onPress
}: IButtonProps) =>
  <TouchableHighlight
    style={[styles.button]}
    underlayColor='#0D2D5C'
    onPress={onPress}
    >
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableHighlight>