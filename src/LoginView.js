/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
} from 'react-native'
import FBSDK ,{ LoginButton,AccessToken} from 'react-native-fbsdk'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class LoginView extends Component<Props> {

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.welcome}>Bienvenido a la musica</Text>
        <LoginButton
          readPermissions={["email"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("login has error: " + result.error);
              } else if (result.isCancelled) {
                alert("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    alert(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => alert("logout.")}/>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'lightgray',
    justifyContent: 'center',
    alignItems:'center'
  },
  welcome:{
    fontSize:15,
    fontWeight:'600',
  }
});
