import { Animated, Text, View, Dimensions, StyleSheet } from 'react-native';
const PAGE_WIDTH = Dimensions.get('window').width;
const PAGE_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
container: {
    flex: 1,
  },
  shadow: {
    elevation: 16,
    shadowColor: '#000000',
    shadowOpacity: 0.5,
    shadowRadius: 20,
    shadowOffset: {
      height: 12
    },
  },
  linear: { 
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    height: PAGE_HEIGHT,
  },
  num: {
    backgroundColor: 'rgba(0,0,0, 0.3)',
    position: 'absolute',
    borderRadius: 50,
    padding: 12,
    left: PAGE_WIDTH / 2 - 20,
    top: PAGE_WIDTH / 2 - 100,
    zIndex: 999,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numText: {
    fontSize: 22,
    fontWeight: '800',
    color: '#fff',
  },
  numArrow: {
    position: 'absolute',
    left: PAGE_WIDTH / 2 + 3,
    top: PAGE_WIDTH / 2 - 50,
    zIndex: 999,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 7,
    borderLeftWidth: 7,
    borderTopWidth: 15,
    borderRightColor: 'transparent',
    borderTopColor: 'rgba(0,0,0, 0.3)',
    borderLeftColor: 'transparent',
  },
  title: {
    fontSize: PAGE_WIDTH / 12,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: 'transparent',
    textAlign: 'center',
    fontFamily: 'baloo'
  },

  desc: {
    fontSize: PAGE_WIDTH / 24,
    color: '#fff',
    backgroundColor: 'transparent',
    marginTop: 20,
    lineHeight: 25,
    textAlign: 'center'
  },
  page: {
    width: PAGE_WIDTH,
    position: 'relative',
    zIndex: 1,
    flex: 1,
  },
  card: {
    position: 'absolute',
    margin: 30,
    left: PAGE_WIDTH / 16,
    top: PAGE_WIDTH / 2,
    right: 0,
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 140,
    zIndex: 9999,
  },
  frame: {
    position: 'absolute',
    left: 0,
    bottom: 160,
    borderRadius: (PAGE_WIDTH -100)/2,
    height: PAGE_WIDTH -100,
    width: PAGE_WIDTH - 100,
    margin: 50,
  },
  button: {
    backgroundColor: 'transparent',
    position: 'absolute',
    marginTop: 40,
    left: (PAGE_WIDTH / 2) - 80,
    borderRadius: 50,
    alignItems: 'center',
    bottom: 30,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderStyle: 'solid'
  },
  buttonText: {
    margin: 9,
    marginLeft: 40,
    marginRight: 40,
    color: '#fff',
    fontSize: 13,
  },
  photo: {
    flex: 1,
    resizeMode: 'cover',
  },
  dot: {
		backgroundColor: 'rgba(255,255,255,0.6)',
		width: 6,
		height: 6,
		borderRadius: 4,
		marginLeft: 4,
		marginRight: 4,
  },

  dotActive:  {
    backgroundColor: 'rgba(255,255,255, .8)',
    width: 9,
    height: 9,
    borderRadius: 6,
    marginLeft: 4,
    marginRight: 4,
  }
});