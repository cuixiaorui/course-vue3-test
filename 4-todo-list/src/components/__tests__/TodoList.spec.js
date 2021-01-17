import { shallowMount } from "@vue/test-utils";
import TodoList from "../TodoList.vue";

describe("TodoList.vue", () => {
  it("renders a todo", () => {
    // given
    const wrapper = shallowMount(TodoList);

    // when
    const todo = wrapper.get("[data-test=todo]");

    // then
    expect(todo.text()).toBe("Learn Vue.js 3");
  });

  it("creates a todo", async () => {
    const wrapper = shallowMount(TodoList);

    //when
    const input = wrapper.get("[data-test=newTodo]");
    // 前置条件断言
    expect(wrapper.findAll("[data-test=todo]").length).toBe(1)
    // setValue
    await input.setValue("item1");
    // -> submit
    // trigger
    const form = wrapper.get("[data-test=form]");
    await form.trigger("submit");

    // 验证长度,检测是否真的添加进去了
    // findAll
    const todos = wrapper.findAll("[data-test=todo]");
    expect(todos.length).toBe(2);
    // 布尔断言
    // expect(todos.length === 2).toBe(true)
  });

  it("completes a todo", async () => {
    const wrapper = shallowMount(TodoList);
    const checkbox = wrapper.get("[data-test=checkbox]");
    await checkbox.setValue();
    // 找到对应的 item
    const todo = wrapper.get("[data-test=todo]")
    // expect(todo.classes("completed")).toBeTruthy()
    expect(todo.classes()).toContain("completed")
  });
});
