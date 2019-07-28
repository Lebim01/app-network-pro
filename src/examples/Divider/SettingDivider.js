/* @flow */

import * as React from "react";
import { ScrollView } from "react-native";
import {
  Caption,
  List,
  withTheme,
  Divider,
  Switch,
  Appbar
} from "react-native-paper";

class SettingDivider extends React.Component {
  static title = "Setting divider";
  static navigationOptions = ({ navigation }) => {
    return {
      header: (
        <Appbar.Header>
          <Appbar.BackAction onPress={() => navigation.goBack()} />
          <Appbar.Content title="Setting divider" />
          <Appbar.Action icon="search" onPress={() => {}} />
          <Appbar.Action icon="more-vert" onPress={() => {}} />
        </Appbar.Header>
      )
    };
  };

  state = {
    isSwitchOn1: false,
    isSwitchOn2: false
  };

  render() {
    const { isSwitchOn1, isSwitchOn2 } = this.state;
    const { theme } = this.props;

    return (
      <ScrollView style={styles.container(theme)}>
        <Caption style={styles.header(theme)}>Basic</Caption>
        <List.Item
          style={styles.item}
          title="Search engine"
          description="Google"
        />
        <List.Item
          style={styles.item}
          title="Pop up if high priority"
          right={() => (
            <Switch
              value={isSwitchOn1}
              onValueChange={() => this.setState({ isSwitchOn1: !isSwitchOn1 })}
            />
          )}
        />
        <List.Item
          style={styles.item}
          title="When device is locked"
          description="Show all notification content"
        />
        <List.Item
          style={styles.item}
          title="Start time"
          description="10:00 AM"
        />
        <Divider style={styles.divider} />
        <Caption style={styles.header(theme)}>Advance</Caption>
        <List.Item
          style={styles.item}
          title="Voice search"
          description="English (US)"
        />
        <List.Item style={styles.item} title="Privacy" />
        <List.Item style={styles.item} title="Encryption" />
        <List.Item
          style={styles.item}
          title="Make passwords visible"
          right={() => (
            <Switch
              value={isSwitchOn2}
              onValueChange={() => this.setState({ isSwitchOn2: !isSwitchOn2 })}
            />
          )}
        />
      </ScrollView>
    );
  }
}

const styles = {
  container: theme => ({
    flex: 1,
    backgroundColor: theme.colors.background
  }),
  divider: {
    marginVertical: 5
  },
  header: theme => ({
    fontSize: 15,
    paddingHorizontal: 15,
    paddingVertical: 3,
    backgroundColor: theme.colors.background
  })
};

export default withTheme(SettingDivider);
