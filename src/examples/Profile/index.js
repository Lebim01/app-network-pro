/**
 * Example Profile
 */

import createExampleList from "../createExampleList";
import Profile1 from "./Profile1";
import Profile2 from "./Profile2";

export const exampleProfile = {
  Profile1,
  Profile2
};

// create list example profile
export default createExampleList(exampleProfile, "Profile");
