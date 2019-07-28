import * as React from "react";
import { View, Platform } from "react-native";
import {
  Drawer,
  withTheme,
  Switch,
  TouchableRipple,
  Text
} from "react-native-paper";
import MenuOptions from "@views/menu";

class DrawerItems extends React.Component {
  state = {
    drawerItemIndex: 0
  };

  _setDrawerItem = (index, id) => {
    this.setState({ drawerItemIndex: index });
    this.props.navigation.navigate(id)
    this.props.navigation.closeDrawer()
  }

  render() {
    const { colors } = this.props.theme;
    return (
      <View style={[styles.drawerContent, { backgroundColor: colors.surface }]}>
        <Drawer.Section title="Menu">
          {MenuOptions.map((props, index) => (
            <Drawer.Item
              {...props}
              key={props.key}
              active={this.state.drawerItemIndex === index}
              onPress={() => this._setDrawerItem(index, props.id)}
            />
          ))}
        </Drawer.Section>

        <Drawer.Section title="Preferences">
          <TouchableRipple onPress={this.props.toggleTheme}>
            <View style={styles.preference}>
              <Text>Dark Theme</Text>
              <View pointerEvents="none">
                <Switch value={this.props.isDarkTheme} />
              </View>
            </View>
          </TouchableRipple>
        </Drawer.Section>
      </View>
    );
  }
}

const styles = {
  drawerContent: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 22
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16
  }
};

export default withTheme(DrawerItems);
