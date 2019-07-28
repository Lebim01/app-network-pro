/* @flow */

import * as React from "react";
import { View } from "react-native";
import { Caption, Divider } from "react-native-paper";

class SubheaderDivider extends React.PureComponent {
  render() {
    const { title } = this.props;
    return (
      <View style={styles.container}>
        <Divider />
        <Caption style={styles.title}>{title}</Caption>
      </View>
    );
  }
}

const styles = {
  container: {
    paddingLeft: 80,
    marginVertical: 10
  },
  title: {
    fontSize: 13
  }
};

export default SubheaderDivider;
