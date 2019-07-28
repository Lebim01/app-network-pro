/* @flow */

import * as React from "react";
import { View } from "react-native";
import { Caption, Paragraph, List, TouchableRipple } from "react-native-paper";

export default class Item extends React.PureComponent {
  render() {
    const { title, description, icon, theme } = this.props;

    return (
      <TouchableRipple>
        <View style={styles.container}>
          <List.Icon icon={icon} />
          <View style={styles.content}>
            <Caption style={styles.title(theme)}>{title}</Caption>
            <Paragraph numberOfLines={1} style={styles.description(theme)}>
              {description}
            </Paragraph>
          </View>
        </View>
      </TouchableRipple>
    );
  }
}

const styles = {
  container: {
    flexDirection: "row"
  },
  content: {
    flex: 1
  },
  title: theme => ({
    color: theme.colors.text
  }),
  description: theme => ({
    color: theme.colors.subtitle
  })
};
