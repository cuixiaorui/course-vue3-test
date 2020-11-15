import mutations from "@/store/mutations.js";

describe("mutations", () => {
  test("应该增加", () => {
    // mock state
    // mock 假的 payload
    // 调用 mutations 的方法
    // 验证 state
    const state = {
      count: 1
    };
    mutations.increment(state);
    expect(state.count).toBe(2);
  });

  test("setName", () => {
    const state = {
      name: "xiaohong"
    };

    const payload = {
      name: "xiaohei"
    };
    mutations.setName(state, payload);
    expect(state.name).toBe("xiaohei");
  });
});
