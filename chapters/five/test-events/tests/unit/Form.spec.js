import Form from "@/components/Form.vue";
import { shallowMount } from "@vue/test-utils";

describe("Form", () => {
  test("input ", async () => {
    const wrapper = shallowMount(Form);
    const input = wrapper.get("[data-test='input']");
    await input.setValue("123");
    expect(wrapper.text()).toContain("123");
  });

  test("radio", async () => {
    // 选择 radio
    const wrapper = shallowMount(Form);
    // input 类型为 radio 值为 monthly
    await wrapper.get("input[type=radio][value=monthly]").setValue();
    console.log(wrapper.html());
  });

  test.only("objectContaining", () => {
    const obj = {
      x: 1,
      y: 2,
      z: 3,
    };

    // 检测一个对象中是否含有部分数据
    expect(obj).toEqual(expect.objectContaining({ x: 1, y: 2 }));
  });
});
