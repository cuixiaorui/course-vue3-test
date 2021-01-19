import { mount } from "@vue/test-utils";
import Password from "../Password.vue";

describe("Password.vue", () => {
  test("renders an error if length is too short", async () => {
    const minLength = 10;
    const wrapper = mount(Password, {
      props: {
        minLength,
      },
    });

    // 那么怎么设置 password ?
    await wrapper.get("input[type=input]").setValue("ceshi");
    expect(wrapper.text()).toBe(
      `Password must be at least ${minLength} characters.`
    );
  });

  test("renders an error if length is too short with change data", () => {
    const minLength = 10;
    const wrapper = mount(Password, {
      props: {
        minLength,
      },
      data(){
          return {
              password: "ceshi"
          }
      }
    });

    expect(wrapper.text()).toBe(
      `Password must be at least ${minLength} characters.`
    );
  });
});
