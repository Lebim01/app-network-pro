/* @flow */

import * as React from "react";
import { View } from "react-native";
import {
  Card,
  Chip,
  Text,
  Paragraph,
  Button,
  Caption,
  Divider,
  Title
} from "react-native-paper";
import StarRating from "react-native-star-rating";

import { XSCard } from "@components";

export default class CardWithChips extends React.Component {
  state = { selectedChip: 1 };

  render() {
    const { selectedChip } = this.state;
    const { title, description, image, theme } = this.props;

    return (
      <XSCard
        image={image}
        contentComponent={
          <Card.Content>
            <Title>{title}</Title>
            <View style={styles.ratingWrap}>
              <StarRating
                disabled
                emptyStar="ios-star-outline"
                fullStar="ios-star"
                halfStar="ios-star-half"
                iconSet="Ionicons"
                maxStars={5}
                rating={3.5}
                fullStarColor="#ffcf24"
                starSize={15}
              />
              <Text style={styles.rating}>3.5 (413)</Text>
            </View>
            <Caption style={styles.caption}>{title}</Caption>
            <Paragraph style={styles.paragraph(theme)}>{description}</Paragraph>
            <Divider style={styles.divider} />
            <Caption style={styles.caption}>Tonight's availability</Caption>
            <View style={styles.chips}>
              <Chip
                style={[selectedChip == 0 && styles.selectedChip(theme)]}
                onPress={() => this.setState({ selectedChip: 0 })}
              >
                5:30PM
              </Chip>
              <Chip
                style={[selectedChip == 1 && styles.selectedChip(theme)]}
                onPress={() => this.setState({ selectedChip: 1 })}
              >
                7:30PM
              </Chip>
              <Chip
                style={[selectedChip == 2 && styles.selectedChip(theme)]}
                onPress={() => this.setState({ selectedChip: 2 })}
              >
                8:00PM
              </Chip>
              <Chip
                style={[selectedChip == 3 && styles.selectedChip(theme)]}
                onPress={() => this.setState({ selectedChip: 3 })}
              >
                9:00PM
              </Chip>
            </View>
          </Card.Content>
        }
        actionComponent={
          <Card.Actions>
            <Button onPress={() => {}}>RESERVE</Button>
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
  paragraph: theme => ({
    fontSize: 13,
    color: theme.colors.subtitle,
    marginTop: 10
  }),
  ratingWrap: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },
  rating: theme => ({
    fontSize: 12,
    color: theme.colors.subtitle,
    marginLeft: 5
  }),
  divider: {
    marginVertical: 10
  },
  chips: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    marginVertical: 10
  },
  selectedChip: theme => ({
    backgroundColor: theme.colors.primary
  }),
  caption: {
    fontWeight: "bold",
    fontSize: 12
  }
};
