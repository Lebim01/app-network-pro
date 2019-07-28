/* @flow */

import * as React from "react";
import { Image, View, Dimensions, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { TouchableRipple } from "react-native-paper";

const { width } = Dimensions.get("window");

export default class Item extends React.PureComponent {
  static propTypes = {
    numColumns: PropTypes.number,
    image: Image.propTypes.source
  };

  render() {
    const { numColumns, image } = this.props;
    const itemSize = width / numColumns;
    return (
      <TouchableRipple
        onPress={() => console.log("Pressed")}
        rippleColor="rgba(255, 255, 255, .32)"
      >
        <View style={[{ width: itemSize, height: itemSize }, styles.container]}>
          <Image source={image} style={styles.image} />
        </View>
      </TouchableRipple>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 2
  },
  image: {
    flex: 1,
    width: null,
    height: null
  }
});
