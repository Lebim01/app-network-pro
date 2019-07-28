/**
 * Integrate with beOnboard
 */

import createExampleList from "../createExampleList";
import Carousel from "./Carousel";
import CarouselSCale from "./Carousel/Scale";
import CarouselVideo from "./CarouselVideo";
import FullSwipe from "./FullSwipe";
import SwipeCard from "./SwipeCard";
import BoardSwipe from "./BoardSwipe";
import Video from "./Video";
import BoardGradient from "./BoardGradient";
import AnimatedSimple from "./AnimatedSimple";
import AnimatedLottieLine from "./AnimatedLottieLine";
import AnimatedLottieSimple from "./AnimatedLottieSimple";
import Continuous from "./Continuous";
import Parallax from "./Parallax";

export const exampleOnBoarding = {
  Carousel,
  CarouselSCale,
  CarouselVideo,
  FullSwipe,
  SwipeCard,
  BoardSwipe,
  Video,
  BoardGradient,
  AnimatedSimple,
  AnimatedLottieLine,
  AnimatedLottieSimple,
  Continuous,
  Parallax,
};

export default createExampleList(exampleOnBoarding, "OnBoarding");
