import React, { Component } from "react";
import { connect } from 'react-redux';
import {
  View,
  Text
} from "react-native";

import { getActiveListItem } from '../../store/selectors';

interface IDetailScreenLayout {
  activeListItem: any
}

class DetailScreenLayout extends Component<IDetailScreenLayout> {

  render() {
    
    const { activeListItem } = this.props;
    
    return (
      <View>
        <Text>DetailScreen</Text>
        <Text>{activeListItem && activeListItem.title}</Text>
      </View>
    )
  }
}

const mapStateToProps = (state: any) => ({
  activeListItem: getActiveListItem(state)
});

export default connect(mapStateToProps, {})(DetailScreenLayout);
