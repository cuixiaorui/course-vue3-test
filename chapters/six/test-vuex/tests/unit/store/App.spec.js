import App from "@/components/App.vue";
import { storeOptions } from "@/store/index.js";
import { cloneDeep } from "lodash";
import { createStore } from "vuex";
import { shallowMount } from "@vue/test-utils";

describe("store for components", () => {
  test("App", async () => {
    // 可以自己创建一个假的 store
    const store = createStore(cloneDeep(storeOptions));
    const wrapper = shallowMount(App, {
      global: {
        plugins: [store]
      }
    });
    await wrapper.get("button").trigger("click");
    expect(wrapper.text()).toContain("Count: 1");
  });
});
