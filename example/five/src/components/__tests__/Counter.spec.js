import Counter from "../Counter.vue";
import { mount, flushPromises } from "@vue/test-utils";

describe("Counter.vue", () => {
  test("emits an event when clicked with v1", async () => {
    const wrapper = mount(Counter);

    await wrapper.find("button").trigger("click");

    expect(wrapper.emitted()).toHaveProperty("increment");
  });

  test("emits an event when clicked with v2", async () => {
    const wrapper = mount(Counter);

    await wrapper.find("button").trigger("click");
    await wrapper.find("button").trigger("click");

    // expect(wrapper.emitted("increment")[0][0]).toBe(1);
    // expect(wrapper.emitted("increment")[1][0]).toBe(2);
  });

  test("emits an event when clicked with v3", async () => {
    const wrapper = mount(Counter);

    await wrapper.find("button").trigger("click");
    await wrapper.find("button").trigger("click");

    console.log(wrapper.emitted("increment"));
    expect(wrapper.emitted("increment")[0][0]).toEqual({
      count: 1,
      isEven: false
    });

    expect(wrapper.emitted("increment")[1][0]).toEqual({
      count: 2,
      isEven: true
    });
  });

  test("trigger with args", async () => {
    const wrapper = mount(Counter);

    await wrapper.find("button").trigger("click", { code: 1 });

    expect(wrapper.emitted("increment")[0][0]).toBe(1);
  });

  describe("emit input", () => {
    test.only("child to parent event", async () => {
      const wrapper = mount(Counter);
      // 找到 Child
      const Child = wrapper.findComponent({ name: "Child" });

      Child.vm.$emit("to-parent");
      await flushPromises();

      // 验证
      expect(wrapper.text()).toContain("true");
    });
  });
});
