import React, { Component } from "react";
import { Dimensions, View, StyleSheet, Image, Text } from "react-native";
import Carousel from "react-native-snap-carousel";
import { sliderWidth, itemWidth } from "./style";
import styles from "./style";
import * as Expo from "expo";

import { onBoardingData } from "../../data";

export default class Index extends Component {
  static title = "Carousel Scale Video" 
  static navigationOptions = () => {
    return {
      header: null
    };
  };

  getPages = ({ item: page, index }) => {
    return (
      <View key={`page-${index}`} style={styles.slideInnerContainerScale}>
        <Text style={[styles.title, { color: page.backgroundColor }]}>
          {page.title}
        </Text>
        <Text style={styles.description}>{page.description}</Text>

        <View style={styles.imageContainer}>
          <Expo.Video
            source={page.videoAnimate}
            rate={1.0}
            volume={1.0}
            muted={false}
            resizeMode="cover"
            repeat
            shouldPlay
            style={[styles.image, styles.shadow]}
          />
        </View>
      </View>
    );
  };

  render() {
    return (
      <Carousel
        data={onBoardingData}
        renderItem={this.getPages}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        firstItem={1}
        inactiveSlideScale={0.85}
        inactiveSlideOpacity={0.6}
        enableMomentum={false}
        containerCustomStyle={styles.slider}
        contentContainerCustomStyle={styles.sliderContainer}
        showsHorizontalScrollIndicator={false}
        snapOnAndroid
        removeClippedSubviews={false}
      />
    );
  }
}
