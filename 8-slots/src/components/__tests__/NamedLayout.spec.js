import NamedLayout from "../NamedLayout.vue";
import { mount } from "@vue/test-utils";
import { h } from "vue";
import Header from "../Header.vue";

test("layout full page layout v1", () => {
  const wrapper = mount(NamedLayout, {
    slots: {
      header: "<div>Header</div>",
      main: "<div>Main Content</div>",
      footer: "<div>Footer</div>",
    },
  });

  expect(wrapper.html()).toContain("<div>Header</div>");
  expect(wrapper.html()).toContain("<div>Main Content</div>");
  expect(wrapper.html()).toContain("<div>Footer</div>");
});

test("layout full page layout v2", () => {
  const wrapper = mount(NamedLayout, {
    slots: {
      header: Header,
      main: h("div", "Main Content"),
      footer: "<div>Footer</div>",
    },
  });

  expect(wrapper.html()).toContain("<div>Header</div>");
  expect(wrapper.html()).toContain("<div>Main Content</div>");
  expect(wrapper.html()).toContain("<div>Footer</div>");
});
