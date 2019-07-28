/* @flow */

import * as React from "react";
import { FlatList } from "react-native";
import { Appbar, withTheme } from "react-native-paper";

import { dataOnlyImage } from "../../data";
import Item from "./Item";

class StandardImageList extends React.Component {
  static title = "Standard image list";
  static navigationOptions = ({ navigation }) => {
    return {
      header: (
        <Appbar.Header>
          <Appbar.BackAction onPress={() => navigation.goBack()} />
          <Appbar.Content title="Standard image list" />
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
        data={dataOnlyImage}
        numColumns={3}
        renderItem={({ item, index }) => <Item image={item} numColumns={3} />}
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

export default withTheme(StandardImageList);
