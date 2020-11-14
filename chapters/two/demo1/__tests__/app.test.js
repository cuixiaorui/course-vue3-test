import App from "../App.vue";
import { mount } from "@vue/test-utils";

describe("App.vue", () => {
  test("test name", () => {
    // vtu - vue - test- utils
    // const app = createApp;
    const wrapper = mount(App);
    console.log(wrapper.text());
  });

  test("should ", () => {});
});
