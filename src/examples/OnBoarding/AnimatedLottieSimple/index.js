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
import { Button, List, Divider } from "react-native-paper";

import { LottieDataSimple } from "../../data";
import styles from "./styles";

import Lottie from 'lottie-react-native'

const { width: deviceWidth } = Dimensions.get("window");

export default class AnimatedLottieLine extends PureComponent {
  static title = "Animated Lottie Simple";
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

  scrollTo = index => {
    this.scrollView._component.scrollTo({
      x: deviceWidth * index,
      animated: true
    });
  };

  _renderPage1 = () => {
    return (
      <View style={styles.buttonContainer}>
        <Button
          style={[styles.button, { backgroundColor: "#B83B53" }]}
          color="white"
          onPress={() => console.log("Pressed")}
        >
          Lorem Ipsum is simply
        </Button>

        <Button
          style={[styles.button, { backgroundColor: "white" }]}
          color={LottieDataSimple[this.state.currentIndex].backgroundColor}
          onPress={() => console.log("Pressed")}
        >
          Lorem Ipsum is simply
        </Button>
      </View>
    );
  };

  _renderPage2 = () => {
    return (
      <View style={styles.listContainer}>
        <List.Item
          title="Lorem Ipsum is simply"
          description="Lorem Ipsum is simply"
          left={() => <List.Icon color="#B83B53" icon="lock-open" />}
          right={() => <List.Icon color="gray" icon="navigate-next" />}
        />
        <Divider />
        <List.Item
          title="Lorem Ipsum is simply"
          description="Lorem Ipsum is simply"
          left={() => <List.Icon color="#B83B53" icon="vpn-key" />}
          right={() => <List.Icon color="gray" icon="navigate-next" />}
        />
        <Divider />
      </View>
    );
  };

  render() {
    return (
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
        {LottieDataSimple.map((page, index) => (
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
            <Header style={styles.headerContainer}>
              <Card
                scrollX={this.scrollX}
                index={index}
                style={[
                  styles.card,
                  { backgroundColor: LottieDataSimple.backgroundColor }
                ]}
              >
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
              style={[
                styles.contentContainer,
                { backgroundColor: page.backgroundColor }
              ]}
            >
              <Text style={[styles.title, { color: page.textColor }]}>
                {page.title}
              </Text>
              <Text style={[styles.description, { color: page.textColor }]}>
                {page.description}
              </Text>
            </ContentContainer>
            {index === 0 ? this._renderPage1() : this._renderPage2()}
          </View>
        ))}
      </Animated.ScrollView>
    );
  }
}
