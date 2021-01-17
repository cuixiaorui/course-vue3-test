import App from "./App.vue";
import { h, render } from "vue";

const MOUNT_COMPONENT_REF = "el_component";
const COMPONENT_CONTAINER_SYMBOL = Symbol("el_component_container");

export function createComponent(Component, props, children) {
  const vnode = h(Component, { ...props, ref: MOUNT_COMPONENT_REF }, children);
  const container = document.createElement("div");
  vnode[COMPONENT_CONTAINER_SYMBOL] = container;
  render(vnode, container);
  return vnode.component;
}

describe("App.vue", () => {
  test("小试牛刀", () => {
    console.log(App);
    const component = createComponent(App);
    console.log(component.ctx.$el.innerHTML);
    expect(component.ctx.$el.innerHTML).toBe("App")
    // 并不是一个组件的实例
  });
});
