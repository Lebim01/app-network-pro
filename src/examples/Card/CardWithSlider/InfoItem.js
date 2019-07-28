/* @flow */

import * as React from "react";
import { Image, View } from "react-native";
import PropTypes from "prop-types";
import { Text, IconButton } from "react-native-paper";

export default class InfoItem extends React.PureComponent {
  static propTypes = {
    icon: Image.propTypes.source,
    title: PropTypes.string,
    temperature: PropTypes.string
  };

  render() {
    const { icon, title, temperature } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <IconButton icon={icon} />
        <Text style={styles.temperature}>{temperature}</Text>
      </View>
    );
  }
}

const styles = {
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10
  },
  title: {
    flex: 1,
    fontSize: 16
  },
  temperature: {
    fontSize: 13,
    color: "#757575",
    marginLeft: 10
  }
};
