/* @flow */

import * as React from "react";
import { Image, FlatList } from "react-native";
import { List, Divider, Appbar, withTheme } from "react-native-paper";

import data from "../data";

class ThreeLine extends React.Component {
  static title = "Three line list";
  static navigationOptions = ({ navigation }) => {
    return {
      header: (
        <Appbar.Header>
          <Appbar.BackAction onPress={() => navigation.goBack()} />
          <Appbar.Content title="Three line list" />
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
        renderItem={({ item }) => (
          <List.Item
            title={item.title}
            description={item.description}
            left={() => <Image source={item.avatar} style={styles.avatar} />}
          />
        )}
        ItemSeparatorComponent={() => <Divider style={styles.divider} />}
      />
    );
  }
}

const styles = {
  container: theme => ({
    flex: 1,
    backgroundColor: theme.colors.background
  }),
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  divider: {
    marginLeft: 70
  }
};

export default withTheme(ThreeLine);
