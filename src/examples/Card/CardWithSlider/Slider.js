/* @flow */

import * as React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import Slider from "react-native-slider";

export default class StyledSlider extends React.Component {
  onValueChange = value => {
    const items = [
      "7:30 AM",
      "8:00 AM",
      "8:30 AM",
      "9:00 AM",
      "9:30 AM",
      "10:00 AM",
      "10:30 AM",
      "11:00 AM",
      "11:30 AM",
      "12:00 PM",
      "12:30 PM"
    ];
    this.props.onValueChange(items[parseInt(value * 10)]);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrap}>
          <View style={styles.separator} />
          <View style={styles.separator} />
          <View style={styles.separator} />
          <View style={styles.separator} />
          <View style={styles.separator} />
          <View style={styles.separator} />
          <View style={styles.separator} />
          <View style={styles.separator} />
          <View style={styles.separator} />
          <View style={styles.separator} />
          <View style={styles.separator} />
        </View>
        <Slider
          step={0.1}
          trackStyle={styles.track}
          thumbStyle={styles.thumb}
          minimumTrackTintColor="#2f2f2f"
          onSlidingComplete={this.onValueChange}
        />
        <View style={styles.row}>
          <Text style={styles.text}>8 AM</Text>
          <Text style={styles.text}>9 AM</Text>
          <Text style={styles.text}>10 AM</Text>
          <Text style={styles.text}>11 AM</Text>
          <Text style={styles.text}>12 PM</Text>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    padding: 10
  },
  headline: {
    fontSize: 13,
    color: "#757575"
  },
  row: {
    flexDirection: "row",
    marginTop: 5
  },
  text: {
    flex: 1,
    textAlign: "center",
    color: "#757575"
  },
  separator: {
    height: 10,
    width: 2,
    backgroundColor: "#f6f6f6"
  },
  wrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    top: 25,
    left: 10,
    right: 10
  },
  track: {
    height: 2,
    backgroundColor: "#303030"
  },
  thumb: {
    width: 16,
    height: 16,
    backgroundColor: "white",
    borderColor: "rgba(150, 150, 150, 0.6)",
    borderWidth: 1,
    borderRadius: 8
  }
};
