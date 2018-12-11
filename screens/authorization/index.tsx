import React, { Component } from "react";
import {
  View,
  TextInput,
  Text,
  ImageBackground,
  Alert,
  TouchableHighlight,
  Image,
  ActivityIndicator,
  KeyboardAvoidingView
} from "react-native";

import { styles } from '../../styles';
import background_pic from '../../assets/background.jpg';
import logo_pic from '../../assets/logo.png';
import preload_anim from '../../assets/preload.gif';

interface IAuthorizationScreenState {
  login: string,
  password: string,
  isLoading: boolean
}

export class AuthorizationScreen extends Component<any, IAuthorizationScreenState> {

  constructor(props: any) {
    super(props);
    this.state = {
      login: '',
      password: '', 
      isLoading: true
    };
  }

  componentDidMount = () => setTimeout(() => {
    this.setState({
      isLoading: false
    })
  }, 500);

  render() {
    
    const { login, password, isLoading } = this.state;
    const isEmpty = !login.length || !password.length;

    return (
      isLoading
        ? <ActivityIndicator 
            color = '#bc2b78'
            size = "large"
            style={{marginTop: 200}}
          />
        : <KeyboardAvoidingView behavior='padding'>
            <ImageBackground
              loadingIndicatorSource={preload_anim}
              source={background_pic} 
              style={{width: '100%', height: '100%'}}
            >
              <View style={[styles.flex, styles.flexCenter, styles.flexColumn]}>
                <Image 
                  loadingIndicatorSource={preload_anim}
                  source={logo_pic}
                  style={styles.logo}
                  resizeMode='contain'
                />
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
                  onPress={() => isEmpty ? null : Alert.alert('Log in!')}
                >
                  <Text style={isEmpty ? styles.buttonTextDisabled : styles.buttonText}>LOG IN</Text>
                </TouchableHighlight>
              </View>
            </ImageBackground>
          </KeyboardAvoidingView>
    )
  }
}
