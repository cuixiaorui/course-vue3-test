import Static from "@/components/Static.vue";
import { shallowMount } from "@vue/test-utils";

describe("static", () => {
  test("snapshot ", () => {
    const wrapper = shallowMount(Static);
    expect(wrapper.element).toMatchSnapshot();
  });
});
