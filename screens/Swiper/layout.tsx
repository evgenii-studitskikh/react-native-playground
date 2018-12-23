import React, { Component } from "react";
import { connect } from 'react-redux';
import {
  ActivityIndicator
} from "react-native";
import { 
  Container,
  Header,
  View,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Icon
} from 'native-base';

import { styles } from '../../styles';
import { getDataImages } from '../../store/selectors';

interface ISwiperScreenLayoutProps {
  dataImages: any
}

class SwiperScreenLayout extends Component<ISwiperScreenLayoutProps> {

  render() {
    
    const { dataImages } = this.props;

    return (
      dataImages ?
        <View>
          <Text>yes!</Text>
        </View>
      :
        <View style={[styles.flexCenter, styles.flex]}>
          <ActivityIndicator style={{marginTop: 10}}/>
        </View>
    )
  }
}

const mapStateToProps = (state: any) => ({
  dataImages: getDataImages(state)
});

export default connect(mapStateToProps, {})(SwiperScreenLayout);
