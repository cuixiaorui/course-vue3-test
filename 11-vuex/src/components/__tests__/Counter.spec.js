import Counter from "../Counter.vue";
import { mount } from "@vue/test-utils";
import { storeOptions } from "../../store";
import { cloneDeep } from "lodash";
import { createStore } from "vuex";

function createVuexStore() {
  return createStore(cloneDeep(storeOptions));
}

describe("Counter.vue", () => {
  describe("composition api", () => {
    test("should count eq 2 when click button ", async () => {
      const wrapper = mount(Counter, {
        global: {
          plugins: [createVuexStore()]
        }
      });

      await wrapper.get("button").trigger("click");

      expect(wrapper.text()).toContain("1");
    });

    test("should count eq 2 when click button v2 ", async () => {
      const wrapper = mount(Counter, {
        global: {
          plugins: [createVuexStore()]
        }
      });

      await wrapper.get("button").trigger("click");

      expect(wrapper.text()).toContain("1");
    });
  });
});
