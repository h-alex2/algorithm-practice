// Write a function called power which accepts a base and an exponent.
// The function should return the power of the base to the exponent.
// This function should mimic the functionality of Math.pow()
// - do not worry about negative bases and exponents.

export default function power(num1, num2) {
  if (num2 === 0) {
    return 1;
  }

  // if (num2 % 1 && num2 < 0) {
  //   return num1 / power(num1, num2 + 1);
  // }

  return num1 * power(num1, num2 - 1);
}

// 시간 된다면 num2가 음수일 경우나 제곱근 구하는 경우도 작성해보기