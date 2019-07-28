/* @flow */

import * as React from "react";
import { View, Image } from "react-native";
import { Card, IconButton, Text, Paragraph, Button } from "react-native-paper";

import { XSCard } from "@components";

export default class CardWithTitleTop extends React.Component {
  render() {
    const { title, subtitle, description, image, theme } = this.props;

    return (
      <XSCard
        coverComponent={
          <View>
            <View style={styles.header}>
              <Image source={image} style={styles.avatar} />
              <View style={styles.headContent}>
                <Text style={styles.headline}>{title}</Text>
                <Text style={styles.subheading}>{subtitle}</Text>
              </View>
              <IconButton icon="share" onPress={() => {}} />
            </View>
            <Card.Cover source={image} />
          </View>
        }
        contentComponent={
          <Card.Content>
            <Paragraph style={styles.paragraph(theme)}>{description}</Paragraph>
          </Card.Content>
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

const styles = {
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
    marginTop: 10
  })
};
