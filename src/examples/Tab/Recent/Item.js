/* @flow */

import * as React from "react";
import PropTypes from "prop-types";
import { Image, View } from "react-native";
import { TouchableRipple, Text } from "react-native-paper";

export default class Item extends React.PureComponent {
  static propTypes = {
    image: Image.propTypes.source,
    title: PropTypes.string
  };
  render() {
    const { image, title, theme } = this.props;
    return (
      <TouchableRipple
        onPress={() => console.log("Pressed")}
        rippleColor="rgba(255, 255, 255, .32)"
      >
        <View style={styles.container}>
          <Image source={image} style={styles.image} />
          <Text style={styles.title(theme)}>{title}</Text>
        </View>
      </TouchableRipple>
    );
  }
}

const styles = {
  container: {
    margin: 3,
    width: 130,
    height: 210,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 3
  },
  image: {
    width: 128,
    height: 160,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3
  },
  title: theme => ({
    fontSize: 16,
    color: theme.colors.text,
    margin: 5
  })
};
