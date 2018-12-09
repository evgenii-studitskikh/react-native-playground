import React, { Component } from "react";
import {
  TouchableHighlight,
  Text
} from "react-native";

import { styles } from '../../styles';

interface IButtonProps {
  title: string
}

export const Button = ({
  title
}: IButtonProps) =>
  <TouchableHighlight
    style={[styles.button]}
    underlayColor='#0D2D5C'
    >
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableHighlight>