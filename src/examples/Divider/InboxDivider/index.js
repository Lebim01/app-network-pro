/* @flow */

import * as React from "react";
import { View, FlatList } from "react-native";
import { Caption, Divider, Appbar, withTheme } from "react-native-paper";

import data from "../../data";
import InboxItem from "./InboxItem";

class InboxDivider extends React.Component {
  static title = "Inbox divider";
  static navigationOptions = ({ navigation }) => {
    return {
      header: (
        <Appbar.Header>
          <Appbar.BackAction onPress={() => navigation.goBack()} />
          <Appbar.Content title="Inbox divider" />
          <Appbar.Action icon="search" onPress={() => {}} />
          <Appbar.Action icon="more-vert" onPress={() => {}} />
        </Appbar.Header>
      )
    };
  };

  render() {
    const { theme } = this.props;

    return (
      <View style={styles.container(theme)}>
        <Caption style={styles.header(theme)}>Today</Caption>
        <FlatList
          style={styles.container}
          keyExtractor={(item, index) => `${index}`}
          data={data}
          renderItem={({ item }) => <InboxItem {...item} theme={theme} />}
          ItemSeparatorComponent={() => (
            <Divider style={styles.divider(theme)} />
          )}
        />
      </View>
    );
  }
}

const styles = {
  container: theme => ({
    flex: 1,
    backgroundColor: theme.colors.background
  }),
  divider: theme => ({
    marginLeft: 60,
    marginVertical: 5,
    backgroundColor: theme.colors.subtitle
  }),
  header: theme => ({
    fontSize: 15,
    color: theme.colors.text,
    padding: 10,
    backgroundColor: theme.colors.background
  })
};

export default withTheme(InboxDivider);
