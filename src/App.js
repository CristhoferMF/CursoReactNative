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
} from 'react-native';

import Artistlist from './ArtistList'
import {getArtist} from './apiClient'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  state ={
    artists:[]
  }
  componentDidMount(){
    getArtist().then(data => this.setState({artists:data}))
  }

  render() {

    const artists=this.state.artists

    return (
      <View style={styles.container}>
        <Artistlist artists={artists}/>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'lightgray',
    paddingTop: 20
  }
});
