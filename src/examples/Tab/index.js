/**
 * Example tab
 */

import React, { Component } from "react";
import { View } from "react-native";
import { withTheme, Appbar } from "react-native-paper";

import { XSTab } from "@components";
import data from "../data";
import Recent from "./Recent";
import Favorite from "./Favorite";

const tabs = [
  {
    icon: "query-builder",
    title: "RECENT"
  },
  {
    icon: "favorite",
    title: "FAVORITES"
  }
];

class ExampleTab extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: (
        <Appbar.Header>
          <Appbar.BackAction onPress={() => navigation.goBack()} />
          <Appbar.Content title="Tab Example" />
        </Appbar.Header>
      )
    };
  };

  state = {
    selectedIndex: 0
  };

  _onChangeTab = selectedIndex => {
    this.setState({ selectedIndex });
  };

  render() {
    const { selectedIndex } = this.state;
    const { theme } = this.props;

    return (
      <View style={styles.container(theme)}>
        <XSTab
          tabs={tabs}
          selectedIndex={selectedIndex}
          onPress={this._onChangeTab}
        />
        {selectedIndex === 0 && <Recent theme={theme} data={data} />}
        {selectedIndex === 1 && <Favorite theme={theme} data={data} />}
      </View>
    );
  }
}

const styles = {
  container: theme => ({
    flex: 1,
    backgroundColor: theme.colors.background
  })
};

export default withTheme(ExampleTab);
