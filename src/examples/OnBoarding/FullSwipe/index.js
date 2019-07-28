import React, { Component } from "react";
import {
  Animated,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity
} from "react-native";
import { LinearGradient, Font } from "expo";
import Swiper from "react-native-swiper";
import styles from "./styles";

import { onBoardingData } from "../../data";

const PAGE_WIDTH = Dimensions.get("window").width;

export default class Index extends Component {
  static title = "Full Swipe"
  static navigationOptions = () => {
    return {
      header: null
    };
  };

  state = {
    scroll: new Animated.Value(0),
    fontLoaded: false
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
    const position = Animated.divide(this.state.scroll, PAGE_WIDTH);
    const backgroundColor = position.interpolate({
      inputRange: onBoardingData.map((_, i) => i),
      outputRange: onBoardingData.map(p => p.backgroundColor)
    });
    if (this.state.fontLoaded) {
      return (
        <View style={styles.container}>
          <Swiper
            dot={<View style={styles.dot} />}
            activeDot={<View style={styles.dotActive} />}
            paginationStyle={{ bottom: 200, right: 0 }}
          >
            {onBoardingData.map((page, i) => (
              <View key={i} style={[styles.page]}>
                <Image source={{ uri: page.imageFull }} style={styles.photo} />
                <LinearGradient colors={page.gradients} style={styles.linear}>
                  <View style={[styles.card]}>
                    <Text style={styles.title}>{page.title}</Text>
                    <Text style={styles.desc}>{page.description}</Text>
                  </View>
                </LinearGradient>
              </View>
            ))}
          </Swiper>

          <TouchableOpacity style={styles.button} onPress={() => goBack()}>
            <Text style={styles.buttonText}>GET STARTED</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return <View />;
  }
}
