/* @flow */

import * as React from "react";
import { FlatList } from "react-native";
import { List, withTheme, Divider, Appbar } from "react-native-paper";

import data from "../data";

class MiddleDivider extends React.Component {
  static title = "Middle divider";
  static navigationOptions = ({ navigation }) => {
    return {
      header: (
        <Appbar.Header>
          <Appbar.BackAction onPress={() => navigation.goBack()} />
          <Appbar.Content title="Middle divider" />
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
            {...item}
            left={props => <List.Icon {...props} icon="contact-phone" />}
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
  divider: {
    marginHorizontal: 20
  }
};

export default withTheme(MiddleDivider);
