import React, {Component} from 'react';
import Dimensions from 'Dimensions';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default class SignupSection extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.text}>Crear Cuenta</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.text}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: DEVICE_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    paddingTop : 20,
    color: 'white',
    backgroundColor: 'transparent',
  },
});