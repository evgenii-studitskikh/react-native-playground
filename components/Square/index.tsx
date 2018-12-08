import React, { Component } from "react";
import {
  View
} from "react-native";

interface ISquareProps {
  color: string,
  size: number
}

export class Square extends Component<ISquareProps> {
  
  render() {
    const { color, size } = this.props;
    return (
      <View style={{width: size, height: size, backgroundColor: color}}/>
    )
  }
}
