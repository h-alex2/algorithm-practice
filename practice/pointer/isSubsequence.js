export default function isSubsequence(str1, str2) {
  const copystr1 = [...str1];
  const copystr2 = [...str2];

  while (copystr2.length) {
    const str2LastItem = copystr2.pop();
    if (copystr1[copystr1.length - 1] === str2LastItem) {
      copystr1.pop();
    }
  }

  return !copystr1.length ? true : false;
}

// solution 1 (repeat)

function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) {
    return true;
  }
  while (j < str2.length) {
    if (str2[j] === str1[i]) {
      i++;
    }
    if (i === str1.length) {
      return true;
    }
    j++;
  }
  return false;
}

// solution 2 (Recursion)not a O(1) space complexity
function isSubsequence(str1, str2) {
  if (str1.length === 0) {
    return true;
  }

  if (str2.length === 0) {
    return false;
  }

  if (str1[0] === str[2]) {
    return isSubsequence(str1.slice(1), str1.slice(1));
  }

  return isSubsequence(str1, str2.slice(1));
}
