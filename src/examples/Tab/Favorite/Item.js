/* @flow */

import * as React from "react";
import { Image, View, Dimensions, ImageBackground } from "react-native";
import PropTypes from "prop-types";
import { TouchableRipple, Text } from "react-native-paper";
import color from "color";

const { width } = Dimensions.get("window");
const widthScreen = width - 5 * 2;

export default class Item extends React.PureComponent {
  static propTypes = {
    numColumns: PropTypes.number,
    image: Image.propTypes.source,
    title: PropTypes.string
  };
  render() {
    const { numColumns, image, title, theme } = this.props;
    const itemSize = widthScreen / numColumns;

    return (
      <TouchableRipple
        onPress={() => console.log("Pressed")}
        rippleColor="rgba(255, 255, 255, .32)"
      >
        <View style={[{ width: itemSize, height: itemSize }, styles.container]}>
          <ImageBackground source={image} style={styles.image}>
            <View style={styles.wrap}>
              <Text style={styles.title}>{title}</Text>
            </View>
          </ImageBackground>
        </View>
      </TouchableRipple>
    );
  }
}

const styles = {
  container: {
    padding: 5
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: "flex-end"
  },
  wrap: {
    padding: 10,
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  title: {
    fontSize: 16,
    color: "white"
  }
};
