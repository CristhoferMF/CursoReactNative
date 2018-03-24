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
  Button
} from 'react-native'
import FBSDK ,{ LoginButton,AccessToken} from 'react-native-fbsdk'
import { Actions } from 'react-native-router-flux';
import firebase,{firebaseAuth} from './firebase'

const {FacebookAuthProvider} = firebase.auth

type Props = {};
export default class LoginView extends Component<Props> {
state ={
  credentials:null
}

componentWillMount(){
this.authenticateUser()
}
authenticateUser = () => {
 AccessToken.getCurrentAccessToken().then((data)=> {
 const {accessToken}=data
const credential= FacebookAuthProvider.credential(accessToken)
firebaseAuth.signInWithCredential(credential).then((credentials) => {
  //console.log("Sign In Success", user);
    Actions.home()
  }).catch(function(error) {
  console.log("Sign In Error", error);
});
})
}

handleButtonPress = () =>{
  Actions.home()
}
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.welcome}>Bienvenido a la musica</Text>
      <LoginButton
          readPermissions={['public_profile','email']}
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.error(error)
              } else if (result.isCancelled) {
                alert("login is cancelled.");
              } else {
                  this.authenticateUser()
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
