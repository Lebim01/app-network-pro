/* @flow */

import * as React from "react";
import { View, Animated } from "react-native";
import PropTypes from "prop-types";

export default class ExpandComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animation: new Animated.Value(),
      minHeight: 0,
      maxHeight: 0
    };
    this.expanded = false;
  }

  static propTypes = {
    collapsedComponent: PropTypes.element.isRequired,
    expandedComponent: PropTypes.element.isRequired,
    duration: PropTypes.number
  };

  static defaultProps = {
    onChangeStatus: () => {},
    duration: 100
  };

  _setMaxHeight = event => {
    if (event.nativeEvent.layout.height > 0) {
      this.setState({ maxHeight: event.nativeEvent.layout.height });
      if (this.expanded) {
        this.setState({
          animation: new Animated.Value(
            this.state.minHeight + event.nativeEvent.layout.height
          )
        });
      }
    }
  };

  _setMinHeight = event => {
    this.setState({
      minHeight: event.nativeEvent.layout.height,
      animation: new Animated.Value(event.nativeEvent.layout.height)
    });
  };

  toggle = () => {
    const { duration } = this.props;
    const { maxHeight, minHeight } = this.state;
    const finalValue = this.expanded ? minHeight : maxHeight + minHeight;

    this.expanded = !this.expanded;
    this.props.onChangeStatus(this.expanded);

    Animated.timing(this.state.animation, {
      toValue: finalValue,
      duration
    }).start();
  };

  render() {
    const { collapsedComponent, expandedComponent } = this.props;
    const { animation, minHeight, maxHeight } = this.state;
    const opacity = animation.interpolate({
      inputRange: [minHeight, minHeight + maxHeight],
      outputRange: [0, 1]
    });

    return (
      <Animated.View style={{ height: animation }}>
        <View onLayout={this._setMinHeight} style={{ minHeight: 1 }}>
          {collapsedComponent}
        </View>
        {minHeight > 0 && (
          <Animated.View onLayout={this._setMaxHeight} style={{ opacity }}>
            {expandedComponent}
          </Animated.View>
        )}
      </Animated.View>
    );
  }
}
