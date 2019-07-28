/* @flow */

import * as React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";
import { Text, IconButton } from "react-native-paper";

export default class TabItem extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string,
    selected: PropTypes.bool,
    onPress: PropTypes.func
  };

  _onPress = () => {
    const { index } = this.props;
    this.props.onPress(index);
  };

  render() {
    const {
      theme: {
        colors: { primary }
      },
      title,
      selected,
      icon
    } = this.props;

    return (
      <TouchableOpacity
        style={[
          styles.container,
          selected && styles.selected && { borderColor: primary }
        ]}
        onPress={this._onPress}
      >
        <IconButton
          icon={icon}
          size={25}
          color={selected ? primary : "#757575"}
        />
        <Text style={[styles.caption, selected && { color: primary }]}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderColor: "#e2e2e2",
    alignItems: "center",
    justifyContent: "center"
  },
  caption: {
    fontWeight: "bold",
    color: "#757575"
  },
  selected: {
    borderBottomWidth: 2
  }
};
