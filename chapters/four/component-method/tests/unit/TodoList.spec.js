// 如何 mock 处理远程api 调用
import TodoList from "@/components/TodoList.vue";
import { shallowMount } from "@vue/test-utils";
import * as http from "@/http.js";
import { fetchData } from "@/api/api.js";
import flushPromises from "flush-promises";
import { nextTick } from "vue";
// 全局mock
jest.mock("@/api/api.js", () => {
  return {
    fetchData: jest.fn(() => Promise.resolve(1)),
  };
});

beforeEach(() => {
  jest.resetModules();
});

describe("Mocking module", () => {
  //   test("with jest.spyOn ", async () => {
  //     jest.spyOn(http, "axios");
  //     http.axios.mockImplementation(() => Promise.resolve([{ name: "123" }]));
  //     const res = await http.axios();
  //     expect(res).toEqual([{ name: "123" }]);
  //   });

  test("with jest.mock", async () => {
    const res = await fetchData();
    console.log(res);
  });
  beforeEach(() => {
    jest.resetModules();
  });

  test("with jest.doMock", async () => {
    jest.doMock("@/api/api.js", () => {
      return {
        fetchData: () => Promise.resolve(5),
      };
    });
    return import("@/api/api.js").then(async (api) => {
      const res = await api.fetchData();
      console.log(res);
    });
  });

  test("with jest.doMock", async () => {
    jest.doMock("@/api/api.js", () => {
      return {
        fetchData: () => Promise.resolve(3),
      };
    });
    return import("@/api/api.js").then(async (api) => {
      const res = await api.fetchData();
      console.log(res);
    });
  });

  describe("async code", () => {
    test.only("should ", async () => {
      //   jest.doMock("@/http.js", () => {
      //     return {
      //       axios: () => Promise.resolve([{ name: "1" }]),
      //     };
      //   });
      //   return import("@/http.js").then(async (http) => {
      //     const wrapper = shallowMount(TodoList);
      //     await flushPromises()
      //     // const liList = wrapper.get("[data-testid='li']");
      //     // console.log(liList);
      //   });

      //   jest.useFakeTimers()
      //   const wrapper = shallowMount(TodoList);
      //   jest.runTimersToTime(1000)
      //   await flushPromises();

      const wrapper = shallowMount(TodoList);
        // const liList = wrapper.get("[data-testid='li']");
      await flushPromises();
      console.log(wrapper.html())
    //   console.log(wrapper.html())

      //   const liList = wrapper.get("[data-testid='li']");
      //   console.log(liList)
      //   console.log("123");
    });
  });
});
