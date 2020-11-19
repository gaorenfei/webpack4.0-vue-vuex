// import {
//   resetRouter
// } from "@/routers";
import types from "./type";

export default {
  go_login({ commit }, name) {
    commit(types.LOGIN, name);
  },
  go_logout({ commit }, out) {
    return new Promise(resolve => {
      commit(types.CLEARL_LOGIN, out);
      resolve(true);
    });
  }
};
