import CustomRadio from "../CustomRadio.vue";
import Element3 from "element3";
import { mount } from "@vue/test-utils";
test("emits textarea value on click", async () => {
  // 必须要安装一下 element3
  const wrapper = mount(CustomRadio, {
    global: {
      plugins: [Element3]
    }
  });
  wrapper.findComponent({ name: "el-radio" }).setValue("true");
  await wrapper.get("button").trigger("click");
  expect(wrapper.emitted("submit")[0][0]).toEqual("true");
});
