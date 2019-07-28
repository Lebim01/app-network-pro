/* @flow */

import * as React from "react";
import { View } from "react-native";
import { Card, Button, Text } from "react-native-paper";

import { XSCard } from "@components";
import InfoItem from "./InfoItem";
import Info from "./Info";
import StyledSlider from "./Slider";

const { Expand } = XSCard;

export default class CardWithSlider extends React.Component {
  state = {
    expanded: false,
    info: {
      title: "Mon, 7:30 AM, Cloudy",
      temperature: 23
    }
  };

  _onChangeStatus = expanded => {
    this.setState({ expanded });
  };

  _onValueChange = time => {
    this.setState({
      info: {
        title: `Mon, ${time}, Cloudy `,
        temperature: Math.floor(Math.random() * 21) + 10
      }
    });
  };

  _toggleExpand = () => {
    this._expandComponent.toggle();
  };

  render() {
    const { expanded, info } = this.state;
    const { title } = this.props;

    return (
      <XSCard
        type="expand"
        onChangeStatus={this._onChangeStatus}
        coverComponent={
          <View>
            <Text style={styles.headline}>{title}</Text>
            <Info title={info.title} temperature={info.temperature} />
            <StyledSlider onValueChange={this._onValueChange} />
          </View>
        }
        contentComponent={
          <Expand
            ref={ref => (this._expandComponent = ref)}
            onChangeStatus={this._onChangeStatus}
            collapsedComponent={
              <View>
                <InfoItem
                  icon={require("@assets/images/cloud.png")}
                  temperature="24°"
                  title="Tuesday"
                />
              </View>
            }
            expandedComponent={
              <View>
                <InfoItem
                  icon={require("@assets/images/cloud.png")}
                  temperature="22°"
                  title="Wednesday"
                />
                <InfoItem
                  icon={require("@assets/images/cloud.png")}
                  temperature="25°"
                  title="Thursday"
                />
                <InfoItem
                  icon={require("@assets/images/cloud.png")}
                  temperature="20°"
                  title="Friday"
                />
                <InfoItem
                  icon={require("@assets/images/cloud.png")}
                  temperature="16°"
                  title="Saturday"
                />
              </View>
            }
          />
        }
        actionComponent={
          <Card.Actions>
            <Button onPress={this._toggleExpand}>
              {expanded ? "COLLAPSE" : "EXPAND"}
            </Button>
          </Card.Actions>
        }
      />
    );
  }
}

const styles = {
  card: {
    margin: 10
  },
  headline: {
    fontSize: 18,
    marginHorizontal: 10,
    marginTop: 10
  }
};
