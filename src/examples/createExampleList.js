import * as React from "react";
import { FlatList } from "react-native";
import { List, Divider, Appbar, withTheme } from "react-native-paper";
import _ from "lodash";

// create example list
function createExampleList(list, name, isRoot) {
  class ExampleList extends React.Component {
    static title = name;
    static navigationOptions = ({ navigation }) => {
      if (isRoot) return null;

      return {
        header: (
          <Appbar.Header>
            {!isRoot && (
              <Appbar.BackAction onPress={() => navigation.goBack()} />
            )}
            <Appbar.Content title={`${name}`} />
          </Appbar.Header>
        )
      };
    };

    _renderItem = ({ item }) => {
      return (
        <List.Item
          title={item.data && item.data.title ? item.data.title : item.id}
          onPress={() => this._navigateTo(item)}
        />
      );
    };

    _navigateTo = item => {
      console.log(item);
      this.props.navigation.navigate(item.id);
    };

    _keyExtractor = item => item.id;

    render() {
      const {
        theme: {
          colors: { background }
        }
      } = this.props;

      const data = !_.isArray(list)
        ? Object.keys(list).map(id => ({
            id,
            data: list[id]
          }))
        : list;

      return (
        <FlatList
          style={{ backgroundColor: background }}
          ItemSeparatorComponent={Divider}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
          data={data}
        />
      );
    }
  }

  return withTheme(ExampleList);
}

export default createExampleList;
