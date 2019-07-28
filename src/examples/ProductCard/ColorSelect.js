import * as React from "react";
import { View, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";

export default class ColorSelect extends React.PureComponent {
  static defaultProps = {
    colors: [
      {
        color: "#FFE4C4",
        name: "Bisque"
      },
      {
        color: "#FFB6C1",
        name: "LightPink"
      },
      {
        color: "#BC8F8F",
        name: "RosyBrown"
      }
    ]
  };

  state = {
    selected: 0
  };

  selectColor = index => {
    this.setState({ selected: index });
  };

  render() {
    const { colors } = this.props;
    const { selected } = this.state;

    return (
      <View style={styles.flex1}>
        <View style={styles.container}>
          {colors.map((item, index) => (
            <View style={styles.item} key={index.toString()}>
              <TouchableOpacity
                onPress={() => this.selectColor(index)}
                style={styles.color}
              >
                <View style={[selected == index && styles.colorWrap]}>
                  <View
                    style={[styles.colorItem, { backgroundColor: item.color }]}
                  />
                </View>
              </TouchableOpacity>
              <View style={styles.textWrap}>
                {selected == index && (
                  <Text style={styles.text}>{item.name}</Text>
                )}
              </View>
            </View>
          ))}
        </View>
      </View>
    );
  }
}

const styles = {
  flex1: {
    flex: 1
  },
  container: {
    width: 60,
    alignSelf: "center"
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 60
  },
  color: {
    position: "absolute",
    left: 10,
    top: 16,
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30
  },
  colorItem: {
    width: 20,
    height: 20,
    borderRadius: 10
  },
  colorWrap: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "white",
    borderWidth: 0.5,
    borderColor: "#ccc",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    transform: [{ rotate: "-90 deg" }],
    fontSize: 11,
    color: "#757575"
  },
  textWrap: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 30,
    top: 0,
    bottom: 0
  }
};
