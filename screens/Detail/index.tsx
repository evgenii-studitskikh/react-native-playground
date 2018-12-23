import React, { Component } from "react";

import Layout from './layout';

export class DetailScreen extends Component<any> {

  static navigationOptions = ({ navigation }: any) => {
    return {
      title: navigation.getParam('name'),
    };
  };

  render() {

    const { navigation } = this.props;

    return (
      <Layout
        navigation={navigation}
      />
    )
  }
}
