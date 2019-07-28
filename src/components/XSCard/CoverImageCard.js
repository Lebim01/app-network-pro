/* @flow */

import * as React from "react";
import PropTypes from "prop-types";

import DefaultCard from "./DefaultCard";

export default class CoverImageCard extends React.Component {
  static propTypes = {
    theme: PropTypes.object
  };

  render() {
    const { theme } = this.props;
    return (
      <DefaultCard
        {...this.props}
        theme={{ colors: { text: "white", subtitle: "white" } }}
        imageStyle={styles.imageStyle(theme)}
        contentContainerStyle={styles.contentContainerStyle(theme)}
      />
    );
  }
}

const styles = {
  imageStyle: theme => ({
    overflow: "hidden",
    borderRadius: theme.roundness
  }),
  contentContainerStyle: theme => ({
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    borderRadius: theme.roundness,
    backgroundColor: "rgba(0,0,0, 0.5)",
    overflow: "hidden",
    justifyContent: "center"
  })
};
