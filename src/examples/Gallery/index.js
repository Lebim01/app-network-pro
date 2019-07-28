import * as React from "react";
import { View, FlatList } from "react-native";
import { Appbar, Colors, withTheme } from "react-native-paper";

import { dataWithSecondSection2 } from "../data";
import GalleryItem from "./GalleryItem";

class Gallery extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: (
        <Appbar.Header>
          <Appbar.BackAction
            color={Colors.white}
            onPress={() => navigation.goBack()}
          />
          <Appbar.Content color={Colors.white} title="Gallery" />
        </Appbar.Header>
      )
    };
  };

  renderItem = ({ item }) => {
    return (
      <View style={styles.wrap}>
        {item.data.map((data, index) => (
          <GalleryItem
            key={index.toString()}
            image={data.image}
            size={data.size}
          />
        ))}
      </View>
    );
  };

  render() {
    const { theme } = this.props;
    return (
      <FlatList
        style={styles.container(theme)}
        contentContainerStyle={styles.list}
        keyExtractor={(item, index) => `${index}`}
        data={dataWithSecondSection2}
        numColumns={2}
        renderItem={this.renderItem}
      />
    );
  }
}

const styles = {
  container: theme => ({
    backgroundColor: theme.colors.background
  }),
  wrap: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  list: {
    padding: 8
  }
};

export default withTheme(Gallery);
