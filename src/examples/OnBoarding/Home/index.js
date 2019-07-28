import React, {Component} from 'react';
import {Animated, Text, View, StatusBar, Image, TouchableOpacity} from 'react-native';
import {Font} from "expo";
import styles from './styles';

export default class Home extends Component {
  state = {
    fontLoaded: false
  }

  async componentDidMount() {
    await
      Font.loadAsync({
        'baloo': require('@assets/fonts/Baloo-Regular.ttf'),
        'varela': require('@assets/fonts/VarelaRound-Regular.ttf'),
      });
    this.setState({fontLoaded: true});
    StatusBar.setHidden(true);
  }

  render() {
    const {navigate} = this.props.navigation;
    const pages = [
      {name: "Parallax", navigate: "Parallax", image: require('@assets/screenshots/img16.png')},
      {name: "Video", navigate: "Video", image: require('@assets/screenshots/img14.png')},
      {name: "Continuous", navigate: "Continuous", image: require('@assets/screenshots/img18.png')},
      {name: "Animate #1", navigate: "BoardGradient", image: require('@assets/screenshots/img13.png')},
      {name: "Animate #2", navigate: "BoardSimple", image: require('@assets/screenshots/img12.png')},
      {name: "Animate #3", navigate: "AnimatedSimple", image: require('@assets/screenshots/img15.png')},
      {name: "Carousel", navigate: "Carousel", image: require('@assets/screenshots/img1.png')},
      {name: "Carousel Scale", navigate: "CarouselScale", image: require('@assets/screenshots/img2.png')},
      {name: "Carousel Video", navigate: "CarouselVideo", image: require('@assets/screenshots/img3.png')},
      {name: "Circle", navigate: "Circle", image: require('@assets/screenshots/img4.png')},
      {name: "Gradient #1", navigate: "FullSwipe", image: require('@assets/screenshots/img5.png')},
      {name: "Gradient #2", navigate: "FullGradient", image: require('@assets/screenshots/img10.png')},
      {name: "Blur", navigate: "SwipeBlur", image: require('@assets/screenshots/img6.png')},
      {name: "Card #1", navigate: "Simple", image: require('@assets/screenshots/img7.png')},
      {name: "Card #2", navigate: "SwipeCard", image: require('@assets/screenshots/img9.png')},
      {name: "Full wide", navigate: "SwipeSimple", image: require('@assets/screenshots/img8.png')},
      {name: "Flat", navigate: "BoardSwipe", image: require('@assets/screenshots/img11.png')},
      {name: "Game", navigate: "Game", image: require('@assets/screenshots/img17.png')},
    ];

    if (this.state.fontLoaded) {
      return (
        <Animated.ScrollView>
          <View style={styles.container}>
            {pages.map((data,i) => (
              <TouchableOpacity key={'home-'+i} style={[styles.row, styles.shadow]} onPress={() => navigate(data.navigate)}>
                <Image style={styles.image} source={data.image} />
                <Text style={styles.title}>{data.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Animated.ScrollView>
      );
    }
    return <View />
  }
}
