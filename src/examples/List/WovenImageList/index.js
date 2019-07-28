/* @flow */

import * as React from "react";
import { FlatList, Dimensions } from "react-native";
import PropTypes from "prop-types";
import { Appbar, withTheme } from "react-native-paper";

import { dataOnlyImage } from "../../data";
import Item from "./Item";

const { width } = Dimensions.get("window");

class WovenImage extends React.Component {
  static title = "Woven image list";
  static navigationOptions = ({ navigation }) => {
    return {
      header: (
        <Appbar.Header>
          <Appbar.BackAction onPress={() => navigation.goBack()} />
          <Appbar.Content title="Woven image list" />
        </Appbar.Header>
      )
    };
  };

  static defaultProps = {
    numColumns: 2
  };

  static propTypes = {
    numColumns: PropTypes.number
  };

  render() {
    const { numColumns, theme } = this.props;
    return (
      <FlatList
        style={styles.container(theme)}
        keyExtractor={(item, index) => `${index}`}
        data={dataOnlyImage}
        numColumns={numColumns}
        renderItem={this.renderItem}
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center"
        }}
      />
    );
  }

  renderItem = ({ item, index }) => {
    const { numColumns } = this.props;

    const rowIndex = parseInt(index / numColumns);

    const size = {
      width: width / numColumns,
      height: width / numColumns
    };

    if (rowIndex % 2 == 0 && index % 2 != 0) {
      size.height = size.width * 1.3;
    }

    if (rowIndex % 2 != 0 && index % 2 == 0) {
      size.height = size.width * 1.3;
    }

    return <Item image={item} size={size} />;
  };
}

const styles = {
  container: theme => ({
    flex: 1,
    backgroundColor: theme.colors.background
  })
};

export default withTheme(WovenImage);
