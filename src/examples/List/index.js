/**
 * Example List
 */

import createExampleList from "../createExampleList";
import SingleLineList from "./SingleLineList";
import TwoLineList from "./TwoLineList";
import ThreeLineList from "./ThreeLineList";
import ControlList from "./ControlList";
import ExpandList from "./ExpandList";
import StandardImageList from "./StandardImageList";
import MasoryImageList from "./MasoryImageList";
import QuiltedImageList from "./QuiltedImageList";
import WovenImageList from "./WovenImageList";

export const exampleList = {
  SingleLineList,
  TwoLineList,
  ThreeLineList,
  ControlList,
  ExpandList,
  StandardImageList,
  MasoryImageList,
  QuiltedImageList,
  WovenImageList
};

// create list example list
export default createExampleList(exampleList, "List");
