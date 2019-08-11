import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native';

import bgSrc from '@assets/images/wallpaper.jpg';

export default class Wallpaper extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.children}
        <Image style={styles.picture} source={bgSrc}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  },
  picture: { 
    zIndex: -1, 
    position: 'absolute', 
    top: 0, 
    left: 0, 
    right: 0, 
    bottom: 0, 
    resizeMode: 'cover' 
  }
});