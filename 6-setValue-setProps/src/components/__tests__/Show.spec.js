import { mount } from "@vue/test-utils";
import Show from "../Show.vue";

test("renders a greeting when show is true", async () => {
  const wrapper = mount(Show);

  expect(wrapper.text()).toContain("Hello");

  await wrapper.setProps({
    show: false,
  });

  expect(wrapper.text()).not.toContain("Hello");
});
