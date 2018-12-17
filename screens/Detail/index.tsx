import React, { Component } from "react";

import Layout from './layout';

export class DetailScreen extends Component {

  render() {

    return (
      <Layout
        {...this.props}
      />
    )
  }
}
