import Home from "@/views/Home.vue";
import { shallowMount } from "@vue/test-utils";
import router from "@/router";

describe("Home.vue", () => {
  test("should to about ", () => {
    // 需要给 mock 一个假的  router
    // 创建假的 router
    jest.spyOn(router, "push");
    const wrapper = shallowMount(Home, {
      global: {
        plugins: [router]
      }
    });

    wrapper.get("button").trigger("click");
    expect(router.push).toHaveBeenCalledWith({ name: "About" });
  });
});
