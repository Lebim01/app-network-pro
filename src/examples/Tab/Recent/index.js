/* @flow */

import * as React from "react";
import { View, FlatList } from "react-native";
import { Paragraph, Button, Text } from "react-native-paper";

import Item from "./Item";

export default class Recent extends React.Component {
  render() {
    const { theme, data } = this.props;

    return (
      <View style={styles.container(theme)}>
        <View style={styles.row}>
          <View style={styles.flex1}>
            <Text style={styles.title(theme)}>Cosmopolitan Birds</Text>
            <Text style={styles.text}>Cosmopolitan distribution</Text>
          </View>
          <Button
            color={theme.colors.primary}
            mode="contained"
            onPress={() => {}}
          >
            See all
          </Button>
        </View>
        <View style={styles.list}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            keyExtractor={(item, index) => `${index}`}
            data={data}
            renderItem={({ item }) => (
              <Item image={item.image} title={item.title} theme={theme} />
            )}
          />
        </View>
        <Paragraph>
          With React Native, you don't build a "mobile web app", an "HTML5 app",
          or a "hybrid app". You build a real mobile app that's
          indistinguishable from an app built using Objective-C or Java. React
          Native uses the same fundamental UI building blocks as regular iOS and
          Android apps. You just put those building blocks together using
          JavaScript and React.
        </Paragraph>
      </View>
    );
  }
}

const styles = {
  container: theme => ({
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: 10
  }),
  row: {
    flexDirection: "row",
    marginTop: 30,
    alignItems: "flex-start",
    marginBottom: 20
  },
  flex1: {
    flex: 1
  },
  title: theme => ({
    fontSize: 18,
    fontWeight: "bold",
    color: theme.colors.text
  }),
  text: theme => ({
    fontSize: 16,
    color: theme.colors.subtitle,
    marginTop: 3
  }),
  list: {
    height: 220
  }
};
