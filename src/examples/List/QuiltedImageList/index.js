/* @flow */

import * as React from "react";
import { View, FlatList } from "react-native";

import { Appbar, withTheme } from "react-native-paper";

import { dataWithSecondSection } from "../../data";
import Item from "./Item";

class QuiltedImageList extends React.Component {
  static title = "Quilted image list";
  static navigationOptions = ({ navigation }) => {
    return {
      header: (
        <Appbar.Header>
          <Appbar.BackAction onPress={() => navigation.goBack()} />
          <Appbar.Content title="Quilted image list" />
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
        data={dataWithSecondSection}
        numColumns={2}
        renderItem={this.renderItem}
      />
    );
  }

  renderItem = ({ item, index }) => {
    return (
      <View style={styles.wrap}>
        {item.data.map((data, index) => (
          <Item key={index} image={data.image} size={data.size} />
        ))}
      </View>
    );
  };
}

const styles = {
  container: theme => ({
    flex: 1,
    backgroundColor: theme.colors.background
  }),
  wrap: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap"
  }
};

export default withTheme(QuiltedImageList);
