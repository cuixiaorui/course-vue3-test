import App from "@/App.vue";

import { mount } from "@vue/test-utils";

describe("App", () => {
  test("for router-link", () => {
    const wrapper = mount(App, {
      //   global: {
      //     stubs: {
      //       "router-link": true
      //       //   RouterLink: "<div></div>"
      //       //   Child: { template: `<div>heihei</div>` }
      //     }
      //   }
    });
    console.log(wrapper.html());

    // const routerLink = wrapper.findComponent(RouterLinkStub);
    // console.log(routerLink);
  });
});
