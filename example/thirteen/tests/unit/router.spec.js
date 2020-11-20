import Component from "@/components/Component.vue";
import { mount } from "@vue/test-utils";
describe("component handles routing correctly", () => {
  it("allows authenticated user to edit a post", async () => {
    const mockRoute = {
      params: {
        id: 1
      }
    };
    const mockRouter = {
      push: jest.fn()
    };
    const wrapper = mount(Component, {
      props: {
        authenticated: true
      },
      global: {
        mocks: {
          $route: mockRoute,
          $router: mockRouter
        }
      }
    });

    await wrapper.find("button").trigger("click");

    expect(mockRouter.push).toHaveBeenCalledWith("/posts/1/edit");
  });

  it("redirect an unauthenticated user to 404", async () => {
    const mockRoute = {
      params: {
        id: 1
      }
    };
    const mockRouter = {
      push: jest.fn()
    };
    const wrapper = mount(Component, {
      props: {
        authenticated: false
      },
      global: {
        mocks: {
          $route: mockRoute,
          $router: mockRouter
        }
      }
    });

    await wrapper.find("button").trigger("click");

    expect(mockRouter.push).toHaveBeenCalledWith("/404");
  });
});
