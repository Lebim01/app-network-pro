/* @flow */

import * as React from "react";
import { Image, View } from "react-native";
import { TouchableRipple, Text } from "react-native-paper";

export default class RecipesItem extends React.PureComponent {
  render() {
    const { image, title, description, number, theme } = this.props;

    return (
      <TouchableRipple>
        <View style={styles.container}>
          <Image source={image} style={styles.image} />
          <View style={styles.content}>
            <Text style={styles.title(theme)}>{title}</Text>
            <Text style={styles.description(theme)} numberOfLines={2}>
              {description}
            </Text>
          </View>
          <Text style={styles.num(theme)}>{number}</Text>
        </View>
      </TouchableRipple>
    );
  }
}

const styles = {
  container: {
    flexDirection: "row",
    paddingVertical: 10
  },
  image: {
    width: 100,
    height: 80
  },
  content: {
    flex: 1,
    marginLeft: 20
  },
  title: theme => ({
    fontSize: 16,
    color: theme.colors.text,
    marginBottom: 3
  }),
  description: theme => ({
    fontSize: 13,
    color: theme.colors.subtitle
  }),
  num: theme => ({
    fontSize: 16,
    color: theme.colors.subtitle,
    marginRight: 10,
    marginLeft: 20
  })
};
