/* @flow */

import * as React from "react";
import { ImageBackground, View, ScrollView } from "react-native";
import {
  Paragraph,
  Chip,
  Subheading,
  withTheme,
  Text,
  Divider,
  Button,
  IconButton,
  Appbar
} from "react-native-paper";
import Swiper from "react-native-swiper";

import data from "../data";

class ProductDetailDivider extends React.Component {
  static title = "Product detail divider";
  static navigationOptions = ({ navigation }) => {
    return {
      header: (
        <Appbar.Header>
          <Appbar.BackAction onPress={() => navigation.goBack()} />
          <Appbar.Content title="Product detail divider" />
        </Appbar.Header>
      )
    };
  };

  render() {
    const { title, price, description } = data[0];
    const { theme } = this.props;

    return (
      <ScrollView style={styles.container(theme)}>
        <Swiper
          height={250}
          dotColor={theme.colors.background}
          activeDotColor={theme.colors.primary}
        >
          {data.map((item, index) => (
            <ImageBackground
              key={index.toString()}
              source={item.image}
              style={styles.product}
            >
              <View style={styles.buttons}>
                <IconButton
                  icon="shopping-cart"
                  size={25}
                  color={theme.colors.subtitle}
                  onPress={() => {}}
                />
                <IconButton
                  icon="favorite-border"
                  size={25}
                  color={theme.colors.subtitle}
                  onPress={() => {}}
                />
              </View>
            </ImageBackground>
          ))}
        </Swiper>

        <View style={styles.content}>
          <View style={styles.row}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{price}</Text>
          </View>
          <Paragraph style={styles.description(theme)}>{description}</Paragraph>
          <Divider style={styles.divider} />
          <Subheading>Select type</Subheading>
          <View style={styles.chips}>
            <Chip style={styles.chip}>Extra soft</Chip>
            <Chip style={styles.chip}>Soft</Chip>
            <Chip style={styles.chip}>Medium</Chip>
            <Chip style={styles.chip}>Hard</Chip>
          </View>

          <Button
            color={theme.colors.primary}
            mode="contained"
            onPress={() => {}}
          >
            ADD TO CART
          </Button>
        </View>
      </ScrollView>
    );
  }
}

const styles = {
  container: theme => ({
    flex: 1,
    backgroundColor: theme.colors.background
  }),
  product: {
    height: 250
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20
  },
  title: {
    fontSize: 32
  },
  price: {
    fontSize: 24
  },
  content: {
    marginHorizontal: 20
  },
  divider: {
    marginVertical: 20
  },
  chips: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
    marginBottom: 20
  },
  chip: {
    marginRight: 10,
    marginBottom: 3
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  description: theme => ({
    color: theme.colors.subtitle
  })
};

export default withTheme(ProductDetailDivider);
