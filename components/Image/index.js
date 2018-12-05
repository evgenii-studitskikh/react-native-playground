import React, { Component } from "react";
import {
  Image
} from "react-native";

import ninja_pic from '../../assets/ninja.png';

export class Picture extends Component {
  render() {

    return (
      <Image source={ninja_pic} style={{width: 100}}/>
    )
  }
}
