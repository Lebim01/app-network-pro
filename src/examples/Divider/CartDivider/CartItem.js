/* @flow */

import * as React from "react";
import PropTypes from "prop-types";
import { Image, View } from "react-native";
import { Text } from "react-native-paper";

export default class CartItem extends React.PureComponent {
  static propTypes = {
    image: Image.propTypes.source,
    title: PropTypes.string,
    status: PropTypes.string,
    price: PropTypes.string
  };

  render() {
    const { image, title, status, price, theme } = this.props;

    return (
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title(theme)}>{title}</Text>
          <Text style={styles.status(theme)}>{status}</Text>
        </View>
        <Text>{price}</Text>
      </View>
    );
  }
}

const styles = {
  container: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 10
  },
  content: {
    flex: 1
  },
  title: theme => ({
    fontSize: 16,
    color: theme.colors.text
  }),
  status: theme => ({
    fontSize: 14,
    color: theme.colors.subtitle,
    marginTop: 3
  })
};
