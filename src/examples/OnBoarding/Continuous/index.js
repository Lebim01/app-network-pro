import React, { Component } from "react";
import {
  Animated,
  Text,
  View,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { Font } from "expo";
import Swiper from "react-native-swiper";
import styles from "./styles";

import { onBoardingData } from "../../data";

const PAGE_WIDTH = Dimensions.get("window").width;

export default class Index extends Component {
  static navigationOptions = () => {
    return {
      header: null
    };
  };

  state = {
    // scroll: new Animated.Value(0),
    fontLoaded: false,
    iconSize: 60,
    animateValue: new Animated.Value(1)
  };

  async componentDidMount() {
    await Font.loadAsync({
      baloo: require("@assets/fonts/Baloo-Regular.ttf"),
      varela: require("@assets/fonts/VarelaRound-Regular.ttf")
    });
    this.setState({ fontLoaded: true });
  }

  componentWillMount() {
    // this.startAnimate();
  }

  startAnimate(e, state, context) {
    const page = context.state.index;
    this.state.animateValue.setValue(page);
  }

  render() {
    const { goBack } = this.props.navigation;
    const imageAnimate = this.state.animateValue;

    if (this.state.fontLoaded) {
      return (
        <View style={styles.container}>
          <Animated.Image
            style={[
              styles.gif,
              {
                transform: [
                  {
                    translateX: Animated.multiply(
                      imageAnimate,
                      (18 * PAGE_WIDTH) / 100
                    )
                  }
                ]
              }
            ]}
            source={require("@assets/images/run3.gif")}
          />

          <Swiper
            dot={<View style={styles.dot} />}
            onMomentumScrollEnd={this.startAnimate.bind(this)}
            activeDot={<View style={styles.dotActive} />}
            paginationStyle={{ bottom: 40, right: 0 }}
          >
            {onBoardingData.map((page, i) => (
              <View key={i} style={styles.page}>
                <Image style={styles.photo} source={page.imageCon} />

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
