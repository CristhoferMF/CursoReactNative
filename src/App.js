/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  View,
} from 'react-native';

import {Scene, Router} from 'react-native-router-flux';
import HomeView from './HomeView'
import LoginView from './LoginView'
import ArtistDetailView from './ArtistDetailView'
type Props = {};
class App extends Component<Props> {
  render() {
    const isAndroid = Platform.OS === 'android'
    
    return <Router>
      <Scene key="root">
        <Scene key="login" component={LoginView} hideNavBar/>
        <Scene key="home" component={HomeView} hideNavBar/>
        <Scene key="artistDetail" component={ArtistDetailView} hideNavBar={isAndroid}/>
      </Scene>
    </Router>
  }
}

AppRegistry.registerComponent('miproyecto', () => App);


