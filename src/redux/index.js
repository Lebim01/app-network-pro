/** @format */

import { persistCombineReducers } from "redux-persist";
import storage from "redux-persist/es/storage";

// You have to import every reducers and combine them.
import { reducer as ProfileRedux } from "./ProfileRedux";

const config = {
  key: "root",
  storage,
  blacklist: ["netInfo", "toast", "nav", "layouts", "payment", "sideMenu"],
};

export default persistCombineReducers(config, {
  profile: ProfileRedux
})