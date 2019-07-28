/* @flow */

import * as React from "react";
import { View, Image, Dimensions } from "react-native";
import { Card, IconButton, Text, Paragraph, Button } from "react-native-paper";

import { XSCard } from "@components";

export default class CardWithMultiImage extends React.Component {
  render() {
    const { title, subtitle, description, data, theme } = this.props;

    const imgs = [];
    if (data.length > 0) {
      imgs.push(
        <Card.Cover
          key="large-img"
          source={require("@assets/images/bg2.jpg")}
        />
      );
    }

    if (data.length > 1) {
      const items = data.slice(1, 4);
      imgs.push(
        <View key="small-imgs" style={styles.images}>
          {items.map((item, index) => (
            <Card.Cover
              key={index.toString()}
              style={styles.image}
              source={item.image}
            />
          ))}
        </View>
      );
    }

    return (
      <XSCard
        coverComponent={
          <View style={styles.header}>
            <Image
              source={require("@assets/images/avatar1.jpg")}
              style={styles.avatar}
            />
            <View style={styles.headContent}>
              <Text style={styles.headline}>{title}</Text>
              <Text style={styles.subheading}>{subtitle}</Text>
            </View>
            <IconButton icon="share" onPress={() => {}} />
          </View>
        }
        contentComponent={
          <View>
            {imgs}
            <Paragraph style={styles.paragraph(theme)}>{description}</Paragraph>
          </View>
        }
        actionComponent={
          <Card.Actions>
            <Button onPress={() => {}}>READ</Button>
            <Button onPress={() => {}}>BOOKMARK</Button>
          </Card.Actions>
        }
      />
    );
  }
}

const { width } = Dimensions.get("window");
const margin = 10;
const imgWidth = (width - 2 * margin) / 3 - 1;

const styles = {
  card: {
    margin
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10
  },
  headContent: {
    flex: 1
  },
  headline: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 3
  },
  subheading: {
    fontSize: 11
  },
  paragraph: theme => ({
    fontSize: 13,
    color: theme.colors.subtitle,
    marginTop: 10,
    paddingHorizontal: 10
  }),
  images: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 2
  },
  image: {
    width: imgWidth,
    height: imgWidth
  }
};
