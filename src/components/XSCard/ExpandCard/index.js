/* @flow */

import * as React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { Text, Button } from "react-native-paper";

import DefaultCard from "../DefaultCard";
import ExpandComponent from "./ExpandComponent";

export default class ExpandCard extends React.Component {
  static propTypes = {
    collapsedComponent: PropTypes.element, // hide
    expandedComponent: PropTypes.element, // show
    theme: PropTypes.object
  };

  state = {
    expanded: false
  };

  _onChangeStatus = expanded => {
    if (this.props.onChangeStatus) {
      this.props.onChangeStatus(expanded);
    } else {
      this.setState({ expanded });
    }
  };

  toggle = () => {
    this._expandComponent.toggle();
  };

  render() {
    const { expanded } = this.state;
    const { collapsedComponent, expandedComponent } = this.props;

    return (
      <DefaultCard
        actionComponent={
          <ExpandComponent
            ref={ref => (this._expandComponent = ref)}
            onChangeStatus={this._onChangeStatus}
            collapsedComponent={
              React.isValidElement(collapsedComponent) ? (
                collapsedComponent
              ) : (
                <Button
                  style={{ width: 150 }}
                  onPress={this.toggle}
                  icon={expanded ? "keyboard-arrow-up" : "keyboard-arrow-down"}
                >
                  {expanded ? "COLLAPSE" : "EXPAND"}
                </Button>
              )
            }
            expandedComponent={
              React.isValidElement(expandedComponent) ? (
                expandedComponent
              ) : (
                <View style={styles.expandedContainer}>
                  <Text>Expanded</Text>
                </View>
              )
            }
          />
        }
        {...this.props}
      />
    );
  }
}

const styles = {
  expandedContainer: {
    padding: 15
  }
};
