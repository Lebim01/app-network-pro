import * as React from "react";
import {
  Provider as PaperProvider,
  DefaultTheme,
  DarkTheme,
  Colors
} from "react-native-paper";
import axios from 'axios'
import { baseUrl } from '@utils/request'

import RootNavigator from "@routes";
import '@components/Calendar'

axios.defaults.baseURL = baseUrl;

/**
 * config theme https://callstack.github.io/react-native-paper/theming.html
 */
const LightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    subtitle: Colors.grey600
  }
};

const CustomDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary : Colors.grey50,
    subtitle: Colors.grey50
  }
};

export default class ReactXS extends React.Component {
  state = { theme: LightTheme };

  _toggleTheme = () =>
    this.setState(state => ({
      theme: state.theme === CustomDarkTheme ? LightTheme : CustomDarkTheme
    }));

  render() {
    return (
      <PaperProvider theme={this.state.theme}>
        <RootNavigator
          toggleTheme={this._toggleTheme}
          isDarkTheme={this.state.theme === CustomDarkTheme}
        />
      </PaperProvider>
    );
  }
}
