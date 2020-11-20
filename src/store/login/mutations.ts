import types from "./type";

export default {
  [types.LOGIN](state:any, account:any) {
    state.account = account;
  },
  [types.CLEARL_LOGIN](state:any, account:any) {
    state.account = account;
  },
};