import { createStore } from "vuex";
import axios from "axios";

export const storeOptions = {
  state: {
    count: 0,
    photos: []
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    updatePhotos(state, payload) {
      console.log(payload);
      state.photos = payload;
    }
  },
  actions: {
    async getPhotos({ commit }) {
      const res = await axios.get("/getPhotos");
      commit("updatePhotos", res.data);
    }
  },
  modules: {}
};

export default createStore(storeOptions);
