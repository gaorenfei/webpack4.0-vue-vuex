import types from "./type";

export default {
  [types.LOGIN](state, account) {
    state.account = account;
  },
  [types.CLEARL_LOGIN](state, account) {
    state.account = account;
  },
};