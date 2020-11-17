const { add, setName } = require("../index");

// 如何写测试
describe("Index.js", () => {
  describe("add", () => {
    test("add(1,1) 应该等于 2", () => {
      // given
      // 准备测试数据
      const a = 1;
      const b = 1;
      // when
      // 触发测试动作
      const result = add(a, b);
      // result 是不是等于 2
      // jest 匹配器
      // then
      // 断言
      expect(result).toBe(2);
    });

    test("add(3,1) 应该等于 4", () => {
      // given
      // 准备测试数据
      const a = 3;
      const b = 1;
      // when
      // 触发测试动作
      const result = add(a, b);
      // result 是不是等于 4
      // jest 匹配器
      // then
      // 断言
      expect(result).toBe(4);
    });

    test("add 异步假测试", () => {
      // 异步的情况下 假测试是十分常见的

      // given
      // 准备测试数据
      const a = 3;
      const b = 1;
      // when
      // 触发测试动作
      const result = add(a, b);
      // result 是不是等于 4
      // jest 匹配器
      // then
      // 断言
      // 异步操作
      setTimeout(() => {
        expect(result).toBe(8);
      }, 0);
    });
  });

  describe("假测试", () => {
    test("不写 expect ", () => {
      setName();
    });

    test("异步假测试", () => {
      // 异步的情况下 假测试是十分常见的
      // given
      // 准备测试数据
      const a = 3;
      const b = 1;
      // when
      // 触发测试动作
      const result = add(a, b);
      // result 是不是等于 4
      // jest 匹配器
      // then
      // 断言
      // 异步操作
      setTimeout(() => {
        expect(result).toBe(8);
      }, 0);
    });
  });
});
