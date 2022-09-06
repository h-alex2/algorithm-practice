// * Binary Search Exercise
// ? Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

// This algorithm should be more efficient than linearSearch - you can read how to implement it here - https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search and here - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/

// export default function binarySearch(arr, value) {
//   let left = 0;
//   let right = arr.length - 1;
//   let middle = Math.ceil(arr.length / 2);

//   while (left < right) {
//     if (arr[middle] < value) {
//       left = middle;
//       middle = Math.ceil(right / 2);
//     } else {
//       right = middle;
//       middle = Math.ceil(right / 2);
//     }

//     if (arr[left] === value) {
//       return left;
//     }

//     if (arr[right] === value) {
//       return right;
//     }

//     left++;
//     right--;
//   }

//   return -1;
// }

// * solution

export default function binarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== elem && start <= end) {
    elem < arr[middle]
      ? end = middle - 1
      : start = middle + 1;

    middle = Math.floor((start + end) / 2);
  }

  return arr[middle] === elem ? middle : -1;
}
