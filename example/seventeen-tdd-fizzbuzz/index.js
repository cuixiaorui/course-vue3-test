function fizzBuzz(number) {
  if (isDivisible(15, number)) {
    return "fizzBuzz";
  }

  if (isDivisible(3, number)) {
    return "fizz";
  }

  if (isDivisible(5, number)) {
    return "buzz";
  }

  return number;
}

module.exports = fizzBuzz;


function isDivisible(dividend, number) {
  return number % dividend === 0;
}
