import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { Font } from "expo";
import Swiper from "react-native-swiper";
import styles from "./styles";

import { onBoardingData } from "../../data";

export default class Index extends Component {
  static title = "Board Swipe";
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
          <Swiper
            dot={<View style={styles.dot} />}
            activeDot={<View style={styles.dotActive} />}
            paginationStyle={{ bottom: 70, right: 0 }}
          >
            {onBoardingData.map((page, i) => (
              <View key={i} style={[styles.page]}>
                <Image source={page.img} style={styles.icon} />
                <View style={[styles.card]}>
                  <TouchableOpacity onPress={() => goBack()}>
                    <Text style={styles.desc}>{page.description}</Text>
                  </TouchableOpacity>
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
