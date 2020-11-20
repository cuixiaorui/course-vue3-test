import CustomInput from "../CustomInput.vue";
import { mount } from "@vue/test-utils";
test("fills in the form", async () => {
  const wrapper = mount(CustomInput, {
    props: {
      label: "custom input",
    },
  });

  await wrapper.get("input[type=text]").setValue("text");
  expect(wrapper.emitted()).toHaveProperty("update:modelValue");
});
