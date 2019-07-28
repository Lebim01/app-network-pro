import React, { Component } from "react";
import { Text, View, Dimensions, Image, TouchableOpacity } from "react-native";
import { Font } from "expo";
import Swiper from "react-native-swiper";
import styles from "./styles";

import { onBoardingData } from "../../data";

const PAGE_HEIGHT = Dimensions.get("window").height;

export default class Index extends Component {
  static title = "Swipe Card";
  static navigationOptions = () => {
    return {
      header: null
    };
  };

  state = {
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

    if (this.state.fontLoaded) {
      return (
        <View style={styles.container}>
          <Swiper
            dot={<View style={styles.dot} />}
            activeDot={<View style={styles.dotActive} />}
            paginationStyle={{ bottom: (5 * PAGE_HEIGHT) / 100, right: 0 }}
            style={styles.swipe}
          >
            {onBoardingData.map((page, i) => (
              <View key={i} style={[styles.page]}>
                <View style={styles.card}>
                  <Image source={page.img} style={styles.icon} />
                  <TouchableOpacity onPress={() => goBack()}>
                    <Text style={styles.desc}>{page.description}</Text>
                  </TouchableOpacity>
                </View>
                <View style={[styles.shadowCard]} />
                <View style={[styles.shadowCardLast]} />
              </View>
            ))}
          </Swiper>
        </View>
      );
    }
    return <View />;
  }
}
