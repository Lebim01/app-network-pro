/* @flow */

import * as React from "react";
import { View, Dimensions } from "react-native";
import { Text } from "react-native-paper";
import { LineChart } from "react-native-chart-kit";

import { XSCard } from "@components";
import Tabs from "./Tabs";

const screenWidth = Dimensions.get("window").width;
const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`
};

export default class CardWithTabs extends React.Component {
  render() {
    const { title, subtitle, theme } = this.props;

    return (
      <XSCard
        coverComponent={
          <View>
            <View style={styles.header}>
              <Text style={styles.headline}>{title}</Text>
              <Text style={styles.subheading(theme)}>{subtitle}</Text>
            </View>

            <View style={styles.content}>
              <Text style={styles.text1}>887.32</Text>
              <Text style={styles.text2(theme)}>887.02 (0.03%)</Text>
            </View>
          </View>
        }
        contentComponent={
          <View>
            <Tabs />
            <LineChart
              data={{
                labels: ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM"],
                datasets: [
                  {
                    data: [
                      Math.random() * 1000,
                      Math.random() * 1000,
                      Math.random() * 1000,
                      Math.random() * 1000,
                      Math.random() * 1000,
                      Math.random() * 1000
                    ]
                  }
                ]
              }}
              width={screenWidth - 20}
              height={220}
              chartConfig={chartConfig}
              bezier
              style={{
                marginVertical: 10
              }}
            />
          </View>
        }
      />
    );
  }
}

const styles = {
    header: {
        padding: 10
    },
    headline: {
        fontSize: 18,
        marginBottom: 3
    },
    subheading: theme => ({
        fontSize: 14,
        color: theme.colors.subtitle
    }),
    content: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        marginTop: 20,
        marginBottom: 30,
        marginHorizontal: 10
    },
    text1: {
        fontSize: 55,
        height: 60
    },
    text2: theme => ({
        fontSize: 16,
        color: theme.colors.subtitle,
        fontWeight: "bold"
    })
};
