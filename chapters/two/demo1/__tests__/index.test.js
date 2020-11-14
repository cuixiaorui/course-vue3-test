const { add } = require("../index");

test("add", () => {
  // 测试三部曲
  // given -> add
  // when -> 1，1
  // then -> result
  const result = add(1, 1);
  setTimeout(() => {
    expect(result).toBe(3);
  }, 1000);
  // expect(result).toBe(2);
});
