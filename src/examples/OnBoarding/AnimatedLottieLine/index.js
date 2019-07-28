/** @format */

import React, { PureComponent } from "react";
import {
  View,
  Text,
  Dimensions,
  Animated,
  StatusBar,
  SafeAreaView
} from "react-native";
import {
  Card,
  Header,
  ContentContainer
} from "react-native-onboarding-component";

import { LottieDataLine } from "../../data";
import styles from "./styles";

import Lottie from 'lottie-react-native'

const { width: deviceWidth } = Dimensions.get("window");

export default class AnimatedLottieLine extends PureComponent {
  static title = "Animated Lottie Line";
  static navigationOptions = () => {
    return {
      header: null
    };
  };

  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0
    };
    this.scrollX = new Animated.Value(0);
    this.animations = new Map();
  }

  componentDidMount() {
    this.animations.get(this.state.currentIndex).play();
  }

  onScroll = event => {
    const { contentOffset } = event.nativeEvent;
    const currentIndex = Math.round(contentOffset.x / deviceWidth);
    if (this.state.currentIndex !== currentIndex) {
      this.animations.forEach(animation => {
        animation.reset();
      });
      this.animations.get(currentIndex).play();
      this.setState({ currentIndex });
    }
  };

  render() {
    const pages = LottieDataLine;
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Animated.ScrollView
          horizontal
          ref={scrollView => {
            this.scrollView = scrollView;
          }}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: this.scrollX } } }],
            { useNativeDriver: true, listener: this.onScroll }
          )}
        >
          {pages.map((page, index) => (
            <View
              key={`pages-${index}`}
              style={[
                styles.cardContainer,
                {
                  width: deviceWidth,
                  flexDirection: "column",
                  backgroundColor: page.backgroundColor
                }
              ]}
            >
              <Header>
                <Card scrollX={this.scrollX} index={index} style={styles.card}>
                  <Lottie
                    ref={animation => {
                      if (animation) {
                        this.animations.set(index, animation);
                      }
                    }}
                    loop={false}
                    style={styles.lottie}
                    source={page.source}
                  />
                </Card>
              </Header>
              <ContentContainer
                style={{ backgroundColor: page.backgroundColor }}
              >
                <Text style={styles.title}>{page.title}</Text>
                <Text style={styles.description}>{page.description}</Text>
              </ContentContainer>
            </View>
          ))}
        </Animated.ScrollView>
      </SafeAreaView>
    );
  }
}
