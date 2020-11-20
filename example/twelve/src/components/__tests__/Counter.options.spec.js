import Counter from "../Counter.options.vue";
import { mount } from "@vue/test-utils";
describe("Counter.options.vue", () => {
  test("should count eq 2 when click button", async () => {
    const store = {
      state: {
        count: 0
      },
      commit: jest.fn()
    };

    const wrapper = mount(Counter, {
      global: {
        mocks: {
          $store: store
        }
      }
    });

    await wrapper.get("button").trigger("click");

    expect(store.commit).toHaveBeenCalled();
  });
});
