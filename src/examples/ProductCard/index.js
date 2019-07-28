import * as React from "react";
import { View, ScrollView, ImageBackground, Dimensions } from "react-native";
import {
  Appbar,
  Text,
  Paragraph,
  Button,
  IconButton,
  withTheme
} from "react-native-paper";

import { XSTab } from "@components";
import Info from "./Info";
import ColorSelect from "./ColorSelect";

const { width } = Dimensions.get("window");
const tabs = [
  {
    icon: "query-builder",
    title: "RECENT"
  },
  {
    icon: "favorite",
    title: "FAVORITES"
  }
];

class ProductCard extends React.Component {
  static title = "Product Card";
  static navigationOptions = ({ navigation }) => {
    const theme = navigation.getParam("theme", {});

    return {
      header: (
        <Appbar.Header dark={false} style={styles.header(theme)}>
          <Appbar.Action
            color={theme.colors ? theme.colors.text : null}
            icon="arrow-back"
            onPress={() => navigation.goBack()}
          />
          <Appbar.Content title="" />
          <Appbar.Action
            color={theme.colors ? theme.colors.text : null}
            icon="more-horiz"
            onPress={() => {}}
          />
        </Appbar.Header>
      )
    };
  };

  state = {
    selectedIndex: 0
  };

  componentWillMount() {
    this.props.navigation.setParams({ theme: this.props.theme });
  }

  _onChangeTab = index => {
    this.setState({ selectedIndex: index });
  };

  render() {
    const { theme } = this.props;
    return (
      <ScrollView
        style={styles.container(theme)}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <Info />
        <View style={styles.row}>
          <ImageBackground
            source={require("@assets/images/bg4.jpg")}
            style={styles.image}
            borderRadius={3}
          >
            <View style={styles.priceWrap(theme)}>
              <Text style={styles.price}>$24.99</Text>
            </View>
          </ImageBackground>
          <ColorSelect />
        </View>
        <View style={styles.content}>
          <XSTab
            tabs={tabs}
            onPress={this._onChangeTab}
            selectedIndex={this.state.selectedIndex}
          />
          <Paragraph style={styles.paragraph}>
            React Native is like React, but it uses native components instead of
            web components as building blocks. So to understand the basic
            structure of a React Native app, you need to understand some of the
            basic React concepts, like JSX, components, state, and props. If you
            already know React, you still need to learn some
            React-Native-specific stuff, like the native components. This
            tutorial is aimed at all audiences, whether you have React
            experience or not.
          </Paragraph>

          <View style={styles.bottom}>
            <Button mode="contained" style={styles.button} onPress={() => {}}>
              Add to Cart
            </Button>
            <IconButton icon="favorite-border" onPress={() => {}} />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = {
  header: theme => ({
    backgroundColor: theme.colors ? theme.colors.background : "white"
  }),
  container: theme => ({
    flex: 1,
    backgroundColor: theme.colors.background
  }),
  contentContainerStyle: {
    paddingBottom: 30
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30
  },
  image: {
    width: width - 100,
    height: width - 90,
    justifyContent: "flex-end"
  },
  priceWrap: theme => ({
    height: 50,
    paddingHorizontal: 30,
    backgroundColor: theme.colors.background,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "baseline"
  }),
  price: {
    fontSize: 28
  },
  content: {
    padding: 20
  },
  paragraph: {
    marginVertical: 15
  },
  bottom: {
    flexDirection: "row",
    alignItems: "center"
  },
  button: {
    width: 200,
    borderRadius: 3,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20
  }
};

export default withTheme(ProductCard);
