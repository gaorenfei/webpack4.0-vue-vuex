import actions from "@/store/login/actions.ts";
import getters from "@/store/login/getters.ts";
import mutations from "@/store/login/mutations.ts";
import state from "@/store/login/state.ts";
import type from "@/store/login/type.ts";

export default {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
  type
};