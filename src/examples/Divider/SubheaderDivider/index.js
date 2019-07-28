/* @flow */

import * as React from "react";
import { Image, View, SectionList } from "react-native";
import { List, withTheme, IconButton, Appbar } from "react-native-paper";

import Divider from "./Divider";
import Header from "./Header";

class SubheaderDivider extends React.Component {
  static title = "Subheader divider";
  static navigationOptions = ({ navigation }) => {
    return {
      header: (
        <Appbar.Header>
          <Appbar.BackAction onPress={() => navigation.goBack()} />
          <Appbar.Content title="" />
          <Appbar.Action icon="share" onPress={() => {}} />
          <Appbar.Action icon="search" onPress={() => {}} />
          <Appbar.Action icon="more-vert" onPress={() => {}} />
        </Appbar.Header>
      )
    };
  };

  render() {
    const { data, theme } = this.props;

    return (
      <View style={styles.container(theme)}>
        <Header theme={theme} />
        <SectionList
          style={styles.container(theme)}
          keyExtractor={(item, index) => item + index}
          sections={data}
          renderItem={({ item, index }) => (
            <List.Item
              title="Title"
              description="Subtitle"
              left={() => <Image source={item.avatar} style={styles.avatar} />}
              right={() => (
                <IconButton
                  icon="info"
                  size={25}
                  color={theme.colors.subtitle}
                  onPress={() => {}}
                />
              )}
            />
          )}
          renderSectionFooter={() => (
            <Divider style={styles.divider} title="Subheader" />
          )}
        />
      </View>
    );
  }
}

SubheaderDivider.defaultProps = {
  data: [
    {
      title: "Title1",
      data: [
        { avatar: require("@assets/images/avatar1.jpg") },
        { avatar: require("@assets/images/avatar2.jpg") },
        { avatar: require("@assets/images/avatar1.jpg") },
        { avatar: require("@assets/images/avatar2.jpg") },
        { avatar: require("@assets/images/avatar1.jpg") }
      ]
    },
    {
      title: "Title2",
      data: [
        { avatar: require("@assets/images/avatar2.jpg") },
        { avatar: require("@assets/images/avatar1.jpg") },
        { avatar: require("@assets/images/avatar2.jpg") },
        { avatar: require("@assets/images/avatar1.jpg") },
        { avatar: require("@assets/images/avatar2.jpg") }
      ]
    }
  ]
};

const styles = {
  container: theme => ({
    flex: 1,
    backgroundColor: theme.colors.background
  }),
  avatar: {
    marginRight: 20,
    width: 50,
    height: 50,
    borderRadius: 25
  }
};

export default withTheme(SubheaderDivider);
