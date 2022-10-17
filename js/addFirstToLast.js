const addFirstToLast = (strArr) => {
  if (!strArr.length) {
    return '';
  }
  return strArr[0] + strArr[strArr.length - 1];
};
