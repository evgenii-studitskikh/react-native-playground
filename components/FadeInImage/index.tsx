import React, { Component } from "react";
import {
  Animated
} from "react-native";

interface IFadeInImageProps {
  source: string
}

interface IFadeInImageState {
  fadeAnim: Animated.Value
}

export class FadeInImage extends Component<IFadeInImageProps, IFadeInImageState> {
  
  public state = {
    fadeAnim: new Animated.Value(0),
  }

  public onLoad = () => {
    window.console.log(this.state)
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 1000,
      }
    ).start();
  }

  public render() {

    const { source } = this.props;
    const { fadeAnim } = this.state;

    return (
      <Animated.Image
        source={{uri: source}}
        style={{width: 100, height: 100, opacity: fadeAnim}}
        onLoad={this.onLoad}
      />
    )
  }
}
