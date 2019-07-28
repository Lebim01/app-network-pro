import { Animated, Text, View, Dimensions, StyleSheet } from 'react-native';
const PAGE_WIDTH = Dimensions.get('window').width;
const PAGE_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: PAGE_WIDTH / 12,
    fontWeight: 'bold',
    color: 'rgba(28, 37, 42, 1)',
    backgroundColor: 'transparent',
    textAlign: 'center',
    fontFamily: 'baloo',
    width: PAGE_WIDTH ,
    lineHeight: 46,
  },

  desc: {
    fontSize: PAGE_WIDTH / 24,
    color: 'rgba(123, 139, 150, 1)',
    backgroundColor: 'transparent',
    marginTop: 20,
    lineHeight: 25,
    textAlign: 'center',
    fontFamily: 'varela'
  },
  page: {
    width: PAGE_WIDTH,
    backgroundColor: 'rgba(23, 139, 164, 1)',
    flex: 1
  },
  card: {
    position: 'absolute',
    width: PAGE_WIDTH,
    height: 35 * PAGE_HEIGHT / 100,
    alignItems: 'center',
    bottom: 0,
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingBottom: 40,
    paddingLeft: 40,
    paddingRight: 40,
  },
  photo: {
    backgroundColor: 'rgba(23, 139, 164, 1)',
    width: PAGE_WIDTH,
    height: PAGE_HEIGHT,
    resizeMode: 'contain'
  },
  gif: {
    width: 100,
    height: 100,
    position: 'absolute',
    zIndex: 99,
    bottom: 36*PAGE_HEIGHT /100,
    resizeMode: 'contain'
  },
  icon: {

  },
  dot: {
    backgroundColor: 'rgba(183, 196, 203, 1)',
    width: 6,
    height: 6,
    borderRadius: 4,
    marginLeft: 4,
    marginRight: 4,
  },

  dotActive:  {
    backgroundColor: 'rgba(183, 196, 203, 1)',
    width: 9,
    height: 9,
    borderRadius: 6,
    marginLeft: 4,
    marginRight: 4,
  }
});
