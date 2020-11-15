export default {
  // eslint-disable-next-line no-unused-vars
  increment(state, payload) {
    state.count++;
  },
  setName(state, payload) {
    state.name = payload.name;
  }
};
