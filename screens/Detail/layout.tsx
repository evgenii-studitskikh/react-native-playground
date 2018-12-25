import React, { Component } from "react";
import { connect } from 'react-redux';
import {
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import {
  View,
  Text
} from 'native-base';
import axios from 'axios';

import { FadeInImage } from '../../components/FadeInImage';
import { config } from '.././../config'
import { styles } from '../../styles';
import { 
  getActiveListItem, 
  getDataImages 
} from '../../store/selectors';
import { 
  setDataImages, 
  setDataImagesType 
} from '../../store/actions/detail';

interface IDetailScreenLayoutProps {
  activeListItem: any,
  navigation: any,
  dataImages: any,
  setDataImages: setDataImagesType
}

interface IDetailScreenLayoutState {
  data: any
}

class DetailScreenLayout extends Component<IDetailScreenLayoutProps> {

  public state: IDetailScreenLayoutState = {
    data: null
  }

  public getData = () => {

    const { activeListItem, setDataImages } = this.props;
    
    axios.get(activeListItem.url)
      .then((response) => this.setState({
        data: response.data
      }))
      .catch((error) => console.log(error));

    axios.get(`${config.apiPathPixabay}?key=${config.apiTokenPixabay}&q=${activeListItem.title}`)
      .then((response) => setDataImages(response.data))
      .catch((error) => console.log(error));
  }
  
  public componentDidMount() {
    this.getData();
  }

  render() {
    
    const { data } = this.state;
    const { dataImages, navigation } = this.props;

    return (
      data ?
        <ScrollView style={[{padding: 20}]}>
          <Text>Height: {data.height}</Text>
          <Text>Mass: {data.mass}</Text>
          <Text>Hair color: {data.hair_color}</Text>
          <Text>Skin color: {data.skin_color}</Text>
          <Text>Eye color: {data.eye_color}</Text>
          <Text>Birth year: {data.birth_year}</Text>
          <Text>Gender: {data.gender}</Text>
          {dataImages && dataImages.hits &&
            <View style={[styles.flex, styles.flexRow, {flexWrap: 'wrap', justifyContent: 'space-between'}]}>
              {dataImages.hits.map((image: any) =>
                <TouchableOpacity
                  key={image.id}
                  onPress={() => navigation.navigate('Swiper')}
                >
                  <FadeInImage 
                    source={image.previewURL}
                  />
                </TouchableOpacity>
              )}
            </View>
          }
        </ScrollView>
      :
        <View style={[styles.flexCenter, styles.flex]}>
          <ActivityIndicator style={{marginTop: 10}}/>
        </View>
    )
  }
}

const mapStateToProps = (state: any) => ({
  activeListItem: getActiveListItem(state),
  dataImages: getDataImages(state)
});

export default connect(mapStateToProps, {
  setDataImages
})(DetailScreenLayout);
