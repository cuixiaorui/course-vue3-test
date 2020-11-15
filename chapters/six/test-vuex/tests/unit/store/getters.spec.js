import getters from "@/store/getters.js";

describe("getters", () => {
  test("getUsers", () => {
    const users = [1, 2, 3, 4, 5];
    const state = {
      users
    };

    const result = getters.getUsers(state);
    expect(result).toEqual(users);
  });
});
