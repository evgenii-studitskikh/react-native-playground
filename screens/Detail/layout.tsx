import React, { Component } from "react";
import { connect } from 'react-redux';
import {
  View,
  Text,
  ActivityIndicator
} from "react-native";
import axios from 'axios';

import { styles } from '../../styles';
import { getActiveListItem } from '../../store/selectors';

interface IDetailScreenLayoutProps {
  activeListItem: any,
  navigation: any
}

interface IDetailScreenLayoutState {
  data: any,
}

class DetailScreenLayout extends Component<IDetailScreenLayoutProps> {

  public state: IDetailScreenLayoutState = {
    data: null
  }

  public getData = () => {

    const { activeListItem } = this.props;
    
    axios.get(activeListItem.url)
      .then((response) => this.setState({
        data: response.data
      }))
      .catch((error) => console.log(error));
  }
  
  public componentDidMount() {
    this.getData();
  }

  render() {
    
    const { data } = this.state;
    
    return (
      data ?
        <View style={[{marginTop: 20}, {marginLeft: 20}]}>
          <Text>Height: {data.height}</Text>
          <Text>Mass: {data.mass}</Text>
          <Text>Hair color: {data.hair_color}</Text>
          <Text>Skin color: {data.skin_color}</Text>
          <Text>Eye color: {data.eye_color}</Text>
          <Text>Birth year: {data.birth_year}</Text>
          <Text>Gender: {data.gender}</Text>
        </View>
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
