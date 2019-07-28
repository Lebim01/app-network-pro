/* @flow */

import * as React from "react";
import { Image, FlatList } from "react-native";
import { List, Divider, Appbar, Checkbox, withTheme } from "react-native-paper";

import { dataWithIcon } from "../data";

class ControlList extends React.Component {
  static title = "Control list";
  static navigationOptions = ({ navigation }) => {
    return {
      header: (
        <Appbar.Header>
          <Appbar.BackAction onPress={() => navigation.goBack()} />
          <Appbar.Content title="Control list" />
        </Appbar.Header>
      )
    };
  };

  state = {
    selected: []
  };

  _isChecked = index => {
    return this.state.selected.indexOf(index) > -1;
  };

  onPressItem = index => {
    const i = this.state.selected.indexOf(index);
    if (i > -1) {
      const indexs = [...this.state.selected];
      indexs.splice(i, 1);
      this.setState({ selected: indexs });
    } else {
      this.setState({ selected: [...this.state.selected, index] });
    }
  };

  render() {
    const { theme } = this.props;
    return (
      <FlatList
        style={styles.container(theme)}
        keyExtractor={(item, index) => `${index}`}
        data={dataWithIcon}
        renderItem={({ item, index }) => (
          <List.Item
            title={item.label}
            left={() => <List.Icon icon={item.icon} style={styles.avatar} />}
            right={() => (
              <Checkbox
                status={this._isChecked(index) ? "checked" : "unchecked"}
                onPress={() => this.onPressItem(index)}
              />
            )}
            onPress={() => {}}
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

export default withTheme(ControlList);
