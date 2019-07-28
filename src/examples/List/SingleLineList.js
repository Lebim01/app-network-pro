/* @flow */

import * as React from "react";
import { FlatList } from "react-native";
import { List, Divider, Appbar, withTheme } from "react-native-paper";

const data = [
  {
    icon: "account-balance-wallet",
    text: "Attractions"
  },
  {
    icon: "build",
    text: "Dining"
  },
  {
    icon: "library-books",
    text: "Education"
  },
  {
    icon: "queue-play-next",
    text: "Health"
  },
  {
    icon: "group",
    text: "Family"
  },
  {
    icon: "location-city",
    text: "Office"
  }
];

class SingleLineList extends React.Component {
  static title = "Single list";
  static navigationOptions = ({ navigation }) => {
    return {
      header: (
        <Appbar.Header>
          <Appbar.BackAction onPress={() => navigation.goBack()} />
          <Appbar.Content title="Single list" />
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
            title={item.text}
            left={props => <List.Icon {...props} icon={item.icon} />}
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

export default withTheme(SingleLineList);
