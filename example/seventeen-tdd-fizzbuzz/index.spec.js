const fizzBuzz = require("./index");

// 规格
// 1 1
// 3 fizz
// 5 buzz
// 15 fizzbuzz

describe("Fizzbuzz", () => {
  //   test("init", () => {
  //     expect(true).toBe(false);
  //   });

  describe("应该返回对应的数字", () => {
    test("当输入为1 的时候，应该输出 1", () => {
      expect(fizzBuzz(1)).toBe(1);
    });

    test("当输入为2 的时候，应该输出 2", () => {
      expect(fizzBuzz(2)).toBe(2);
    });
  });

  describe("应该返回 fizz", () => {
    test("当输入为 3 的时候，应该输出 fizz", () => {
      expect(fizzBuzz(3)).toBe("fizz");
    });

    test("当输入为 6 的时候，应该输出 fizz", () => {
      expect(fizzBuzz(6)).toBe("fizz");
    });
  });


  describe('应该返回 buzz', () => {
    test('当输入为 5 的时候，应该输出 buzz', () => {
        expect(fizzBuzz(5)).toBe("buzz")
    });

    test('当输入为 10 的时候，应该输出 buzz', () => {
        expect(fizzBuzz(10)).toBe("buzz")
    });
  })


  describe('应该返回 fizzBuzz', () => {
      test('当输入为 15 的时候，应该输出 fizzBuzz', () => {
          expect(fizzBuzz(15)).toBe("fizzBuzz")
      });

      test('当输入为 30 的时候，应该输出 fizzBuzz', () => {
          expect(fizzBuzz(30)).toBe("fizzBuzz")
      });
      
  });
});
