import React, { Component } from "react";
import { connect } from 'react-redux';
import {
  View,
  ScrollView,
  Text,
  ActivityIndicator,
  Image
} from "react-native";
import axios from 'axios';

import { config } from '.././../config'
import { styles } from '../../styles';
import { getActiveListItem } from '../../store/selectors';

interface IDetailScreenLayoutProps {
  activeListItem: any,
  navigation: any
}

interface IDetailScreenLayoutState {
  data: any,
  dataImages: any
}

class DetailScreenLayout extends Component<IDetailScreenLayoutProps> {

  public state: IDetailScreenLayoutState = {
    data: null,
    dataImages: null
  }

  public getData = () => {

    const { activeListItem } = this.props;
    
    axios.get(activeListItem.url)
      .then((response) => this.setState({
        data: response.data
      }))
      .catch((error) => console.log(error));

    axios.get(`${config.apiPathPixabay}?key=${config.apiTokenPixabay}&q=${activeListItem.title}`)
      .then((response) => this.setState({
        dataImages: response.data
      }))
      .catch((error) => console.log(error));
  }
  
  public componentDidMount() {
    this.getData();
  }

  render() {
    
    const { data, dataImages } = this.state;

    return (
      data ?
        <ScrollView style={[{marginTop: 20}, {marginLeft: 20}]}>
          <Text>Height: {data.height}</Text>
          <Text>Mass: {data.mass}</Text>
          <Text>Hair color: {data.hair_color}</Text>
          <Text>Skin color: {data.skin_color}</Text>
          <Text>Eye color: {data.eye_color}</Text>
          <Text>Birth year: {data.birth_year}</Text>
          <Text>Gender: {data.gender}</Text>
          {dataImages && dataImages.hits &&
            dataImages.hits.map((image: any) =>
              <Image 
                key={image.id}
                source={{uri: image.largeImageURL}}
                style={{width: 100, height: 100, marginTop: 10}} 
              />
            )
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
  activeListItem: getActiveListItem(state)
});

export default connect(mapStateToProps, {})(DetailScreenLayout);
