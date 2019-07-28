/* @flow */

import * as React from "react";
import { FlatList } from "react-native";
import PropTypes from "prop-types";

import Item from "./Item";

export default class Favorite extends React.Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    numColumns: PropTypes.number
  };

  render() {
    const { data, numColumns, theme } = this.props;

    return (
      <FlatList
        style={styles.container(theme)}
        contentContainerStyle={styles.contentContainerStyle}
        keyExtractor={(item, index) => `${index}`}
        data={data}
        numColumns={numColumns}
        renderItem={({ item, index }) => (
          <Item
            image={item.image}
            title={item.title}
            numColumns={numColumns}
            theme={theme}
          />
        )}
      />
    );
  }
}

const styles = {
  container: theme => ({
    flex: 1,
    backgroundColor: theme.colors.background
  }),
  contentContainerStyle: {
    padding: 5
  }
};
