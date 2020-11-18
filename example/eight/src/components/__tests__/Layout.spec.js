import Layout from "../Layout.vue";
import { mount } from "@vue/test-utils";

describe("Layout", () => {
  test("layout default slot", () => {
    const wrapper = mount(Layout, {
      slots: {
        default: "Main Content",
      },
    });

    expect(wrapper.html()).toContain("Main Content");
  });

  test("layout default slot", () => {
    const wrapper = mount(Layout, {
      slots: {
        default: "Main Content",
      },
    });

    expect(wrapper.find("main").text()).toContain("Main Content");
  });
});
