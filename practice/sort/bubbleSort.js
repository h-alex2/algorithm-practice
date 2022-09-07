// * 최적화 하기

export default function bubbleSort(arr) {
  const swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  };
  let noSwaps;

  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }

    if (noSwaps) break;
  }

  return arr;
}

// export default function bubbleSort(arr) {
//   const swap = (arr, index1, index2) => {
//     [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
//   };

//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       console.log(arr, arr[j], arr[j + 1]);
//       if (arr[j] > arr[j + 1]) {
//         // swap
//         // var temp = arr[j];
//         // arr[j] = arr[j + 1];
//         // arr[j + 1] = temp;

//         // * 함수로 구현
//         swap(arr, j, j + 1);
//       }
//     }
//   }

//   return arr;
// }
