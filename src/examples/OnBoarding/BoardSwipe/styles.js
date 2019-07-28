import { Animated, Text, View, Dimensions, StyleSheet } from 'react-native';
const PAGE_WIDTH = Dimensions.get('window').width;
const PAGE_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
container: {
    flex: 1,
  },
  desc: {
    fontSize: PAGE_WIDTH / 24,
    color: 'rgba(99, 99, 99, 1)',
    backgroundColor: 'transparent',
    marginTop: 20,
    lineHeight: 25,
    textAlign: 'center'
  },
  page: {
    width: PAGE_WIDTH,
    flex: 1,
    alignItems: 'center',
    paddingTop: 150,
    paddingLeft: 50,
    paddingRight: 50,
  },
  icon: {
    marginBottom: 50,
  },
  card: {
    // position: 'absolute',
    // margin: 30,
    // left: PAGE_WIDTH / 16,
    // top: PAGE_WIDTH / 2,
    // right: 0,
    // borderRadius: 8,
    // paddingHorizontal: 24,
    // paddingTop: 16,
    // paddingBottom: 140,
    // zIndex: 9999,
  },
  
  dot: {
		backgroundColor: 'rgba(218, 218, 218, 1)',
		width: 6,
		height: 6,
		borderRadius: 4,
		marginLeft: 4,
		marginRight: 4,
  },

  dotActive:  {
    backgroundColor: 'rgba(51, 148, 157, 1)',
    width: 9,
    height: 9,
    borderRadius: 6,
    marginLeft: 4,
    marginRight: 4,
  }
});