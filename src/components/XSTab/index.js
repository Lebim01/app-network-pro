/* @flow */

import * as React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { withTheme } from "react-native-paper";
import { isFunction } from "lodash";

import TabItem from "./TabItem";

class XSTab extends React.Component {
  static propTypes = {
    selectedIndex: PropTypes.number,
    tabs: PropTypes.array.isRequired,
    renderTabItem: PropTypes.func,
    theme: PropTypes.object
  };

  static defaultProps = {
    selectedIndex: 0
  };

  _onChangeTab = index => {
    this.props.onPress(index);
  };

  renderTabItem = (item, index) => {
    return this.props.renderTabItem(item, index);
  };

  render() {
    const { tabs, selectedIndex, renderTabItem, theme } = this.props;

    return (
      <View style={styles.container(theme)}>
        {tabs.map((item, index) => {
          return renderTabItem && isFunction(renderTabItem) ? (
            this.renderTabItem(item, index)
          ) : (
            <TabItem
              key={index.toString()}
              title={item.title}
              selected={selectedIndex === index}
              onPress={this._onChangeTab}
              icon={item.icon}
              index={index}
              theme={theme}
            />
          );
        })}
      </View>
    );
  }
}

const styles = {
  container: theme => ({
    flexDirection: "row",
    backgroundColor: theme.colors.background
  })
};

export default withTheme(XSTab);
