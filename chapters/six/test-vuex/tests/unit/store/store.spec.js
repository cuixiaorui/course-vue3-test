import { createStore } from "vuex";
import { storeOptions } from "@/store/index.js";
import { merge, cloneDeep } from "lodash";
import { flushPromises } from "@vue/test-utils";

describe("store", () => {
  describe("deepClone", () => {
    test("increment mutation", () => {
      const store = createStore(cloneDeep(storeOptions));
      console.log(store.state.count);
      store.commit("increase");
      expect(store.state.count).toBe(1);
    });

    test("increment mutation", () => {
      const store = createStore(cloneDeep(storeOptions));
      console.log(store.state);
      store.commit("increase");
      expect(store.state.count).toBe(1);
    });
  });

  describe("factory", () => {
    const createVuexStore = initialState => {
      console.log(storeOptions);
      // 通过 merge 来防止 storeOptions 数据被污染
      return createStore(merge(initialState, storeOptions));
    };
    test("increment mutation", () => {
      const store = createVuexStore({ state: { count: 0 } });
      console.log(store.state.count);
      store.commit("increase");
      expect(store.state.count).toBe(1);
    });

    test("increment mutation", () => {
      const store = createVuexStore({ state: { count: 0 } });
      console.log(store.state);
      store.commit("increase");
      expect(store.state.count).toBe(1);
    });
  });
});
