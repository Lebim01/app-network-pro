/* @flow */

import * as React from "react";
import { Image, View } from "react-native";
import PropTypes from "prop-types";
import { TouchableRipple } from "react-native-paper";

export default class Item extends React.PureComponent {
  static propTypes = {
    size: PropTypes.object,
    image: Image.propTypes.source
  };
  
  render() {
    const { size, image } = this.props;
    return (
      <TouchableRipple
        onPress={() => console.log("Pressed")}
        rippleColor="rgba(255, 255, 255, .32)"
      >
        <View style={[size, styles.container]}>
          <Image source={image} style={styles.image} />
        </View>
      </TouchableRipple>
    );
  }
}

const styles = {
  container: {
    padding: 2
  },
  image: {
    flex: 1,
    width: null,
    height: null
  }
};
