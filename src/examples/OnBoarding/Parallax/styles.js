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
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    backgroundColor: 'transparent',
    textAlign: 'center',
    bottom: 50,
    fontFamily: 'baloo'
  },

  desc: {
    fontSize: PAGE_WIDTH/16,
    fontWeight: "600",
    lineHeight: PAGE_WIDTH/8,
    letterSpacing: 3,
    color: '#fff',
    textAlign: 'center'
  },
  page: {
    width: PAGE_WIDTH,
  },
  card: {
    position: 'absolute',
    marginTop: 40,
    left: 12,
    top: 0,
    right: 0,
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 140,
  },
  frame: {
    position: 'absolute',
    left: 0,
    top: 10 * PAGE_HEIGHT/100,
    height: PAGE_WIDTH + 200,
    width: PAGE_WIDTH - 100,
    margin: 50,
    backgroundColor: 'transparent'
  },
  tranImage: {
    height: PAGE_HEIGHT ,
    width: PAGE_WIDTH,
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: 'rgba(0,0,0, 0.5)',
    margin: 12,
    borderRadius: 50,
    bottom: 30,
  },
  buttonText: {
    margin: 15,
    marginLeft: 40,
    marginRight: 40,
    color: '#fff',
    fontSize: 14,
    textAlign: 'center'
  },
  photo: {
    flex: 1,
    borderRadius: (PAGE_WIDTH -100)/2,
  },


  tranImage2: {
    height: PAGE_HEIGHT ,
    width: PAGE_WIDTH - 40,
    margin: 20,
    resizeMode: 'contain',
  },
  frame2: {
    position: 'absolute',
    left: 0,
    top: 20 * PAGE_HEIGHT/100,
    height: PAGE_WIDTH + 200,
    width: PAGE_WIDTH - 100,
    margin: 50,
    backgroundColor: 'transparent'
  },
  desc2: {
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 32,
    letterSpacing: 3,
    color: '#fff',
  },
  card2: {
    position: 'absolute',
    margin: 4,
    top: 18,
    left: 0,
    borderRadius: 8,
    width: 2 * PAGE_WIDTH/3
  },

  desc3: {
    fontSize: PAGE_WIDTH/16,
    lineHeight: PAGE_WIDTH/8,
    letterSpacing: 3,
    color: '#333',
    textAlign: 'center'
  },
  title3: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    backgroundColor: 'transparent',
    textAlign: 'center',
    bottom: 80,
    fontFamily: 'baloo'
  },
  card4: {
    position: 'absolute',
    margin: 4,
    top: 20 * PAGE_HEIGHT/100,
    left: 0,
    borderRadius: 8,
    width: 2 * PAGE_WIDTH/3
  },

  desc4: {
    fontSize: PAGE_WIDTH/16,
    lineHeight: PAGE_WIDTH/8,
    letterSpacing: 3,
    color: '#333',
    textAlign: 'left'
  },

  cardBottom: {
    position: 'absolute',
    bottom: 15 * PAGE_HEIGHT/100,
    left: 0,
    borderRadius: 8,
  },
});
