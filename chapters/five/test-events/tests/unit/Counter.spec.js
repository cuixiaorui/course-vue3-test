import Counter from "@/components/Counter.vue";
import { shallowMount } from "@vue/test-utils";

describe("native event", () => {
  test("click event", () => {
    const onClose = jest.fn();
    const wrapper = shallowMount(Counter, {
      props: {
        onClose,
      },
    });
    wrapper.get("button").trigger("click");
    expect(onClose).toHaveBeenCalled();
  });

  test("custom event", () => {
    const wrapper = shallowMount(Counter, {});

    wrapper.get("button").trigger("click");

    console.log(wrapper.emitted());
    // 检测调用了几次
    expect(wrapper.emitted("add")).toHaveLength(1);
    // 检测调用时的参数是什么
    expect(wrapper.emitted("add")).toEqual([[1]]);
    // 检测应该是没有被调用的
    expect(wrapper.emitted("plus")).toBeFalsy();
  });

  test("custom event by self ", () => {
    const wrapper = shallowMount(Counter, {});
    // emit 也可以作为一个组件的 input
    wrapper.vm.$emit("ceshi");
    expect(wrapper.emitted("ceshi")).toHaveLength(1);
  });
});
