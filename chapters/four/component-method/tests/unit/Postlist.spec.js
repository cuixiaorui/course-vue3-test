import { mount } from "@vue/test-utils";
import axios from "axios";
import flushPromises from "flush-promises";
import PostList from "@/components/PostList.vue";

const fakePostList = [
  { id: 1, title: "title1" },
  { id: 2, title: "title2" },
];

// Following lines tell Jest to mock any call to `axios.get`
// and to return `fakePostList` instead
jest.mock("axios", () => ({
  get: jest.fn(() => []),
}));

test("loads posts on button click", async () => {
  const wrapper = mount(PostList);

  await wrapper.get("button").trigger("click");

  // Let's assert that we've called axios.get the right amount of times and
  // with the right parameters.
  expect(axios.get).toHaveBeenCalledTimes(1);
  expect(axios.get).toHaveBeenCalledWith("/api/posts");

  // Wait until the DOM updates.
  await flushPromises();

  // Finally, we make sure we've rendered the content from the API.
  const posts = wrapper.findAll('[data-test="post"]');

  expect(posts).toHaveLength(2);
  expect(posts[0].text()).toContain("title1");
  expect(posts[1].text()).toContain("title2");
});
