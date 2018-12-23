import React, { Component } from "react";
import { connect } from 'react-redux';
import {
  ActivityIndicator,
  TouchableOpacity,
  Image
} from "react-native";
import {
  View,
  DeckSwiper,
  Card,
  CardItem,
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
          <DeckSwiper
            dataSource={dataImages.hits}
            renderItem={(item: any) =>
              <Card style={{ elevation: 3 }}>
                <CardItem cardBody>
                  <Image 
                    style={{ height: 300, flex: 1 }} 
                    source={{uri: item.webformatURL}} 
                  />
                </CardItem>
              </Card>
            }
          />
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
