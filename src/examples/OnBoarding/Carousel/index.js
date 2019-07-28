import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import Carousel from "react-native-snap-carousel";
import { sliderWidth, itemWidth } from "./style";
import styles from "./style";

import { onBoardingData } from "../../data";

export default class Index extends Component {
  static navigationOptions = () => {
    return {
      header: null
    };
  };
  
  getPages = ({ item: page, index }) => {
    return (
      <View key={`page-${index}`} style={styles.slideInnerContainer}>
        <Text style={styles.title}>{page.title}</Text>
        <Text style={styles.description}>{page.description}</Text>

        <View style={[styles.imageContainer, styles.shadow]}>
          <Image source={{ uri: page.image }} style={styles.image} />
        </View>
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
