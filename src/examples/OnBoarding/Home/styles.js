import {Animated, Text, View, Dimensions, StyleSheet} from 'react-native';
const PAGE_WIDTH = Dimensions.get('window').width;
const PAGE_HEIGHT = Dimensions.get('window').height;
const vw = PAGE_WIDTH / 100;
const vh = PAGE_HEIGHT / 100;
export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    flexWrap: 'wrap',
    flexDirection: "row",
    alignItems: "stretch",
    backgroundColor: '#FFF',
  },
  row: {
    "width": PAGE_WIDTH / 3 - 20,
    "height": vh * 26,
    "backgroundColor": "#f9f9f9",
    "marginLeft": 15,
    "marginBottom": 50,
    "borderWidth": 0,
    "borderColor": "#eee",
    "alignItems": "center",
    "justifyContent": "flex-end"
  },
  title: {
    position: 'absolute',
    bottom: -28,
    fontSize: PAGE_WIDTH/30,
    padding: 4,
    backgroundColor: 'transparent'
  },
  image : {
    width: PAGE_WIDTH / 3 - 20,
    height: vh * 26,
    borderRadius: 2
  },
  shadow: {
    elevation: 8,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: {
      height: 8
    },
  },
});