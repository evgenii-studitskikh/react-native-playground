import React, { Component } from "react";
import {
  ImageBackground
} from "react-native";

import background_pic from '../../assets/background.jpg';

export class Background extends Component {
  render() {

    return (
      <ImageBackground source={background_pic} style={{width: '100%', height: '100%'}}/>
    )
  }
}
