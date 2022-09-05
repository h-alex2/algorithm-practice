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
