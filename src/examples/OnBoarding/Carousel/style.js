import {StyleSheet, Dimensions, Platform} from 'react-native';

export const colors = {
  black: '#1a1917',
  title: 'rgba(0,0,0, .7)',
  gray: '#888888',
  background1: 'hsl(15, 55%, 50%)',
  background2: 'hsl(230, 30%, 45%)'
};

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

const slideHeightScale = viewportHeight * 0.8;
const slideHeight = viewportHeight * 0.6;
const slideWidth = wp(75);

export const sliderWidth = viewportWidth;
export const itemHorizontalMargin = wp(2);
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const entryBorderRadius = 8;

export default StyleSheet.create({
  body: {
    flex: 1
  },
  colorsContainer: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row'
  },
  color1: {
    flex: 1,
    backgroundColor: colors.background1
  },
  color2: {
    flex: 1,
    backgroundColor: colors.background2
  },
  scrollview: {
    flex: 1,
    paddingTop: 50
  },
  subtitle: {
    marginTop: 5,
    marginBottom: 15,
    backgroundColor: 'transparent',
    color: 'rgba(255, 255, 255, 0.75)',
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  slider: {
    marginBottom: 30
  },
  sliderContainer: {},
  slideInnerContainer: {
    marginTop: 100,
    width: itemWidth,
    height: slideHeight,
    paddingHorizontal: itemHorizontalMargin,
    paddingBottom: 18 // needed for shadow
  },
  slideInnerContainerScale: {
    marginTop: 50,
    width: itemWidth,
    height: slideHeightScale,
    paddingHorizontal: itemHorizontalMargin,
    paddingBottom: 18 // needed for shadow
  },
  imageContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: entryBorderRadius,
  },
  imageContainerEven: {
    backgroundColor: colors.black
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    borderRadius: entryBorderRadius,
  },
  // image's border radius is buggy on ios; let's hack it!
  radiusMask: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: entryBorderRadius,
    backgroundColor: 'white'
  },
  radiusMaskEven: {
    backgroundColor: colors.black
  },
  textContainer: {
    justifyContent: 'center',
    paddingTop: 20 - entryBorderRadius,
    paddingBottom: 20,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderBottomLeftRadius: entryBorderRadius,
    borderBottomRightRadius: entryBorderRadius
  },
  textContainerEven: {
    backgroundColor: colors.black
  },
  title: {
    color: colors.title,
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  description: {
    color: colors.gray,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 30,
    lineHeight: 24,
    fontSize: 15,
    letterSpacing: 0.5
  },
  titleEven: {
    color: 'white'
  },
  subtitle: {
    marginTop: 6,
    color: colors.gray,
    fontSize: 12,
    fontStyle: 'italic'
  },
  subtitleEven: {
    color: 'rgba(255, 255, 255, 0.7)'
  },
  shadow: {
    elevation: 16,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: {
      height: 8
    },
  },
  button: {
    backgroundColor: 'rgba(0,0,0, 0.7)',
    position: 'absolute',
    margin: 12,
    marginTop: 40,
    left: (viewportWidth / 2) - 100,
    borderRadius: 50,
    bottom: 50,

    elevation: 16,
    shadowColor: '#000000',
    shadowOpacity: 0.4,
    shadowRadius: 10,
    shadowOffset: {
      height: 12
    },
  },
  buttonText: {
    margin: 12,
    marginLeft: 40,
    marginRight: 40,
    color: '#fff',
    fontSize: 14,
  },
});