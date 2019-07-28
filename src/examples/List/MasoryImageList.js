/* @flow */

import * as React from "react";
import { View } from "react-native";
import Masonry from "react-native-masonry";
import { Appbar, withTheme } from "react-native-paper";

import { dataOnlyImageUri } from "../data";

class MasonryImageList extends React.Component {
  static title = "Masonry image list";
  static navigationOptions = ({ navigation }) => {
    return {
      header: (
        <Appbar.Header>
          <Appbar.BackAction onPress={() => navigation.goBack()} />
          <Appbar.Content title="Masonry image list" />
        </Appbar.Header>
      )
    };
  };

  render() {
    const { theme } = this.props;
    return (
      <View style={styles.container(theme)}>
        <Masonry columns={2} bricks={dataOnlyImageUri} />
      </View>
    );
  }
}

const styles = {
  container: theme => ({
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: 5
  })
};

export default withTheme(MasonryImageList);
