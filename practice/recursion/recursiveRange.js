// * Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function

export default function recursiveRange(num) {
  if (typeof num !== "number") {
    return;
  }

  if (!num) {
    return num;
  }

  return num + recursiveRange(num - 1);
}
