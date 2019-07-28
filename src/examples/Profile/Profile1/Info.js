import * as React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { Text, Headline, Subheading, IconButton } from "react-native-paper";

export default class Info extends React.PureComponent {
  static defaultProps = {
    avatar: require("@assets/images/avatar1.jpg"),
    name: "Luyx Tran",
    job: "Developer",
    location: "Viet nam"
  };

  render() {
    const {
      theme: {
        colors: { primary }
      },
      avatar,
      name,
      job,
      location
    } = this.props;

    return (
      <View style={styles.container}>
        <Image source={avatar} style={styles.avatar} />
        <View style={styles.content}>
          <Headline style={styles.headline}>{name}</Headline>
          <Subheading style={styles.subheading}>{job}</Subheading>

          <View style={styles.row}>
            <IconButton icon="location-on" style={styles.icon} />
            <Text style={styles.location}>{location}</Text>
            <TouchableOpacity
              style={[styles.btnAdd, { backgroundColor: primary }]}
            >
              <IconButton icon="add" color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flexDirection: "row"
  },
  avatar: {
    width: 120,
    height: 120
  },
  content: {
    flex: 1,
    marginLeft: 15
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginLeft: -10
  },
  subheading: {
    fontSize: 14,
    margin: 0
  },
  headline: {
    fontSize: 24,
    margin: 0
  },
  location: {
    fontSize: 14,
    flex: 1
  },
  icon: {
    margin: 0,
    padding: 0
  },
  btnAdd: {
    width: 40,
    height: 40,
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "center"
  }
};
