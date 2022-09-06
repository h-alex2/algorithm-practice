export default function collectOddValues(arr) {
  let newArr = [];
  if (!arr.length) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

// * solution 2. helper 함수 사용

// export default function collectOddValues(arr) {
//   const result = [];

//   function helper(helperInput) {
//     if (helperInput.length === 0) {
//       return;
//     }

//     helperInput[0] % 2 !== 0 && result.push(helperInput[0]);

//     helper(helperInput.slice(1));
//   }

//   helper(arr);
//   return result;
// }
