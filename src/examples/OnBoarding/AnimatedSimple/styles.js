import { Animated, Text, View, Dimensions, StyleSheet } from 'react-native';
const PAGE_WIDTH = Dimensions.get('window').width;

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
  title: {
    fontSize: PAGE_WIDTH / 12,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: 'transparent',
    textAlign: 'center'
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
    width: PAGE_WIDTH
  },
  card: {
    position: 'absolute',
    margin: 12,
    marginTop: 40,
    left: 12,
    bottom: 40,
    right: 0,
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 140,
  },
  button: {
    backgroundColor: 'rgba(0,0,0, 0.3)',
    position: 'absolute',
    margin: 12,
    marginTop: 40,
    left: (PAGE_WIDTH / 2) - 100,
    borderRadius: 50,
    bottom: 30,
  },
  buttonText: {
    margin: 15,
    marginLeft: 50,
    marginRight: 40,
    color: '#fff',
    fontSize: 14,
  },
  frame: {
    position: 'absolute',
    left: 0,
    top: 20,
    borderRadius: (PAGE_WIDTH -100)/2,
    height: PAGE_WIDTH -140,
    width: PAGE_WIDTH - 160,
    margin: 80,
  },
  photo: {
    flex: 1,
    width: PAGE_WIDTH - 150,
    resizeMode: 'contain'
  }
});
