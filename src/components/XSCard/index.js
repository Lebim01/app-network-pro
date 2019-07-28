/**
 * Card
 */

import React from "react";
import PropTypes from "prop-types";
import { Image } from "react-native";
import { withTheme } from "react-native-paper";

import DefaultCard from "./DefaultCard";
import ExpandCard from "./ExpandCard";
import CoverImageCard from "./CoverImageCard";

import ExpandComponent from "./ExpandCard/ExpandComponent";

class StyledCard extends React.Component {
  static Expand = ExpandComponent;

  // define propTypes card
  static propTypes = {
    type: PropTypes.oneOf(["default", "expand", "cover"]),
    onPress: PropTypes.func,
    coverComponent: PropTypes.element,
    contentComponent: PropTypes.element,
    actionComponent: PropTypes.element,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    image: Image.propTypes.source,
    containerStyle: PropTypes.any,
    contentContainerStyle: PropTypes.any,
    contentStyle: PropTypes.any,
    imageStyle: PropTypes.any,
    titleStyle: PropTypes.any,
    subtitleStyle: PropTypes.any,
    descriptionStyle: PropTypes.any,
    theme: PropTypes.object
  };

  static defaultProps = {
    type: "default"
  };

  render() {
    const { type } = this.props;

    switch (type) {
      case "expand":
        return <ExpandCard {...this.props} />;

      case "cover":
        return <CoverImageCard {...this.props} />;

      default:
        return <DefaultCard {...this.props} />;
    }
  }
}

export default withTheme(StyledCard);
