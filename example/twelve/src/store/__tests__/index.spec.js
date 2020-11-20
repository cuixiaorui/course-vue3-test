import { createStore } from "vuex";
import { storeOptions } from "../index";
import { merge } from "lodash";

// 使用 jest.mock 来全局 mock axios 的逻辑
// jest.mock("axios", () => {
//   return {
//     // get: jest.fn(() => {
//     //     return Promise.resolve()

//     //   [1, 2];
//     // })
//     get: jest.fn().mockResolvedValue({ data: [1, 2] })
//   };
// });

function createVuexStore(initOptions = {}) {
  const options = merge({}, storeOptions, initOptions);
  return createStore(options);
}

describe("Store", () => {
  describe("split test", () => {
    describe("mutation", () => {
      test("increment", () => {
        const { mutations } = storeOptions;
        const { increment } = mutations;

        const state = {
          count: 0
        };

        increment(state);

        expect(state.count).toBe(1);
      });
    });
  });

  describe("store instance", () => {
    beforeEach(() => {
      jest.resetModules();
    });
    describe("mutation", () => {
      test("should count eq to 1", () => {
        const store = createVuexStore();

        store.commit("increment");

        expect(store.state.count).toBe(1);
      });

      test("should count eq to 1 v2", () => {
        const store = createVuexStore();

        store.commit("increment");

        expect(store.state.count).toBe(1);
      });

      test("should count eq to 1 v3", () => {
        // count -1
        const store = createVuexStore({
          state: {
            count: -1
          }
        });

        store.commit("increment");

        expect(store.state.count).toBe(0);
      });
    });

    describe("action", () => {
      test("getPhotos", async () => {
        // 使用 jest.doMock 来局部 mock axios 的逻辑
        // 注意 需要调用 jest.resetModule() 防止 module 被污染
        jest.doMock("axios", () => {
          return {
            get: jest.fn().mockResolvedValue({ data: [1, 2] })
          };
        });

        import("axios").then(async () => {
          const store = createVuexStore();

          await store.dispatch("getPhotos");

          // 验证什么
          // 1. 可以验证 commit 是否被调用
          // 2. 直接可以验证 state.photos
          expect(store.state.photos).toEqual([1, 2]);
        });
      });
    });
  });
});
