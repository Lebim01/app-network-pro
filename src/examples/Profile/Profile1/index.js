import * as React from "react";
import { View } from "react-native";
import { Appbar, withTheme } from "react-native-paper";

import { XSTab } from "@components";
import Gallery from "../../Gallery";

import Info from "./Info";

const tabs = [
  {
    title: "360",
    subTitle: "Posts"
  },
  {
    title: "769",
    subTitle: "Followers"
  },
  {
    title: "255",
    subTitle: "Following"
  }
];

class Profile1 extends React.Component {
  static title = "Profile1";
  static navigationOptions = ({ navigation }) => {
    const theme = navigation.getParam("theme", {});
    return {
      header: (
        <Appbar.Header dark={false} style={styles.header(theme)}>
          <Appbar.Action
            color={theme.colors ? theme.colors.text : null}
            icon="arrow-back"
            onPress={() => navigation.goBack()}
          />
          <Appbar.Content title="" />
          <Appbar.Action
            color={theme.colors ? theme.colors.text : null}
            icon="more-horiz"
            onPress={() => {}}
          />
        </Appbar.Header>
      )
    };
  };

  componentWillMount() {
    this.props.navigation.setParams({ theme: this.props.theme });
  }

  state = {
    selectedIndex: 0
  };

  _onChangeTab = index => {
    this.setState({ selectedIndex: index });
  };

  render() {
    const { selectedIndex } = this.state;
    const { theme } = this.props;

    return (
      <View style={styles.container(theme)}>
        <Info theme={theme} />
        <View style={styles.tabsWrap}>
          <XSTab
            tabs={tabs}
            onPress={this._onChangeTab}
            selectedIndex={selectedIndex}
          />
        </View>

        <Gallery />
      </View>
    );
  }
}

const styles = {
  header: theme => ({
    backgroundColor: theme.colors ? theme.colors.background : null
  }),
  container: theme => ({
    flex: 1,
    backgroundColor: theme.colors.background
  }),
  tabsWrap: {
    marginHorizontal: 16,
    marginTop: 20
  }
};

export default withTheme(Profile1);
