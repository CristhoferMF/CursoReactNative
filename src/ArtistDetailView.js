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
  TouchableOpacity
} from 'react-native';

import ArtistBox from './ArtistBox'
import {getArtist} from './apiClient'
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { Actions } from 'react-native-router-flux';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class ArtistDetailView extends Component<Props> {
  
  handlePress(){
      Actions.pop();
    }

  render() {
    const artist=this.props.artist
    return (
      <View style={styles.container}>
        <View style={styles.backContainer}>
        <TouchableOpacity style={styles.touchable} onPress={this.handlePress}>
          <Icon name='md-arrow-round-back' size={23} color='#282828' style={styles.iconBack}/> 
          <Text style={styles.back}>{this.props.artist.name}</Text>
        </TouchableOpacity>
        </View>
        <ArtistBox artist={artist}/>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'lightgray',
  },
  back:{
    fontSize:18,
    color: '#282828',
  },
  backContainer:{
    backgroundColor: '#EEEEEE',
    flex:0,
    elevation:3,
    flexDirection:'row',
    marginBottom:10,
    height:50
  },
  iconBack:{
    paddingHorizontal:20
  },
  touchable:{
    flexDirection:'row',
    alignItems:'center',
  }
});
