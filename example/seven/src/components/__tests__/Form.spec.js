import Form from "../Form.vue";
import { mount } from "@vue/test-utils";
describe("Form", () => {
  test("sets the value", async () => {
    const wrapper = mount(Form);
    const input = wrapper.find("input");

    await input.setValue("my@mail.com");

    expect(input.element.value).toBe("my@mail.com");
  });

  test("trigger", async () => {
    const wrapper = mount(Form);

    // trigger the element
    await wrapper.find("button").trigger("click");

    // assert some action has been performed, like an emitted event.
    expect(wrapper.emitted()).toHaveProperty("submit");
  });

  test("emits the input to its parent", async () => {
    const wrapper = mount(Form);

    // set the value
    await wrapper.find("input").setValue("my@mail.com");

    // trigger the element
    await wrapper.find("button").trigger("click");

    // assert the `submit` event is emitted,
    expect(wrapper.emitted("submit")[0][0]).toBe("my@mail.com");
  });
});
