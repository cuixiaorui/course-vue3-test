import ComponentWithSlots from "../ComponentWithSlots.vue";
import { mount } from "@vue/test-utils";

test("scoped slots", () => {
  const wrapper = mount(ComponentWithSlots, {
    slots: {
      scoped: `<template #scoped="params">
          Hello {{ params.msg }}
          </template>
        `,
    },
  });

  expect(wrapper.html()).toContain("Hello world");
});
