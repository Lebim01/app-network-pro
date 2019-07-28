/* @flow */

import * as React from "react";
import { FlatList } from "react-native";
import { Divider, Appbar, withTheme } from "react-native-paper";

import Item from "./Item";

const data = [
  {
    title: "Photos",
    time: "Jan 9, 2018"
  },
  {
    title: "Recipes",
    time: "Jan 17, 2018"
  },
  {
    title: "Work",
    time: "Jan 28, 2018"
  },
  {
    title: "Vacation",
    time: "Jan 20, 2018"
  },
  {
    title: "Kitchen",
    time: "Jan 10, 2018"
  },
  {
    title: "Videos",
    time: "Jan 9, 2018"
  }
];

class TwoLineList extends React.Component {
  static title = "Two line list";
  static navigationOptions = ({ navigation }) => {
    return {
      header: (
        <Appbar.Header>
          <Appbar.BackAction onPress={() => navigation.goBack()} />
          <Appbar.Content title="Two line list" />
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
        renderItem={({ item, index }) => (
          <Item
            title={item.title}
            description={item.time}
            icon="folder"
            theme={theme}
          />
        )}
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

export default withTheme(TwoLineList);
