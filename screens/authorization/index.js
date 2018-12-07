import React, { Component } from "react";
import {
  View,
  TextInput,
  Text,
  ImageBackground,
  StyleSheet
} from "react-native";

import background_pic from '../../assets/background.jpg';

export class AuthorizationScreen extends Component {

  constructor(props) {
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

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  flexCenter: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  flexRow: {
    flexDirection: 'row'
  },
  flexColumn: {
    flexDirection: 'column'
  },
  label: {
    color: 'white',
  },
  input: {
    height: 40,
    width: 200,
    marginTop: 2,
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'white',
    color: 'white',
    fontSize: 16,
  }
});
