/* @flow */

import * as React from "react";
import { Image, View, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { TouchableRipple } from "react-native-paper";

export default class Item extends React.PureComponent {
  render() {
    const { size, image } = this.props;

    return (
      <View style={styles.wrap}>
        <TouchableRipple
          onPress={() => console.log("Pressed")}
          rippleColor="rgba(255, 255, 255, .32)"
        >
          <View style={[size, styles.container]}>
            <Image source={image} style={styles.image} />
          </View>
        </TouchableRipple>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    padding: 2
  },
  image: {
    flex: 1,
    width: null,
    height: null
  }
});

Item.propTypes = {
  size: PropTypes.object,
  image: Image.propTypes.source
};
