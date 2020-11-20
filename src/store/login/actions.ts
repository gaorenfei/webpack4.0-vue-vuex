// import {
//   resetRouter
// } from "@/routers";
import types from "./type";

export default {
  go_login({ commit }, name:any) {
    commit(types.LOGIN, name);
  },
  go_logout({ commit }, out:any) {
    return new Promise(resolve => {
      commit(types.CLEARL_LOGIN, out);
      resolve(true);
    });
  }
};
