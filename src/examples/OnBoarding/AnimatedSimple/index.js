import React, { Component } from "react";
import {
  Animated,
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import styles from "./styles";

import { onBoardingData } from "../../data";

const PAGE_WIDTH = Dimensions.get("window").width;

export default class Index extends Component {
  static title = "Animated Simple";
  static navigationOptions = () => {
    return {
      header: null
    };
  };

  state = {
    scrollX: new Animated.Value(0)
  };

  render() {
    const { goBack } = this.props.navigation;

    const positionAnimate = Animated.divide(this.state.scrollX, PAGE_WIDTH);

    const backgroundColor = positionAnimate.interpolate({
      inputRange: onBoardingData.map((_, i) => i),
      outputRange: onBoardingData.map(p => p.backgroundColor)
    });

    const scaleImage = positionAnimate.interpolate({
      inputRange: onBoardingData.map((_, i) => i),
      outputRange: onBoardingData.map((_, i) => Math.cos(i * Math.PI))
    });

    return (
      <View style={styles.container}>
        <Animated.View style={[StyleSheet.absoluteFill, { backgroundColor }]} />

        <Animated.ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { x: this.state.scrollX } } }
          ])}
        >
          {onBoardingData.map((page, i) => (
            <View key={i} style={styles.page}>
              <Animated.View
                style={[styles.frame, { transform: [{ scale: scaleImage }] }]}
              >
                <Animated.Image source={page.iconImage} style={styles.photo} />
              </Animated.View>

              <Animated.View
                style={[
                  styles.card,
                  { opacity: Animated.modulo(scaleImage, 1.9) },
                  {
                    transform: [
                      {
                        translateX: Animated.multiply(
                          Animated.add(positionAnimate, -i),
                          -300
                        )
                      }
                    ]
                  }
                ]}
              >
                <Text style={styles.title}>{page.title}</Text>
                <Text style={styles.desc}>{page.description}</Text>
              </Animated.View>
            </View>
          ))}
        </Animated.ScrollView>

        <TouchableOpacity style={styles.button} onPress={() => goBack()}>
          <Text style={styles.buttonText}>GET STARTED</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
