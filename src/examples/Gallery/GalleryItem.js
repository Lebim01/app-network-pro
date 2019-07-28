import * as React from "react";
import PropTypes from "prop-types";
import { View, Image } from "react-native";

export default class GalleryItem extends React.PureComponent {
  render() {
    const { image, size } = this.props;
    return (
      <View style={[styles.container, size]}>
        <Image source={image} style={styles.image} />
      </View>
    );
  }
}

GalleryItem.propTypes = {
  image: Image.propTypes.source,
  size: PropTypes.object
};

const styles = {
  container: {
    padding: 8
  },
  image: {
    flex: 1,
    width: null,
    height: null
  }
};
