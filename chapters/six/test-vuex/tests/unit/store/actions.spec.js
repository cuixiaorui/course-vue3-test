import actions from "@/store/actions.js";
import axios from "axios";
import flushPromises from "flush-promises";

jest.mock("axios");

describe("actions", () => {
  test("fetchList", async () => {
    const commit = jest.fn();
    const context = {
      commit
    };

    const payload = {
      id: 1
    };

    // console.log(axios.get);
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: [1, 2, 3] })
    );

    actions.fetchList(context, payload);
    // 可以使用 flushPromises 让所有的 promise 都通过
    await flushPromises();
    expect(commit).toHaveBeenCalledWith("initList", [1, 2, 3]);
  });
});
