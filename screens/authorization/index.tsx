import React, { Component } from "react";
import {
  View,
  TextInput,
  Text,
  ImageBackground,
} from "react-native";

import { styles } from '../../styles';
import background_pic from '../../assets/background.jpg';

export class AuthorizationScreen extends Component {

  constructor(props: any) {
    super(props);
    this.state = {
      login: '',
      password: ''
    };
  }

  render() {

    return (
      <ImageBackground source={background_pic} style={{width: '100%', height: '100%'}}>
        <View style={[styles.flex, styles.flexCenter, styles.flexColumn]}>
          <View>
            <Text style={styles.label}>Login</Text>
            <TextInput
              onChangeText={(value) => this.setState({login: value})}
              style={styles.input}
            />
          </View>
          <View style ={{marginTop: 10}}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              onChangeText={(value) => this.setState({password: value})}
              style={styles.input}
              secureTextEntry
            />
          </View>
        </View>
      </ImageBackground>
    )
  }
}
