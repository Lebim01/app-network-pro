import * as React from "react";
import {
  Provider as PaperProvider,
  DefaultTheme,
  DarkTheme,
  Colors
} from "react-native-paper";

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import RootNavigator from "@routes";
import '@components/Calendar'

const client = new ApolloClient({
  uri: 'http://datatecblocks.xyz:4001/graphql'
});

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
      <ApolloProvider client={client}>
        <PaperProvider theme={this.state.theme}>
          <RootNavigator
            toggleTheme={this._toggleTheme}
            isDarkTheme={this.state.theme === CustomDarkTheme}
          />
        </PaperProvider>
      </ApolloProvider>
    );
  }
}
