/* @flow */

import * as React from "react";
import { FlatList } from "react-native";
import { List, Divider, Appbar, withTheme } from "react-native-paper";

import data from "../data";

class FullDivider extends React.Component {
  static title = "Full divider";
  static navigationOptions = ({ navigation }) => {
    return {
      header: (
        <Appbar.Header>
          <Appbar.BackAction onPress={() => navigation.goBack()} />
          <Appbar.Content title="Full divider" />
        </Appbar.Header>
      )
    };
  };

  render() {
    const { theme } = this.props;
    return (
      <FlatList
        style={styles.container(theme)}
        keyExtractor={(item, index) => `${index}`}
        data={data}
        renderItem={({ item }) => <List.Item {...item} />}
        ItemSeparatorComponent={Divider}
      />
    );
  }
}

const styles = {
  container: theme => ({
    flex: 1,
    backgroundColor: theme.colors.background
  })
};

export default withTheme(FullDivider);
