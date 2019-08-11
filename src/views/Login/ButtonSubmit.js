import React, {Component} from 'react';
import Dimensions from 'Dimensions';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Animated,
  Easing,
  Image,
  View,
} from 'react-native';
import { withTheme } from 'react-native-paper'
import axios from 'axios'

import spinner from '@assets/images/loading_blanco.gif';

const DEVICE_WIDTH = Dimensions.get('window').width;
const MARGIN = 40;

class ButtonSubmit extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
    };

    this.buttonAnimated = new Animated.Value(0);
    this.growAnimated = new Animated.Value(0);
    this._onPress = this._onPress.bind(this);
    this._successLogin = this._successLogin.bind(this)
  }

  async _onPress() {
    const { username, password } = this.props
    if (!username || !password) return;
    if (this.state.isLoading) return;

    this.setState({isLoading: true});
    Animated.timing(this.buttonAnimated, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear,
    }).start();

    try {
      const { data } = await axios.post(`/access/login`, { username, password })
      if(data.status === 200){
        this._successLogin(data.token)
      }else{
        this._failureLogin()
      }
    }catch(e){
      console.log(e)
      this._failureLogin()
    }
  }

  _failureLogin(){
    this.setState({isLoading: false});
    this.buttonAnimated.setValue(0);
  }

  _successLogin(token){
    this._onGrow();
    this.growAnimated.setValue(0);
    setTimeout(() => {
      this.props.login(token)
    }, 1000)
  }

  _onGrow() {
    Animated.timing(this.growAnimated, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear,
    }).start();
  }

  render() {
    const theme = this.props.theme.colors
    const { username, password } = this.props

    const changeWidth = this.buttonAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [DEVICE_WIDTH - MARGIN, MARGIN],
    });
    const changeScale = this.growAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [1, MARGIN],
    });
    
    return (
      <View style={styles.container}>
        <Animated.View style={{width: changeWidth}}>
          <TouchableOpacity
            activeOpacity={1}
            style={(!username || !password) ? styles.buttonDisabled : styles.button(theme)}
            disabled={(!username || !password)}
            onPress={this._onPress}
          >
            {this.state.isLoading ? (
              <Image source={spinner} style={styles.image} />
            ) : (
              <Text style={styles.text}>ENTRAR</Text>
            )}
          </TouchableOpacity>
          <Animated.View
            style={[styles.circle(theme), {transform: [{scale: changeScale}]}]}
          />
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: -95,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  buttonDisabled: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c9c9d1',
    height: MARGIN,
    borderRadius: 20,
    zIndex: 100,
  },
  button: theme => ({
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.primary,
    height: MARGIN,
    borderRadius: 20,
    zIndex: 100,
  }),
  circle: theme => ({
    height: MARGIN,
    width: MARGIN,
    marginTop: -MARGIN,
    borderWidth: 1,
    borderColor: theme.primary,
    borderRadius: 100,
    alignSelf: 'center',
    zIndex: 99,
    backgroundColor: theme.primary,
  }),
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  },
  image: {
    width: 24,
    height: 24,
  },
});

export default withTheme(ButtonSubmit)