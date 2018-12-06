import React, { Component } from "react";
import {
  View
} from "react-native";

export class Square extends Component {
  
  render() {
    const { color, size } = this.props;
    return (
      <View style={{width: size, height: size, backgroundColor: color}}/>
    )
  }
}
