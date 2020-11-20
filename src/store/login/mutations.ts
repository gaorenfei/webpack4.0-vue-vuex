import types from "@/store/login/type.ts";

export default {
  [types.LOGIN](state:any, account:any) {
    state.account = account;
  },
  [types.CLEARL_LOGIN](state:any, account:any) {
    state.account = account;
  },
};