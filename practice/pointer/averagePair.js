export default function countUniqueValues(arr, num) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if ((arr[left] + arr[right]) / 2 === num) {
      return true;
    }

    if (right === left + 1) {
      left++;
      right = arr.length - 1;
    } else {
      right--;
    }
  }

  return false;
}
