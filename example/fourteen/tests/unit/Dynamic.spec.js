import Dynamic from "@/components/Dynamic.vue";
import { shallowMount } from "@vue/test-utils";

describe("Dynamic", () => {
  test("dynamic snapshot default ", () => {
    const wrapper = shallowMount(Dynamic, {});

    expect(wrapper.element).toMatchSnapshot();
  });
  test("dynamic snapshot true", () => {
    const wrapper = shallowMount(Dynamic, {
      props: {
        showB: true
      }
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
