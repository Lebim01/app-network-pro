import {Animated, Text, View, Dimensions, StyleSheet} from 'react-native';
const PAGE_WIDTH = Dimensions.get('window').width;
const PAGE_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(22, 160, 133, .8)',
  },
  linear: {
    zIndex: 9999,
    flex: 1,
  },
  title: {
    color: 'rgba(235, 245, 245, 1)',
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    textAlign: 'center',
    fontFamily: 'baloo',
  },
  desc: {
    fontSize: PAGE_WIDTH / 24,
    color: 'rgba(235, 245, 245, 1)',
    backgroundColor: 'transparent',
    marginTop: 30,
    lineHeight: 25,
    textAlign: 'center',
    fontFamily: 'varela',
  },
  background: {
    width: PAGE_WIDTH,
    resizeMode: 'contain',
    position: 'absolute'
  },

  page: {
    width: PAGE_WIDTH,
    height: PAGE_HEIGHT - 100,
    flex: 1,
    // backgroundColor: 'rgba(226, 76, 77, .8)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 20,
    paddingRight: 20,
  },

  icon: {
    marginTop: 10 * PAGE_HEIGHT/ 100,
    width: 50 * PAGE_WIDTH / 100,
    height: 50 * PAGE_WIDTH / 100,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 40 * PAGE_WIDTH / 100,
    opacity: 0.5
  },
  card: {
    position: 'absolute',
    margin: 30,
    left: PAGE_WIDTH / 16,
    top: 10 * PAGE_WIDTH / 100,
    right: 0,
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 140,
  },

  dot: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0, .5)',
    width: 6,
    height: 6,
    borderRadius: 4,
    marginLeft: 4,
    marginRight: 4,
  },

  dotActive: {
    backgroundColor: 'rgba(255, 244, 235, 1)',
    width: 9,
    height: 9,
    borderRadius: 6,
    marginLeft: 4,
    marginRight: 4,
  }
});