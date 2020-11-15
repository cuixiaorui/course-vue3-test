import { createStore } from "vuex";
import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";

export const storeOptions = {
  state: {
    count: 0,
    name
  },
  getters,
  mutations,
  actions
};

export default createStore(storeOptions);
