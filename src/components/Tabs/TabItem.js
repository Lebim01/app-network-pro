/* @flow */

import * as React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";
import { Caption, withTheme } from "react-native-paper";

class TabItem extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string,
    selected: PropTypes.bool,
    onPress: PropTypes.func
  };

  render() {
    const { title, selected, onPress } = this.props;
    const {
      theme: {
        colors: { primary }
      }
    } = this.props;

    return (
      <TouchableOpacity
        style={[
          styles.container,
          selected && styles.selected && { borderColor: primary }
        ]}
        onPress={onPress}
      >
        <Caption style={[styles.caption, selected && { color: primary }]}>
          {title}
        </Caption>
      </TouchableOpacity>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#e2e2e2",
    alignItems: "center",
    justifyContent: "center"
  },
  caption: {
    fontWeight: "bold"
  },
  selected: {
    borderBottomWidth: 2
  }
};

export default withTheme(TabItem);
