/* @flow */

import * as React from "react";
import PropTypes from "prop-types";
import { View, ScrollView } from "react-native";
import { Caption, Text, Divider, Appbar, withTheme } from "react-native-paper";

import data from "../../data";
import CartItem from "./CartItem";

class CartDivider extends React.Component {
  static title = "Cart divider";
  static navigationOptions = ({ navigation }) => {
    return {
      header: (
        <Appbar.Header>
          <Appbar.BackAction onPress={() => navigation.goBack()} />
          <Appbar.Content title="Cart divider" />
          <Appbar.Action icon="search" onPress={() => {}} />
          <Appbar.Action icon="more-vert" onPress={() => {}} />
        </Appbar.Header>
      )
    };
  };

  static propTypes = {
    data: PropTypes.array.isRequired
  };

  static defaultProps = {
    data
  };

  render() {
    const { data, theme } = this.props;

    return (
      <ScrollView style={styles.container(theme)}>
        <Caption style={styles.header}>
          {`${data.length} items in your cart`}
        </Caption>
        {data.map((item, index) => (
          <CartItem key={index.toString()} {...item} theme={theme} />
        ))}

        <Divider style={styles.divider} />

        <View style={styles.total}>
          <Text style={styles.totalLabel(theme)}>TOTAL</Text>
          <Text style={styles.totalValue(theme)}>41.24</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label(theme)}>Subtotal</Text>
          <Text style={styles.value(theme)}>36.00</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label(theme)}>Shipping</Text>
          <Text style={styles.value(theme)}>2.00</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label(theme)}>Tax</Text>
          <Text style={styles.value(theme)}>3.14</Text>
        </View>
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
    marginHorizontal: 20,
    marginVertical: 10
  },
  header: theme => ({
    fontSize: 14,
    fontWeight: "bold",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: theme.colors.background
  }),
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 5,
    paddingHorizontal: 20
  },
  label: theme => ({
    fontSize: 14,
    fontWeight: "bold",
    color: theme.colors.subtitle
  }),
  value: theme => ({
    fontSize: 14,
    color: theme.colors.subtitle
  }),
  total: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 25,
    paddingHorizontal: 20
  },
  totalLabel: theme => ({
    fontSize: 18,
    color: theme.colors.subtitle
  }),
  totalValue: theme => ({
    fontSize: 24,
    color: theme.colors.text
  })
};

export default withTheme(CartDivider);
