import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { LinearGradient, Font } from "expo";
import Swiper from "react-native-swiper";
import styles from "./styles";
import * as Animatable from "react-native-animatable";

import { onBoardingData } from "../../data";

export default class Index extends Component {
  static title = "Board Gradient";
  static navigationOptions = () => {
    return {
      header: null
    };
  };

  state = {
    fontLoaded: false,
    iconSize: 200
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
          <Animatable.Image
            animation="fadeInDown"
            iterationCount="infinite"
            duration={9000}
            direction="alternate"
            source={require("@assets/images/background.png")}
            style={styles.background}
          />

          <Swiper
            dot={<View style={styles.dot} />}
            activeDot={<View style={styles.dotActive} />}
            paginationStyle={{ bottom: 50, right: 0 }}
          >
            {onBoardingData.map((page, i) => (
              <LinearGradient
                key={i}
                style={styles.linear}
                colors={[
                  "rgba(22, 160, 133, .6)",
                  "rgba(22, 160, 133, 0)",
                  "rgba(22, 160, 133, .6)"
                ]}
              >
                <View style={[styles.page]}>
                  <View style={[styles.card]}>
                    <TouchableOpacity onPress={() => goBack()}>
                      <Text style={styles.title}>{page.title}</Text>
                    </TouchableOpacity>
                    <Text style={styles.desc}>{page.description}</Text>
                  </View>
                  <Image style={styles.icon} source={page.iconImage} />
                </View>
              </LinearGradient>
            ))}
          </Swiper>
        </View>
      );
    }
    return <View />;
  }
}
