import HelloWorld from "@/components/HelloWorld.vue";
import { shallowMount } from "@vue/test-utils";
import { nextTick } from "vue";

describe("HelloWorld", () => {
  test("should have handleClick function", () => {
    const wrapper = shallowMount(HelloWorld);
    expect(wrapper.vm.HandleClick()).toBe("hello world");
  });

  describe("Time", () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });

    test("for timeout", async () => {
      const wrapper = shallowMount(HelloWorld);
      wrapper.vm.start();
      jest.runTimersToTime(100);
      // vue 更新 view 是异步的，所以需要在 nextTick 之后来验证
      await nextTick();
      expect(wrapper.element.style.width).toBe("1%");
      jest.runTimersToTime(900);
      await nextTick();
      expect(wrapper.element.style.width).toBe("10%");
    });

    test("for global function", () => {
      //   jest.spyOn(window, "clearInterval");
      //   expect(window.clearInterval).toHaveBeenCalled();
      //   expect(window.clearInterval).toHaveBeenCalledWith(1);
      const wrapper = shallowMount(HelloWorld);
      // mock setInterval 返回的值
      setInterval.mockReturnValue(1);
      jest.spyOn(window, "clearInterval");
      wrapper.vm.start();
      wrapper.vm.close();
      expect(window.clearInterval).toHaveBeenCalledWith(1);
    });
  });

  describe("for vue prototype", () => {
    const $http = jest.fn();
    const wrapper = shallowMount(HelloWorld, {
      global: {
        mocks: {
          $http,
        },
      },
    });

    const globalPropertyBtn = wrapper.get("[data-testid='globalProperty']");
    globalPropertyBtn.trigger("click");
    expect($http).toHaveBeenCalled();
    expect($http).toHaveBeenCalledWith("123");
  });
});
