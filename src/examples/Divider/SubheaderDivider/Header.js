/* @flow */

import * as React from "react";
import { View, Platform } from "react-native";
import { TouchableRipple, IconButton, Text } from "react-native-paper";

export default class Header extends React.PureComponent {
  render() {
    const {
      theme: {
        colors: { primary }
      },
      title
    } = this.props;

    return (
      <View style={styles.container}>
        <View style={[styles.content, { backgroundColor: primary }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <TouchableRipple
          onPress={() => console.log("Pressed")}
          rippleColor="rgba(255, 255, 255, 0.85)"
          style={styles.btnAdd}
        >
          <IconButton icon="add" size={30} color="#000" />
        </TouchableRipple>
      </View>
    );
  }
}

const styles = {
  container: {
    height: 80
  },
  content: {
    height: 50
  },
  title: {
    fontSize: 24,
    color: "white",
    position: "absolute",
    bottom: 20,
    left: 60
  },
  btnAdd: {
    position: "absolute",
    bottom: 10,
    left: 20,
    backgroundColor: "white",
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    ...Platform.select({
      ios: {
        shadowColor: "rgba(0, 0, 0, 0.3)",
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
          height: 1,
          width: 1
        }
      },
      android: {
        elevation: 2
      }
    })
  }
};
