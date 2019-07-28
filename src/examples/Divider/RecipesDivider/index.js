/* @flow */

import * as React from "react";
import { FlatList, View } from "react-native";
import { Caption, withTheme, Divider, Appbar } from "react-native-paper";

import data from "../../data";
import RecipesItem from "./RecipesItem";

class RecipesDivider extends React.Component {
  static title = "Recipes divider";
  static navigationOptions = ({ navigation }) => {
    return {
      header: (
        <Appbar.Header>
          <Appbar.BackAction onPress={() => navigation.goBack()} />
          <Appbar.Content title="Recipes divider" />
        </Appbar.Header>
      )
    };
  };

  render() {
    const { theme } = this.props;

    return (
      <View style={styles.container(theme)}>
        <Caption style={styles.header(theme)}>Summer recipes</Caption>
        <FlatList
          style={styles.container}
          keyExtractor={(item, index) => `${index}`}
          data={data}
          renderItem={({ item, index }) => (
            <RecipesItem
              {...item}
              number={index + 1 < 10 ? `0${index + 1}` : index + 1}
              theme={theme}
            />
          )}
          ItemSeparatorComponent={() => <Divider style={styles.divider} />}
        />
      </View>
    );
  }
}

const styles = {
  container: theme => ({
    flex: 1,
    backgroundColor: theme.colors.background
  }),
  divider: {
    marginLeft: 100
  },
  header: theme => ({
    fontSize: 15,
    padding: 10,
    color: theme.colors.text,
    backgroundColor: theme.colors.background
  }),
  image: {
    width: 70,
    height: 50
  },
  item: {
    alignItems: "center"
  }
};

export default withTheme(RecipesDivider);
