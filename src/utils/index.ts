import * as envs from "./util.env";
import * as sites from "./util.site";
import * as storages from "./util.storage";
import * as commons from "./util.common";
export const util = {
  ...envs,
  ...sites,
  ...storages,
  ...commons
};
