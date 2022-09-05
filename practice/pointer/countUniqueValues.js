export default function countUniqueValues(arr) {
  if (!arr.length) {
    return 0;
  }
  const sortArr = arr.sort();
  let i = 0;
  for (let j = 1; j < sortArr.length; j++) {
    if (sortArr[i] !== sortArr[j]) {
      i++;
      sortArr[i] = sortArr[j];
    }
  }

  return i + 1;

  // if (!arr.length) {
  //   return 0;
  // }

  // let frequencyCounter = {};
  // let count = 0;
  // let left = 0;
  // let right = arr.length - 1;

  // while (left < right) {
  //   frequencyCounter[arr[left]] = (frequencyCounter[arr[left]] || 0) + 1;
  //   frequencyCounter[arr[right]] = (frequencyCounter[arr[right]] || 0) + 1;
  //   left++;
  //   right--;
  // }

  // for (const key in frequencyCounter) {
  //   count++;
  // }

  // return count;
}
