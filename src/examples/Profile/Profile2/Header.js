import * as React from "react";
import { View, ImageBackground } from "react-native";
import { Text, IconButton } from "react-native-paper";

export default class Header extends React.PureComponent {
  render() {
    const { image, onBack, theme } = this.props;

    return (
      <ImageBackground source={image} style={styles.container}>
        <IconButton
          icon="arrow-back"
          color="#fff"
          onPress={onBack}
          style={styles.btnBack}
          size={30}
        />
        <View style={styles.priceWrap(theme)}>
          <Text style={styles.price}>$24.99</Text>
        </View>
      </ImageBackground>
    );
  }
}

Header.defaultProps = {
  image: require("@assets/images/forest.jpg"),
  name: "Dan Davidson"
};

const styles = {
  container: {
    height: 350
  },
  priceWrap: theme => ({
    height: 50,
    paddingHorizontal: 30,
    backgroundColor: theme.colors.background,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "baseline",
    position: "absolute",
    bottom: 0,
    left: 0
  }),
  price: {
    fontSize: 28
  },
  btnBack: {
    position: "absolute",
    top: 30
  }
};
