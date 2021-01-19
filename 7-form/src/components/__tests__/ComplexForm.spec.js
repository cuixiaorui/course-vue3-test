import ComplexForm from "../ComplexForm.vue";
import { mount } from "@vue/test-utils";

describe("ComplexForm", () => {
  test("submits a form", async () => {
    const wrapper = mount(ComplexForm);

    const email = "name@mail.com";
    const description = "Lorem ipsum dolor sit amet";
    const city = "moscow";

    await wrapper.find("input[type=email]").setValue(email);
    await wrapper.find("textarea").setValue(description);
    await wrapper.find("select").setValue(city);
    await wrapper.find("input[type=checkbox]").setValue();
    await wrapper.find("input[type=radio][value=monthly]").setValue();

    // 可以带修饰符
    // 如果想用原生的 form 提交的话,我们需要给一个 attachTo 到 document 上
    await wrapper.find("form").trigger("submit.prevent");

    expect(wrapper.emitted("submit")[0][0]).toEqual({
      email,
      description,
      city,
      subscribe: true,
      interval: "monthly",
    });
  });
});
