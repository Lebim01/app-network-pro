/**
 * config routes
 */
import React from "react";
import { createStackNavigator, createSwitchNavigator, createDrawerNavigator } from "react-navigation";
import { Appbar } from "react-native-paper";

import { routes } from '@views/menu'

import DrawerItems from "./DrawerItems";
import LoginScreen from "@views/Login/LoginScreen";

// app navigator fragment
const AppNavigator = createSwitchNavigator(routes);

// app navigator
const FragmentContainer = createStackNavigator(
  { Home: AppNavigator },
  {
    navigationOptions: ({ navigation }) => ({
      header: (
        <Appbar.Header dark>
          <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
          <Appbar.Content title="Network PRO" />
        </Appbar.Header>
      )
    })
  }
);

export default class RootNavigator extends React.Component {
  render() {
    const Navigator = createDrawerNavigator(
      { Home : LoginScreen, Main: { screen: FragmentContainer } },
      {
        contentComponent: (props) => {
          return (
            <DrawerItems
              {...props}
              toggleTheme={this.props.toggleTheme}
              isDarkTheme={this.props.isDarkTheme}
            />
          );
        }
      }
    );

    return <Navigator {...this.props} />;
  }
}
