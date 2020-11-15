import About from "@/views/About.vue";
import { shallowMount } from "@vue/test-utils";

describe("About.vue", () => {
  test("should to home ", () => {
    const mockRouter = {
      push: jest.fn()
    };

    const wrapper = shallowMount(About, {
      global: {
        mocks: {
          $router: mockRouter
        }
      }
    });

    wrapper.get("button").trigger("click");
    expect(mockRouter.push).toHaveBeenCalledWith({ name: "Home" });
  });
});
