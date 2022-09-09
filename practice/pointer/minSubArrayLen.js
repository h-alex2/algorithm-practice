// Sliding Window - minSubArrayLen
// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
// Examples:
export default function minSubArrayLen(arr, num) {
  let left = 1;
  let length = helper(arr);


  function helper(arr) {
    if (arr[0] >= num) {
      return 1;
    }

    const sum = arr[0];

    for (let right = 1; right < arr.length; right++) {
      if (sum < num) {
        sum += arr[right];
      }

      if (num <= sum) {

        return length = (!length || right + 1 < length)
          ? right + 1
          : length;
      }
    }

    return 0;
  }

  while (left < arr.length) {
    const a = helper(arr.slice(left));
    length = (a < length && a) ? a : length;
    left++;
  }

  return length;
}
