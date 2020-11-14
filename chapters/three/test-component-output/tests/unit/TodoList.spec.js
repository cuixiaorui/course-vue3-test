import TodoList from "@/components/TodoList.vue";
import { shallowMount } from "@vue/test-utils";

describe("TodoList", () => {
  it("应该显示 todolist", () => {
    const wrapper = shallowMount(TodoList);

    expect(wrapper.text()).toContain("todolist");
  });

  it("通过 data-testid 测试 title", () => {
    const wrapper = shallowMount(TodoList);
    const titleDiv = wrapper.get("[data-testid='title']");
    expect(titleDiv.text()).toBe("todolist");
  });

  it("可以通过 title 设置 title", () => {
    const wrapper = shallowMount(TodoList, {
      props: {
        title: "title"
      }
    });
    const titleDiv = wrapper.get("[data-testid='title']");
    expect(titleDiv.text()).toBe("title");
  });

  it("可以通过 props 的 src，设置 img 的src", () => {
    const src = "github.com/hug-sun/element4";
    const wrapper = shallowMount(TodoList, {
      props: {
        src
      }
    });

    const img = wrapper.get("img");
    // expect(img.attributes("src") === "github.com/hug-sun/element3");
    // expect(img.attributes("src") === "1github.com/hug-sun/element3").toBe(true);
    expect(img.attributes("src")).toBe(src);

    // expect(img.attributes())
  });

  it("应该渲染出3个item", () => {
    const wrapper = shallowMount(TodoList);
    const items = wrapper.findAllComponents({ name: "TodoItem" });

    // item 的数量
    // 获取到 item
    expect(items.length).toBe(3);
  });

  it("应该有 disabled classname", () => {
    const wrapper = shallowMount(TodoList, {
      props: {
        disabled: true
      }
    });
    const title = wrapper.get("[data-testid='title']");
    expect(title.classes()).toContain("disabled");
  });

  it("color 应该是 red", () => {
    const wrapper = shallowMount(TodoList, {
      props: {
        color: "red"
      }
    });

    const heiheiWrapper = wrapper.get("[data-testid='heihei']");
    expect(heiheiWrapper.element.style.color).toBe("red");

    // expect(heiheiWrapper);
  });
});
