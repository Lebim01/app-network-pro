/* @flow */

import * as React from "react";
import { Image, View } from "react-native";
import { TouchableRipple, Text } from "react-native-paper";

export default class InboxItem extends React.PureComponent {
  render() {
    const { image, title, subtitle, description, theme } = this.props;

    return (
      <TouchableRipple>
        <View style={styles.container}>
          <Image source={image} style={styles.image} />
          <View style={styles.content}>
            <Text style={styles.title(theme)}>{title}</Text>
            <Text style={styles.description}>
              <Text style={styles.subtitle(theme)}>{`${subtitle}  -  `}</Text>
              {description}
            </Text>
          </View>
        </View>
      </TouchableRipple>
    );
  }
}

const styles = {
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  content: {
    flex: 1,
    marginLeft: 10
  },
  title: theme => ({
    fontSize: 16,
    color: theme.colors.text,
    marginBottom: 3
  }),
  subtitle: theme => ({
    fontSize: 13,
    color: theme.colors.text,
    paddingRight: 10
  }),
  description: {
    fontSize: 13,
    color: "#757575"
  }
};
