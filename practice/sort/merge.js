// 합병 정렬에는 예외 케이스가 없다.
// best, average, worst : O(n log n)
// 합병 알고리즘 : O(n)
// 공간 복잡도 : 0(n)


function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;

  while(i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Marh.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

[1, 10, 50], [2, 14, 99, 100]

// 길이가 0 또는 1인 배열이 될 때 까지 나눈다.
// 다시 처음 길이가 되도록 합친다.