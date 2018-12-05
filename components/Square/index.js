import React, { Component } from "react";
import {
  View
} from "react-native";

export class Square extends Component {
  
  render() {
    const { color } = this.props;
    return (
      <View style={{width: 10, height: 10, backgroundColor: color}}/>
    )
  }
}
