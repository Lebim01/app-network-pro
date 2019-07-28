/**
 * Example Card
 */

import React from "react";
import { ScrollView } from "react-native";
import {
  Card,
  Button,
  IconButton,
  Appbar,
  withTheme
} from "react-native-paper";

import { XSCard } from "@components";
import data from "../data";
import CardWithSlider from "./CardWithSlider";
import CardWithTabs from "./CardWithTabs";
import CardWithMultiImage from "./CardWithMultiImage";
import CardWithChips from "./CardWithChips";
import CardWithTitleTop from "./CardWithTitleTop";

class ExampleCard extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: (
        <Appbar.Header>
          <Appbar.BackAction onPress={() => navigation.goBack()} />
          <Appbar.Content title="Card Example" />
        </Appbar.Header>
      )
    };
  };

  static defaultProps = {
    defaultData: data[0],
    data
  };

  render() {
    const { defaultData, theme } = this.props;

    return (
      <ScrollView style={styles.container(theme)}>
        <XSCard {...defaultData} />
        <XSCard type="expand" {...defaultData} />
        <XSCard type="cover" {...defaultData} />
        <XSCard
          {...defaultData}
          actionComponent={
            <Card.Actions>
              <Button onPress={() => {}}>READ</Button>
              <Button onPress={() => {}}>BOOKMARK</Button>
              <IconButton icon="favorite" onPress={() => {}} />
              <IconButton icon="share" onPress={() => {}} />
            </Card.Actions>
          }
        />
        <CardWithSlider {...defaultData} />
        <CardWithTabs {...defaultData} theme={theme} />
        <CardWithMultiImage {...defaultData} data={data} theme={theme} />
        <CardWithChips {...defaultData} theme={theme} />
        <CardWithTitleTop {...defaultData} theme={theme} />
      </ScrollView>
    );
  }
}

const styles = {
  container: theme => ({
    flex: 1,
    backgroundColor: theme.colors.background
  })
};

export default withTheme(ExampleCard);
