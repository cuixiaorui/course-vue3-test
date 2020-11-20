import DateComponent from "@/components/Date.vue";
import { shallowMount } from "@vue/test-utils";

describe("Date", () => {
  test("snapshot ", () => {
    jest.spyOn(Date.prototype, "getTime");
    Date.prototype.getTime.mockImplementationOnce(() => 456);
    const wrapper = shallowMount(DateComponent);

    expect(wrapper.element).toMatchSnapshot();
  });
});
