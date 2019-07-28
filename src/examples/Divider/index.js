/**
 * Example Divider
 */

import createExampleList from "../createExampleList";
import FullDivider from "./FullDivider";
import CartDivider from "./CartDivider";
import InboxDivider from "./InboxDivider";
import InsetDivider from "./InsetDivider";
import MiddleDivider from "./MiddleDivider";
import RecipesDivider from "./RecipesDivider";
import SettingDivider from "./SettingDivider";
import SubheaderDivider from "./SubheaderDivider";
import ProductDetailDivider from "./ProductDetailDivider";

export const exampleDivider = {
  FullDivider,
  CartDivider,
  InboxDivider,
  InsetDivider,
  MiddleDivider,
  RecipesDivider,
  SettingDivider,
  SubheaderDivider,
  ProductDetailDivider
};

// create list example divider
export default createExampleList(exampleDivider, "Divider");
