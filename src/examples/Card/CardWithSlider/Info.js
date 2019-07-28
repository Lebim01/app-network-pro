/* @flow */

import * as React from "react";
import { Image, View, Animated } from "react-native";
import { Text } from "react-native-paper";

const AnimatedText = Animated.createAnimatedComponent(Text);
const AnimatedImage = Animated.createAnimatedComponent(Image);

export default class Info extends React.PureComponent {
  state = {
    opacity: new Animated.Value(1),
    translateX: new Animated.Value(0)
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.title !== this.props.title) {
      this.state.opacity.setValue(0);
      this.state.translateX.setValue(10);
      Animated.parallel([
        Animated.timing(this.state.opacity, {
          toValue: 1,
          duration: 500
        }),
        Animated.timing(this.state.translateX, {
          toValue: 0,
          duration: 500
        })
      ]).start();
    }
  }

  render() {
    const { title, temperature } = this.props;

    return (
      <View style={styles.container}>
        <AnimatedText
          style={[
            styles.headline,
            {
              opacity: this.state.opacity,
              transform: [{ translateX: this.state.translateX }]
            }
          ]}
        >
          {title}
        </AnimatedText>
        <View style={styles.row}>
          <AnimatedText
            style={[
              styles.temperature,
              {
                opacity: this.state.opacity,
                transform: [{ translateX: this.state.translateX }]
              }
            ]}
          >
            {temperature}
          </AnimatedText>
          <AnimatedText
            style={[
              styles.unit,
              {
                opacity: this.state.opacity,
                transform: [{ translateX: this.state.translateX }]
              }
            ]}
          >
            °C
          </AnimatedText>

          <View style={styles.flex1} />
          <AnimatedImage
            source={require("@assets/images/cloud.png")}
            style={[
              styles.image,
              {
                opacity: this.state.opacity,
                transform: [{ translateX: this.state.translateX }]
              }
            ]}
          />
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
    marginTop: 20
  },
  temperature: {
    fontSize: 82
  },
  unit: {
    fontSize: 32,
    marginTop: 10
  },
  flex1: {
    flex: 1
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain"
  }
};
