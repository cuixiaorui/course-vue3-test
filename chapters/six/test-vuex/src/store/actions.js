import axios from "axios";

export default {
  async fetchList({ commit }, payload) {
    const { id } = payload;
    const res = await axios.get(`/getList/id=${id}`);
    commit("initList", res.data);
  }
};
