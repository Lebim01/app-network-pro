/* @flow */

import * as React from "react";
import { FlatList } from "react-native";
import { List, Divider, Appbar, withTheme } from "react-native-paper";

import { dataWithIcon } from "../data";

class ExpandList extends React.Component {
  static title = "Expand and collapse list";
  static navigationOptions = ({ navigation }) => {
    return {
      header: (
        <Appbar.Header>
          <Appbar.BackAction onPress={() => navigation.goBack()} />
          <Appbar.Content title="Expand and collapse" />
        </Appbar.Header>
      )
    };
  };

  renderItem = ({ item }) => {
    return (
      <List.Accordion
        title={item.label}
        left={props => <List.Icon {...props} icon={item.icon} />}
      >
        <List.Item title="First item" />
        <List.Item title="Second item" />
        <List.Item title="Third item" />
        <List.Item title="Fourth item" />
      </List.Accordion>
    );
  };

  render() {
    const { theme } = this.props;
    return (
      <FlatList
        style={styles.container(theme)}
        keyExtractor={(item, index) => `${index}`}
        data={dataWithIcon}
        renderItem={this.renderItem}
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

export default withTheme(ExpandList);
