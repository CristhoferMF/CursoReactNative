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
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class ArtistBox extends Component<Props> {
  render() {
    const { image,name,likes,comments }=this.props.artist;
    return (
        <View style={styles.artistBox}>
          <Image style={styles.image} source={{uri:image}}/>
          <View style={styles.info}>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.row}>
              <View style={styles.iconContainer}>
                <Icon name='ios-heart-outline' size={30} color='gray'/>
                <Text style={styles.count}>{likes}</Text></View>
              <View style={styles.iconContainer}>
                <Icon name='ios-chatboxes-outline' size={30} color='gray'/>
                <Text style={styles.count}>{comments}</Text>
              </View>
            </View>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'lightgray',
    paddingTop: 15,
  },
  image:{
    width:150,
    height:150,
    //borderBottomLeftRadius:20,
    //borderTopLeftRadius:20
  },
  artistBox:{
    backgroundColor: 'white',
    flexDirection: 'row',
    margin:5,
    elevation:2,
    //borderRadius:20
  },
  info:{
    flex:1,
    flexDirection: 'column',
    alignItems:'center',
    justifyContent:'center'
  },
  name:{
    fontSize:18,
    marginTop:10,
    color:'#333'
  },
  row:{
    flexDirection:'row',
    flex:1,
    justifyContent:'space-between',
    marginHorizontal:40,
    marginTop:20
  },
  iconContainer:{
    flex:1,
    alignItems:'center',
  },
  count:{
    color:'gray'
  }
});
