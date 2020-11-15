import Parent from "@/components/input/Parent.vue";
import { mount } from "@vue/test-utils";

describe("Parent", () => {
  test("input ", () => {
    const wrapper = mount(Parent);
    console.log(wrapper.html())
    // 先找到 child
    const child = wrapper.findComponent({ name: "Child" });
    console.log(child.text())
    child.vm.$emit("close");
    // log
  });
});
