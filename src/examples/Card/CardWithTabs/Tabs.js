/* @flow */

import * as React from "react";
import { View } from "react-native";

import TabItem from "./TabItem";

export default class Tabs extends React.PureComponent {
  state = {
    selectedIndex: 0
  };

  render() {
    const { selectedIndex } = this.state;

    return (
      <View style={styles.container}>
        <TabItem
          title="DAY"
          selected={selectedIndex === 0}
          onPress={() => this.setState({ selectedIndex: 0 })}
        />
        <TabItem
          title="WEEK"
          selected={selectedIndex === 1}
          onPress={() => this.setState({ selectedIndex: 1 })}
        />
        <TabItem
          title="MONTH"
          selected={selectedIndex === 2}
          onPress={() => this.setState({ selectedIndex: 2 })}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    flexDirection: "row"
  }
};
