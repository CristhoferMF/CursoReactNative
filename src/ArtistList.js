/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  ListView,
} from 'react-native';

import ArtistBox from './ArtistBox'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class ArtistList extends Component<Props> {

constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    
    this.state = {
      dataSource: ds.cloneWithRows(props.artists)
    };
  }
  componentWillReceiveProps(newProps){
    if(newProps.artists !== this.props.artists){
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(newProps.artists)
      })
    }
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(artist) => <ArtistBox artist={artist}/>}
      />
    );
  }
}
