// import {
//   resetRouter
// } from "@/routers";
import types from "@/store/login/type.ts";

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
