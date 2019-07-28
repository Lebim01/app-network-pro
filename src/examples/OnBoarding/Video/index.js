import React, { Component } from "react";
import { Text, View, Dimensions, TouchableOpacity } from "react-native";
import { Font } from "expo";
import * as Expo from "expo";
import Swiper from "react-native-swiper";
import styles from "./styles";

import { onBoardingData } from "../../data";

const PAGE_HEIGHT = Dimensions.get("window").height;

export default class Index extends Component {
  static navigationOptions = () => {
    return {
      header: null
    };
  };

  state = {
    // scroll: new Animated.Value(0),
    fontLoaded: false,
    iconSize: 60
  };

  async componentDidMount() {
    await Font.loadAsync({
      baloo: require("@assets/fonts/Baloo-Regular.ttf"),
      varela: require("@assets/fonts/VarelaRound-Regular.ttf")
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    const { goBack } = this.props.navigation;

    if (this.state.fontLoaded) {
      return (
        <View style={styles.container}>
          <Swiper
            dot={<View style={styles.dot} />}
            activeDot={<View style={styles.dotActive} />}
            paginationStyle={{ bottom: (32 * PAGE_HEIGHT) / 100, right: 0 }}
          >
            {onBoardingData.map((page, i) => (
              <View key={i} style={styles.page}>
                <Expo.Video
                  source={page.video}
                  rate={0.5}
                  volume={1.0}
                  muted={false}
                  resizeMode={Expo.Video.RESIZE_MODE_COVER}
                  repeat
                  shouldPlay
                  isLooping
                  style={styles.video}
                />
                <View style={[styles.card]}>
                  <TouchableOpacity onPress={() => goBack()}>
                    <Text style={styles.title}>{page.title}</Text>
                  </TouchableOpacity>
                  <Text style={styles.desc}>{page.description}</Text>
                </View>
              </View>
            ))}
          </Swiper>
        </View>
      );
    }
    return <View />;
  }
}
