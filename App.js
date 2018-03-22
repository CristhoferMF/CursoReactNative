/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import ArtistBox from './ArtistBox'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    const artist={
      image: 'https://cdn-images-1.medium.com/max/2000/1*KB0_Uj3RfiRis9_BFZGsTg.png',
      name:'The Beatles',
      likes:200,
      comments:140
    }
    return (
      <ScrollView style={styles.container}>
        <ArtistBox artist={artist}/>
        <ArtistBox artist={artist}/>
        <ArtistBox artist={artist}/>
        <ArtistBox artist={artist}/>
        <ArtistBox artist={artist}/>
        <ArtistBox artist={artist}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'lightgray',
    paddingTop: 20,
  }
});
