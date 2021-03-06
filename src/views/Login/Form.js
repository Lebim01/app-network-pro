import React, {Component} from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
} from 'react-native';

import UserInput from './UserInput';
import usernameImg from '@assets/images/username.png';
import passwordImg from '@assets/images/password.png';
import eyeImg from '@assets/images/eye_black.png';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPass: true,
      press: false,
    };
    this.showPass = this.showPass.bind(this);
  }

  showPass() {
    this.state.press === false
      ? this.setState({showPass: false, press: true})
      : this.setState({showPass: true, press: false});
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <UserInput
          source={usernameImg}
          placeholder="Usuario"
          autoCapitalize={'none'}
          autoCorrect={false}
          onChange={this.props.onChange('username')}
          returnKeyType="next"
        />
        <UserInput
          source={passwordImg}
          secureTextEntry={this.state.showPass}
          placeholder="Contraseña"
          autoCapitalize={'none'}
          autoCorrect={false}
          onChange={this.props.onChange('password')}
          returnKeyType="done"
        />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  btnEye: {
    position: 'absolute',
    top: 55,
    right: 28,
  },
  iconEye: {
    width: 25,
    height: 25,
    tintColor: 'rgba(0,0,0,0.2)',
  },
});