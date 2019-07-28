import React, { Component } from "react";
import {
  Animated,
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import styles from "./styles";
import { Font } from "expo";

import { onBoardingData } from "../../data";

const PAGE_WIDTH = Dimensions.get("window").width;

export default class Index extends Component {
  static navigationOptions = () => {
    return {
      header: null
    };
  };

  state = {
    fontLoaded: false,
    scroll: new Animated.Value(0)
  };

  async componentDidMount() {
    await Font.loadAsync({
      baloo: require("@assets/fonts/Baloo-Regular.ttf"),
      varela: require("@assets/fonts/VarelaRound-Regular.ttf")
    });
    this.setState({ fontLoaded: true });
  }

  renderPages(position) {
    const PAGES = onBoardingData;
    const { goBack } = this.props.navigation;
    if (this.state.fontLoaded) {
      return (
        <Animated.ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { x: this.state.scroll } } }
          ])}
        >
          {/* Page 1 */}
          <View key="overlay-1" style={styles.page}>
            <Animated.Image
              style={[
                styles.tranImage,
                {
                  transform: [
                    {
                      translateX: Animated.multiply(
                        Animated.add(position, 0),
                        -200
                      )
                    }
                  ]
                }
              ]}
              source={require("@assets/images/tranbackground1.png")}
            />
            <Animated.View
              style={[
                styles.frame,
                {
                  transform: [
                    {
                      translateX: Animated.multiply(
                        Animated.add(position, 0),
                        -200
                      )
                    }
                  ]
                }
              ]}
            >
              <View key="overlay-1" style={styles.card}>
                <Text style={styles.desc}>{PAGES[0].description}</Text>
              </View>
            </Animated.View>

            <Text style={styles.title}>{PAGES[0].title}</Text>
          </View>

          {/* Page 2 */}
          <View key="overlay-2" style={styles.page}>
            <Animated.Image
              style={[
                styles.tranImage2,
                {
                  transform: [
                    {
                      translateY: Animated.multiply(
                        Animated.add(position, -1),
                        -400
                      )
                    }
                  ]
                }
              ]}
              source={require("@assets/images/tranbackground2.png")}
            />
            <Animated.View
              style={[
                styles.frame2,
                {
                  transform: [
                    {
                      translateY: Animated.multiply(
                        Animated.add(position, -1),
                        400
                      )
                    }
                  ]
                }
              ]}
            >
              <View key="overlay-2" style={styles.card2}>
                <Text style={styles.desc2}>{PAGES[1].description}</Text>
              </View>
            </Animated.View>
          </View>

          {/* Page 3 */}
          <View key="overlay-3" style={styles.page}>
            <Animated.Image
              style={[
                styles.tranImage,
                {
                  transform: [
                    {
                      translateX: Animated.multiply(
                        Animated.add(position, -2),
                        -200
                      )
                    }
                  ]
                }
              ]}
              source={require("@assets/images/tranbackground3.png")}
            />
            <Animated.View
              style={[
                styles.frame,
                {
                  transform: [
                    {
                      translateY: Animated.multiply(
                        Animated.add(position, -2),
                        200
                      )
                    }
                  ]
                }
              ]}
            >
              <View key="overlay-3" style={styles.card}>
                <Text style={styles.desc3}>{PAGES[2].description}</Text>
              </View>
            </Animated.View>
            <Text style={styles.title3}>{PAGES[2].title}</Text>
          </View>

          {/* Page 4 */}
          <View key="overlay-4" style={styles.page2}>
            <Animated.Image
              style={[
                styles.tranImage,
                {
                  transform: [
                    {
                      translateX: Animated.multiply(
                        Animated.add(position, -3),
                        -400
                      )
                    },
                    {
                      translateY: Animated.multiply(
                        Animated.add(position, -3),
                        400
                      )
                    }
                  ]
                }
              ]}
              source={require("@assets/images/tranbackground4.png")}
            />
            <Animated.View
              style={[
                styles.frame,
                {
                  transform: [
                    {
                      translateX: Animated.multiply(
                        Animated.add(position, -3),
                        250
                      )
                    },
                    {
                      translateY: Animated.multiply(
                        Animated.add(position, -3),
                        -400
                      )
                    }
                  ]
                }
              ]}
            >
              <View key="overlay-4" style={styles.card4}>
                <Text style={styles.desc4}>{PAGES[3].description}</Text>
              </View>
            </Animated.View>

            <Animated.View
              style={[
                styles.frame,
                {
                  transform: [
                    {
                      translateX: Animated.multiply(
                        Animated.add(position, -3),
                        -300
                      )
                    }
                  ]
                }
              ]}
            >
              <View key="overlay-4" style={styles.cardBottom}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => goBack()}
                >
                  <Text style={styles.buttonText}>GET STARTED</Text>
                </TouchableOpacity>
              </View>
            </Animated.View>
          </View>
        </Animated.ScrollView>
      );
    }
    return <View />;
  }

  render() {
    const PAGES = onBoardingData;
    const { goBack } = this.props.navigation;
    const position = Animated.divide(this.state.scroll, PAGE_WIDTH);

    return (
      <View style={styles.container}>
        {PAGES.map((page, i) => (
          <Animated.Image
            key={`image-${i}`}
            style={[
              StyleSheet.absoluteFill,
              {
                opacity: position.interpolate({
                  inputRange: PAGES.map((_, i) => i),
                  outputRange: PAGES.map((page, inputIndex) =>
                    inputIndex === i ? 1 : 0
                  )
                })
              }
            ]}
            source={{ uri: page.imageBlur }}
          />
        ))}
        {this.renderPages(position)}
      </View>
    );
  }
}
