import * as React from "react";
import { View } from "react-native";
import { Caption, Headline, Subheading } from "react-native-paper";
import StarRating from "react-native-star-rating";

export default class Info extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Subheading style={styles.subheading}>IKEA Malm</Subheading>
        <Headline style={styles.headline}>Flower Pot</Headline>
        <View style={styles.row}>
          <StarRating
            disabled
            emptyStar="ios-star-outline"
            fullStar="ios-star"
            halfStar="ios-star-half"
            iconSet="Ionicons"
            maxStars={5}
            rating={3.5}
            fullStarColor="#ffcf24"
            starSize={18}
          />
          <Caption style={styles.caption}>4.8 (247 reviews)</Caption>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    marginHorizontal: 20
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10
  },
  subheading: {
    fontSize: 14,
    margin: 0
  },
  headline: {
    fontSize: 24,
    margin: 0
  },
  caption: {
    marginLeft: 10,
    fontSize: 13
  }
};
