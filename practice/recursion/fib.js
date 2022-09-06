// * Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

// export default function fib(num) {
//   if (num <= 1) {
//     return num;
//   }

//   let count = num;

//   function helper(num1, num2) {
//     count--;
//     if (!count) {
//       return num2;
//     }

//     return helper(num2, num1 + num2);
//   }

//   return helper(0, 1);
// }

// * solution
export default function fib(n) {
  if (n <= 2) {
    return 1;
  }

  return fib(n - 1) + fib(n - 2); // wow.. 

}