/* @flow */

import * as React from "react";
import { View, Text } from "react-native";
import { Card } from "react-native-paper";

import { XSCard } from "@components";

export default class CardWithTitleTop extends React.Component {
  render() {
    const { title, image } = this.props;

    return (
      <XSCard
        coverComponent={
          <View>
            <View style={styles.header}>
                <Text style={styles.headline}>{title}</Text>
            </View>
            {image && <Card.Cover source={image} /> }
          </View>
        }
        contentComponent={
          <Card.Content>
            {this.props.children}
          </Card.Content>
        }
        actionComponent={
          <Card.Actions style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            {this.props.actions}
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
    headline: {
        fontSize: 18,
        marginBottom: 3
    },
    headContent: {
        flex: 1
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
