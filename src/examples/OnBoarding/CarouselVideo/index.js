import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Carousel from "react-native-snap-carousel";
import * as Expo from "expo";
import { sliderWidth, itemWidth } from "./style";
import styles from "./style";

import { onBoardingData } from "../../data";

export default class Index extends Component {
  static title = "Carousel Video"
  static navigationOptions = () => {
    return {
      header: null
    };
  };

  getPages = ({ item: page, index }) => {
    return (
      <View key={`page-${index}`} style={styles.slideInnerContainer}>
        <Text style={styles.title}>{page.title}</Text>
        <View style={[styles.imageContainer]}>
          <Expo.Video
            source={page.videoAnimate}
            rate={1.0}
            volume={1.0}
            muted={false}
            resizeMode="cover"
            repeat
            isLooping
            shouldPlay
            style={[styles.image, styles.shadow]}
          />
        </View>
        <Text style={styles.description}>{page.description}</Text>
      </View>
    );
  };

  render() {
    const { goBack } = this.props.navigation;
    return (
      <View style={styles.body}>
        <Carousel
          data={onBoardingData}
          renderItem={this.getPages}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          inactiveSlideScale={1}
          inactiveSlideOpacity={1}
          enableMomentum={false}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContainer}
          showsHorizontalScrollIndicator={false}
          snapOnAndroid
          removeClippedSubviews={false}
        />

        <TouchableOpacity style={styles.button} onPress={() => goBack()}>
          <Text style={styles.buttonText}>GET STARTED</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
