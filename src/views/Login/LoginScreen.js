import React, {Component} from 'react';
import Logo from './Logo';
import Form from './Form';
import Wallpaper from './Wallpaper';
import ButtonSubmit from './ButtonSubmit';
import SignupSection from './SignupSection';
import axios from 'axios'
import * as SecureStore from 'expo-secure-store';

export default class LoginScreen extends Component {

  state = {
    username : '',
    password : ''
  }

  onChange = name => (text) => {
    this.setState({
      [name] : text
    })
  }

  async login(token){
    await SecureStore.setItemAsync("token", token)
    axios.defaults.headers.common['token'] = token
    this.props.navigation.navigate('Main')
  }

  async componentDidMount(){
    let token = await SecureStore.getItemAsync('token')
    if(token){
      const { data } = await axios.post('/access/authenticate', { token })
      if(data.status === 200){
        this.login(token)
      }
    }
  }

  render() {
    const { username, password } = this.state
    return (
      <Wallpaper>
        <Logo />
        <Form onChange={this.onChange.bind(this)} username={username} password={password} />
        <SignupSection />
        <ButtonSubmit username={username} password={password} login={this.login.bind(this)} />
      </Wallpaper>
    );
  }
}