import React, { Component } from "react";
import {
  View,
  TextInput,
  Text,
  ImageBackground,
  Alert,
  TouchableHighlight,
  Image,
} from "react-native";

import { styles } from '../../styles';
import background_pic from '../../assets/background.jpg';
import logo_pic from '../../assets/logo.png';

interface IAuthorizationScreenState {
  login: string,
  password: string
}

export class AuthorizationScreen extends Component<any, IAuthorizationScreenState> {

  constructor(props: any) {
    super(props);
    this.state = {
      login: '',
      password: ''
    };
  }

  render() {
    
    const { login, password } = this.state;
    const isEmpty = !login.length || !password.length;

    return (
      <ImageBackground source={background_pic} style={{width: '100%', height: '100%'}}>
        <View style={[styles.flex, styles.flexCenter, styles.flexColumn]}>
          <Image source={logo_pic} style={styles.logo} resizeMode='contain'/>
          <View>
            <Text style={styles.label}>Login</Text>
            <TextInput
              onChangeText={(value) => this.setState({login: value})}
              style={styles.input}
            />
          </View>
          <View style={{marginTop: 10}}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              onChangeText={(value) => this.setState({password: value})}
              style={styles.input}
              secureTextEntry
            />
          </View>
          <TouchableHighlight
            style={[styles.button, isEmpty ? styles.buttonDisabled : null]}
            underlayColor={isEmpty ? '#9CABCA' : '#0D2D5C'}
            onPress={() => Alert.alert('Log in!')}
          >
            <Text style={isEmpty ? styles.buttonTextDisabled : styles.buttonText}>LOG IN</Text>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    )
  }
}
