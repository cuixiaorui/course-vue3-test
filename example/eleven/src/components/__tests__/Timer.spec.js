import { mount, flushPromises } from "@vue/test-utils";
import Timer from "../Timer.vue";

describe("Timer.vue", () => {
  it("test timer", async () => {
    jest.useFakeTimers();
    const wrapper = mount(Timer);
    jest.runTimersToTime(100);
    await flushPromises();
    expect(wrapper.get(".progress").element.style.width).toBe("1%");
    jest.runTimersToTime(900);
    await flushPromises();
    expect(wrapper.get(".progress").element.style.width).toBe("10%");
  });

  it("by localStorage", async () => {
    jest.useFakeTimers();
    const wrapper = mount(Timer);
    localStorage.getItem = jest.fn(() => 10);

    jest.runTimersToTime(100);
    await flushPromises();
    expect(wrapper.get(".progress").element.style.width).toBe("11%");
    jest.runTimersToTime(900);
    await flushPromises();
    expect(wrapper.get(".progress").element.style.width).toBe("20%");
  });
});
