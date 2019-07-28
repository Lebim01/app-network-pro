import { Animated, Text, View, Dimensions, StyleSheet } from 'react-native';
const PAGE_WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: PAGE_WIDTH / 15,
    fontWeight: 'bold',
    color: 'rgba(28, 37, 42, 1)',
    backgroundColor: 'transparent',
    textAlign: 'center',
    fontFamily: 'baloo',
    width: PAGE_WIDTH - 120,
    lineHeight: 46,
  },

  desc: {
    fontSize: PAGE_WIDTH / 24,
    color: 'rgba(28, 37, 42, 1)',
    backgroundColor: 'transparent',
    marginTop: 20,
    lineHeight: 25,
    textAlign: 'center',
    fontFamily: 'varela'
  },
  page: {
    width: PAGE_WIDTH,
    flex: 1
  },
  card: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    paddingTop: 40,
    paddingBottom: 40,
    paddingLeft: 40,
    paddingRight: 40,
    position: 'absolute',
    bottom: 0,
    width: PAGE_WIDTH
  },
  video: {
    flex: 2
  },
  dot: {
		backgroundColor: 'rgba(0,0,0, .3)',
		width: 6,
		height: 4,
		borderRadius: 4,
		marginLeft: 4,
		marginRight: 4,
  },

  dotActive:  {
    backgroundColor: 'rgba(0,0,0, .6)',
    width: 20,
    height: 4,
    borderRadius: 6,
    marginLeft: 4,
    marginRight: 4,
  }
});
